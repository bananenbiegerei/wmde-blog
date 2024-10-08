<div id="<?= $block['id'] ?>"
	class="bb-newsletter-block rounded-3xl p-5 flex flex-col mb-10 h-full"
	style="background-color: <?= get_field('bg_color') ?>;">
		<h2>
			<?= esc_html(get_field('heading')) ?>
		</h2>
		<?= get_field('text') ?>
		<div id="rmOrganism">
		  <div class="rmEmbed rmLayout--vertical rmBase">
			<div data-page-type="formSubscribe" class="rmBase__body rmSubscription">
			  <form method="post" action="https://t874ad7c5.emailsys1a.net/191/1277732/9256179f86/subscribe/form.html?_g=1695038749" class="rmBase__content">
				<div class="rmBase__container">
				  <div class="rmBase__section">
					<div class="rmBase__el rmBase__el--input rmBase__el--label-pos-none" data-field="email">
					  <label for="email" class="rmBase__compLabel rmBase__compLabel--hideable">
						E-Mail-Adresse
					  </label>
					  <div class="rmBase__compContainer">
						<input type="text" name="email" id="email" placeholder="E-Mail" value="" class="rmBase__comp--input comp__input">
						<div class="rmBase__compError"></div>
					  </div>
					</div>
					<div class="rmBase__el rmBase__el--input rmBase__el--label-pos-none" data-field="firstname">
					  <label for="firstname" class="rmBase__compLabel rmBase__compLabel--hideable">
						Vorname
					  </label>
					  <div class="rmBase__compContainer">
						<input type="text" name="firstname" id="firstname" placeholder="Vorname" value="" class="rmBase__comp--input comp__input">
						<div class="rmBase__compError"></div>
					  </div>
					</div>
					<div class="rmBase__el rmBase__el--input rmBase__el--label-pos-none" data-field="lastname">
					  <label for="lastname" class="rmBase__compLabel rmBase__compLabel--hideable">
						Nachname
					  </label>
					  <div class="rmBase__compContainer">
						<input type="text" name="lastname" id="lastname" placeholder="Nachname" value="" class="rmBase__comp--input comp__input">
						<div class="rmBase__compError"></div>
					  </div>
					</div>
					<div class="rmBase__el rmBase__el--cta">
					  <button type="submit" class="rmBase__comp--cta btn">
						Anmelden
					  </button>
					</div>
				  </div>
				</div>
			  </form>
			</div>
			<div data-page-type="pageSubscribeSuccess" class="rmBase__body rmSubscription hidden">
			  <div class="rmBase__content">
				<div class="rmBase__container">
				  <div class="rmBase__section">
					<div class="rmBase__el rmBase__el--heading">
					  <div class="rmBase__comp--heading">
						Fast geschafft...
			<!-- this linebreak is important, don't remove it! this will force trailing linebreaks to be displayed -->
						<br>
					  </div>
					</div>
				  </div>
				  <div class="rmBase__section">
					<div class="rmBase__el rmBase__el--text">
					  <div class="rmBase__comp--text">
						<br>
						Danke für Deine Anmeldung.
						<br>
						Wir haben Dir auch schon die erste E-Mail geschickt.
						<br>
						<br>
						Bitte bestätige Deine E-Mail-Adresse über den darin enthaltenen Aktivierungslink.
			<!-- this linebreak is important, don't remove it! this will force trailing linebreaks to be displayed -->
						<br>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>

		<div class=" font-light font-sans text-xs text-inherit h-full flex items-end">
			<?= get_field('disclaimer') ?>
		</div>

</div>
