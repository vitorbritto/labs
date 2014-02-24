#!/bin/bash

#
# Programa: create.sh
# Autor: Vitor Britto
#
# Descrição:
# Este script será responsável pela criação de uma estrutura
# para novos projetos, incluindo a integração de tecnologias
# utilizadas atualmente nos projetos web
#
# Uso: chmod u+x create.sh && ./create.sh
#

# Declarando as variáveis
files="index.html robots.txt humans.txt .travis.yml .editorconfig .gitignore Gruntfile.js assets/styles/style.styl assets/scripts/main.js"
paths="assets/scripts assets/styles assets/images assets/fonts"

# Criando estrutura do projeto
echo -e "→ Criando Estrutura"
mkdir -p $paths
touch $files

# Iniciando integração
echo -e "→ Integrando Ferramentas\n"

git init
npm init
bower init

echo -e "→ Instalando módulos\n"
npm install stylus uglify-js --save

# Mensagem final
echo -e "\n✔ Processo finalizado!\n"
