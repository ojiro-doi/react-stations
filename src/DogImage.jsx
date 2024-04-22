
export const DogImage = (props) => {
  console.log(`props:${props.imageUrl}`);
  return <img src={props.imageUrl} alt="" />;
};

export default DogImage;
