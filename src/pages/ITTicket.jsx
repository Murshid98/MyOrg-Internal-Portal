import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Button,
    Stack,
    alpha
} from '@mui/material';
import { Headphones, Laptop, ArrowBack, ArrowForward } from '@mui/icons-material';
import RequestModal from '../components/RequestModal';

const ITTicket = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');

    const openEarphoneModal = () => {
        setModalTitle('Earphones');
        setIsModalOpen(true);
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            bgcolor: 'background.default',
            position: 'relative',
            overflow: 'hidden',
            py: 4
        }}>
            {/* Abstract Background Decoration */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: (theme) => `radial-gradient(circle at 0% 0%, ${alpha(theme.palette.primary.main, 0.03)} 0%, transparent 50%)`,
                zIndex: 0,
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ mb: 6 }}>
                    <Button
                        startIcon={<ArrowBack />}
                        onClick={() => navigate('/')}
                        sx={{ mb: 4, color: 'text.secondary' }}
                    >
                        Back to Home
                    </Button>

                    <Stack alignItems="center" spacing={2} sx={{ textAlign: 'center', mb: 8 }}>
                        <Chip
                            label="IT Support"
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{ bgcolor: 'background.paper' }}
                        />
                        <Typography variant="h3" component="h1" fontWeight={700}>
                            Select Equipment
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
                            Choose the type of hardware asset you need to request.
                        </Typography>
                    </Stack>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {/* Earphone Card */}
                    <Grid item xs={12} md={5}>
                        <Card sx={{ height: '100%' }}>
                            <CardActionArea
                                onClick={openEarphoneModal}
                                sx={{ height: '100%', p: 4, textAlign: 'center' }}
                            >
                                <Box sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                    mb: 3
                                }}>
                                    <Headphones sx={{ fontSize: 40, color: 'primary.main' }} />
                                </Box>
                                <CardContent>
                                    <Typography variant="h4" gutterBottom>
                                        Request Earphones
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" paragraph>
                                        Noise-cancelling headsets for better focus and call quality.
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'primary.main', mt: 2, opacity: 0.8 }}>
                                        <Typography variant="button" sx={{ mr: 1 }}>Start Request</Typography>
                                        <ArrowForward fontSize="small" />
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    {/* Laptop Card using Mui disabled prop */}
                    <Grid item xs={12} md={5}>
                        <Card sx={{ height: '100%', opacity: 0.6 }}>
                            <CardActionArea disabled sx={{ height: '100%', p: 4, textAlign: 'center' }}>
                                <Box sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    bgcolor: 'action.hover',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                    mb: 3
                                }}>
                                    <Laptop sx={{ fontSize: 40, color: 'text.disabled' }} />
                                </Box>
                                <CardContent>
                                    <Typography variant="h4" gutterBottom color="text.disabled">
                                        Request Laptop
                                    </Typography>
                                    <Typography variant="body1" color="text.disabled" paragraph>
                                        Request a new workstation or upgrade current device.
                                    </Typography>
                                    <Chip size="small" label="Coming Soon" sx={{ mt: 2 }} />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <RequestModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={modalTitle}
            />
        </Box>
    );
};

export default ITTicket;
