<?php $mixedData=array (
  'alerts' => 
  array (
    'system' => 
    array (
      'begin' => 
      array (
        0 => '1',
      ),
      'join_after_payment' => 
      array (
        0 => '7',
      ),
    ),
    'profile' => 
    array (
      'before_join' => 
      array (
        0 => '2',
      ),
      'join' => 
      array (
        0 => '2',
        1 => '3',
        2 => '4',
        3 => '7',
      ),
      'before_login' => 
      array (
        0 => '2',
      ),
      'login' => 
      array (
        0 => '2',
      ),
      'logout' => 
      array (
        0 => '2',
        1 => '7',
      ),
      'edit' => 
      array (
        0 => '2',
        1 => '3',
        2 => '4',
      ),
      'delete' => 
      array (
        0 => '2',
        1 => '3',
        2 => '4',
        3 => '6',
        4 => '7',
        5 => '8',
      ),
      'change_status' => 
      array (
        0 => '4',
      ),
      'commentRemoved' => 
      array (
        0 => '5',
      ),
    ),
  ),
  'handlers' => 
  array (
    1 => 
    array (
      'class' => 'BxDolAlertsResponseSystem',
      'file' => 'inc/classes/BxDolAlertsResponseSystem.php',
      'eval' => '',
    ),
    2 => 
    array (
      'class' => 'BxDolAlertsResponseProfile',
      'file' => 'inc/classes/BxDolAlertsResponseProfile.php',
      'eval' => '',
    ),
    3 => 
    array (
      'class' => 'BxDolUpdateMembersCache',
      'file' => 'inc/classes/BxDolUpdateMembersCache.php',
      'eval' => '',
    ),
    4 => 
    array (
      'class' => 'BxDolAlertsResponceMatch',
      'file' => 'inc/classes/BxDolAlertsResponceMatch.php',
      'eval' => '',
    ),
    5 => 
    array (
      'class' => 'BxDolVideoDeleteResponse',
      'file' => 'flash/modules/video_comments/inc/classes/BxDolVideoDeleteResponse.php',
      'eval' => '',
    ),
    6 => 
    array (
      'class' => 'BxAvaProfileDeleteResponse',
      'file' => 'modules/boonex/avatar/classes/BxAvaProfileDeleteResponse.php',
      'eval' => '',
    ),
    7 => 
    array (
      'class' => 'BxFaceBookConnectAlerts',
      'file' => 'modules/boonex/facebook_connect/classes/BxFaceBookConnectAlerts.php',
      'eval' => '',
    ),
    8 => 
    array (
      'class' => '',
      'file' => '',
      'eval' => 'BxDolService::call(\'photos\', \'response_profile_delete\', array($this));',
    ),
  ),
); ?>