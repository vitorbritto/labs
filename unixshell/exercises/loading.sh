#!/usr/bin/env bash

COUNT="0"

while [ "$COUNT" -lt 50 ]
do
    case "$(($COUNT % 4))" in
        0) CHAR="/"
        ;;
        1) CHAR="-"
        ;;
        2) CHAR="\\"
        ;;
        3) CHAR="|"
        ;;
    esac

    sleep .1
    echo -ne $CHAR "\r"
    COUNT=$[$COUNT+1]

done

echo -e '✔ Done\r'
