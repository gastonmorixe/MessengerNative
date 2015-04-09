module.exports = function(grunt) {

  grunt.initConfig({
    nodewebkit: {
      options: {

        version: 'v0.12.0',
        files: './app/*',
        downloadUrl: 'http://dl.nwjs.io/',
        macIcns: './render/icon.icns',
        mac: function(a){ return {mac: "nwjs-v0.12.0-osx-x64.zip"} },
        macPlist: {mac_bundle_id: 'messenger.app.com'},
        embed_nw: false,
        keep_nw: true,
        platforms: ['osx', 'win']
      },
      src: './app/**/*' // Your node-webkit app
    },
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask('default', ['nodewebkit']);

};
