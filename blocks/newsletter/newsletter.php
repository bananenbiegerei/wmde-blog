<div id="<?= $block['id'] ?>"
	class="bb-newsletter-block rounded-3xl p-5 flex flex-col mb-10 h-full"
	style="background-color: <?= get_field('bg_color') ?>;">

		<h2 class="topline">
			<?= esc_html(get_field('heading')) ?>
		</h2>

		<div class=" font-light  text-2xl text-inherit mb-5">
			<div class=" text-3xl">
				<?= get_field('text') ?>
			</div>
		</div>
		
		<form action="https://t874ad7c5.emailsys1a.net/191/2155/d537ac9314/subscribe/form.html" method="post">
					<ul class="lg:grid lg:grid-cols-2 lg:gap-5">
						<li style="position:absolute; z-index: -100; left:-6000px;" aria-hidden="true">
							<label class="field_label required" for="rm_email"><?php _e('E-Mail:'); ?> </label>
							<input type="text" class="form_field" name="rm_email" id="rm_email" value="" tabindex="-1" autocomplete="email" />
							<label class="field_label required" for="rm_comment">Comment: </label>
							<textarea class="form_field" name="rm_comment" tabindex="-1" id="rm_comment"></textarea>
						</li>
						<li class="col-span-2">
							<label class="field_label required text-sm font-bold" for="email"><?php _e('E-Mail:'); ?> * </label>
							<input type="text" class="form_field" name="email" id="email" value=""  autocomplete="email"/>
						</li>
						<li id="firstname_form" class="basis-1/2">
							<label id="firstname_label" class="field_label text-sm font-bold" for="firstname"><?php _e('Vorname:'); ?> </label>
							<input type="text" class="form_field" name="firstname" id="firstname" value="" autocomplete="given-name" />
						</li>
						<li id="lastname_form" class="basis-1/2 mb-5 lg:mb-5">
							<label id="lastname_label" class="field_label text-sm font-bold" for="lastname"><?php _e('Nachname:'); ?> </label>
							<input type="text" class="form_field" name="lastname" id="lastname" value="" autocomplete="name"/>
						</li>
						<li class="form_button">
							<input type="submit" class="form_button_submit btn btn-lg" value="<?php _e('Anmelden'); ?>" />
						</li>
					</ul>
		</form>

		<div class=" font-light font-sans text-xs text-inherit h-full flex items-end">
			<?= get_field('disclaimer') ?>
		</div>

</div>
