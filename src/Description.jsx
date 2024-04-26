// @ts-check
import { useState } from 'react';
import { DogImage } from './DogImage';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2895.jpg');

  const clickButton = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(`image:`,data);
        console.log(`image:${data}`);//表示されない
        setDogUrl(data.message);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        console.log('失敗しました');
      });
  };

  // const breeds=[]

  return (
    <div>
      <h3>犬の画像を表示するサイトです</h3>
      <p>
        <DogImage imageUrl={dogUrl}/>
      </p>
      <button className="btnDogReload" onClick={clickButton}>
        更新
      </button>
    </div>
  );
};

export default Description;
