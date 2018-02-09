<?php
/**
 * Copyright (c) BoonEx Pty Limited - http://www.ccf.com/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

bx_import('BxDolTwigPageMain');

class CfCoinsPageMain extends BxDolTwigPageMain
{
    function CfCoinsPageMain(&$oMain)
    {
        $this->sSearchResultClassName = 'CfCoinsSearchResult';
        $this->sFilterName = 'cf_coins_filter';
        parent::BxDolTwigPageMain('cf_coins_main', $oMain);
    }

    function getBlockCode_LatestFeaturedCoin()
    {
        $aDataEntry = $this->oDb->getLatestFeaturedItem ();
        if (!$aDataEntry)
            return false;

        $aAuthor = getProfileInfo($aDataEntry['author_id']);

        $sImageUrl = '';
        $sImageTitle = '';
        $a = array ('ID' => $aDataEntry['author_id'], 'Avatar' => $aDataEntry['thumb']);
        $aImage = BxDolService::call('photos', 'get_image', array($a, 'file'), 'Search');

        cf_coins_import('Voting');
        $oRating = new CfCoinsVoting ('cf_coins', $aDataEntry['id']);

        $aVars = array (
            'bx_if:image' => array (
                'condition' => !$aImage['no_image'] && $aImage['file'],
                'content' => array (
                    'image_url' => !$aImage['no_image'] && $aImage['file'] ? $aImage['file'] : '',
                    'image_title' => !$aImage['no_image'] && $aImage['title'] ? $aImage['title'] : '',
                    'coin_url' => BX_DOL_URL_ROOT . $this->oConfig->getBaseUri() . 'view/' . $aDataEntry['uri'],
                ),
            ),
            'coin_url' => BX_DOL_URL_ROOT . $this->oConfig->getBaseUri() . 'view/' . $aDataEntry['uri'],
            'coin_title' => $aDataEntry['title'],
            'author_title' => _t('_From'),
            'author_username' => getNickName($aAuthor['ID']),
            'author_url' => getProfileLink($aAuthor['ID']),
            'rating' => $oRating->isEnabled() ? $oRating->getJustVotingElement (true, $aDataEntry['id']) : '',
            'fans_count' => $aDataEntry['fans_count'],
            'country_city' => $this->oMain->_formatLocation($aDataEntry, false, true),
        );
        return $this->oTemplate->parseHtmlByName('latest_featured_coin', $aVars);
    }

    function getBlockCode_Recent()
    {
        return $this->ajaxBrowse('recent', $this->oDb->getParam('cf_coins_perpage_main_recent'));
    }
}
