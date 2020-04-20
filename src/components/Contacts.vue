<template>
	<b-container class="bv-example-row">
		<b-row>
			<b-col>
				<font-awesome-icon :icon="['fas', 'city']" class="contact-icon"/> Nantes<br/>
				<font-awesome-icon :icon="['fas', 'at']" class="contact-icon"/> kauffeisensylvain@gmail.com<br/>
				<font-awesome-icon :icon="['fas', 'phone']" class="contact-icon"/> 06 16 90 88 08<br/>
			</b-col>
			<b-col>
				<p>
					<font-awesome-icon :icon="['fab', 'twitter']" class="contact-icon"/> <a href="https://twitter.com/Sylv1KauffeiseN" target="_blank" rel="noopener noreferrer">@Sylv1KauffeiseN</a><br/>
					<font-awesome-icon :icon="['fab', 'linkedin']"  class="contact-icon"/> <a href="https://www.linkedin.com/in/sylvain-kauffeisen" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/sylvain-kauffeisen</a><br/>
					<font-awesome-icon :icon="['fab', 'github']"  class="contact-icon"/> <a href="https://github.com/Racthor" target="_blank" rel="noopener noreferrer">github.com/Racthor</a><br/>
					<font-awesome-icon :icon="['fab', 'gitlab']"  class="contact-icon"/> <a href="https://gitlab.com/Racthor" target="_blank" rel="noopener noreferrer">gitlab.com/Racthor</a><br/>
				</p>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: 'contact'
}
</script>

<style type="text/css">
.contact-icon {
	margin-right: 5px;
}
</style>