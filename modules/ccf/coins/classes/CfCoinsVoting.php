<?php
/**
 * Copyright (c) CCFTechSpot Pty Limited - http://www.cryptosconnect.cf/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

cf_import('BxTemplVotingView');

class CfCoinsVoting extends BxTemplVotingView
{
    /**
     * Constructor
     */
    function CfCoinsVoting($sSystem, $iId)
    {
        parent::BxTemplVotingView($sSystem, $iId);
    }

    function getMain()
    {
        return BxDolModule::getInstance('CfCoinsModule');
    }

    function checkAction ()
    {
        if (!parent::checkAction())
            return false;
        $oMain = $this->getMain();
        $aDataEntry = $oMain->_oDb->getEntryById($this->getId ());
        return $oMain->isAllowedRate($aDataEntry);
    }
}
