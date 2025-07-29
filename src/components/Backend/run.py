from flask import Flask
from flask_cors import CORS
from routes.auth_routes import auth_bp
from database import close_connection

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Register blueprints
    app.register_blueprint(auth_bp)

    # DB teardown
    @app.teardown_appcontext
    def teardown_db(exception):
        close_connection(exception)

    return app
