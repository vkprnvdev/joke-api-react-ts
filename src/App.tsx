import { Header } from './components/header/Header'
import { Generator } from './components/jokes-generator/Generator'

export function App() {
	return (
		<>
			<Header />
			<div className=' flex justify-center items-center h-screen'>
				<Generator />
			</div>
		</>
	)
}
