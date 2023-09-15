import { useState, useEffect } from 'react';

const localCache = {};

function useBreedsList(animal) {
	const [breedsList, setBreedsList] = useState([]);
	const [status, setStatus] = useState('unloaded');

	useEffect(() => {
		if (!animal) {
			setBreedsList([]);
			return;
		}

		if (localCache[animal]) {
			setBreedsList(localCache[animal]);
			return;
		}

		requestAnimalBreeds();

		async function requestAnimalBreeds() {
			// reset breeds list and status
			setBreedsList([]);
			setStatus('loading');

			const res = await fetch(
				`http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
			);
			const json = await res.json();
			const breeds = json.breeds || [];

			localCache[animal] = breeds;

			setBreedsList(localCache[animal]);
			setStatus('loaded');
		}
	}, [animal]);

	return [breedsList, status];
}

export default useBreedsList;
