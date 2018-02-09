<div class="adm-dashboard-help">
	<?=$a['content'];?>
	<div class="adm-ds-help-btn bx-def-margin-sec-top">
		<script>
			function bx_adm_hide_help() {
			    $.post('http://192.168.0.19/cryptos/administration/', {hide_admin_help:1}, function(data) {
			        $(".adm-ds-help").parents().filter(".disignBoxFirst:first").slideUp(function () {
			            $(this).remove();
			        });
			    });
			}
		</script>
		<button class="bx-btn bx-btn-small" onclick="bx_adm_hide_help()">Don't show it anymore</button>
	</div>
</div>