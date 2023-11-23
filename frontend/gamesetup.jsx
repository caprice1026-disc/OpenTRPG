import React, { useState } from 'react';
import axios from 'axios';

function GameSetup() {
  // ゲームタイプの状態変数、初期値はプレースホルダー
  const [gameType, setGameType] = useState('');

  // 世界観の状態変数
  const [worldDescription, setWorldDescription] = useState('');

  // カオスレベルの状態変数、初期値は50
  const [chaosLevel, setChaosLevel] = useState(50);

  // フォーム送信時の処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (gameType === '') {
      alert('ゲームの種類を選択してください。');
      return;
    }
    try {
      await axios.post('/setup-game', { gameType, worldDescription, chaosLevel });
      // 成功時の処理をここに追加
    } catch (error) {
      console.error('Setup Game Error:', error);
    }
  };

  return (
    <div>
      <h2>Game Setup</h2>
      <form onSubmit={handleSubmit}>
        {/* ゲームタイプの選択 - 初期値は指定なしで、選択が必須 */}
        <div>
          <label>ゲームのタイプ:</label>
          <select value={gameType} onChange={(e) => setGameType(e.target.value)}>
            <option value="">ゲームの種類を選択</option>
            <option value="サイバーパンク">サイバーパンク</option>
            <option value="現代">現代</option>
            <option value="中世">中世</option>
            {/* ここに他のゲームタイプを追加する */}
          </select>
        </div>

        {/* 世界観の入力 - ユーザーが自由に記述 */}
        <div>
          <label>世界観の説明:</label>
          <input 
            type="text"
            value={worldDescription}
            onChange={(e) => setWorldDescription(e.target.value)}
            placeholder="例：未来都市の謎に満ちた世界..."
          />
        </div>

        {/* カオスレベルの設定 - スライダーと数値入力で同期 */}
        <div>
          <label>カオスレベル ({chaosLevel}):</label>
          <input 
            type="range"
            min="0"
            max="100"
            value={chaosLevel}
            onChange={(e) => setChaosLevel(e.target.value)}
          />
          <input 
            type="number"
            min="0"
            max="100"
            value={chaosLevel}
            onChange={(e) => setChaosLevel(e.target.value)}
          />
        </div>

        <button type="submit">Set Up Game</button>
      </form>
    </div>
  );
}

export default GameSetup;
