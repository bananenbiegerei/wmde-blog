<?php
header("HTTP/1.1 301 Moved Permanently");
$page_id = 64416; // Title: Inhalt nicht gefunden
header("Location: " . get_permalink($page_id));
exit(); ?>
