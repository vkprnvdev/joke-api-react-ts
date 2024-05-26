import axios from "axios"
import { IJoke } from "../types/type-joke"

class JokeService {
	private globalURL = 'https://official-joke-api.appspot.com/random_joke/'
	private myURL = 'https://d73f7dbd471be097.mokky.dev/favorites'
	async getJoke() {
		const { data } = await axios.get<IJoke>(this.globalURL)
		return data
	}
	async getFavoriteJokes() {
		const {data} = await axios.get<IJoke[]>(this.myURL)
		return data
	}
}

export default new JokeService()