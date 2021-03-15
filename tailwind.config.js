
module.exports = {
    purge: false,
    theme: {
        screens: {
            'sm': '680px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1440px',
        },
        extend: {
            colors: {
                'mainBlue': '#B0E0E6'
            },
            spacing: {
                52: '13rem',
                68: '17rem',
                72: '18rem',
                80: '20rem',
                96: '24rem',
                108: '28rem'
            },
            fontSize: {
                '7xl': '4.5rem',
                '8xl': '6rem',
                '9xl': '8rem'
            },
            gridTemplateRows: {
                '8': 'repeat(8, minmax(0, 1fr))',
                '24': 'repeat(24, minmax(0, 1fr))',
            }
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms')
    ]
}