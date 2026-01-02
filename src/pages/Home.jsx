import React from 'react';
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
    alpha
} from '@mui/material';
import { Monitor, People, ArrowForward } from '@mui/icons-material';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{
            minHeight: '100vh',
            bgcolor: 'background.default',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Abstract Background Decoration */}
            <Box sx={{
                position: 'absolute',
                top: -100,
                right: -100,
                width: 400,
                height: 400,
                borderRadius: '50%',
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.05),
                zIndex: 0,
            }} />
            <Box sx={{
                position: 'absolute',
                bottom: -50,
                left: -50,
                width: 300,
                height: 300,
                borderRadius: '50%',
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.03),
                zIndex: 0,
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Chip
                        label="Internal Portal"
                        color="primary"
                        variant="outlined"
                        sx={{ mb: 2, bgcolor: 'background.paper' }}
                    />
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
                        <Box component="span" sx={{ color: 'primary.main' }}>My Org</Box> Support
                    </Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                        Streamlined assistance for all your organizational needs.
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {/* IT Ticket Card */}
                    <Grid item xs={12} md={5}>
                        <Card sx={{ height: '100%' }}>
                            <CardActionArea
                                onClick={() => navigate('/it-ticket')}
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
                                    <Monitor sx={{ fontSize: 40, color: 'primary.main' }} />
                                </Box>
                                <CardContent>
                                    <Typography variant="h4" gutterBottom>
                                        IT Ticket
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" paragraph>
                                        Hardware requests, software issues, and network connectivity support.
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'primary.main', mt: 2, opacity: 0.8 }}>
                                        <Typography variant="button" sx={{ mr: 1 }}>Proceed</Typography>
                                        <ArrowForward fontSize="small" />
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    {/* HR Ticket Card */}
                    <Grid item xs={12} md={5}>
                        <Card sx={{ height: '100%', opacity: 0.7, position: 'relative' }}>
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
                                    <People sx={{ fontSize: 40, color: 'text.disabled' }} />
                                </Box>
                                <CardContent>
                                    <Typography variant="h4" gutterBottom color="text.disabled">
                                        HR Ticket
                                    </Typography>
                                    <Typography variant="body1" color="text.disabled" paragraph>
                                        Benefits, payroll queries, and general human resources inquiries.
                                    </Typography>
                                    <Chip size="small" label="Coming Soon" sx={{ mt: 2 }} />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        © 2026 My Org Inc.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Home;
