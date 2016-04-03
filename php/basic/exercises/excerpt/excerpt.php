<?php

function excerpt($text, $limit, $break_line = true) {
    $size = strlen($text);

    if ($size <= $limit) {
        $new_text = $text;
    } else {
        if ($break_line === true) {
            $new_text = trim(substr($text, 0, $limit)).'...';
        } else {
            $last_space = strrpos(substr($text, 0, $limit), ' ');
            $new_text = trim(substr($text, 0, $last_space)).'...';
        }
    }

    return $new_text;
}

?>