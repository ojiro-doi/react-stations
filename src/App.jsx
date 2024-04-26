// DO NOT DELETE

// import { useState } from 'react';
import './App.css';
import { Header } from './Header';
import { Description } from './Description';
import { DogListContainer } from './DogListContainer';


/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  // const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2895.jpg');

  // const clickButton = () => {
  //   fetch('https://dog.ceo/api/breeds/image/random')
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setDogUrl(data.message);
  //     })
  //     // eslint-disable-next-line no-unused-vars
  //     .catch((error) => {
  //       console.log('失敗しました');
  //     });
  // };



  return (
    <div>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  );
};
