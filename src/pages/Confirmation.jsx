import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar
} from '@mui/material';
import { keyframes } from '@mui/material/styles';
import { CheckCircle, ArrowForward } from '@mui/icons-material';

// Styled animations using MUI system is possible, but leveraging standard keyframes object for prop usage
const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const Confirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2
    }}>
      <Container maxWidth="sm">
        <Card sx={{
          textAlign: 'center',
          p: 4,
          borderRadius: 4,
          boxShadow: (theme) => theme.shadows[10]
        }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Avatar sx={{
                width: 80,
                height: 80,
                bgcolor: 'success.light',
                animation: `${bounceAnimation} 1s ease-in-out`
              }}>
                <CheckCircle sx={{ fontSize: 48, color: 'success.main' }} />
              </Avatar>
            </Box>

            <Typography variant="h4" gutterBottom fontWeight={700}>
              Request Received
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
              Your request has been received. We will send you updates to your Email ID.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={() => navigate('/')}
              endIcon={<ArrowForward />}
              sx={{ py: 1.5 }}
            >
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Confirmation;
