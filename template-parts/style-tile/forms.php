<h2>Simple Form</h2>
<div class="grid grid-cols-1 gap-6 max-w-4xl">
	<label class="block">
		<span>Full name</span>
		<input type="text" placeholder="" />
	</label>
	<label class="block">
		<span>Email address</span>
		<input type="email" placeholder="john@example.com" />
	</label>
	<label class="block">
		<span>When is your event?</span>
		<input type="date" />
	</label>
	<label class="block">
		<span>What type of event is it?</span>
		<select>
			<option>Corporate event</option>
			<option>Wedding</option>
			<option>Birthday</option>
			<option>Other</option>
		</select>
	</label>
	<label class="block">
		<span>Additional details</span>
		<textarea rows="3"></textarea>
	</label>
	<div class="block">
		<div class="mt-2">
			<div>
				<label class="inline-flex items-center">
					<input type="checkbox" checked />
					<span class="ml-2">Email me news and special offers</span>
				</label>
			</div>
		</div>
	</div>
	<div class="block">
		<button class="btn">
			Submit
		</button>
	</div>
</div>