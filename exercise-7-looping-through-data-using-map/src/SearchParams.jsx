import { useState } from 'react';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
	const [location, setLocation] = useState('Seattle, WA');
	const [animal, setAnimal] = useState('');
	const [breed, setBreed] = useState('');

	const breeds = []; // we'll fetch it from the API

	return (
		<div className='search-params'>
			<form>
				<label htmlFor='location'>Location asdasdasd</label>
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
					{ANIMALS.map((animal) => {
						return (
							<option
								key={animal}
								value={animal}
							>
								{animal}
							</option>
						);
					})}
				</select>

				<label htmlFor='breed'>Breeds</label>
				<select
					id='breed'
					value={breed}
					disabled={breeds.length === 0}
					onChange={(e) => setBreed(e.target.value)}
				>
					<option />
					{breeds.map((breed) => {
						<option
							key={breed}
							value={breed}
						>
							{breed}
						</option>;
					})}
				</select>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default SearchParams;
