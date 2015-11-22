'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'bundle/bundle.js',
        dest: 'bundle/bundle.min.js'
      },
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    browserify: {
      bundle: {
        dest: 'bundle/bundle.js',
        src: 'lib/**/*.js',
        options: {
          transform: [ 'babelify' ]
        }
      }
    }    
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task.
  grunt.registerTask('default', ['browserify', 'uglify']);

};
