module.exports = {
    compile: {
        options: {
            baseUrl: '<%= config.tmp %>/scripts',
            paths: {
                requireLib: '<%= config.bower_components %>/requirejs/require',
                chosen: '<%= config.bower_components %>/chosen/chosen.jquery',
                jquery: '<%= config.bower_components %>/jquery/dist/jquery',
                FitVids: '<%= config.bower_components %>/FitVids/jquery.fitvids',
                sharrre: '<%= config.bower_components %>/sharrre/jquery.sharrre.min',
                masonry: '<%= config.bower_components %>/masonry/dist/masonry.pkgd',
                grunticon: '../../<%= config.dist %>/icons/grunticon.loader'
            },
            name: 'main',
            out: '<%= config.dist %>/scripts/main.js',
            include: ['requireLib'],
        }
    }
};