#!/usr/bin/env bash

# -- ABOUT THIS PROGRAM: -----------------------------------------------------------------------------------
#
# Name: users.sh
# Author:  Vitor Britto
# Description: This script shows a list of user on current system
#
# -- INSTRUCTIONS: -----------------------------------------------------------------------------------------
#
# Usage:    $(basename $0) [options]
#
# Options:
#           -h, --help        output help
#           -V, --version     output program version
#
# ----------------------------------------------------------------------------------------------------------


# ------------------------------------------------------------------------------
# | VARIABLES                                                                  |
# ------------------------------------------------------------------------------

# Sort options
sort_name=0
sort_reverse=0
sort_upper=0

# Core
VERSION="$(basename "$0") v0.1.0"
HELP="
Usage:    $(basename "$0") [options]

Options:
          -h, --help        output help
          -V, --version     output program version

          -n, --name        sort list of user by name
          -r, --reverse     reverse list order
          -u, --upper       output list with uppercase strings
"

# ------------------------------------------------------------------------------
# | MAIN PROGRAM                                                               |
# ------------------------------------------------------------------------------

while [[ test -n "$1" ]]; do
    case "$1" in
        -n|--name) sort_name=1 ;;
        -r|--reverse) sort_reverse=1 ;;
        -u|--uper) sort_upper=1 ;;
        -h|--help) echo $HELP; exit 0; ;;
        -V|--version) echo $VERSION; exit 0; ;;
    esac

    shift

done

list=$(cut -d : -f 1,5 /etc/passwd)

test "$sort_name"    = 1 && list=$(echo "$list" | sort)
test "$sort_reverse" = 1 && list=$(echo "$list" | tac)
test "$sort_upper"   = 1 && list=$(echo "$list" | tr a-z A-Z)

echo "$list" | tr : \\t

















