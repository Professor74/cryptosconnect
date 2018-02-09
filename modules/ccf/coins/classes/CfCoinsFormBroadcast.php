<?php
/**
 * Copyright (c) BoonEx Pty Limited - http://www.ccf.com/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

bx_import('BxDolTwigFormBroadcast');

class CfCoinsFormBroadcast extends BxDolTwigFormBroadcast
{
    function CfCoinsFormBroadcast ()
    {
        parent::BxDolTwigFormBroadcast (_t('_cf_coins_form_caption_broadcast_title'), _t('_cf_coins_form_err_broadcast_title'), _t('_cf_coins_form_caption_broadcast_message'), _t('_cf_coins_form_err_broadcast_message'));
    }
}
