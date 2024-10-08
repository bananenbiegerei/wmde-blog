<?php

$members = [];
foreach (get_field('team_members') as $member) {
  $members[] = new bbTeamMember(['id' => $member->ID]);
}

$columns = get_field('team_member_columns');
$show_meta_infos = get_field('hide_meta_infos') != 1;
?>
<div class="bb-team-members-block">
  <div class="grid grid-cols-1 sm:grid-cols-<?php echo $columns; ?> mb-16 gap-10">
  <?php foreach ($members as $member): ?>
  <div class="sm:flex sm:gap-5 mb-3">
    <div class="overflow-hidden mb-5 sm:mb-auto basis-1/2 self-start max-w-[18rem]">
    <?= $member->get_photo('rounded-3xl h-full object-cover w-full team-members-scheme') ?>
    </div>
    <div class="basis-1/2">
    <?php if ($show_meta_infos): ?>
    <?php if ($member->related_project || $member->related_project_ext): ?>
    <?= esc_html($member->label_for_related_project) ?>
    <ul>
      <?php foreach ($member->related_project as $post): ?>
      <li>
      <a class="topline" href="<?= esc_attr(get_permalink($post->ID)) ?>">
        <?= esc_html(get_the_title($post->ID)) ?>
      </a>
      </li>
      <?php endforeach; ?>
      <?php foreach ($member->related_project_ext as $title => $url): ?>
      <li>
      <a class="topline" href="<?= esc_attr($url) ?>">
        <?= esc_html($title) ?>
      </a>
      </li>
      <?php endforeach; ?>
    </ul>
    <?php endif; ?>
    <?php endif; ?>

    <?php
    if($member->name) { ?>
      <h2 class="text-lg mb-1"><?= esc_html($member->name) ?></h2>
    <?php }
    ?>
    <?php
    if($member->details) { ?>
      <p class="mb-1 text-lg"><?= esc_html($member->details) ?></p>
    <?php }
    ?>
    <?php
    if($member->phone) { ?>
      <p class="mb-1 text-lg"><a href="tel:<?= esc_attr($member->phone) ?>"><?= esc_html($member->phone) ?></a></p>
    <?php }
    ?>
    <?php
    if($member->email) { ?>
      <p class="text-lg mb-1"><a href="mailto:<?= esc_attr($member->email) ?>"><?php _e('E-Mail', BB_TEXT_DOMAIN); ?></a></p>
    <?php }
    ?>
    </div>
  </div>
  <?php endforeach; ?>
  </div>
</div>