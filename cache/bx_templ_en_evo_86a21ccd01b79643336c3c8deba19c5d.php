<div class="sys-flj-content sys-form-<?=$a['action'];?>">
	<?php if($a['bx_if:show_auth']['condition']){ ?>
		<?=$a['bx_if:show_auth']['content']['auth'];?>
		<div class="bx-def-hr bx-def-margin-top"></div>
	<?php } ?>
	<div class="<?=$a['action'];?>-box-form"><?=$a['custom_code_before'];?><?=$a['form'];?><?=$a['custom_code_after'];?></div>
	<?php if($a['bx_if:show_text']['condition']){ ?>
		<div class="<?=$a['bx_if:show_text']['content']['action'];?>-box-text bx-def-margin-top"><?=$a['bx_if:show_text']['content']['text'];?></div>
	<?php } ?>
</div>
