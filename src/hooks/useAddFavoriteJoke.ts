import { useMutation } from "@tanstack/react-query"
import jokeService from "../services/joke.service"
import { IJoke } from "../types/IJoke"

export const useAddFavoriteJoke = () => {
  const mutation = useMutation({
    mutationFn: (joke: IJoke) => jokeService.addFavoriteJoke(joke)
  })
  return mutation
}