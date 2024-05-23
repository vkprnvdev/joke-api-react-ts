import { Bookmark } from 'lucide-react'

export function Header() {
	return (
		<div className=' absolute w-full h-16 bg-stone-900 px-4 '>
			<div className='flex items-center gap-1 h-full cursor-pointer'>
				<Bookmark size={48} />
				<h1 className=' text-4xl select-none'>JOKES</h1>
			</div>
		</div>
	)
}
