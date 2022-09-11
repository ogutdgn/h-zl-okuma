import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Confirm({ okeyCallBack, msg, title, open, setOpen }) {

  return (
    <div>
      
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          
            <Button onClick={() => setOpen(false)} autoFocus>
              No
            </Button>
          <Button onClick={() => okeyCallBack()} autoFocus>
             Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
