import { IJoke } from '../../../types/type-joke'
import { UseQueryResult } from '@tanstack/react-query'

type Props = {
	query: UseQueryResult<IJoke, Error>
	btn: boolean
	setBtn: React.Dispatch<React.SetStateAction<boolean>>
}

export function GeneratorContent({ query, btn, setBtn }: Props) {
	return (
		<>
			{query.isPending ? (
				<div className='flex justify-center py-4'>
					<img src='/loading.gif' alt='loading' />
				</div>
			) : query.isSuccess ? (
				<div className=' flex flex-col items-center gap-4 p-6 leading-none text-lg'>
					<p>№{query.data.id}</p>
					<p className=''>{query.data.setup}</p>
					{btn ? (
						<button
							className='text-orange-500 italic hover:text-orange-600 transition-colors'
							onClick={() => setBtn(false)}
						>
							continue
						</button>
					) : (
						<p className='font-bold'>{query.data.punchline}</p>
					)}
				</div>
			) : (
				<div className='flex justify-center py-5'>
					<p>Failed to load joke</p>
				</div>
			)}
		</>
	)
}
