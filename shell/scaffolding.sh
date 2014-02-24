#!/bin/bash

#
# Programa: scaffolding.sh
# Autor: Vitor Britto
#
# Descrição:
# Este script será responsável pela criação 
# de uma estrutura para novos projetos.
#
# Uso: chmod u+x scaffolding.sh && ./scaffolding.sh
#

# Declarando as variáveis
FILES="index.html robots.txt humans.txt .editorconfig assets/styles/style.css assets/scripts/main.js"
PATHS="assets/scripts assets/styles assets/images assets/fonts"

# Iniciando a interação com o usuário
echo -n "→ Digite o nome do projeto (sem espaços): "
read PROJECT

# Criando estrutura do projeto
echo -e "→ Criando Estrutura"

mkdir -p $PROJECT && cd $_
mkdir -p $PATHS
touch $FILES

# Mensagem final
echo -e "\n✔ Processo finalizado!\n"
