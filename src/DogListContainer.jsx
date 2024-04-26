import { useState, useEffect } from 'react';
import { BreedsSelect } from './BreedsSelect';


export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreeds] = useState(['affenpinscher']);
  const [selectImage, setSelectImage] = useState([]);

  const fetchBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(`list-data:`, data);
        return setBreeds(data.message);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        console.log('error');
      });
  };

  const fetchBreedsSelect = () => {
    //random/数字は取得する件数の数
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/4`)
    .then((response) =>{
      console.log('fetchBreedsSelect', response);
      return response.json();
    })
    .then((data)=>{
      setSelectImage(data.message);
    })
    .catch((error)=>{ 
      console.log('error' + error)
    })
  };

  //初回のレンダリングの時に発火
  useEffect(() => {
    fetchBreeds();
    console.log('初回、再レンダリング');
  }, []);

  //ドロップダウンで犬種が選ばれた時に発火
  // useEffect(()=>{
  //   //表示ボタンを押した時にfetchBreedsSelect(selectedBreed)を呼び出しいるので、再レンダリングだけ行う
  //   // fetchBreedsSelect(selectedBreed); 
  //   console.log('犬種選択、再レンダリング')
  // },[selectedBreed])

  return (
    <div>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreeds={setSelectedBreeds} />
      <button className="btnDogReload" onClick={()=>fetchBreedsSelect()}>
        表示
      </button>
      <p>
        {selectImage.map((image) => (
          <img key={image} src={image} alt="選択した犬種の画像" />
        ))}
        {console.log('selectImage', selectImage)}
      </p>
    </div>
  );
};

export default DogListContainer;
