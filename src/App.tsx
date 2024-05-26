import { Header } from './components/header/Header'
import { Generator } from './components/generator/Generator'

export function App() {
	return (
		<>
			<Header active={''}/>
			<div className=' flex justify-center items-center h-screen'>
				<Generator />
			</div>
		</>
	)
}
