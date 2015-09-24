module.exports = function(grunt) {
  
  // -- Config ----------
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // -- Babel Config ----------
    
    babel: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src:['*.js', '*.jsx', '**/*.js', '**/*.jsx'],
          dest: 'dist/js/',
          ext: '.js',
        }],
      }
    },

    // -- Jade Config ----------

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: [
          {
            'index.html' : 'src/jade/index.jade',
          },
          {
            expand: true,
            cwd: 'src/jade',
            src:['*.jade,', '**/*.jade'],
            dest: 'dist/html/',
            ext: '.html',
          }
        ],
      }
    },

    // -- Sass Config ----------

    sass: {                              // Task
      dist: {                            // Target
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.scss','**/*.scss'],
          dest: 'dist/css/',
          ext: '.css',
        }],
      }
    },

    // -- Watch Config ----------

    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: ['*.scss', '**/*.scss'],
        options: {
          cwd: 'src/scss/',
        },
        tasks: ['sass'],
      },
      jade: {
        options: {
          cwd: 'src/jade/',
        },
        files: ['*.jade', '**/*.jade'],
        tasks: ['jade'],
      },
      haml: {
        options: {
          cwd: 'src/haml/',
        },
        files: ['*.haml', '**/*.haml'],
        task: [],
      },
      es6: {
        options: {
          cwd: 'src/js/',
        },
        files: ['*.js', '*.jsx', '**/*.js', '**/*.jsx'],
        tasks: ['babel'],
      },
    },
  });

  // -- Main Tasks -------------

  // Load Plugins.
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-babel');

  // Default task(s)

  grunt.registerTask('default', ['watch', 'babel', 'sass', 'jade']);

};
