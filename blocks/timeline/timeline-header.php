<div class="mb-4">
    <p class="text-sm  font-bold mb-0"><?php echo $date; ?></p>
    <h2 class="h3 font-bold mb-0">
        <?php echo $title; ?>
    </h2>

    <?php if (!empty($excerpt)): ?>
    <p class="line-clamp-4 text-md mb-0"><?php echo $excerpt; ?></p>
    <?php endif; ?>
    <p class="underline text-sm">
        <?php _e('Mehr', BB_TEXT_DOMAIN); ?>
    </p>
</div>