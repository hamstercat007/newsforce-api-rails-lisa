import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import SignUp from './SignUp';

const ModalDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <SignUp handleClose={handleClose} />
    </Dialog>
  )
}

export default ModalDialog;