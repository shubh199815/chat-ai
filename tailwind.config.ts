import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    '50': '#eef2ff',
                    '700': '#4338ca', // Primary color
                },
                secondary: {
                    '600': '#fbc02d', // Secondary color
                },
                white: '#ffffff',
                neutral: {
                    50: '#fafafa',
                    100: '#f3f4f6',
                    200: '#e5e5e5',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    900: '#171717',
                    950: '0a0a0a',
                },
                gray: {
                    50: '#f9fafb',
                },
            },
            fontSize: {
                xs: '0.75rem / 1rem',
                sm: '0.875rem / 1.25rem',
                xl: '1.5rem',
                '2xl': '1.75rem',
                '3xl': '1.875rem / 2.25rem',
            },
        },
    },
    plugins: [],
};

export default config;
