import { GeneratorContent } from './GeneratorContent'
import { GeneratorHeader } from './GeneratorHeader'
import { useJoke } from '../../hooks/useGetJoke'
import { useState } from 'react'

export function Generator() {
	const query = useJoke()
	const [btn, setBtn] = useState<boolean>(true)

	return (
		<div className=' min-w-36 bg-stone-900 rounded-md'>
			<GeneratorHeader query={query} setBtn={setBtn}/>
			<GeneratorContent query={query} btn={btn} setBtn={setBtn} />
		</div>
	)
}
