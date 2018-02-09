<?php
/**
 * Copyright (c) CCFTechSpot Pty Limited - http://www.cryptosconnect.cf/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

function cf_coins_import ($sClassPostfix, $aModuleOverwright = array())
{
    global $aModule;
    $a = $aModuleOverwright ? $aModuleOverwright : $aModule;
    if (!$a || $a['uri'] != 'coins') {
        $oMain = BxDolModule::getInstance('CfCoinsModule');
        $a = $oMain->_aModule;
    }
    cf_import ($sClassPostfix, $a) ;
}

cf_import('BxDolPaginate');
cf_import('BxDolAlerts');
cf_import('BxDolTwigModule');

define ('BX_COINS_PHOTOS_CAT', 'Coins');
define ('BX_COINS_PHOTOS_TAG', 'coins');

define ('BX_COINS_VIDEOS_CAT', 'Coins');
define ('BX_COINS_VIDEOS_TAG', 'coins');

define ('BX_COINS_SOUNDS_CAT', 'Coins');
define ('BX_COINS_SOUNDS_TAG', 'coins');

define ('BX_COINS_FILES_CAT', 'Coins');
define ('BX_COINS_FILES_TAG', 'coins');

define ('BX_COINS_MAX_FANS', 1000);

/**
 * Coins module
 *
 * This module allow users to create user's coins,
 * users can rate, comment and discuss coin.
 * Coin can have photos, videos, sounds and files, uploaded
 * by coin's fans and/or admins.
 *
 *
 *
 * Profile's Wall:
 * 'add coin' event is displayed in profile's wall
 *
 *
 *
 * Spy:
 * The following activity is displayed for content_activity:
 * add - new coin was created
 * change - coin was changed
 * join - somebody joined coin
 * rate - somebody rated coin
 * commentPost - somebody posted comment in coin
 *
 *
 *
 * Memberships/ACL:
 * coins view coin - BX_COINS_VIEW_COIN
 * coins browse - BX_COINS_BROWSE
 * coins search - BX_COINS_SEARCH
 * coins add coin - BX_COINS_ADD_COIN
 * coins comments delete and edit - BX_COINS_COMMENTS_DELETE_AND_EDIT
 * coins edit any coin - BX_COINS_EDIT_ANY_COIN
 * coins delete any coin - BX_COINS_DELETE_ANY_COIN
 * coins mark as featured - BX_COINS_MARK_AS_FEATURED
 * coins approve coins - BX_COINS_APPROVE_COINS
 * coins broadcast message - BX_COINS_BROADCAST_MESSAGE
 *
 *
 *
 * Service methods:
 *
 * Homepage block with different coins
 * @see CfCoinsModule::serviceHomepageBlock
 * BxDolService::call('coins', 'homepage_block', array());
 *
 * Profile block with user's coins
 * @see CfCoinsModule::serviceProfileBlock
 * BxDolService::call('coins', 'profile_block', array($iProfileId));
 *
 * Coin's forum permissions (for internal usage only)
 * @see CfCoinsModule::serviceGetForumPermission
 * BxDolService::call('coins', 'get_forum_permission', array($iMemberId, $iForumId));
 *
 * Member menu item for my coins (for internal usage only)
 * @see CfCoinsModule::serviceGetMemberMenuItem
 * BxDolService::call('coins', 'get_member_menu_item');
 *
 * Member menu item for coin adding (for internal usage only)
 * @see CfCoinsModule::serviceGetMemberMenuItemAddContent
 * BxDolService::call('coins', 'get_member_menu_item_add_content');
 *
 *
 *
 * Alerts:
 * Alerts type/unit - 'cf_coins'
 * The following alerts are rised
 *
 *  join - user joined a coin
 *      $iObjectId - coin id
 *      $iSenderId - joined user
 *
 *  join_request - user want to join a coin
 *      $iObjectId - coin id
 *      $iSenderId - user id which want to join a coin
 *
 *  join_reject - user was rejected to join a coin
 *      $iObjectId - coin id
 *      $iSenderId - regected user id
 *
 *  fan_remove - fan was removed from a coin
 *      $iObjectId - coin id
 *      $iSenderId - fan user if which was removed from admins
 *
 *  fan_become_admin - fan become coin's admin
 *      $iObjectId - coin id
 *      $iSenderId - nerw coin's fan user id
 *
 *  admin_become_fan - coin's admin become regular fan
 *      $iObjectId - coin id
 *      $iSenderId - coin's admin user id which become regular fan
 *
 *  join_confirm - coin's admin confirmed join request
 *      $iObjectId - coin id
 *      $iSenderId - condirmed user id
 *
 *  add - new coin was added
 *      $iObjectId - coin id
 *      $iSenderId - creator of a coin
 *      $aExtras['Status'] - status of added coin
 *
 *  change - coin's info was changed
 *      $iObjectId - coin id
 *      $iSenderId - editor user id
 *      $aExtras['Status'] - status of changed coin
 *
 *  delete - coin was deleted
 *      $iObjectId - coin id
 *      $iSenderId - deleter user id
 *
 *  mark_as_featured - coin was marked/unmarked as featured
 *      $iObjectId - coin id
 *      $iSenderId - performer id
 *      $aExtras['Featured'] - 1 - if coin was marked as featured and 0 - if coin was removed from featured
 *
 */
class CfCoinsModule extends BxDolTwigModule
{
    var $_oPrivacy;
    var $_aQuickCache = array ();

    function CfCoinsModule(&$aModule)
    {
        parent::BxDolTwigModule($aModule);
        $this->_sFilterName = 'cf_coins_filter';
        $this->_sPrefix = 'cf_coins';

        cf_import ('Privacy', $aModule);
        $this->_oPrivacy = new CfCoinsPrivacy($this);

        $GLOBALS['oCfCoinsModule'] = &$this;
    }

    function actionHome ()
    {
        parent::_actionHome(_t('_cf_coins_page_title_home'));
    }

    function actionFiles ($sUri)
    {
        parent::_actionFiles ($sUri, _t('_cf_coins_page_title_files'));
    }

    function actionSounds ($sUri)
    {
        parent::_actionSounds ($sUri, _t('_cf_coins_page_title_sounds'));
    }

    function actionVideos ($sUri)
    {
        parent::_actionVideos ($sUri, _t('_cf_coins_page_title_videos'));
    }

    function actionPhotos ($sUri)
    {
        parent::_actionPhotos ($sUri, _t('_cf_coins_page_title_photos'));
    }

    function actionComments ($sUri)
    {
        parent::_actionComments ($sUri, _t('_cf_coins_page_title_comments'));
    }

    function actionBrowseFans ($sUri)
    {
        parent::_actionBrowseFans ($sUri, 'isAllowedViewFans', 'getFansBrowse', $this->_oDb->getParam('cf_coins_perpage_browse_fans'), 'browse_fans/', _t('_cf_coins_page_title_fans'));
    }

    function actionView ($sUri)
    {
        parent::_actionView ($sUri, _t('_cf_coins_msg_pending_approval'));
    }

    function actionUploadPhotos ($sUri)
    {
        parent::_actionUploadMedia ($sUri, 'isAllowedUploadPhotos', 'images', array ('images_choice', 'images_upload'), _t('_cf_coins_page_title_upload_photos'));
    }

    function actionUploadVideos ($sUri)
    {
        parent::_actionUploadMedia ($sUri, 'isAllowedUploadVideos', 'videos', array ('videos_choice', 'videos_upload'), _t('_cf_coins_page_title_upload_videos'));
    }

    function actionUploadSounds ($sUri)
    {
        parent::_actionUploadMedia ($sUri, 'isAllowedUploadSounds', 'sounds', array ('sounds_choice', 'sounds_upload'), _t('_cf_coins_page_title_upload_sounds'));
    }

    function actionUploadFiles ($sUri)
    {
        parent::_actionUploadMedia ($sUri, 'isAllowedUploadFiles', 'files', array ('files_choice', 'files_upload'), _t('_cf_coins_page_title_upload_files'));
    }

    function actionBroadcast ($iEntryId)
    {
        parent::_actionBroadcast ($iEntryId, _t('_cf_coins_page_title_broadcast'), _t('_cf_coins_msg_broadcast_no_recipients'), _t('_cf_coins_msg_broadcast_message_sent'));
    }

    function actionInvite ($iEntryId)
    {
        parent::_actionInvite ($iEntryId, 'cf_coins_invitation', $this->_oDb->getParam('cf_coins_max_email_invitations'), _t('_cf_coins_msg_invitation_sent'), _t('_cf_coins_msg_no_users_to_invite'), _t('_cf_coins_page_title_invite'));
    }

    function _getInviteParams ($aDataEntry, $aInviter)
    {
        return array (
                'CoinName' => $aDataEntry['title'],
                'CoinLocation' => _t($GLOBALS['aPreValues']['Country'][$aDataEntry['country']]['LKey']) . (trim($aDataEntry['city']) ? ', '.$aDataEntry['city'] : '') . ', ' . $aDataEntry['zip'],
                'CoinUrl' => BX_DOL_URL_ROOT . $this->_oConfig->getBaseUri() . 'view/' . $aDataEntry['uri'],
                'InviterUrl' => $aInviter ? getProfileLink($aInviter['ID']) : 'javascript:void(0);',
                'InviterNickName' => $aInviter ? getNickName($aInviter['ID']) : _t('_cf_coins_user_unknown'),
                'InvitationText' => nl2br(process_pass_data(strip_tags($_POST['inviter_text']))),
            );
    }

    function actionCalendar ($iYear = '', $iMonth = '')
    {
        parent::_actionCalendar ($iYear, $iMonth, _t('_cf_coins_page_title_calendar'));
    }

    function actionSearch ($sKeyword = '', $sCategory = '')
    {
        parent::_actionSearch ($sKeyword, $sCategory, _t('_cf_coins_page_title_search'));
    }

    function actionAdd ()
    {
        parent::_actionAdd (_t('_cf_coins_page_title_add'));
    }

    function actionEdit ($iEntryId)
    {
        parent::_actionEdit ($iEntryId, _t('_cf_coins_page_title_edit'));
    }

    function actionDelete ($iEntryId)
    {
        parent::_actionDelete ($iEntryId, _t('_cf_coins_msg_coin_was_deleted'));
    }

    function actionMarkFeatured ($iEntryId)
    {
        parent::_actionMarkFeatured ($iEntryId, _t('_cf_coins_msg_added_to_featured'), _t('_cf_coins_msg_removed_from_featured'));
    }

    function actionJoin ($iEntryId, $iProfileId)
    {
        parent::_actionJoin ($iEntryId, $iProfileId, _t('_cf_coins_msg_joined_already'), _t('_cf_coins_msg_joined_request_pending'), _t('_cf_coins_msg_join_success'), _t('_cf_coins_msg_join_success_pending'), _t('_cf_coins_msg_leave_success'));
    }

    function actionSharePopup ($iEntryId)
    {
        parent::_actionSharePopup ($iEntryId, _t('_cf_coins_caption_share_coin'));
    }

    function actionManageFansPopup ($iEntryId)
    {
        parent::_actionManageFansPopup ($iEntryId, _t('_cf_coins_caption_manage_fans'), 'getFans', 'isAllowedManageFans', 'isAllowedManageAdmins', BX_COINS_MAX_FANS);
    }

    function actionTags()
    {
        parent::_actionTags (_t('_cf_coins_page_title_tags'));
    }

    function actionCategories()
    {
        parent::_actionCategories (_t('_cf_coins_page_title_categories'));
    }

    function actionDownload ($iEntryId, $iMediaId)
    {
        $aFileInfo = $this->_oDb->getMedia ((int)$iEntryId, (int)$iMediaId, 'files');

        if (!$aFileInfo || !($aDataEntry = $this->_oDb->getEntryByIdAndOwner((int)$iEntryId, 0, true))) {
            $this->_oTemplate->displayPageNotFound ();
            exit;
        }

        if (!$this->isAllowedView ($aDataEntry)) {
            $this->_oTemplate->displayAccessDenied ();
            exit;
        }

        parent::_actionDownload($aFileInfo, 'media_id');
    }

    // ================================== external actions

    /**
     * Homepage block with different coins
     * @return html to display on homepage in a block
     */
    function serviceHomepageBlock ()
    {
        if (!$this->_oDb->isAnyPublicContent())
            return '';

        cf_import ('PageMain', $this->_aModule);
        $o = new CfCoinsPageMain ($this);
        $o->sUrlStart = BX_DOL_URL_ROOT . '?';

        $sDefaultHomepageTab = $this->_oDb->getParam('cf_coins_homepage_default_tab');
        $sBrowseMode = $sDefaultHomepageTab;
        switch ($_GET['cf_coins_filter']) {
            case 'featured':
            case 'recent':
            case 'top':
            case 'popular':
            case $sDefaultHomepageTab:
                $sBrowseMode = $_GET['cf_coins_filter'];
                break;
        }

        return $o->ajaxBrowse(
            $sBrowseMode,
            $this->_oDb->getParam('cf_coins_perpage_homepage'),
            array(
                _t('_cf_coins_tab_featured') => array('href' => BX_DOL_URL_ROOT . '?cf_coins_filter=featured', 'active' => 'featured' == $sBrowseMode, 'dynamic' => true),
                _t('_cf_coins_tab_recent') => array('href' => BX_DOL_URL_ROOT . '?cf_coins_filter=recent', 'active' => 'recent' == $sBrowseMode, 'dynamic' => true),
                _t('_cf_coins_tab_top') => array('href' => BX_DOL_URL_ROOT . '?cf_coins_filter=top', 'active' => 'top' == $sBrowseMode, 'dynamic' => true),
                _t('_cf_coins_tab_popular') => array('href' => BX_DOL_URL_ROOT . '?cf_coins_filter=popular', 'active' => 'popular' == $sBrowseMode, 'dynamic' => true),
            )
        );
    }

    /**
     * Profile block with user's coins
     * @param $iProfileId profile id
     * @return html to display on homepage in a block
     */
    function serviceProfileBlock ($iProfileId)
    {
        $iProfileId = (int)$iProfileId;
        $aProfile = getProfileInfo($iProfileId);
        cf_import ('PageMain', $this->_aModule);
        $o = new CfCoinsPageMain ($this);
        $o->sUrlStart = getProfileLink($aProfile['ID']) . '?';

        return $o->ajaxBrowse(
            'user',
            $this->_oDb->getParam('cf_coins_perpage_profile'),
            array(),
            process_db_input ($aProfile['NickName'], BX_TAGS_NO_ACTION, BX_SLASHES_NO_ACTION),
            true,
            false
        );
    }

    /**
     * Profile block with coins user joined
     * @param $iProfileId profile id
     * @return html to display on homepage in a block
     */
    function serviceProfileBlockJoined ($iProfileId)
    {
        $iProfileId = (int)$iProfileId;
        $aProfile = getProfileInfo($iProfileId);
        cf_import ('PageMain', $this->_aModule);
        $o = new CfCoinsPageMain ($this);
        $o->sUrlStart = $_SERVER['PHP_SELF'] . '?' . cf_encode_url_params($_GET, array('page'));
        return $o->ajaxBrowse(
            'joined',
            $this->_oDb->getParam('cf_coins_perpage_profile'),
            array(),
            process_db_input ($aProfile['NickName'], BX_TAGS_NO_ACTION, BX_SLASHES_NO_ACTION),
            true,
            false
        );
    }

    function serviceGetMemberMenuItem ()
    {
        return parent::_serviceGetMemberMenuItem (_t('_cf_coins'), _t('_cf_coins'), 'users');
    }

    function serviceGetMemberMenuItemAddContent ()
    {
        if (!$this->isAllowedAdd())
            return '';
        return parent::_serviceGetMemberMenuItem (_t('_cf_coins_coin_single'), _t('_cf_coins_coin_single'), 'users', false, '&cf_coins_filter=add_coin');
    }

    function serviceGetWallPost ($aEvent)
    {
        $aParams = array(
        	'icon' => 'users',
            'txt_object' => '_cf_coins_wall_object',
            'txt_added_new_single' => '_cf_coins_wall_added_new',
        	'txt_added_new_title_single' => '_cf_coins_wall_added_new_title',
            'txt_added_new_plural' => '_cf_coins_wall_added_new_items',
        	'txt_added_new_title_plural' => '_cf_coins_wall_added_new_title_items',
            'txt_privacy_view_event' => 'view_coin',
            'obj_privacy' => $this->_oPrivacy,
        	'fields' => array(
                'owner' => 'author_id',
                'date' => 'created'
            )
        );
        return parent::_serviceGetWallPost ($aEvent, $aParams);
    }

	function serviceGetWallAddComment($aEvent)
    {
        $aParams = array(
            'txt_privacy_view_event' => 'view_coin',
            'obj_privacy' => $this->_oPrivacy
        );
        return parent::_serviceGetWallAddComment($aEvent, $aParams);
    }

    /**
     * DEPRICATED, saved for backward compatibility
     */
    function serviceGetWallPostComment($aEvent)
    {
        $aParams = array(
            'txt_privacy_view_event' => 'view_coin',
            'obj_privacy' => $this->_oPrivacy
        );
        return parent::_serviceGetWallPostComment($aEvent, $aParams);
    }

    function serviceGetWallPostOutline($aEvent)
    {
        $aParams = array(
            'txt_privacy_view_event' => 'view_coin',
            'obj_privacy' => $this->_oPrivacy,
            'templates' => array(
                'coined' => 'wall_outline_coined'
            )
        );
        return parent::_serviceGetWallPostOutline($aEvent, 'users', $aParams);
    }

    function serviceGetSpyPost($sAction, $iObjectId = 0, $iSenderId = 0, $aExtraParams = array())
    {
        return parent::_serviceGetSpyPost($sAction, $iObjectId, $iSenderId, $aExtraParams, array(
            'add' => '_cf_coins_spy_post',
            'change' => '_cf_coins_spy_post_change',
            'join' => '_cf_coins_spy_join',
            'rate' => '_cf_coins_spy_rate',
            'commentPost' => '_cf_coins_spy_comment',
        ));
    }

    function serviceGetSubscriptionParams ($sAction, $iEntryId)
    {
        $a = array (
            'change' => _t('_cf_coins_sbs_change'),
            'commentPost' => _t('_cf_coins_sbs_comment'),
            'rate' => _t('_cf_coins_sbs_rate'),
            'join' => _t('_cf_coins_sbs_join'),
        );

        return parent::_serviceGetSubscriptionParams ($sAction, $iEntryId, $a);
    }

    /**
     * Install map support
     */
    function serviceMapInstall()
    {
        if (!BxDolModule::getInstance('BxWmapModule'))
            return false;

        return BxDolService::call('wmap', 'part_install', array('coins', array(
            'part' => 'coins',
            'title' => '_cf_coins',
            'title_singular' => '_cf_coins_coin_single',
            'icon' => 'modules/ccf/coins/|map_marker.png',
            'icon_site' => 'users',
            'join_table' => 'cf_coins_main',
            'join_where' => "AND `p`.`status` = 'approved'",
            'join_field_id' => 'id',
            'join_field_country' => 'country',
            'join_field_city' => 'city',
            'join_field_state' => '',
            'join_field_zip' => 'zip',
            'join_field_address' => '',
            'join_field_title' => 'title',
            'join_field_uri' => 'uri',
            'join_field_author' => 'author_id',
            'join_field_privacy' => 'allow_view_coin_to',
            'permalink' => 'modules/?r=coins/view/',
        )));
    }

    // ================================== admin actions

    function actionAdministration ($sUrl = '')
    {
        if (!$this->isAdmin()) {
            $this->_oTemplate->displayAccessDenied ();
            return;
        }

        $this->_oTemplate->pageStart();

        $aMenu = array(
            'pending_approval' => array(
                'title' => _t('_cf_coins_menu_admin_pending_approval'),
                'href' => BX_DOL_URL_ROOT . $this->_oConfig->getBaseUri() . 'administration/pending_approval',
                '_func' => array ('name' => 'actionAdministrationManage', 'params' => array(false, 'administration/pending_approval')),
            ),
            'admin_entries' => array(
                'title' => _t('_cf_coins_menu_admin_entries'),
                'href' => BX_DOL_URL_ROOT . $this->_oConfig->getBaseUri() . 'administration/admin_entries',
                '_func' => array ('name' => 'actionAdministrationManage', 'params' => array(true, 'administration/admin_entries')),
            ),
            'create' => array(
                'title' => _t('_cf_coins_menu_admin_add_entry'),
                'href' => BX_DOL_URL_ROOT . $this->_oConfig->getBaseUri() . 'administration/create',
                '_func' => array ('name' => 'actionAdministrationCreateEntry', 'params' => array()),
            ),
            'settings' => array(
                'title' => _t('_cf_coins_menu_admin_settings'),
                'href' => BX_DOL_URL_ROOT . $this->_oConfig->getBaseUri() . 'administration/settings',
                '_func' => array ('name' => 'actionAdministrationSettings', 'params' => array()),
            ),
        );

        if (empty($aMenu[$sUrl]))
            $sUrl = 'pending_approval';

        $aMenu[$sUrl]['active'] = 1;
        $sContent = call_user_func_array (array($this, $aMenu[$sUrl]['_func']['name']), $aMenu[$sUrl]['_func']['params']);

        echo $this->_oTemplate->adminBlock ($sContent, _t('_cf_coins_page_title_administration'), $aMenu);
        $this->_oTemplate->addCssAdmin (array('admin.css', 'unit.css', 'twig.css', 'main.css', 'forms_extra.css', 'forms_adv.css'));
        $this->_oTemplate->pageCodeAdmin (_t('_cf_coins_page_title_administration'));
    }

    function actionAdministrationSettings ()
    {
        return parent::_actionAdministrationSettings ('Coins');
    }

    function actionAdministrationManage ($isAdminEntries = false, $sUrl = '')
    {
        return parent::_actionAdministrationManage ($isAdminEntries, '_cf_coins_admin_delete', '_cf_coins_admin_activate', $sUrl);
    }

    // ================================== events


    function onEventJoinRequest ($iEntryId, $iProfileId, $aDataEntry)
    {
        parent::_onEventJoinRequest ($iEntryId, $iProfileId, $aDataEntry, 'cf_coins_join_request', BX_COINS_MAX_FANS);
    }

    function onEventJoinReject ($iEntryId, $iProfileId, $aDataEntry)
    {
        parent::_onEventJoinReject ($iEntryId, $iProfileId, $aDataEntry, 'cf_coins_join_reject');
    }

    function onEventFanRemove ($iEntryId, $iProfileId, $aDataEntry)
    {
        parent::_onEventFanRemove ($iEntryId, $iProfileId, $aDataEntry, 'cf_coins_fan_remove');
    }

    function onEventFanBecomeAdmin ($iEntryId, $iProfileId, $aDataEntry)
    {
        parent::_onEventFanBecomeAdmin ($iEntryId, $iProfileId, $aDataEntry, 'cf_coins_fan_become_admin');
    }

    function onEventAdminBecomeFan ($iEntryId, $iProfileId, $aDataEntry)
    {
        parent::_onEventAdminBecomeFan ($iEntryId, $iProfileId, $aDataEntry, 'cf_coins_admin_become_fan');
    }

    function onEventJoinConfirm ($iEntryId, $iProfileId, $aDataEntry)
    {
        parent::_onEventJoinConfirm ($iEntryId, $iProfileId, $aDataEntry, 'cf_coins_join_confirm');
    }

    // ================================== permissions

    function isAllowedView ($aDataEntry, $isPerformAction = false)
    {
        // admin and owner always have access
        if ($this->isAdmin() || $aDataEntry['author_id'] == $this->_iProfileId)
            return true;

        // check admin acl
        $this->_defineActions();
        $aCheck = checkAction($this->_iProfileId, BX_COINS_VIEW_COIN, $isPerformAction);
        if ($aCheck[CHECK_ACTION_RESULT] != CHECK_ACTION_RESULT_ALLOWED)
            return false;

        // check user coin
        return $this->_oPrivacy->check('view_coin', $aDataEntry['id'], $this->_iProfileId);
    }

    function isAllowedBrowse ($isPerformAction = false)
    {
        if ($this->isAdmin())
            return true;
        $this->_defineActions();
        $aCheck = checkAction($this->_iProfileId, BX_COINS_BROWSE, $isPerformAction);
        return $aCheck[CHECK_ACTION_RESULT] == CHECK_ACTION_RESULT_ALLOWED;
    }

    function isAllowedSearch ($isPerformAction = false)
    {
        if ($this->isAdmin())
            return true;
        $this->_defineActions();
        $aCheck = checkAction($this->_iProfileId, BX_COINS_SEARCH, $isPerformAction);
        return $aCheck[CHECK_ACTION_RESULT] == CHECK_ACTION_RESULT_ALLOWED;
    }

    function isAllowedAdd ($isPerformAction = false)
    {
        if ($this->isAdmin())
            return true;
        if (!$GLOBALS['logged']['member'])
            return false;
        $this->_defineActions();
        $aCheck = checkAction($this->_iProfileId, BX_COINS_ADD_COIN, $isPerformAction);
        return $aCheck[CHECK_ACTION_RESULT] == CHECK_ACTION_RESULT_ALLOWED;
    }

    function isAllowedEdit ($aDataEntry, $isPerformAction = false)
    {
        if ($this->isAdmin() || ($GLOBALS['logged']['member'] && $aDataEntry['author_id'] == $this->_iProfileId && isProfileActive($this->_iProfileId)))
            return true;

        // check acl
        $this->_defineActions();
        $aCheck = checkAction($this->_iProfileId, BX_COINS_EDIT_ANY_COIN, $isPerformAction);
        return $aCheck[CHECK_ACTION_RESULT] == CHECK_ACTION_RESULT_ALLOWED;
    }

    function isAllowedMarkAsFeatured ($aDataEntry, $isPerformAction = false)
    {
        if ($this->isAdmin())
            return true;
        $this->_defineActions();
        $aCheck = checkAction($this->_iProfileId, BX_COINS_MARK_AS_FEATURED, $isPerformAction);
        return $aCheck[CHECK_ACTION_RESULT] == CHECK_ACTION_RESULT_ALLOWED;
    }

    function isAllowedBroadcast ($aDataEntry, $isPerformAction = false)
    {
        if ($this->isAdmin() || $this->isEntryAdmin($aDataEntry))
            return true;
        $this->_defineActions();
        $aCheck = checkAction($this->_iProfileId, BX_COINS_BROADCAST_MESSAGE, $isPerformAction);
        return $aCheck[CHECK_ACTION_RESULT] == CHECK_ACTION_RESULT_ALLOWED;
    }

    function isAllowedDelete (&$aDataEntry, $isPerformAction = false)
    {
        if ($this->isAdmin() || ($GLOBALS['logged']['member'] && $aDataEntry['author_id'] == $this->_iProfileId && isProfileActive($this->_iProfileId)))
            return true;
        $this->_defineActions();
        $aCheck = checkAction($this->_iProfileId, BX_COINS_DELETE_ANY_COIN, $isPerformAction);
        return $aCheck[CHECK_ACTION_RESULT] == CHECK_ACTION_RESULT_ALLOWED;
    }

    function isAllowedActivate (&$aDataEntry, $isPerformAction = false)
    {
        if ($aDataEntry['status'] != 'pending')
            return false;
        if ($this->isAdmin())
            return true;
        $this->_defineActions();
        $aCheck = checkAction($this->_iProfileId, BX_COINS_APPROVE_COINS, $isPerformAction);
        return $aCheck[CHECK_ACTION_RESULT] == CHECK_ACTION_RESULT_ALLOWED;
    }

    function isAllowedJoin (&$aDataEntry)
    {
        if (!$this->_iProfileId)
            return false;
        return $this->_oPrivacy->check('join', $aDataEntry['id'], $this->_iProfileId);
    }

    function isAllowedSendInvitation (&$aDataEntry)
    {
        return $this->isAdmin() || $this->isEntryAdmin($aDataEntry) ? true : false;
    }

    function isAllowedShare (&$aDataEntry)
    {
    	if($aDataEntry['allow_view_coin_to'] != BX_DOL_PG_ALL)
    		return false;

        return true;
    }

    function isAllowedPostInForum(&$aDataEntry, $iProfileId = -1)
    {
        if (-1 == $iProfileId)
            $iProfileId = $this->_iProfileId;
        return $this->isAdmin() || $this->isEntryAdmin($aDataEntry) || $this->_oPrivacy->check('post_in_forum', $aDataEntry['id'], $iProfileId);
    }

    function isAllowedReadForum(&$aDataEntry, $iProfileId = -1)
    {
        if (-1 == $iProfileId)
            $iProfileId = $this->_iProfileId;
        return $this->isAdmin() || $this->isEntryAdmin($aDataEntry) || $this->_oPrivacy->check('view_forum', $aDataEntry['id'], $iProfileId);
    }

    function isAllowedRate(&$aDataEntry)
    {
        if ($this->isAdmin())
            return true;
        return $this->_oPrivacy->check('rate', $aDataEntry['id'], $this->_iProfileId);
    }

    function isAllowedComments(&$aDataEntry)
    {
        if ($this->isAdmin())
            return true;
        return $this->_oPrivacy->check('comment', $aDataEntry['id'], $this->_iProfileId);
    }

    function isAllowedViewFans(&$aDataEntry)
    {
        if ($this->isAdmin())
            return true;
        return $this->_oPrivacy->check('view_fans', $aDataEntry['id'], $this->_iProfileId);
    }

    function isAllowedUploadPhotos(&$aDataEntry)
    {
        if (!BxDolRequest::serviceExists('photos', 'perform_photo_upload', 'Uploader'))
            return false;
        if (!$this->_iProfileId)
            return false;
        if ($this->isAdmin())
            return true;
        if (!$this->isMembershipEnabledForImages())
            return false;
        return $this->_oPrivacy->check('upload_photos', $aDataEntry['id'], $this->_iProfileId);
    }

    function isAllowedUploadVideos(&$aDataEntry)
    {
        if (!BxDolRequest::serviceExists('videos', 'perform_video_upload', 'Uploader'))
            return false;
        if (!$this->_iProfileId)
            return false;
        if ($this->isAdmin())
            return true;
        if (!$this->isMembershipEnabledForVideos())
            return false;
        return $this->_oPrivacy->check('upload_videos', $aDataEntry['id'], $this->_iProfileId);
    }

    function isAllowedUploadSounds(&$aDataEntry)
    {
        if (!BxDolRequest::serviceExists('sounds', 'perform_music_upload', 'Uploader'))
            return false;
        if (!$this->_iProfileId)
            return false;
        if ($this->isAdmin())
            return true;
        if (!$this->isMembershipEnabledForSounds())
            return false;
        return $this->_oPrivacy->check('upload_sounds', $aDataEntry['id'], $this->_iProfileId);
    }

    function isAllowedUploadFiles(&$aDataEntry)
    {
        if (!BxDolRequest::serviceExists('files', 'perform_file_upload', 'Uploader'))
            return false;
        if (!$this->_iProfileId)
            return false;
        if ($this->isAdmin())
            return true;
        if (!$this->isMembershipEnabledForFiles())
            return false;
        return $this->_oPrivacy->check('upload_files', $aDataEntry['id'], $this->_iProfileId);
    }

    function isAllowedCreatorCommentsDeleteAndEdit (&$aDataEntry, $isPerformAction = false)
    {
        if ($this->isAdmin())
            return true;
        if (getParam('cf_coins_author_comments_admin') && $this->isEntryAdmin($aDataEntry))
            return true;
        $this->_defineActions();
        $aCheck = checkAction($this->_iProfileId, BX_COINS_COMMENTS_DELETE_AND_EDIT, $isPerformAction);
        return $aCheck[CHECK_ACTION_RESULT] == CHECK_ACTION_RESULT_ALLOWED;
    }

    function isAllowedManageAdmins($aDataEntry)
    {
        if (($GLOBALS['logged']['member'] || $GLOBALS['logged']['admin']) && $aDataEntry['author_id'] == $this->_iProfileId && isProfileActive($this->_iProfileId))
            return true;
        return false;
    }

    function isAllowedManageFans($aDataEntry)
    {
        return $this->isEntryAdmin($aDataEntry);
    }

    function isFan($aDataEntry, $iProfileId = 0, $isConfirmed = true)
    {
        if (!$iProfileId)
            $iProfileId = $this->_iProfileId;
        return $this->_oDb->isFan ($aDataEntry['id'], $iProfileId, $isConfirmed) ? true : false;
    }

    function isEntryAdmin($aDataEntry, $iProfileId = 0)
    {
        if (!$iProfileId)
            $iProfileId = $this->_iProfileId;
        if (($GLOBALS['logged']['member'] || $GLOBALS['logged']['admin']) && $aDataEntry['author_id'] == $iProfileId && isProfileActive($iProfileId))
            return true;
        return $this->_oDb->isGroupAdmin ($aDataEntry['id'], $iProfileId) && isProfileActive($iProfileId);
    }

    function _defineActions ()
    {
        defineMembershipActions(array('coins view coin', 'coins browse', 'coins search', 'coins add coin', 'coins comments delete and edit', 'coins edit any coin', 'coins delete any coin', 'coins mark as featured', 'coins approve coins', 'coins broadcast message'));
    }

    function _browseMy (&$aProfile)
    {
        parent::_browseMy ($aProfile, _t('_cf_coins_page_title_my_coins'));
    }

    function _formatLocation (&$aDataEntry, $isCountryLink = false, $isFlag = false)
    {
        $sFlag = $isFlag ? ' ' . genFlag($aDataEntry['country']) : '';
        $sCountry = _t($GLOBALS['aPreValues']['Country'][$aDataEntry['country']]['LKey']);
        if ($isCountryLink)
            $sCountry = '<a href="' . $this->_oConfig->getBaseUri() . 'browse/country/' . strtolower($country['Country']) . '">' . $sCountry . '</a>';
        return (trim($aDataEntry['city']) ? $aDataEntry['city'] . ', ' : '') . $sCountry . $sFlag;
    }

    function _formatSnippetTextForOutline($aEntryData)
    {
        return $this->_oTemplate->parseHtmlByName('wall_outline_extra_info', array(
            'desc' => $this->_formatSnippetText($aEntryData, 200),
            'location' => $this->_formatLocation($aEntryData, false, false),
            'fans_count' => $aEntryData['fans_count'],
        ));
    }
}
