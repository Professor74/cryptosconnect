<?php
/**
 * Copyright (c) CCFTechSpot Pty Limited - http://www.cryptosconnect.cf/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

cf_coins_import ('FormAdd');

class CfCoinsFormEdit extends CfCoinsFormAdd
{
    function CfCoinsFormEdit ($oMain, $iProfileId, $iEntryId, &$aDataEntry)
    {
        parent::CfCoinsFormAdd ($oMain, $iProfileId, $iEntryId, $aDataEntry['thumb']);

        $aFormInputsId = array (
            'id' => array (
                'type' => 'hidden',
                'name' => 'id',
                'value' => $iEntryId,
            ),
        );

        cf_import('BxDolCategories');
        $oCategories = new BxDolCategories();
        $oCategories->getTagObjectConfig ();
        $this->aInputs['categories'] = $oCategories->getGroupChooser ('cf_coins', (int)$iProfileId, true, $aDataEntry['categories']);

        $this->aInputs = array_merge($this->aInputs, $aFormInputsId);
    }

}
