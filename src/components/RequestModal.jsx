import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    IconButton,
    Typography,
    Box,
    Stack
} from '@mui/material';
import { Close, Send } from '@mui/icons-material';

const RequestModal = ({ isOpen, onClose, title }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);

        // Simulate API call
        setTimeout(() => {
            onClose();
            navigate('/confirmation');
            setFormData({ name: '', email: '', location: '' }); // Reset form
        }, 500);
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 3,
                    boxShadow: (theme) => theme.shadows[10]
                }
            }}
        >
            <DialogTitle sx={{ m: 0, p: 3, pb: 1 }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5" component="div" fontWeight={700}>
                        Request {title}
                    </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <Close />
                    </IconButton>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    Please fill in your details below.
                </Typography>
            </DialogTitle>

            <form onSubmit={handleSubmit}>
                <DialogContent sx={{ p: 3, pt: 1 }}>
                    <Stack spacing={3} sx={{ mt: 1 }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="name"
                            label="Full Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@myorg.com"
                        />
                        <TextField
                            margin="dense"
                            id="location"
                            name="location"
                            label="Location / Desk ID"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            placeholder="Building A, L3, Desk 42"
                        />
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ p: 3, pt: 0 }}>
                    <Button onClick={onClose} color="inherit" sx={{ mr: 1 }}>
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        disableElevation
                        sx={{ minWidth: 140 }}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default RequestModal;
