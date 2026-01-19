/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fffaeb',
                    100: '#fcefc7',
                    200: '#fae094',
                    300: '#f7cb59',
                    400: '#f2b124',
                    500: '#d9900b',
                    600: '#b86e06',
                    700: '#914f08',
                    800: '#783f0d',
                    900: '#63340f',
                    950: '#381a05',
                },
                dark: {
                    900: '#121212',
                    800: '#1E1E1E',
                    700: '#2D2D2D',
                }
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                serif: ['Playfair Display', 'ui-serif', 'Georgia'],
            }
        },
    },
    plugins: [],
}
