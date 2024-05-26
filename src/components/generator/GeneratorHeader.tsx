import { useQueryClient } from '@tanstack/react-query'
import { Files, Heart } from 'lucide-react'
import { useState } from 'react'

type Props = { setBtn: React.Dispatch<React.SetStateAction<boolean>> }

export function GeneratorHeader({ setBtn }: Props) {
	const [disabled, setDisabled] = useState<boolean>(false)

	const queryClient = useQueryClient()

	const reload = async () => {
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
			<Files className='cursor-pointer hover:text-blue-600 transition-colors' />
			<button
				className=' text-xl bg-orange-500 text-stone-900 rounded-xl px-3 py-0.5 shadow shadow-orange-800 hover:shadow-none hover:bg-stone-900 hover:text-orange-500 transition select-none'
				disabled={disabled}
				onClick={reload}
			>
				Generate
			</button>
			<Heart className='cursor-pointer hover:text-red-600 transition-colors' />
		</div>
	)
}
