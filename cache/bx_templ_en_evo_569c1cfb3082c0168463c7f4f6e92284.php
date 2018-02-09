<?php if(is_array($a['bx_repeat:buttons'])) for($i=0; $i<count($a['bx_repeat:buttons']); $i++){ ?>
<div class="sys-auth bx-def-margin-sec-top clearfix">
	<a class="bx-btn" href="<?=$a['bx_repeat:buttons'][$i]['href'];?>"<?php if($a['bx_repeat:buttons'][$i]['bx_if:show_onclick']['condition']){ ?> onclick="<?=$a['bx_repeat:buttons'][$i]['bx_if:show_onclick']['content']['onclick'];?>"<?php } ?>>
		<?php if($a['bx_repeat:buttons'][$i]['bx_if:show_icon']['condition']){ ?><i class="sys-icon <?=$a['bx_repeat:buttons'][$i]['bx_if:show_icon']['content']['icon'];?>"></i><?php } ?><?=$a['bx_repeat:buttons'][$i]['title'];?>
	</a>
</div>
<?php } else if(is_string($a['bx_repeat:buttons'])) echo $a['bx_repeat:buttons']; ?>
