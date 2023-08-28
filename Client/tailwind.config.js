/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        darkMode: 'class',
        extend: {
            boxShadow: {
                'outline-yellow': '0 0 20px 6px rgba(255, 255, 0, 0.5)',
            },
            fontFamily: {
                // main font
                poppins: ['Poppins', 'sans-serif'],
                // secondary fonts
                caprasimo: ['Caprasimo', 'cursive'],
                lilita: ['Lilita One', 'cursive'],
                inter: ['Inter', 'sans-serif'],
            },
            screens: {
                sm: '640px',

                md: '768px',

                lg: '1024px',

                xl: '1280px',

                '2xl': '1536px',
            },
        },
    },
    plugins: ['tailwindcss-animated'],
}
