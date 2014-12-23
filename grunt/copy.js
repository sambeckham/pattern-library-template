module.exports = {
    scripts: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/_assets/',
            dest: '.tmp',
            src: 'scripts/{,*/}*.js'
        }]
    },images: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/_assets/',
            dest: '.tmp',
            src: 'img/{,*/}*.{jpg,png,jpeg,gif}'
        }]
    }
};