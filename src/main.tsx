import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Favorites } from './components/favorites/Favorites.tsx'
import { Network } from './components/network/Network.tsx'
import { Rules } from './components/rules/Rules.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>404</div>,
	},
	{
		path: '/favorites',
		element: <Favorites />,
	},
	{
		path: '/network',
		element: <Network />,
	},
	{
		path: '/rules',
		element: <Rules />,
	}
])

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
)
