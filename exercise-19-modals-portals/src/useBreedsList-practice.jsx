import { useState, useEffect } from 'react';

const localCache = {};

function useBreedsList(animal) {
	const [breedList, setBreedList] = useState([]);
	const [status, setStatus] = useState('unloaded');

	useEffect(() => {
		if (!animal) {
			setBreedList([]);
			return;
		}

		if (localCache[animal]) {
			setBreedList(localCache[animal]);
			return;
		}

		requestBreedList();

		async function requestBreedList() {
			// reset the state
			setBreedList([]);
			setStatus('loading');

			const res = await fetch(
				`http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
			);
			const json = await res.json();
			const breeds = json.breeds || [];

			// update the cache
			localCache[animal] = breeds;

			setBreedList(localCache[animal]);
			setStatus('loaded');
		}
	}, [animal]);

	return [breedList, status];
}

export default useBreedsList;
