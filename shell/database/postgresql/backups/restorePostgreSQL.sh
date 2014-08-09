#!/bin/bash

# ---------------------------------------------------------------------------------------------
#
# Programa: restorePostgreSQL.sh
# Autor: Carlos Alan
#
# Descrição:
# Este script será responsável por restaurar backups banco de dados do tipo
# PostgreSQL em servidor local ou remoto.
#
# ---------------------------------------------------------------------------------------------
#
# Configuração:
#   FOLDER:  diretório que armazenar os backups
#   DB_USER: usuário do banco de dados
#
# Uso:
#   chmod u+x restorePostgreSQL.sh && ./restorePostgreSQL.sh
#
# Programar execução (crontab):
#   crontab -e
#   01 * * * * * ~/caminho/do/script/restorePostgreSQL.sh
#
# ---------------------------------------------------------------------------------------------


# Declarando as variáveis
# -------------------------------

# Globais
FOLDER="storage"
LOG="$FOLDER/"restore_log_"$(date +'%Y_%m')".txt

# Banco de Dados
DB_HOST="localhost"
DB_USER="root"

# Iniciando o processo de restore
# -------------------------------

echo "-------------------------------------------------------------------------------"
echo "IMPORTANTE:"
echo "Certifique-se de digitar o nome para o banco de dados corretamente"
echo "e de realizar as configuraç necessrias antes de realizar este procedimento."
echo "-------------------------------------------------------------------------------"

echo " "
echo -n " Digite o nome do banco de dados que voê deseja importar o backup (sem espaços): "; read DB_NAME
echo " "
echo -n " Digite o nome nome do arquivo que contém o backup do banco de dados (sem o .gz): "; read FILE

echo "----------------------------------------------------------" >> "$LOG"
echo " Descompactando .gz: $(date +'%d-%m-%Y %H:%M:%S')" >> "$LOG"
gunzip "$FOLDER/$FILE".gz
echo " Importação do banco de dados iniciado em: $(date +'%d-%m-%Y %H:%M:%S')" >> "$LOG"
psql -U "$DB_USER" -h "$DB_HOST" -f "$FOLDER/$FILE" "$DB_NAME"
echo " Importação finalizado em: $(date +'%d-%m-%Y %H:%M:%S')" >> "$LOG"
echo "----------------------------------------------------------" >> "$LOG"

echo " Restore realizado com sucesso!"
exit 0
