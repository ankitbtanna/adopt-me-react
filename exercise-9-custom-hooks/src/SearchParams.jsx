import { useState, useEffect } from 'react';
import Pet from './Pet';
import useBreedsList from './useBreedsList';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
	const [location, setLocation] = useState('Seattle, WA');
	const [animal, setAnimal] = useState('');
	const [breed, setBreed] = useState('');
	const [pets, setPets] = useState([]);
	const [breeds] = useBreedsList(animal); // we'll fetch it from the API

	useEffect(() => {
		requestPets();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function requestPets() {
		const res = await fetch(
			`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
		);
		const json = await res.json();
		console.log(json);
		setPets(json.pets);
	}

	return (
		<div className='search-params'>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					requestPets();
				}}
			>
				<label htmlFor='location'>Location</label>
				<input
					id='location'
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					placeholder='Location'
				></input>

				<label htmlFor='animal'>Animal</label>
				<select
					id='animal'
					value={animal}
					onChange={(e) => {
						setAnimal(e.target.value);
						setBreed('');
					}}
				>
					<option />
					{ANIMALS.map((animal) => (
						<option
							key={animal}
							value={animal}
						>
							{animal}
						</option>
					))}
				</select>

				<label htmlFor='breed'>Breeds</label>
				<select
					id='breed'
					value={breed}
					disabled={breeds.length === 0}
					onChange={(e) => setBreed(e.target.value)}
				>
					<option />
					{breeds.map((breed) => (
						<option
							key={breed}
							value={breed}
						>
							{breed}
						</option>
					))}
				</select>
				<button>Submit</button>
			</form>
			<div>
				{pets.map((pet) => (
					<Pet
						key={pet.id}
						name={pet.name}
						animal={pet.animal}
						breed={pet.breed}
					/>
				))}
			</div>
		</div>
	);
};

export default SearchParams;

// const requestPets = useCallback(async () => {
// 	const res = await fetch(
// 		`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
// 	);
// 	const json = await res.json();
// 	console.log(json);
// 	setPets(json.pets);
// }, [animal, breed, location]);
