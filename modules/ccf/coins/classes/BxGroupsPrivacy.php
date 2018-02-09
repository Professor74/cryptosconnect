<?php
/**
 * Copyright (c) CCFTechSpot Pty Limited - http://www.cryptosconnect.cf/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

cf_import('BxDolPrivacy');

class CfCoinsPrivacy extends BxDolPrivacy
{
    var $oModule;

    /**
     * Constructor
     */
    function CfCoinsPrivacy(&$oModule)
    {
        $this->oModule = $oModule;
        parent::BxDolPrivacy($oModule->_oDb->getPrefix() . 'main', 'id', 'author_id');
    }

    /**
     * Check whethere viewer is a member of dynamic coin.
     *
     * @param  mixed   $mixedCoinId   dynamic coin ID.
     * @param  integer $iObjectOwnerId object owner ID.
     * @param  integer $iViewerId      viewer ID.
     * @return boolean result of operation.
     */
    function isDynamicCoinMember($mixedCoinId, $iObjectOwnerId, $iViewerId, $iObjectId)
    {
        $aDataEntry = array ('id' => $iObjectId, 'author_id' => $iObjectOwnerId);
        if ('f' == $mixedCoinId)  // fans only
            return $this->oModule->isFan ($aDataEntry, $iViewerId, true);
        elseif ('a' == $mixedCoinId) // admins only
            return $this->oModule->isEntryAdmin ($aDataEntry, $iViewerId);
        return false;
    }
}
