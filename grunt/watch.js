module.exports = {
    options: {
        livereload: true
    },
    styles: {
        files: ['dev/_assets/scss/{,*/}*.scss'],
        tasks: ['sass:dev','autoprefixer:dev']
    },
    scripts: {
        files: ['dev/_assets/scripts/{,*/}*.js'],
        tasks: ['copy:scripts']
    },
    svg: {
        files: ['dev/_assets/svg/*.svg'],
        tasks: [
            'svgstore:dev',
            'regenerate'
        ]
    },
    jekyll: {
        files: [
            'dev/*.{html,md}',
            'dev/_layouts/*.html',
            'dev/_includes/*.html',
            'dev/_templates/*.{md,markdown,html}',
            'dev/_components/*.{md,markdown,html}',
            'dev/_plugins/*.rb'
        ],
        tasks: ['regenerate']
    },
    configFiles: {
        files: ['gruntfile.js', 'grunt/*.{js,yaml}'],
        options: {
            reload: true
        }
    },
};
