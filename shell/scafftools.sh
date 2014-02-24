#!/bin/bash

#
# Programa: scaffolding.sh
# Autor: Vitor Britto
#
# Descrição:
# Este script será responsável pela criação de uma estrutura
# para novos projetos, incluindo a integração de tecnologias
# utilizadas atualmente nos projetos web
#
# Uso: chmod u+x scafftools.sh && ./scafftools.sh
#

# Declarando as variáveis
files="index.html robots.txt humans.txt .travis.yml .editorconfig .gitignore Gruntfile.js assets/styles/style.css assets/scripts/main.js"
paths="assets/scripts assets/styles assets/images assets/fonts"

# Iniciando a interação com o usuário
echo -n "→ Digite o nome do projeto (sem espaços): "
read project

# Criando estrutura do projeto
echo -e "→ Criando Estrutura"

mkdir -p $project && cd $_
mkdir -p $paths
touch $files

# Iniciando integração com Git  bower e Grunt
echo -e "→ Integrando Ferramentas\n"

git init
npm init
bower init
npm install grunt

# Mensagem final
echo -e "\n✔ Processo finalizado!\n"
