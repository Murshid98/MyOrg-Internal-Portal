import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#E30613', // My Org Red
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ffffff',
            contrastText: '#E30613',
        },
        background: {
            default: '#F5F5F5', // Light Gray background for enterprise feel
            paper: '#ffffff',
        },
        text: {
            primary: '#111827',
            secondary: '#6B7280',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontSize: '2.5rem', fontWeight: 700 },
        h2: { fontSize: '2rem', fontWeight: 600 },
        h3: { fontSize: '1.75rem', fontWeight: 600 },
        h4: { fontSize: '1.5rem', fontWeight: 600 },
        h5: { fontSize: '1.25rem', fontWeight: 500 },
        h6: { fontSize: '1rem', fontWeight: 500 },
        button: { textTransform: 'none', fontWeight: 600 }, // No uppercase buttons
    },
    shape: {
        borderRadius: 8, // Standard refined radius
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '10px 24px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    },
                },
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: '#c40510',
                    }
                }
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)', // Subtle shadow
                    border: '1px solid rgba(0,0,0,0.05)',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                size: 'small',
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                }
            }
        }
    },
});

export default theme;
