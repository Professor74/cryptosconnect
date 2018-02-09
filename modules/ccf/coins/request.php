<?php
/**
 * Copyright (c) CCFTechSpot Pty Limited - http://www.cryptosconnect.cf/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

require_once(BX_DIRECTORY_PATH_INC . 'profiles.inc.php');

check_logged();

cf_import('BxDolRequest');

class CfCoinsRequest extends BxDolRequest
{
    function CfCoinsRequest()
    {
        parent::BxDolRequest();
    }

    function processAsAction($aModule, &$aRequest, $sClass = "Module")
    {
        $sClassRequire = $aModule['class_prefix'] . $sClass;
        $oModule = BxDolRequest::_require($aModule, $sClassRequire);
        $aVars = array ('BaseUri' => $oModule->_oConfig->getBaseUri());
        $GLOBALS['oTopMenu']->setCustomSubActions($aVars, 'cf_coins_title', false);

        return BxDolRequest::processAsAction($aModule, $aRequest, $sClass);
    }
}

CfCoinsRequest::processAsAction($GLOBALS['aModule'], $GLOBALS['aRequest']);
