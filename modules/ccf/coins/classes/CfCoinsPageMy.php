<?php
/**
 * Copyright (c) BoonEx Pty Limited - http://www.ccf.com/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

bx_import('BxDolPageView');

class CfCoinsPageMy extends BxDolPageView
{
    var $_oMain;
    var $_oTemplate;
    var $_oDb;
    var $_oConfig;
    var $_aProfile;

    function CfCoinsPageMy(&$oMain, &$aProfile)
    {
        $this->_oMain = &$oMain;
        $this->_oTemplate = $oMain->_oTemplate;
        $this->_oDb = $oMain->_oDb;
        $this->_oConfig = $oMain->_oConfig;
        $this->_aProfile = $aProfile;
        parent::BxDolPageView('cf_coins_my');
    }

    function getBlockCode_Owner()
    {
        if (!$this->_oMain->_iProfileId || !$this->_aProfile)
            return '';

        $sContent = '';
        switch (bx_get('cf_coins_filter')) {
        case 'add_coin':
            $sContent = $this->getBlockCode_Add ();
            break;
        case 'manage_coins':
            $sContent = $this->getBlockCode_My ();
            break;
        case 'pending_coins':
            $sContent = $this->getBlockCode_Pending ();
            break;
        default:
            $sContent = $this->getBlockCode_Main ();
        }

        $sBaseUrl = BX_DOL_URL_ROOT . $this->_oConfig->getBaseUri() . "browse/my";
        $aMenu = array(
            _t('_cf_coins_block_submenu_main') => array('href' => $sBaseUrl, 'active' => !bx_get('cf_coins_filter')),
            _t('_cf_coins_block_submenu_add_coin') => array('href' => $sBaseUrl . '&cf_coins_filter=add_coin', 'active' => 'add_coin' == bx_get('cf_coins_filter')),
            _t('_cf_coins_block_submenu_manage_coins') => array('href' => $sBaseUrl . '&cf_coins_filter=manage_coins', 'active' => 'manage_coins' == bx_get('cf_coins_filter')),
            _t('_cf_coins_block_submenu_pending_coins') => array('href' => $sBaseUrl . '&cf_coins_filter=pending_coins', 'active' => 'pending_coins' == bx_get('cf_coins_filter')),
        );
        return array($sContent, $aMenu, '', '');
    }

    function getBlockCode_Browse()
    {
        cf_coins_import ('SearchResult');
        $o = new CfCoinsSearchResult('user', process_db_input ($this->_aProfile['NickName'], BX_TAGS_NO_ACTION, BX_SLASHES_NO_ACTION));
        $o->aCurrent['rss'] = 0;

        $o->sBrowseUrl = "browse/my";
        $o->aCurrent['title'] = _t('_cf_coins_page_title_my_coins');

        if ($o->isError) {
            return DesignBoxContent(_t('_cf_coins_block_users_coins'), MsgBox(_t('_Empty')), 1);
        }

        if ($s = $o->processing()) {
            $this->_oTemplate->addCss (array('unit.css', 'twig.css', 'main.css'));
            return $s;
        } else {
            return DesignBoxContent(_t('_cf_coins_block_users_coins'), MsgBox(_t('_Empty')), 1);
        }
    }

    function getBlockCode_Main()
    {
        $iActive = $this->_oDb->getCountByAuthorAndStatus($this->_aProfile['ID'], 'approved');
        $iPending = $this->_oDb->getCountByAuthorAndStatus($this->_aProfile['ID'], 'pending');
        $sBaseUrl = BX_DOL_URL_ROOT . $this->_oConfig->getBaseUri() . "browse/my";
        $aVars = array ('msg' => '');
        if ($iPending)
            $aVars['msg'] = sprintf(_t('_cf_coins_msg_you_have_pending_approval_coins'), $sBaseUrl . '&cf_coins_filter=pending_coins', $iPending);
        elseif (!$iActive)
            $aVars['msg'] = sprintf(_t('_cf_coins_msg_you_have_no_coins'), $sBaseUrl . '&cf_coins_filter=add_coin');
        else
            $aVars['msg'] = sprintf(_t('_cf_coins_msg_you_have_some_coins'), $sBaseUrl . '&cf_coins_filter=manage_coins', $iActive, $sBaseUrl . '&cf_coins_filter=add_coin');
        return $this->_oTemplate->parseHtmlByName('my_coins_main', $aVars);
    }

    function getBlockCode_Add()
    {
        if (!$this->_oMain->isAllowedAdd()) {
            return MsgBox(_t('_Access denied'));
        }
        ob_start();
        $this->_oMain->_addForm(BX_DOL_URL_ROOT . $this->_oConfig->getBaseUri() . 'browse/my');
        $aVars = array ('form' => ob_get_clean(), 'id' => '');
        $this->_oTemplate->addCss ('forms_extra.css');
        return $this->_oTemplate->parseHtmlByName('my_coins_create_coin', $aVars);
    }

    function getBlockCode_Pending()
    {
        $sForm = $this->_oMain->_manageEntries ('my_pending', '', false, 'cf_coins_pending_user_form', array(
            'action_delete' => '_cf_coins_admin_delete',
        ), 'cf_coins_my_pending', false, 7);
        if (!$sForm)
            return MsgBox(_t('_Empty'));
        $aVars = array ('form' => $sForm, 'id' => 'cf_coins_my_pending');
        return $this->_oTemplate->parseHtmlByName('my_coins_manage', $aVars);
    }

    function getBlockCode_My()
    {
        $sForm = $this->_oMain->_manageEntries ('user', process_db_input ($this->_aProfile['NickName'], BX_TAGS_NO_ACTION, BX_SLASHES_NO_ACTION), false, 'cf_coins_user_form', array(
            'action_delete' => '_cf_coins_admin_delete',
        ), 'cf_coins_my_active', true, 7);
        $aVars = array ('form' => $sForm, 'id' => 'cf_coins_my_active');
        return $this->_oTemplate->parseHtmlByName('my_coins_manage', $aVars);
    }
}
