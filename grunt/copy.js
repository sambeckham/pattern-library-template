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
            src: 'imgs/{,*/}*.{png,jpg,jpeg,gif,svg}'
        }]
    },
     dist:{
        files: [{
            expand: true,
            dot: true,
            cwd: 'dev/_assets/',
            dest: 'web',
            src: ['imgs/{,*/}*.{png,jpg,jpeg,gif,svg}']
        }]
    }
};