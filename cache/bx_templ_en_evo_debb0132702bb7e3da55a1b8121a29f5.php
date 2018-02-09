<!DOCTYPE html>
<html>
    <head>
    	<title><?=$this->parseSystemKey('page_header', $mixedKeyWrapperHtml);?></title>
    	<meta http-equiv="Content-Type" content="text/html; charset=<?=$this->parseSystemKey('page_charset', $mixedKeyWrapperHtml);?>" />
    	<meta http-equiv="Content-Style-Type" content="text/css" />
    	<bx_include_css />
    	<bx_include_js />
        <script defer type="text/javascript">
    		var site_url = 'http://192.168.0.19/cryptos/';
            setTimeout(function () {
                document.location = '<?=$a['url_relocate'];?>';
            }, 1000);
    	</script>
        <?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_head'); ?>
    </head>
    <body <?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_body'); ?> class="bx-def-font">
    	<?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_header'); ?>
    	<?=$a['page_main_code'];?>
    	<?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_footer'); ?>
    </body>
</html>
