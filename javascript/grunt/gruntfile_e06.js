// Os templates são declarados no método initConfig() do Grunt e são chamados através dos delimitadores <% %>
grunt.initConfig({
  
  // Configurando os templates para diretórios
  dirs: {
    js: "assets/js"
  },
  
  // Implementando os templates na configuração de uma tarefa
  uglify: {
    options: {
      mangle: false
    },
    dist: {
      files: {
        "<%= dirs.js %>/app.min.js": [ "<%= dirs.js %>/main.js" ]
      }
    }
  }
  
});
