import React, {ReactNode} from "react";

interface SnackBarContextProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    handleClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
}

const SnackBarContext = React.createContext({
    open: false,
    setOpen: () => {},
    message: '',
    setMessage: () => {},
    handleClose: () => {}

} as SnackBarContextProps);

const SnackBarProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const handleClose =  React.useCallback((event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    },[]);

    return (
        <SnackBarContext.Provider value={{open, setOpen, message,setMessage, handleClose}}>
            {children}
        </SnackBarContext.Provider>
    );
};

const useSnackBar = () => {
    const context = React.useContext(SnackBarContext);
    if (!context) {
        throw new Error('useSnackBar must be used within a SnackBarProvider');
    }
    return context;
}

export {SnackBarProvider, useSnackBar};