<?php if (class_exists('bbTeamMember') && ($args['name'] ?? '') !== ''): ?>
  <?php $author = new bbTeamMember($args); ?>
  <div class="flex flex-col gap-1 w-24 items-center">
    <div class="w-24 h-24 rounded overflow-hidden">
      <?= $author->get_photo('rounded-full h-full object-cover w-full team-members-scheme') ?>
    </div>
    <p class="mb-0 font-bold text-sm text-center">
      <?= esc_html($author->name) ?>
    </p>
  </div>
<?php endif; ?>
