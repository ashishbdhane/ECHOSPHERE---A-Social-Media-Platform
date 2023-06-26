import {Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom';
// import HomePage from './pages/homePage/index.js';
import LoginPage from './pages/loginPage/index.jsx';
// import ProfilePage from './pages/profilePage/index.js';
import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import {themeSettings} from './theme.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
		// children: [
		// 	{
		// 		path: 'home',
		// 		element: <HomePage />,
		// 	},
		// 	{
		// 		path: 'profile/:userId',
		// 		element: <ProfilePage />,
		// 	},
		// ],
	},
]);

function App() {
	const mode = useSelector((state) => state.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return (
		<div className="app">
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				<RouterProvider router={router} />
			</ThemeProvider>
		</div>
	);
}

export default App;
