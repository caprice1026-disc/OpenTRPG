import React, { useState } from 'react';
import axios from 'axios';

function CharacterCreation() {
  // キャラクター作成のための状態変数
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [profession, setProfession] = useState('');
  const [traits, setTraits] = useState('');

  // フォームの送信処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/create-character', { name, gender, profession, traits });
      console.log(response.data);
      // 成功時の処理をここに追加
    } catch (error) {
      console.error('Create Character Error:', error);
    }
  };

  return (
    <div>
      <h2>Character Creation</h2>
      <form onSubmit={handleSubmit}>
        {/* 名前入力 */}
        <div>
          <label>名前:</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* 性別選択 */}
        <div>
          <label>性別:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">性別を選択</option>
            <option value="男性">男性</option>
            <option value="女性">女性</option>
            <option value="その他">その他</option>
          </select>
        </div>

        {/* 職業入力 */}
        <div>
          <label>職業:</label>
          <input 
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </div>

        {/* 特性入力 */}
        <div>
          <label>特性:</label>
          <input 
            type="text"
            value={traits}
            onChange={(e) => setTraits(e.target.value)}
          />
        </div>

        <button type="submit">Create Character</button>
      </form>
    </div>
  );
}

export default CharacterCreation;