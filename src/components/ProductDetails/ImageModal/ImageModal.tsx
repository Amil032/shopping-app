import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Slider } from '../../Slider/Slider';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80vh',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: '40px',
    boxShadow: 24,
    p: 4,
};
interface Props {
    open: boolean;
    handleClose: (data: boolean) => void
}
export const ImageModal = ({ open, handleClose }: Props) => {


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Slider />
                </Box>
            </Modal>
        </div>
    );
}
