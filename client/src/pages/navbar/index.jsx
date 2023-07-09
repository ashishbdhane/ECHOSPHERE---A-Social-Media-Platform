import {useState} from 'react';
import {
	Box,
	IconButton,
	InputBase,
	Typography,
	Select,
	MenuItem,
	FormControl,
	useTheme,
	useMediaQuery,
} from '@mui/material';

import {
	Search,
	Message,
	DarkMode,
	LightMode,
	Notifications,
	Help,
	Menu,
	Close,
} from '@mui/icons-material';

import {useDispatch, useSelector} from 'react-redux';
import {setMode, setLogout} from '../../state';
import {useNavigate} from 'react-router-dom';
import FlexBetween from '../../components/FlexBetween';

const NavBar = () => {
	const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
	const dispactch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

	const theme = useTheme();
	const neutralLight = theme.palette.neutral.light;
	const dark = theme.palette.neutral.dark;
	const background = theme.palette.background.default;
	const primaryLight = theme.palette.primary.light;
	const alt = theme.palette.background.alt;

	// const fullName = `${user.firstName} ${user.lastName}`;
	const fullName = 'Ashish Dhane';

	return (
		<FlexBetween padding="1rem 3%" background={alt}>
			<FlexBetween gap="1rem" height="2.5rem">
				<Typography
					fontWeight="bold"
					fontSize="clamp(1rem, 2rem , 2.25rem)"
					color="primary"
					onClick={() => navigate('/home')}
					sx={{
						'&:hover': {
							color: primaryLight,
							cursor: 'pointer',
						},
					}}
				>
					Echosphere
				</Typography>
				{isNonMobileScreens && (
					<FlexBetween
						backgroundColor={neutralLight}
						borderRadius="9px"
						gap="clamp(1rem, 2rem , 2.25rem)"
						padding="0.1rem 1rem"
					>
						<InputBase placeholder="Search..." />
						<IconButton>
							<Search />
						</IconButton>
					</FlexBetween>
				)}
        </FlexBetween>
				{isNonMobileScreens ? (
					<FlexBetween gap="2rem">
						<IconButton onClick={() => dispactch(setMode())}>
							{theme.palette.mode === 'dark' ? (
								<DarkMode sx={{fontSize: '25px'}} />
							) : (
								<LightMode sx={{color: dark, fontSize: '25px'}} />
							)}
						</IconButton>

						<IconButton>
							<Message sx={{fontSize: '25px'}} />
						</IconButton>

						<IconButton>
							<Notifications sx={{fontSize: '25px'}} />
						</IconButton>

						<IconButton>
							<Help sx={{fontSize: '25px'}} />
						</IconButton>

						<FormControl variant="standard" value={fullName}>
							<Select
								value={fullName}
								sx={{
									backgroundColor: neutralLight,
									width: '150px',
									borderRadius: '0.25rem',
									p: '0.25rem 1rem',
									'& .MuiSvgIcon-root': {
										pr: '0.25rem',
										width: '3rem',
									},
									'&  .MuiSelector-select:focus': {
										backgroundColor: neutralLight,
									},
								}}
								input={<InputBase />}
							>
								<MenuItem value={fullName}>
									<Typography>{fullName}</Typography>
								</MenuItem>
								<MenuItem onClick={() => dispactch(setLogout())}>
									Log Out
								</MenuItem>
							</Select>
						</FormControl>
					</FlexBetween>
				) : (
					<IconButton
						onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
					>
						<Menu />
					</IconButton>
				)}


			{/* Mobile Screen */}
			{!isNonMobileScreens && isMobileMenuToggled && (
				<Box
					position="fixed"
					right="0"
					botton="0"
					height="100%"
					zIndex="10"
					maxWidth="500px"
					minWidth="300px"
					backgroundColor={background}
				>
					<Box display="flex" justifyContent="flex-end" p="1rem">
						<IconButton
							onClick={() => setIsMobileMenuToggled(!setIsMobileMenuToggled)}
						>
							<Close />
						</IconButton>
					</Box>
          <FlexBetween display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap="3rem">
						<IconButton onClick={() => dispactch(setMode())}>
							{theme.palette.mode === 'dark' ? (
								<DarkMode sx={{fontSize: '25px'}} />
							) : (
								<LightMode sx={{color: dark, fontSize: '25px'}} />
							)}
						</IconButton>

						<IconButton>
							<Message sx={{fontSize: '25px'}} />
						</IconButton>

						<IconButton>
							<Notifications sx={{fontSize: '25px'}} />
						</IconButton>

						<IconButton>
							<Help sx={{fontSize: '25px'}} />
						</IconButton>

						<FormControl variant="standard" value={fullName}>
							<Select
								value={fullName}
								sx={{
									backgroundColor: neutralLight,
									width: '150px',
									borderRadius: '0.25rem',
									p: '0.25 rem 1rem',
									'& .MuiSvgIcon-root': {
										pr: '0.25rem',
										width: '3rem',
									},
									'&  .MuiSelect-select:focus': {
										backgroundColor: neutralLight,
									},
								}}
								input={<InputBase />}
							>
								<MenuItem value={fullName}>
									<Typography>{fullName}</Typography>
								</MenuItem>
								<MenuItem onClick={() => dispactch(setLogout())}>
									Log Out
								</MenuItem>
							</Select>
						</FormControl>
					</FlexBetween>
				</Box>
			)}
		</FlexBetween>
	);
};

export default NavBar;