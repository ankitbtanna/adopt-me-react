import { useQuery } from '@tanstack/react-query';
import fetchBreedList from './fetchBreedList';

function useBreedsList(animal) {
	const results = useQuery(['breeds', animal], fetchBreedList);
	return [results?.data?.breeds ?? [], results.status];
}

export default useBreedsList;
