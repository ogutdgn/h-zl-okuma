import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//import { usersStore } from '../../store/usersStore';

export default function AlertDialog({ error, deleteChoosenUser }) {

  const [open, setOpen] = useState(true);
  //const { deleteUser, currentUser, setCurrentUser } = usersStore();

  const handleResponse = () => {
    setOpen(false);
    error !== null ? window.location.pathname = "/" : deleteChoosenUser();
  };


  const dontDeleteUser = () => {
    setOpen(false)
  }

  return (
    <div>
      
      <Dialog
        open={open}
        onClose={handleResponse}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Something went wrong while connecting to api. Please try again later.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          {
            error === null &&
            <Button onClick={dontDeleteUser} autoFocus>
              No
            </Button>
          }
          <Button onClick={() => handleResponse()} autoFocus>
            {error ? "Okay" : "Yes"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
