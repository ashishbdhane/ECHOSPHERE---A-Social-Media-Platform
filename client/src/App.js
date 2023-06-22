import {Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/homePage/index.js';
import LoginPage from './pages/loginPage/index.js';
import ProfilePage from './pages/profilePage/index.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
		children: [
			{
				path: 'home',
				element: <HomePage />,
			},
			{
				path: 'profile/:userId',
				element: <ProfilePage />,
			},
		],
	},
]);

function App() {
	return (
		<div className="app">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
