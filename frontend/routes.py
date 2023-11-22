import os
from flask import Flask, session, request, jsonify
from flask_session import Session

app = Flask(__name__)

# urandomを使用してランダムな秘密鍵を生成。アプリケーション再起動時に既存のセッションが死ぬから本番環境では修正した方がいいかも。
app.secret_key = os.urandom(24).hex()

app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

from flask import Flask, session, request, jsonify
from flask_session import Session  # Flask-Sessionをインポート

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # セキュリティのための秘密鍵(要修正)
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

@app.route('/setup-game', methods=['POST'])
def setup_game():
    data = request.json
    session['game_setting'] = data
    return jsonify({'status': 'success', 'data': data})

@app.route('/create-character', methods=['POST'])
def create_character():
    data = request.json
    session['character'] = data
    return jsonify({'status': 'success', 'data': data})

@app.route('/submit-stats', methods=['POST'])
def submit_stats():
    data = request.json
    session['stats'] = data
    return jsonify({'status': 'success', 'data': data})

@app.route('/get-game-data', methods=['GET'])
def get_game_data():
    return jsonify({
        'game_setting': session.get('game_setting'),
        'character': session.get('character'),
        'stats': session.get('stats')
    })