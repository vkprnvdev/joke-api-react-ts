import { useGetFavoriteJokes } from '../../hooks/useGetFavoriteJokes'
import { Header } from '../header/Header'
import { FavoriteItem } from './FavoriteItem'

export function Favorites() {
	const query = useGetFavoriteJokes()
	return (
		<>
			<Header active={'favorites'} />
			{query.isFetching ? (
				<div className='flex justify-center pt-28'>
					<img src='/loading.gif' alt='loading' className='w-28' />
				</div>
			) : (
				<div className='flex flex-col items-center pt-24 pb-8 gap-8'>
					{query.data?.map(e => (
						<FavoriteItem
							key={e.id}
							number={e.id}
							firstString={e.setup}
							secondString={e.punchline}
						/>
					))}
				</div>
			)}
		</>
	)
}
