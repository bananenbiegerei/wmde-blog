<div class="bb-featured-events-block lg:grid lg:grid-cols-12 lg:gap-10">
	<div class="lg:col-span-4">
		<h2 class="mb-10"><?php _e('Veranstaltungen', BB_TEXT_DOMAIN); ?></h2>
	</div>
	<div class="lg:col-span-8">
		<?php
  // Query arguments to fetch the featured events
  $args = [
  	'post_type' => 'tribe_events',
  	'posts_per_page' => -1,
  	'tax_query' => [
  		[
  			'taxonomy' => 'tribe_events_cat', // Replace 'custom_taxonomy' with the actual name of your custom taxonomy.
  			'field' => 'slug', // Assuming the term is identified by its slug.
  			'terms' => 'not-featured', // Specify the term you want to exclude.
  			'operator' => 'NOT IN'
  		]
  	]
  ];

  // Query the events
  $featured_events = new WP_Query($args);

  // Check if there are any featured events
  if ($featured_events->have_posts()) {
  	while ($featured_events->have_posts()) {

  		$featured_events->the_post();

  		// Get event details
  		$event_id = get_the_ID();
  		$event_title = get_the_title();
  		$event_content = get_the_content();
  		$event_image = get_the_post_thumbnail_url($event_id); // Get featured image URL
  		$event_venue = tribe_get_venue($event_id); // Get venue details
  		$event_address = tribe_get_address($event_id); // Get event address
  		$event_time_start = tribe_get_start_date($event_id, false, 'H:i'); // Get event start time
  		$event_time_end = tribe_get_end_date($event_id, false, 'H:i');

  		// Get event end time
  		?>
				<div class="lg:grid lg:grid-cols-12 lg:gap-10 mb-5 mb-20 lg:mb-10">
					<div class="lg:col-span-4">
						<a href="<?php echo get_permalink(); ?>" class="image-hover-effect">
							<div class="aspect-w-16 aspect-h-9 rounded-xl mb-5 lg:mb-0">
								<img class="w-full h-full object-cover rounded-xl" src="<?php echo $event_image; ?>" alt="Event Image">
							</div>
							
						</a>
					</div>
					<div class="lg:col-span-8">
						<div class="topline"><?php echo tribe_get_start_date($event_id, false, 'j. F'); ?>
							<?php echo $event_time_start; ?> — <?php echo $event_time_end; ?></div>
						<a href="<?php echo get_permalink(); ?>" class="text-hover-effect"><h3><?php echo $event_title; ?></h3></a>
						<address class="not-italic">
	<p class="text-base mb-0 ">
		<?php echo tribe_get_address(); ?>
	</p>
	<p class="text-base mb-0 ">
		<?php echo tribe_get_zip(); ?> <?php echo tribe_get_city(); ?>
	</p>
	<p class="text-base mb-0 ">
		<?php echo tribe_get_country(); ?>
	</p>
</address>
					</div>
				</div>
				<?php
  	}

  	// Restore original post data
  	wp_reset_postdata();
  } else {
  	echo 'No featured events found.';
  }
  ?>
	</div>
</div>

