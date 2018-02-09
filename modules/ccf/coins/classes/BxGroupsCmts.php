<?php
/**
 * Copyright (c) CCFTechSpot Pty Limited - http://www.cryptosconnect.cf/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

cf_import('BxTemplCmtsView');

class CfCoinsCmts extends BxTemplCmtsView
{
    /**
     * Constructor
     */
    function CfCoinsCmts($sSystem, $iId)
    {
        parent::BxTemplCmtsView($sSystem, $iId);
    }

    function getMain()
    {
        return BxDolModule::getInstance('CfCoinsModule');
    }

    function getBaseUrl()
    {
    	$oMain = $this->getMain();
    	$aEntry = $oMain->_oDb->getEntryById($this->getId());
    	if(empty($aEntry) || !is_array($aEntry))
    		return '';

    	return BX_DOL_URL_ROOT . $oMain->_oConfig->getBaseUri() . 'view/' . $aEntry['uri']; 
    }

    function isPostReplyAllowed ()
    {
        if (!parent::isPostReplyAllowed())
            return false;
        $oMain = $this->getMain();
        $aDataEntry = $oMain->_oDb->getEntryById($this->getId ());
        return $oMain->isAllowedComments($aDataEntry);
    }

    function isEditAllowedAll ()
    {
        $oMain = $this->getMain();
        $aDataEntry = $oMain->_oDb->getEntryById($this->getId ());
        if ($oMain->isAllowedCreatorCommentsDeleteAndEdit ($aDataEntry))
            return true;
        return parent::isEditAllowedAll ();
    }

    function isRemoveAllowedAll ()
    {
        $oMain = $this->getMain();
        $aDataEntry = $oMain->_oDb->getEntryById($this->getId ());
        if ($oMain->isAllowedCreatorCommentsDeleteAndEdit ($aDataEntry))
            return true;
        return parent::isRemoveAllowedAll ();
    }
}