import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import type React from "react";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        logo: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        logo?: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        logo: true
    }
}

let AvondalienTheme = createTheme({
    palette: {
        primary: {
            dark: '#2e6b54',
            light: '#F0F4C3',
            main: '#212121',
            contrastText: '#212121',
        },
        secondary: {
            dark: '#212121',
            light: '#BDBDBD',
            main: '#757575',
            contrastText: '#9E9E9E'
        }
    },
    typography: {
        fontFamily: 'Nunito',
        logo: {
            fontFamily: 'Bitcount',
            fontSize: '2rem',
            color: 'black',
        },
        h1: {
            fontFamily: "Merriweather"
        },
        h2: {
            fontFamily: "Merriweather"
        },
        h3: {
            fontFamily: "Merriweather"
        },
        h4: {
            fontFamily: "Merriweather",
            paddingBottom: 16
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: 'outlined' },
                            style: {
                                background: '#2e6b54',
                                color: 'white',
                            }
                        }
                    ]
                }
            }
        }
    }
});

AvondalienTheme = responsiveFontSizes(AvondalienTheme)

export { AvondalienTheme }