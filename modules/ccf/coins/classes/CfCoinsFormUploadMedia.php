<?php
/**
 * Copyright (c) BoonEx Pty Limited - http://www.ccf.com/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

cf_coins_import ('FormEdit');

class CfCoinsFormUploadMedia extends CfCoinsFormEdit
{
    function CfCoinsFormUploadMedia ($oMain, $iProfileId, $iEntryId, &$aDataEntry, $sMedia, $aMediaFields)
    {
        parent::CfCoinsFormEdit ($oMain, $iProfileId, $iEntryId, $aDataEntry);

        foreach ($this->_aMedia as $k => $a) {
            if ($k == $sMedia)
                continue;
            unset($this->_aMedia[$k]);
        }

        array_push($aMediaFields, 'Submit', 'id');

        foreach ($this->aInputs as $k => $a) {
            if (in_array($k, $aMediaFields))
                continue;
            unset($this->aInputs[$k]);
        }
    }

}
