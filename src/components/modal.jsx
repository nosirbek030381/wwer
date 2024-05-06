import { CancelOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import CreateBook from './create-book';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	borderRadius: 3,
};

const ModalOpen = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button sx={{ color: 'white', ':hover': { color: 'black' } }} onClick={handleOpen}>
				+ Create book
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
						<Typography variant='h6'>Create book modal</Typography>
						<CancelOutlined onClick={handleClose} sx={{ cursor: 'pointer' }} />
					</Box>
					<CreateBook />
				</Box>
			</Modal>
		</div>
	);
};

export default ModalOpen;
