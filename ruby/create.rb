#!/usr/bin/env ruby

#
# Programa: create.rb
# Autor: Vitor Britto
#
# Descrição:
# Este script é responsável pela criação de uma estrutura
# para novos projetos, incluindo a integração de tecnologias
# utilizadas atualmente nos projetos web
#
# Uso: ruby create.rb NOME_DO_PROJETO [options]
#

# Requisições
require 'fileutils'
require 'webrick'

# Variáveis
APP_NAME   = ARGV.first
NO_TOOLS   = ARGV.any? { |arg| arg == '--no-tools' }
WEB_SERVER = ARGV.any? { |arg| arg == '--server' }
APP_PATHS  = "assets/scripts assets/styles assets/images assets/fonts"
APP_FILES  = "index.html robots.txt humans.txt .travis.yml .editorconfig assets/styles/style.css assets/scripts/main.js"

# Help
if ARGV.empty?
    puts "
Usage:

    ruby create.rb NOME_DO_PROJETO [options]

Options:

    [--server]         # Starts a Web Server after Scaffolding
    [--no-tools]       # Do not integrate Git, Grunt and Bower


Example:
    ruby create.rb meuprojeto

"
    exit
end

# Cabeçalho
def exe(cmd); puts "+ " + cmd; system(cmd); end
def sep; "-------------------------------------------"; end
def heading(text); puts "\n" + sep + "\n" + text + "\n" + sep + "\n"; end

# Verifica dependências no sistema
heading("Searching for dependencies in your system before continue")
raise "ERROR: Git does not appear to be installed with your $PATH. See http://git-scm.com" unless system('command -v git')
raise "ERROR: Node does not appear to be installed with your $PATH. See http://nodejs.org" unless system('command -v node')
raise "ERROR: Bower does not appear to be installed with your $PATH. See http://bower.io" unless system('command -v bower')
raise "ERROR: Grunt does not appear to be installed with your $PATH. See http://gruntjs.com" unless system('command -v grunt')
puts "All Done!"

# Inicia Scaffolding do Projeto
heading("Creating Scaffolding")
exe("rm -rf #{APP_NAME}") if File.directory?(APP_NAME)
exe("mkdir -p #{APP_NAME}")

FileUtils.cd(APP_NAME, :verbose => true) do

    # Copia arquivos
    exe("mkdir -p #{APP_PATHS}")
    exe("touch #{APP_FILES}")

    # Integra Ferramentas (Git, Bower, Grunt)
    unless NO_TOOLS
        heading("Integrating Tools")
        exe("touch .gitignore Gruntfile.js")
        exe("git init")
        exe("npm init")
        exe("bower init")
        exe("npm install grunt")
    end

    # Inicia Web Server
    # if WEB_SERVER
    #     heading("Starting Web Server")
    #     server = WEBrick::HTTPServer.new(
    #         :Port => 8080,
    #         :BindAddress => "localhost",
    #         :DocumentRoot => ARGV[0]
    #     )
    #     trap("INT") { server.shutdown }
    #     server.start
    # end
end
