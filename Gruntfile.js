module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ui_src: ['ui/src/**/*.js'],
    server_src: ['server/src/**/*.js'],
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        screwIE8: true,
        quoteStyle: 1,
        mangle: {
          except: ['angular']
        }
      },
      ui: {
        files: {
           'dist/<%= pkg.name %>.min.js': ui_src
        }
      },
      server: {
        files: {
           'dist/<%= pkg.name %>-server.min.js': server_src
        }
      },
      debug: {
        options : {
          beautify: true
        }
        files: {
           'debug/<%= pkg.name %>.js': ui_src,
           'debug/<%= pkg.name %>-server.js': server_src
        }
      }
    },
    jshint: {
      options: {
        force: true,
        reporter: require('jshint-stylish'),
        all: ['Gruntfile.js', 'ui/src/**/*.js', 'server/src/**/*.js']
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint','uglify']);

};

