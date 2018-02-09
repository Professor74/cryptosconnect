<?php
/**
 * Copyright (c) CCFTechSpot Pty Limited - http://www.cryptosconnect.cf/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

cf_import('BxDolProfileFields');

class CfCoinsFormSearch extends BxTemplFormView
{
    function CfCoinsFormSearch ()
    {
        cf_import('BxDolCategories');
        $oCategories = new BxDolCategories();
        $oCategories->getTagObjectConfig ();
        $aCategories = $oCategories->getCategoriesList('cf_coins', (int)$iProfileId, true);

        $aCustomForm = array(

            'form_attrs' => array(
                'name'     => 'form_search_coins',
                'action'   => '',
                'method'   => 'get',
            ),

            'params' => array (
                'db' => array(
                    'submit_name' => 'submit_form',
                ),
                'csrf' => array(
                    'disable' => true,
                ),
            ),

            'inputs' => array(
                'Keyword' => array(
                    'type' => 'text',
                    'name' => 'Keyword',
                    'caption' => _t('_cf_coins_form_caption_keyword'),
                    'required' => true,
                    'checker' => array (
                        'func' => 'length',
                        'params' => array(3,100),
                        'error' => _t ('_cf_coins_form_err_keyword'),
                    ),
                    'db' => array (
                        'pass' => 'Xss',
                    ),
                ),
                'Category' => array(
                    'type' => 'select_box',
                    'name' => 'Category',
                    'caption' => _t('_cf_coins_form_caption_category'),
                    'values' => $aCategories,
                    'required' => true,
                    'checker' => array (
                        'func' => 'avail',
                        'error' => _t ('_cf_coins_form_err_category'),
                    ),
                    'db' => array (
                        'pass' => 'Xss',
                    ),
                ),
                'Submit' => array (
                    'type' => 'submit',
                    'name' => 'submit_form',
                    'value' => _t('_Submit'),
                    'colspan' => true,
                ),
            ),
        );

        parent::BxTemplFormView ($aCustomForm);
    }
}
