module.exports = function(grunt){
  grunt.initConfig({
    concat :{
      dist: {
        src:['components/scripts/*.js'],
        dest:'builds/development/js/scripts.js'
      }
    }, //js

    less: {
      dist: {
        options:{
          style:'expanded'
        },
        files:[{
          //src: 'LESS/results.css',
          //dest:'builds/development/css/style.css'
          src:'Production/Less/results.css',
          dest:'css/style.css'
        }]
      }
    } //sass

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.task.registerTask('default', ['concat', 'less'])

}; //Wraper function
