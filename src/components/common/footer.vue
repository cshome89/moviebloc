<template>
	<footer class="footer">
		<div class="container">
			<ul class="foot_menu">
				<li>
					<dl>
						<dt>{{propsdata.language[propsdata.lang].footer_moviebloc}}</dt>
						<dd><a href="#">{{propsdata.language[propsdata.lang].footer_about}}</a></dd>
						<dd><a href="#">{{propsdata.language[propsdata.lang].footer_makemoney}}</a></dd>
						<dd><a href="#">{{propsdata.language[propsdata.lang].footer_contact}}</a></dd>
						<dd><a href="#">{{propsdata.language[propsdata.lang].footer_faq}}</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt>{{propsdata.language[propsdata.lang].footer_guideline}}</dt>
						<dd><a href="#">{{propsdata.language[propsdata.lang].footer_filmmaker}}</a></dd>
						<dd><a href="#">{{propsdata.language[propsdata.lang].footer_translator}}</a></dd>
						<dd><a href="#">{{propsdata.language[propsdata.lang].footer_curator}}</a></dd>
						<dd><a href="#">{{propsdata.language[propsdata.lang].footer_contributor}}</a></dd>
						<dd><a href="#">{{propsdata.language[propsdata.lang].footer_community}}</a></dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt>{{propsdata.language[propsdata.lang].footer_legal}}</dt>
						<dd><a href="#">{{propsdata.language[propsdata.lang].footer_term}}</a></dd>
						<dd><a href="#">{{propsdata.language[propsdata.lang].footer_privacy}}</a></dd>
					</dl>
				</li>
			</ul>
			<p class="copyright">
				<img src="images/img_mbl.png" alt="Img" />
				{{propsdata.language[propsdata.lang].footer_madewith}}
			</p>
		</div>
	</footer>
</template>

<script>
	
	export default {
		props : ["propsdata"]
	}

</script>