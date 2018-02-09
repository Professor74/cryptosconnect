<?php
/**
 * Copyright (c) BoonEx Pty Limited - http://www.ccf.com/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

bx_import('BxDolSiteMaps');
bx_import('BxDolPrivacy');

/**
 * Sitemaps generator for Coins
 */
class CfCoinsSiteMaps extends BxDolSiteMaps
{
    protected $_oModule;

    protected function __construct($aSystem)
    {
        parent::__construct($aSystem);

        $this->_aQueryParts = array (
            'fields' => "`id`, `uri`, `created`", // fields list
            'field_date' => "created", // date field name
            'field_date_type' => "timestamp", // date field type
            'table' => "`cf_coins_main`", // table name
            'join' => "", // join SQL part
            'where' => "AND `status` = 'approved' AND `allow_view_coin_to` = '" . BX_DOL_PG_ALL . "'", // SQL condition, without WHERE
            'order' => " `created` ASC ", // SQL order, without ORDER BY
        );

        $this->_oModule = BxDolModule::getInstance('CfCoinsModule');
    }

    protected function _genUrl ($a)
    {
        return BX_DOL_URL_ROOT . $this->_oModule->_oConfig->getBaseUri() . 'view/' . $a['uri'];
    }
}
