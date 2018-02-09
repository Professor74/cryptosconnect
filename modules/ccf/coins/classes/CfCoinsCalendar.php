<?php
/**
 * Copyright (c) CCFTechSpot Pty Limited - http://www.cryptosconnect.cf/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

cf_import ('BxDolTwigCalendar');

class CfCoinsCalendar extends BxDolTwigCalendar
{
    function CfCoinsCalendar ($iYear, $iMonth, &$oDb, &$oConfig, &$oTemplate)
    {
        parent::BxDolTwigCalendar($iYear, $iMonth, $oDb, $oConfig);
    }

    function getEntriesNames ()
    {
        return array(_t('_cf_coins_coin_single'), _t('_cf_coins_coin_plural'));
    }
}
