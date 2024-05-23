import axios from "axios"
import { IJoke } from "../types/type-joke"

class JokeService {
	private URL = 'https://official-joke-api.appspot.com/random_joke/'

	async getJoke() {
		const { data } = await axios.get<IJoke>(this.URL)
		return data
	}
}

export default new JokeService()