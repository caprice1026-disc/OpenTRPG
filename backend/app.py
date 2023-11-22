from flask import Flask, request, jsonify

app = Flask(__name__)

# ゲームの設定を処理するエンドポイント
@app.route('/setup-game', methods=['POST'])
def setup_game():
    setup_data = request.json
    # ゲーム設定データの処理
    return jsonify({'status': 'success', 'data': setup_data})

# キャラクター作成を処理するエンドポイント
@app.route('/create-character', methods=['POST'])
def create_character():
    character_data = request.json
    # キャラクターデータの処理
    return jsonify({'status': 'success', 'data': character_data})

# ステータス決定を処理するエンドポイント
@app.route('/submit-stats', methods=['POST'])
def submit_stats():
    stats_data = request.json
    # ステータスデータの処理
    return jsonify({'status': 'success', 'data': stats_data})

if __name__ == '__main__':
    app.run(debug=True)