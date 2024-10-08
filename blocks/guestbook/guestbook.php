<style>
[x-cloak] {
    display: none !important;
}
</style>
<?php

// Approve comment automatically when it's posted but allow for comment to be unapproved
// $auto_approve_comments = true;
// if ($auto_approve_comments && isset($_GET['unapproved']) && isset($_GET['moderation-hash'])) {
//     $comment = get_comment($_GET['unapproved']);
//     if ($comment && hash_equals($_GET['moderation-hash'], wp_hash($comment->comment_date_gmt))) {
//         wp_set_comment_status($comment, 'approve');
//     }
// }


if ($is_preview) {
    echo '<h2>Gästebuch</h2><p><em>No Preview</em></p>';
    return;
}

$moderation_notice = false;
if (isset($_GET['unapproved']) && isset($_GET['moderation-hash'])) {
    $moderation_notice = true;
}

$user = wp_get_current_user();
$user_identity = $user->exists() ? $user->display_name : '';
$logout_url = wp_logout_url(apply_filters('the_permalink', get_permalink($post_id), $post_id));
$options = [
  'fields' => [
  'author' => '<p><label for="author">Name: <input class="w-full rounded" id="author" name="author" aria-required="true"></input></label></p>',
    'email' => '<p class="mb-0"><label for="email">E-Mail: <input class="w-full rounded" id="email" name="email" aria-required="true"></input></label></p><p class="text-m">Deine E-Mail-Adresse wird nicht veröffentlicht.</p>',
    'cookies' => '',
  ],
  'logged_in_as' => "<p>Du bist als {$user_identity} angemeldet. (<a href=\"{$logout_url}\">Abmelden</a>)</p>",
  'title_reply' => 'Dein Eintrag im Gästebuch',
  'label_submit' => 'Abschicken',
  'submit_field' => '<p class="form-submit mb-0">%1$s %2$s</p>',
  'comment_notes_before' => '',
  'comment_field' => '<textarea class="mb-5 w-full rounded" rows="6" id="comment" name="comment" aria-required="true"></textarea>',
];
?>
<?php if (comments_open()): ?>
<div class="timeline-guestbook p-5">
    <div class="overflow-hidden" id="timeline-guestbook">
        <div class="swiper-container relative">
            <div class="flex space-x-2 items-center">
                <h2 class="flex-1"><?php _e('Gästebuch', BB_TEXT_DOMAIN); ?></h2>
                <div>
                    <?= bb_icon('chevron-left', 'swiper-button-prev btn btn-neutral btn-outline btn-circle cursor-pointer icon-xxl') ?>
                    <!-- <div class="swiper-pagination inline-block text-3xl font-alt align-middle mx-2"></div> -->
                    <?= bb_icon('chevron-right', 'swiper-button-next btn btn-neutral btn-outline btn-circle cursor-pointer icon-xxl') ?>
                </div>
            </div>
            <div class="swiper-wrapper py-6">
                <?php foreach (get_comments() as $comment): ?>
                <?php if ($comment->comment_approved): ?>
                <div class="swiper-slide self-stretch h-auto max-h-96 overflow-y-auto">
                    <div class="h-full flex flex-col gap-5 h-full">
                        <div class="space-y-2 px-2 pb-2 flex flex-col justify-end">
                            <div class="col-span-3 flex gap-3">
                                <div class="w-16">
                                    <?= bb_icon('quote', 'icon-xxl text-wmde20-yellow') ?>
                                </div>
                                <div class="overflow-hidden">
                                    <blockquote class="text-xl lg:text-2xl leading-tight font-normal">
                                        <?= $comment->comment_content ?></blockquote>
                                    <cite class="mt-5 font-bold block"><?= $comment->comment_author ?></cite>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php endif; ?>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
    <div class="container" x-data="{ commentBox: false}">
        <span role="button" class="btn btn-neutral btn-outline" x-on:click="commentBox = true"><?php _e('Hinterlasse einen Eintrag', BB_TEXT_DOMAIN) ?></span>
        <div x-cloak x-show="commentBox" x-on:lightbox.window="lightbox = true">
            <div x-transition:enter="transition ease-out duration-500" x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100" x-transition:leave="transition ease-in duration-500" x-transition:leave-start="opacity-100 transform scale-100" x-transition:leave-end="opacity-0 transform scale-90" class="fixed inset-0 z-50 flex items-center justify-center w-full p-2 overflow-hidden bg-gray-900 bg-opacity-75 h-100">
                <div x-on:click.away="commentBox = ''" class="absolute p-5 rounded-xl bg-white max-w-lg w-full">
                    <button type="button" x-on:click="commentBox = false" class="absolute top-0 right-0 btn btn-link -ml-5">
                        <?= bb_icon('x', 'icon-xs') ?>
                    </button>
                    <?php comment_form($options); ?>
                </div>
            </div>
        </div>
    </div>
</div>
<div x-cloak x-data="{ moderationNotice: <?= $moderation_notice ? 'true' : 'false' ?>}">
    <div x-show="moderationNotice" x-on:lightbox.window="lightbox = true">
        <div x-transition:enter="transition ease-out duration-500" x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100" x-transition:leave="transition ease-in duration-500" x-transition:leave-start="opacity-100 transform scale-100" x-transition:leave-end="opacity-0 transform scale-90" class="fixed inset-0 z-50 flex items-center justify-center w-full p-2 overflow-hidden bg-gray-900 bg-opacity-75 h-100">
            <div x-on:click.away="moderationNotice = ''" class="absolute p-5 rounded-xl bg-white max-w-lg w-full">
                <button type="button" x-on:click="moderationNotice = false" class="absolute top-0 right-0 btn btn-link -ml-5">
                    <?= bb_icon('x', 'icon-xs') ?>
                </button>
                <p class="mb-0">Danke für Deinen Beitrag. Er wurde abgesendet. Wir prüfen ihn für die Veröffentlichung.
                </p>
            </div>
        </div>
    </div>
</div>
<script>
    SwipersConfig['#timeline-guestbook'] = {
        loop: false,
        centeredSlides: false,
        spaceBetween: 0,
        grabCursor: true,
        draggable: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            640: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    };
</script>
<?php endif; ?>