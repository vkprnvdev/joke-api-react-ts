import { UseQueryResult, useQueryClient } from '@tanstack/react-query'
import { Files, Heart } from 'lucide-react'
import { useState } from 'react'
import { useAddFavoriteJoke } from '../../hooks/useAddFavoriteJoke'
import { IJoke } from '../../types/IJoke'
import { useGetFavoriteJokes } from '../../hooks/useGetFavoriteJokes'

type Props = {
	query: UseQueryResult<IJoke, Error>
	setBtn: React.Dispatch<React.SetStateAction<boolean>>
}

export function GeneratorHeader({ query, setBtn }: Props) {
	const mutation = useAddFavoriteJoke()
	const [disabled, setDisabled] = useState<boolean>(false)
	const [isFavorite, setIsFavorite] = useState<boolean>(false)
	const favoritesQuery = useGetFavoriteJokes()
	if (favoritesQuery.isSuccess && query.isSuccess) {
		favoritesQuery.data.forEach(e => {
			if (e.id == query.data.id) {
				setIsFavorite(true)
			}
		})
	}

	const queryClient = useQueryClient()

	const reload = async () => {
		setIsFavorite(false)
		setDisabled(true)
		setBtn(true)
		await queryClient.invalidateQueries(
			{
				queryKey: ['jokes'],
				refetchType: 'active',
			},
			{ throwOnError: true, cancelRefetch: false }
		)
		setDisabled(false)
	}

	return (
		<div className='flex justify-between items-center gap-5 leading-none px-4 py-3 border-b-2 border-[#242424]'>
			<Files
				className='cursor-pointer hover:text-blue-600 transition-colors'
				size={30}
			/>
			<button
				className=' text-xl bg-orange-500 text-stone-900 rounded-xl px-3 py-0.5 shadow shadow-orange-800 hover:shadow-none hover:bg-stone-900 hover:text-orange-500 transition select-none'
				disabled={disabled}
				onClick={reload}
			>
				Generate
			</button>
			<Heart
				className={
					isFavorite
						? 'cursor-pointer text-red-600 hover:text-white transition-colors'
						: 'cursor-pointer hover:text-red-600 transition-colors'
				}
				size={30}
				onClick={
					query.isSuccess
						? () => {
								mutation.mutate({
									type: query.data.type,
									setup: query.data.setup,
									punchline: query.data.punchline,
									id: query.data.id,
								})
								setIsFavorite(true)
						  }
						: () => console.log(mutation.error?.message)
				}
			/>
		</div>
	)
}
