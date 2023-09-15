import Pet from './Pet';

function Results(props) {
	const numberOfPets = props.pets.length;
	const pets = props.pets;

	return (
		<div className='search'>
			{numberOfPets === 0 ? (
				<h1>No Pets found</h1>
			) : (
				pets.map((pet) => (
					<Pet
						id={pet.id}
						animal={pet.animal}
						name={pet.name}
						breed={pet.breed}
						images={pet.images}
						location={`${pet.city}, ${pet.state}`}
						key={pet.id}
					/>
				))
			)}
		</div>
	);
}

export default Results;
