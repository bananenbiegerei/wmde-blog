<?php

// This block uses the Pyr audio/video player
// https://github.com/sampotts/plyr

$audio_file = get_field('audio_file');
$icon_url = get_stylesheet_directory_uri() . '/'. WMDE_BB_BLOCKS_DIR . '/audio/plyr.svg";';
?>

<?php if ($audio_file): ?>
<div class="w-full" oncontextmenu="return false;">
    <audio id="<?= $block['id'] ?>" src="<?php echo esc_url($audio_file['url']); ?>" type="<?php echo esc_attr($audio_file['mime_type']); ?>" controls></audio>
</div>
<script>
    new Plyr('#<?php echo $block['id']; ?>', {
        iconUrl: '<?php echo $icon_url; ?>',
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
