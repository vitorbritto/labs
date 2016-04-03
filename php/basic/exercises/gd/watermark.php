<?php

	header('Content-type: image/jpeg');

	if (isset($_GET['source'])) {
		$source = $_GET['source'];

		$watermark = imagecreatefrompng('star.png');
		$watermark_width  = imagesx($watermark);
		$watermark_height = imagesy($watermark);

		$image = imagecreatetruecolor($watermark_width, $watermark_height);
		$image = imagecreatefromjpeg($source);

		$image_size = getimagesize($source);
		$image_x = $image_size[0] - $watermark_width - 10;
		$image_y = $image_size[1] - $watermark_height - 10;

		imagecopymerge($image, $watermark, $image_x, $image_y, 0, 0, $watermark_width, $watermark_height, 60);
		imagejpeg($image);
	}

?>