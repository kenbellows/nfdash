module.exports = function(grunt) {
  var ui_src = ['ui/src/**/*.js'];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        screwIE8: true,
        quoteStyle: 1,
        mangle: {
          except: ['angular']
        },
        files: {
           'dist/<%= pkg.name %>.min.js': ui_src
        }
      }
    },
    jshint: {
      options: {
        force: true,
        reporter: require('jshint-stylish'),
        all: ['Gruntfile.js'].concat(ui_src)
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint','uglify']);

};

