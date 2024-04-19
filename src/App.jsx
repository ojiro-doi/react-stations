// DO NOT DELETE

import { useState } from 'react';
import './App.css';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2895.jpg');

  const clickButton = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDogUrl(data.message);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        console.log('失敗しました');
      });
  };

  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <main>
        <h3>犬の画像を表示するサイトです</h3>
        <div>
          <img src={dogUrl} alt="" />
          <button onClick={() => setDogUrl(clickButton)}>更新</button>
        </div>
      </main>
    </div>
  );
};
