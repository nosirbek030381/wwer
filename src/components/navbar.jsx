import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	IconButton,
	InputBase,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { search } from '../services/auth.service';

const signUpData = localStorage.getItem('signupData');
const parseSignUp = JSON.parse(signUpData);

const key = parseSignUp?.key;
const secret = parseSignUp?.secret;

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleClearSearch = () => {
		setSearchValue('');
	};

	const navigateAccount = () => {
		navigate('/myself');
	};

	const handleSearch = async () => {
		try {
			await search(searchValue, secret, key);
		} catch (error) {
			console.error('Error occurred while searching:', error);
		}
	};

	return (
		<AppBar position='static' color='transparent'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Box
						sx={{ display: { xs: 'none', md: 'flex' }, cursor: 'pointer' }}
						onClick={() => navigate('/')}
					>
						<img src={logo} alt='logo' />
					</Box>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='#app-bar-with-responsive-menu'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					></Typography>

					<Box
						sx={{
							flexGrow: 0,
							display: { xs: 'none', md: 'flex' },
							justifyContent: 'center',
							alignItems: 'center',
							position: 'relative',
							':hover': {
								border: '1px solid gray',
								borderRadius: '20px',
							},
						}}
					>
						<SearchIcon sx={{ position: 'absolute', left: '10px', color: 'white' }} />
						<InputBase
							placeholder='Search…'
							inputProps={{ 'aria-label': 'search' }}
							value={searchValue}
							onChange={e => setSearchValue(e.target.value)}
							sx={{
								color: 'white',
								width: '100%',
								borderRadius: '20px',
								paddingLeft: '30px',
								'& .MuiInputBase-input': {
									padding: '10px',
								},
							}}
							endAdornment={
								searchValue && (
									<IconButton
										aria-label='clear search'
										onClick={handleClearSearch}
										sx={{ color: 'white' }}
									>
										<HighlightOffIcon />
									</IconButton>
								)
							}
							onKeyDown={e => {
								if (e.key === 'Enter') {
									handleSearch();
								}
							}}
						/>
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>

						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							<MenuItem onClick={handleCloseNavMenu}>
								<Box
									sx={{
										flexGrow: 0,
										display: { xs: 'flex', md: 'none' },
										justifyContent: 'center',
										alignItems: 'center',
										position: 'relative',
										bgcolor: 'black',
										borderRadius: '20px',
										':hover': {
											border: '1px solid gray',
										},
									}}
								>
									<SearchIcon sx={{ position: 'absolute', left: '10px', color: 'white' }} />
									<InputBase
										placeholder='Search…'
										inputProps={{ 'aria-label': 'search' }}
										sx={{
											color: 'white',
											width: '100%',
											borderRadius: '20px',
											paddingLeft: '30px',
											'& .MuiInputBase-input': {
												padding: '15px',
											},
										}}
									/>
								</Box>
							</MenuItem>
						</Menu>

						<Box
							sx={{
								display: { xs: 'flex', md: 'none' },
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<img src={logo} alt='logo' />
						</Box>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
							<Box
								sx={{
									flexGrow: 0,
									display: { xs: 'flex', md: 'none' },
									justifyContent: 'center',
									alignItems: 'center',
									position: 'relative',
									':hover': {
										border: '1px solid gray',
										borderRadius: '20px',
									},
								}}
							>
								<SearchIcon sx={{ position: 'absolute', left: '10px', color: 'white' }} />
								<InputBase
									placeholder='Search…'
									inputProps={{ 'aria-label': 'search' }}
									sx={{
										color: 'white',
										width: '100%',
										borderRadius: '20px',
										paddingLeft: '30px',
										'& .MuiInputBase-input': {
											padding: '10px',
										},
									}}
								/>
							</Box>
						</Button>
					</Box>

					<Box
						sx={{
							flexGrow: 0,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<NotificationsIcon sx={{ mx: 2, cursor: 'pointer', color: 'white' }} />
						<Tooltip>
							<IconButton sx={{ p: 0 }} onClick={navigateAccount}>
								<Avatar
									alt='Remy Sharp'
									src='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
								/>
							</IconButton>
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
