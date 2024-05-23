import { GeneratorContent } from './generator-components/GeneratorContent'
import { GeneratorHeader } from './generator-components/GeneratorHeader'
import { useJoke } from '../../hooks/useJoke'
import { useState } from 'react'

export function Generator() {
	const query = useJoke()
	const [btn, setBtn] = useState<boolean>(true)

	return (
		<div className=' min-w-36 bg-stone-900 rounded-md'>
			<GeneratorHeader setBtn={setBtn}/>
			<GeneratorContent query={query} btn={btn} setBtn={setBtn} />
		</div>
	)
}
