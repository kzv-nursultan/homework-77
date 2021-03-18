import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = props => { 

  return (
    <div style={{
        display: props.error ? 'block' : 'none'
    }}>
    <Dialog open={props.error}>
        <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Message input field is required. 
           Please recheck your inputs or check your internet connection.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            OK, i got it!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
