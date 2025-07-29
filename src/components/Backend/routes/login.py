from flask import Blueprint, request, jsonify
from database import get_db

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"success":False,"message": "Email and password required"}), 400

    db = get_db()
    cursor = db.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()

    if user is None:
        return jsonify({"success":False,"message": "User not found"}), 404

    # For plain text password (NOT recommended in production)
    if user["password"] != password:
        return jsonify({"success":False,"message": "Invalid password"}), 401

    return jsonify({
        "success":True,
        "message": "Login successful",
        "user": {
            "id": user["id"],
            "email": user["email"],
            "name": user["name"]
        }
    }), 200
