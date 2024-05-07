export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreeds }) => {
  console.log(`breeds:`, breeds);
  console.log(`selectedBreed:`, selectedBreed);
  console.log(`setSelectedBreed:`, setSelectedBreeds);

  return (
    <div>
      <select
        value={selectedBreed}
        onChange={(e) => {
          console.log(`e.target.value:`, e.target.value);
          setSelectedBreeds(e.target.value);
        }}
      >
        {Object.keys(breeds).map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BreedsSelect;
