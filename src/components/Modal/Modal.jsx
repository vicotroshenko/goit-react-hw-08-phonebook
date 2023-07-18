import * as React from 'react';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { Fab, Tooltip } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 350,
  width: "100%",
  borderRadius: 5,
  bgcolor: '#91beeb;',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function BasicModal({ children}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip title="Add new contact">
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleOpen}
          sx={{position: 'fixed', bottom: 20,
          right: 20,}}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Add new contact</h2>
					{children}
        </Box>
      </Modal>
    </div>
  );
}