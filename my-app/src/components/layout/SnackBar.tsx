import React from "react";
import {Snackbar} from "@mui/material";
import {useSnackBar} from "../../context/SnackBarContext";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomSnackBar() {
    const {open,message, handleClose} = useSnackBar();
    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return(
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message={message}
            action={action}
        />
    )
}