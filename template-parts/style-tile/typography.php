<script>
	jQuery(document).ready(function() {
		var size_h1 = jQuery("h1").css('font-size');
		document.getElementById("h1-display").innerHTML = size_h1;
		var size_h2 = jQuery("h2").css('font-size');
		document.getElementById("h2-display").innerHTML = size_h2;
		var size_h3 = jQuery("h3").css('font-size');
		document.getElementById("h3-display").innerHTML = size_h3;
		var size_h4 = jQuery("h4").css('font-size');
		document.getElementById("h4-display").innerHTML = size_h4;
		var size_h5 = jQuery("h5").css('font-size');
		document.getElementById("h5-display").innerHTML = size_h5;
		var size_h6 = jQuery("h6").css('font-size');
		document.getElementById("h6-display").innerHTML = size_h6;
		var size_p = jQuery("p").css('font-size');
		document.getElementById("p-display").innerHTML = size_p;
		var size_p_small = jQuery("p.small").css('font-size');
		document.getElementById("p-small-display").innerHTML = size_p_small;
		var size_p_lead = jQuery("p.lead").css('font-size');
		document.getElementById("p-lead-display").innerHTML = size_p_lead;
	});
</script>
<div class="max-w-2xl">
	<label>h1 <span id="h1-display"></span></label>
	<h1>Level One Heading Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus id corporis, sed accusamus eligendi in ratione tenetur? Quidem nisi iure pariatur corporis doloremque libero voluptates quaerat! Cupiditate provident nostrum adipisci.
	</p>
	<label>h2 <span id="h2-display"></span></label>
	<h2>Level Two Heading Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus id corporis, sed accusamus eligendi in ratione tenetur? Quidem nisi iure pariatur corporis doloremque libero voluptates quaerat! Cupiditate provident nostrum adipisci.
	</p>
	<label>h3 <span id="h3-display"></span></label>
	<h3>Level Three Heading Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus id corporis, sed accusamus eligendi in ratione tenetur? Quidem nisi iure pariatur corporis doloremque libero voluptates quaerat! Cupiditate provident nostrum adipisci.
	</p>
	<label>h4 <span id="h4-display"></span></label>
	<h4>Level Four Heading Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus id corporis, sed accusamus eligendi in ratione tenetur? Quidem nisi iure pariatur corporis doloremque libero voluptates quaerat! Cupiditate provident nostrum adipisci.
	</p>
	<label>h5 <span id="h5-display"></span></label>
	<h5>Level Five Heading Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h5>
	<p>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus id corporis, sed accusamus eligendi in ratione tenetur? Quidem nisi iure pariatur corporis doloremque libero voluptates quaerat! Cupiditate provident nostrum adipisci.
	</p>
	<label>h6 <span id="h6-display"></span></label>
	<h6>Level Six Heading Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6>
	<p class="small">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus id corporis, sed accusamus eligendi in ratione tenetur? Quidem nisi iure pariatur corporis doloremque libero voluptates quaerat! Cupiditate provident nostrum adipisci.
	</p>
	<h1 class="space-top-big">Paragraphs</h1>
	<label>p <span id="p-display-lead"></span></label>
	<p class="lead">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus id corporis, sed accusamus eligendi in ratione tenetur? Quidem nisi iure pariatur corporis doloremque libero voluptates quaerat! Cupiditate provident nostrum adipisci.
	</p>
	<label>p <span id="p-display"></span></label>
	<p>This is a standard paragraph created using the WordPress TinyMCE text editor. It has a <strong>strong tag</strong>, an <em>em tag</em> and a <del>strikethrough</del> which is actually just the del element. There are a few more inline elements which are not in the WordPress admin but we should check for incase your users get busy with the copy and paste. These include <cite>citations</cite>, <abbr title="abbreviation">abbr</abbr>, bits of <code>code</code> and <var>variables</var>, <q>inline quotations</q>, <ins datetime="2011-12-08T20:19:53+00:00">inserted text</ins>, text that is <s>no longer accurate</s> or something <mark>so important</mark> you might want to mark it. We can also style subscript and superscript characters like C0<sub>2</sub>, here is our 2<sup>nd</sup> example. If they are feeling non-semantic they might even use <b>bold</b>, <i>italic</i>, <big>big</big> or <small>small</small> elements too.&nbsp;Incidentally, these HTML4.01 tags have been given new life and semantic meaning in HTML5, you may be interested in reading this <a title="HTML5 Semantics" href="http://csswizardry.com/2011/01/html5-and-text-level-semantics">article by Harry Roberts</a> which gives a nice excuse to test a link.&nbsp;&nbsp;It is also worth noting in the "kitchen sink" view you can also add <span style="text-decoration: underline;">underline</span>&nbsp;styling and set <span style="color: #ff0000;">text color</span> with pesky inline CSS.</p>
	<label>p <span id="p-display-small"></span></label>
	<p class="small">This is a <strong>small</strong> standard paragraph created using the WordPress TinyMCE text editor. It has a <strong>strong tag</strong>, an <em>em tag</em> and a <del>strikethrough</del> which is actually just the del element. There are a few more inline elements which are not in the WordPress admin but we should check for incase your users get busy with the copy and paste. These include <cite>citations</cite>, <abbr title="abbreviation">abbr</abbr>, bits of <code>code</code> and <var>variables</var>, <q>inline quotations</q>, <ins datetime="2011-12-08T20:19:53+00:00">inserted text</ins>, text that is <s>no longer accurate</s> or something <mark>so important</mark> you might want to mark it. We can also style subscript and superscript characters like C0<sub>2</sub>, here is our 2<sup>nd</sup> example. If they are feeling non-semantic they might even use <b>bold</b>, <i>italic</i>, <big>big</big> or <small>small</small> elements too.&nbsp;Incidentally, these HTML4.01 tags have been given new life and semantic meaning in HTML5, you may be interested in reading this <a title="HTML5 Semantics" href="http://csswizardry.com/2011/01/html5-and-text-level-semantics">article by Harry Roberts</a> which gives a nice excuse to test a link.&nbsp;&nbsp;It is also worth noting in the "kitchen sink" view you can also add <span style="text-decoration: underline;">underline</span>&nbsp;styling and set <span style="color: #ff0000;">text color</span> with pesky inline CSS.</p>
	<label>blockquote</label>
	<blockquote>
		Currently WordPress blockquotes are just wrapped in blockquote tags and have no clear way for the user to define a source. Maybe one day they'll be more semantic (and easier to style) like the version below.
	</blockquote>
	<blockquote cite="http://html5doctor.com/blockquote-q-cite/">
		<p>HTML5 comes to our rescue with the footer element, allowing us to add semantically separate information about the quote.</p>
		<footer>
			<cite>
				<a href="http://html5doctor.com/blockquote-q-cite/">Oli Studholme, HTML5doctor.com</a>
			</cite>
		</footer>
	</blockquote>
	<label>lists</label>
	<ul>
		<li>Unordered list item one.</li>
		<li>Unordered list item two.</li>
		<li>Unordered list item three.</li>
		<li>Unordered list item four.</li>
		<li>By the way, Wordpress does not let you create nested lists through the visual editor.</li>
	</ul>
	<ol class="mb-16">
		<li>Ordered list item one.</li>
		<li>Ordered list item two.</li>
		<li>Ordered list item three.</li>
		<li>Ordered list item four.</li>
		<li>By the way, Wordpress does not let you create nested lists through the visual editor.</li>
	</ol>
</div>