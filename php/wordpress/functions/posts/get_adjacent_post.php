<?php

/*
 * Description:
 * Retrieve adjacent post. Can either be next or previous post.
 *
 * Usage:
 * <?php get_adjacent_post( $in_same_term, $excluded_terms, $previous, $taxonomy ) ?>
 *
 * Parameters:
 *
 * $in_same_term
 *     (boolean) (optional) Whether post should be in a same taxonomy term.
 *
 *         Default: false
 *
 * $excluded_terms
 *     (array or string) (optional) Array or comma-separated list of excluded term IDs.
 *
 *         Default: ''
 *
 * $previous
 *     (boolean) (optional) Whether to retrieve previous post.
 *
 *         Default: true
 *
 * $taxonomy
 *     (string) (optional) Taxonomy name, if $in_same_term is true.
 *
 *         Default: 'category'
 *
 *
 */
?>


<?php
    $prev_post = get_adjacent_post(true, '', true, 'foo_category');
    if (!empty($prev_post)) :
?>

    <a href="<?php echo $prev_post->guid; ?>"><?php echo $prev_post->post_title; ?></a>

<?php endif; ?>

<?php
    $next_post = get_adjacent_post(true, '', false, 'foo_category');
    if(!empty($next_post)) :
?>

    <a href="<?php echo $next_post->guid; ?>"><?php echo $next_post->post_title; ?></a>

<?php endif; ?>
