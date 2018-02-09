<!DOCTYPE html>
<html dir="<?=$this->parseSystemKey('dir', $mixedKeyWrapperHtml);?>">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
		<meta http-equiv="Content-Type" content="text/html; charset=<?=$this->parseSystemKey('page_charset', $mixedKeyWrapperHtml);?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
		<title><?=$this->parseSystemKey('page_header', $mixedKeyWrapperHtml);?></title>

		<bx_include_css />

		<bx_include_js />

		<?=$this->parseSystemKey('dol_images', $mixedKeyWrapperHtml);?>
        <?=$this->parseSystemKey('dol_lang', $mixedKeyWrapperHtml);?>
        <?=$this->parseSystemKey('dol_options', $mixedKeyWrapperHtml);?>

		<script defer type="text/javascript">
			var site_url = 'http://192.168.0.19/cryptos/';
			var aUserInfoTimers = new Array();
			var glUserInfoDisabled = 'yes';
    		$(document).ready( function() {
    			/*--- Init RSS Feed Support ---*/
			    $( 'div.RSSAggrCont' ).dolRSSFeed();

			    /*--- Init Retina Support ---*/
				$('img.bx-img-retina').dolRetina();
		    } );
        </script>

        <?=$this->parseSystemKey('extra_js', $mixedKeyWrapperHtml);?>

	   <?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_head'); ?>
    </head>
    <body <?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_body'); ?> class="bx-def-font">
        <?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_header'); ?>
        <div id="FloatDesc"></div>

        <div class="adm-header">
        	<div class="adm-header-content">
            	<div class="adm-header-title bx-def-margin-sec-left">
            		<?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_logo_before'); ?>
            		<div class="adm-header-text bx-def-font-h1">Dolphin <span><?=$this->parseSystemKey('current_version', $mixedKeyWrapperHtml);?></span></div>
            		<?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_logo_after'); ?>
                    <div class="adm-header-update bx-def-margin-sec-left" id="adm-header-update"></div>
                    <div class="clear_both">&nbsp;</div>
                    <script language="javascript" type="text/javascript">
                    <!--
                        $(document).ready(function() {
                            $.get(
                                'http://192.168.0.19/cryptos/get_rss_feed.php?ID=boonex_version&member=0', 
                                {},
                                function(sData) {
                                	if(!sData)
                                	    return;

                                    var sVerCur = '<?=$this->parseSystemKey('current_version', $mixedKeyWrapperHtml);?>';
                                    var sVerNew = $(sData).find('dolphin').html(); 
                                    if(sVerNew != undefined && sVerNew != null && sVerNew != '' && sVerNew != sVerCur)
                                        $('#adm-header-update').html('<a href="https://www.boonex.com/downloads">Update to ' + sVerNew + ' now!</a>');
                                },
                                'text'
                            );
                        });
                    -->
                    </script>
            	</div>
            	<?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_top_menu_before'); ?>
            	<?=$this->parseSystemKey('top_menu', $mixedKeyWrapperHtml);?>
            	<?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_top_menu_after'); ?>
            	<div class="clear_both">&nbsp;</div>
            </div>
        </div>
        <div class="adm-middle">
            <div class="adm-middle-center">
                <div class="adm-middle-cnt bx-def-margin-sec-leftright">
            		<table class="adm-middle" cellpadding="0" cellspacing="0">
            			<tr>
            				<td class="adm-middle-menu">
            					<?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_main_menu_before'); ?>
                                <?=$this->parseSystemKey('main_menu', $mixedKeyWrapperHtml);?>
                                <?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_main_menu_after'); ?>
                                <div class="adm-copyright bx-def-margin-sec-top">&copy; <a href="https://www.boonex.com/">BoonEx</a></div>
                                <?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_copyright_after'); ?>
            				</td>
    
            				<td class="adm-middle-main" id="main_cont">
            					<div class="adm-page-header">
            						<div class="disignBoxFirst bx-def-border bx-def-round-corners">
            							<div class="boxContent bx-def-bc-padding"><?=$this->parseSystemKey('page_header', $mixedKeyWrapperHtml);?></div>
            						</div>
            					</div>
            					<div class="adm-page-content">
            						<?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_content_before'); ?>
	
    <?=$a['page_main_code'];?>
                                	<?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_content_after'); ?>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
	   <?=$this->processInjection($GLOBALS['_page']['name_index'], 'injection_footer'); ?>
    </body>
</html>