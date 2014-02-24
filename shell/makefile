# MAKEFILE
#
# Autor: Vitor Britto
# Versão: 0.1.0
#
#
# Descrição:
# Arquivo para gerar um estrutura inicial para
# novos projetos e realizar tarefas de automação
#
#
# Tarefas Disponíveis:
# 	make        -> Inicializa processo de Build
#	make create -> Criar a estrutura do projeto
# 	make copy   -> Copia os arquivos para a pasta "public"
#   make zip    -> Compacta os arquivos da pasta "public" e versiona com a data e hora atual
#
#
# Uso: make [nome da tarefa que deseja executar]
#

# Caminhos de Origem
JS_IN    = ./assets/scripts
CSS_IN   = ./assets/styles
IMG_IN   = ./assets/images

# Caminhos de Destino
DIST     = ./public
JS_OUT   = ./public/assets/scripts
CSS_OUT  = ./public/assets/styles
IMG_IN   = ./public/assets/images

# Configurações Gerais
CHECK    = \033[32m✔\033[39m
HR       = -----------------------------------------------------
IGNORE   = ("assets/styles/style.css" "assets/scripts/main.js" "package.json" "bower.json" ".gitignore" ".git" ".travis.yml" ".editorconfig")
NODE     = ./node_modules/.bin
PACKAGE  = pkg_projeto
VERSION  = date "+%Y.%m.%d"
RELEASE  = $(PACKAGE)-$(VERSION)

# Inicializar processo de Build
all: init styles scripts

help:
	@cat help.txt

# Mensagem de Inicialização
init:
	@echo "\n$(HR)"
	@echo "→ Iniciando processo de Build"
	@echo "$(HR)\n"


# Criar Estrutura para novos projetos
create:
	@echo "→ Iniciando download"
	@echo "\n"
	@curl -fsSL https://gist.githubusercontent.com/vitorbritto/9128566/raw/bf3d531d39afc7fec5a034f968569fc7883f0c2e/create.sh > create.sh
	@chmod u+x create.sh && ./create.sh

	@mkdir -p $(DIST)


# Tarefa para Estilos
styles:
	@$(NODE)/stylus -c < $(CSS_IN)/style.styl > $(CSS_OUT)/style.css
	@echo "→ Compilando CSS              $(CHECK) Feito!"

# Tarefa para Scripts
scripts:
	@$(NODE)/uglifyjs -o $(JS_IN)/main.js > $(JS_OUT)/main.min.js
	@echo "→ Minificando Scripts         $(CHECK) Feito!"

# Copiar arquivos para a pasta "public" via Rsync
copy:
	@echo "→ Copiando arquivos"
	@rsync -aq --exclude="$(IGNORE)" $(DIST)

# Compactar arquivos na pasta "public"
zip:
	@echo "→ Compactando arquivos" \
    @zip -r $(RELEASE) $(DIST)/*

# Instalar dependências
modules:
	@echo "→ Instalando dependências" \
    @npm install

# Execute all with "make"
.PHONY: all copy zip
