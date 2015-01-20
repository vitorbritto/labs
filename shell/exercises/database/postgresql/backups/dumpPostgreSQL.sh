#!/bin/bash

# ---------------------------------------------------------------------------------------------
#
# Programa: dumpPostgreSQL.sh
# Autor: Carlos Alan
#
# Descrição:
# Este script será responsável pelo backup de qualquer banco de dados do tipo
# PostgreSQL em servidor local ou remoto. Os arquivos serão gravados no diretório "FOLDER".
#
# ---------------------------------------------------------------------------------------------
#
# Configuração:
#   USER:    nome do atual usuário do sistema
#   FILE:    nome padrão dos arquivos
#   FOLDER:  diretório para armazenar os backups
#   DB_USER: usuário do banco de dados
#
# Uso:
#   chmod u+x dumpPostgreSQL.sh && ./dumpPostgreSQL.sh
#
# Programar execução (crontab):
#   crontab -e
#   01 * * * * * ~/caminho/do/script/dumpPostgreSQL.sh
#
# ---------------------------------------------------------------------------------------------


# Declarando as variáveis
# -------------------------------

# Globais
NOW="$(date +'%d_%m_%Y_%H_%M_%S')"
USER="usuario_do_sistema"
FILE="db_backup_$NOW".gz
FOLDER="storage"
FULL_PATH="$FOLDER/$FILE"
LOG="$FOLDER/"backup_log_"$(date +'%Y_%m')".txt

# Banco de Dados
DB_HOST="localhost"
DB_USER="root"

# Iniciando processo de backup
# -------------------------------

echo "-------------------------------------------------------------------------------"
echo "IMPORTANTE:"
echo "Certifique-se de digitar o nome para o banco de dados corretamente"
echo "e de realizar as configurações necessrias antes de realizar este procedimento."
echo "-------------------------------------------------------------------------------"

echo " "
echo -n " Digite o nome do banco de dados que deseja realizar o backup (sem espaços): "; read DB_NAME

echo "----------------------------------------------------------" >> "$LOG"
echo " Backup iniciado em: $(date +'%d-%m-%Y %H:%M:%S')" >> "$LOG"
pg_dump -v -O -E UTF8 -Fp -W -h "$DB_HOST" -U "$DB_USER" "$DB_NAME" | gzip > "$FULL_PATH"
echo " Backup finalizado em: $(date +'%d-%m-%Y %H:%M:%S')" >> "$LOG"
chown "$USER" "$FULL_PATH"
chown "$USER" "$LOG"
echo " "
echo " Permissão modificada" >> "$LOG"
find "$FOLDER" -name db_backup_* -mtime +8 -exec rm {} \;
echo " "
echo " Arquivos remanescentes apagados" >> "$LOG"
echo " Operação finalizada em: $(date +'%d-%m-%Y %H:%M:%S')" >> "$LOG"
echo "----------------------------------------------------------" >> "$LOG"

echo " Backup realizado com sucesso!"
exit 0
