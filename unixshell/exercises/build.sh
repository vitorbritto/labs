#!/bin/bash

#
# Programa: build.sh
# Autor: Vitor Britto
#
# Descrição:
# Este script será responsável pelo build do projeto, o qual
# fará o processo de minificação e concatenação dos arquivos
#
# Uso: chmod u+x build.sh && ./build.sh
#

# Declarando as variáveis
DIST="_build"
IGNORE=(
    "assets/styles/style.css"
    "assets/scripts/main.js"
    ".editorconfig"
)
STYLE="assets/styles"
SCRIPT="assets/scripts"

# Minificar JS
echo -e "→ Minificando JS"
curl -X POST -s --data-urlencode "input@${SCRIPT}/main.js" http://javascript-minifier.com/raw > ${SCRIPT}/main.min.js

# Minificar CSS
echo -e "→ Minificando CSS"
curl -X POST -s --data-urlencode "input@${STYLE}/style.css" http://cssminifier.com/raw > ${STYLE}/style.min.css


# Copiar arquivos para pasta de destino
echo -e "→ Colocando arquivos em produção"
if [[ ! -d ${DIST} ]]; then
    mkdir ${DIST}
fi

cp ./* ${DIST}
rm -rf ${IGNORE}
