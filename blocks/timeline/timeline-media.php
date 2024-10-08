<div class="btn-group">
    <?php if (!empty($audio_group)) { ?>
    <?= bb_icon('volume-up', 'icon-lg') ?>
    <?php } ?>
    <?php if ($video) { ?>
    <?= bb_icon('video', 'icon-lg') ?>
    <?php } ?>
    <?php if ($youtube) { ?>
    <?= bb_icon('youtube', 'icon-lg') ?>
    <?php } ?>
</div>
