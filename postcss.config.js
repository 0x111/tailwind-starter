module.exports = {
    plugins: [
        require('tailwindcss')({
            purge: {
                enabled: true,
                content: [
                    './src/*.html',
                    './src/*.js',
                ]
            },
        }),
        require('autoprefixer')
    ]
};