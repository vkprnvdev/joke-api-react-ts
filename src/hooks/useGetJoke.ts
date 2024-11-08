import { useQuery } from '@tanstack/react-query'
import jokeService from '../services/joke.service'
import { IJoke } from '../types/IJoke'

export const useJoke = () => {
	const query = useQuery<IJoke>({
		queryKey: ['jokes'],
		queryFn: () => jokeService.getJoke(),
		retry: 3,
	})
	return query
}
