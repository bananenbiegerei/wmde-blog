<?php

// This block uses the Pyr audio/video player
// https://github.com/sampotts/plyr

$video_file = get_field('video_file');
$video_poster = get_field('video_poster');

$icon_url = get_stylesheet_directory_uri() . '/'. WMDE_BB_BLOCKS_DIR . '/video/plyr.svg";';

?>

<?php if ($video_file): ?>
<div class="video-container w-full" oncontextmenu="return false;">
    <div class="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden">
        <video Xclass="object-cover object-center w-full h-full" id="<?= $block['id'] ?>"
            src="<?php echo esc_url($video_file['url']); ?>" type="<?php echo esc_attr($video_file['mime_type']); ?>"
            playsinline controls poster="<?= $video_poster; ?>" preload="none"></video>
    </div>
</div>
<script>
new Plyr('#<?php echo $block['id']; ?>', {
    controls: ['play', 'progress', 'volume', 'play-large'],
    iconUrl: '<?php echo $icon_url; ?>',
    hideControls: true,
    // settings: [],
    <?php if (get_locale() == 'de_DE'): ?>
    i18n: {
        speed: 'Geschwindigkeit',
        normal: 'Normale',
    }
    <?php endif; ?>
});
</script>
<?php endif; ?>
