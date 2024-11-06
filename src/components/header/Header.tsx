import { Bookmark } from 'lucide-react'
import { Link } from '@tanstack/react-router'
// import { Link } from 'react-router-dom'

type Props = { active: string }

export function Header({ active }: Props) {
	return (
		<div className='flex items-center justify-between fixed w-full h-16 bg-stone-900 px-8 '>
			<Link
				className='flex items-center gap-1 h-full cursor-pointer'
				to={'/'}
			>
				<Bookmark size={48} />
				<h1 className=' text-4xl select-none'>JOKES</h1>
			</Link>
			<div className='flex items-center justify-around gap-10 text-xl h-full'>
				<Link
					to={'/favorites'}
					style={
						active == 'favorites'
							? { color: 'rgb(249 115 22)' }
							: { color: 'white' }
					}
				>
					Favorites
				</Link>
				<Link
					to={'/network'}
					style={
						active == 'network'
							? { color: 'rgb(249 115 22)' }
							: { color: 'white' }
					}
				>
					Network
				</Link>
				<Link
					to={'/rules'}
					style={
						active == 'rules'
							? { color: 'rgb(249 115 22)' }
							: { color: 'white' }
					}
				>
					Rules
				</Link>
			</div>
		</div>
	)
}
