import { useQuery } from "@tanstack/react-query"
import jokeService from "../services/joke.service"
import { IJoke } from "../types/type-joke"

export const useGetFavoriteJokes = () => {
  const query = useQuery<IJoke[]>({
    queryKey: ['favorite-jokes'],
    queryFn: () => jokeService.getFavoriteJokes(),
    retry: 3
  })
  return query
}