import React from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { scoreReset } from '../../../features/score/scoreSlice';

const Reset = () => {
    const dispatch = useDispatch();

    return (
        <IconButton aria-label="Reset" color="primary" onClick={() => dispatch(scoreReset())}>
            <RestartAltIcon />
        </IconButton>
    );
};

export default Reset;