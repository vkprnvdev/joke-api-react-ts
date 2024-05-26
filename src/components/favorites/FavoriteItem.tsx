import { Files, Heart } from 'lucide-react'

type Props = { number: number | null; firstString: string | null; secondString: string | null }

export function FavoriteItem({ number, firstString, secondString }: Props) {
	return (
		<div className='w-7/12'>
			<div className='flex justify-between items-center bg-stone-900 h-10 px-2 rounded-t-xl'>
				<Files
					size={28}
					className='cursor-pointer hover:text-blue-600 transition-colors'
				/>
				<span className='text-xl'>№{number}</span>
				<Heart
					size={28}
					className='cursor-pointer text-red-600 transition-colors hover:text-white'
				/>
			</div>
			<div className='flex items-center flex-col bg-stone-900 rounded-b-xl mt-1 py-3 px-5 gap-1 text-lg text-center'>
				<p>{firstString}</p>
				<p>{secondString}</p>
			</div>
		</div>
	)
}
