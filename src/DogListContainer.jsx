// @ts-check
import { useState, useEffect } from 'react';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);

  const fetchBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setBreeds(data.message);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        console.log('error');
      });
  };

  useEffect(() => {
    fetchBreeds();
    console.log('再レンダリング');
  }, []);

  return <></>;
};

export default DogListContainer;
