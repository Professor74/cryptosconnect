<?php $mixedData=array (
  'mma' => 
  array (
    'Type' => 'mma',
    'SQL' => 'SELECT COUNT(*) FROM `sys_messages` WHERE `Recipient`=\'__member_id__\' AND NOT FIND_IN_SET(\'Recipient\', `sys_messages`.`Trash`)',
  ),
  'mmn' => 
  array (
    'Type' => 'mmn',
    'SQL' => 'SELECT COUNT(*) FROM `sys_messages` WHERE `Recipient`=\'__member_id__\' AND `New`=\'1\' AND NOT FIND_IN_SET(\'Recipient\', `sys_messages`.`Trash`)',
  ),
  'mfl' => 
  array (
    'Type' => 'mfl',
    'SQL' => 'SELECT COUNT(*) FROM `sys_fave_list` WHERE `ID` = \'__member_id__\' ',
  ),
  'mfr' => 
  array (
    'Type' => 'mfr',
    'SQL' => 'SELECT COUNT(*) FROM `sys_friend_list` as f LEFT JOIN `Profiles` as p ON p.`ID` = f.`ID` WHERE f.`Profile` = __member_id__ AND f.`Check` = \'0\' AND p.`Status`=\'Active\'',
  ),
  'mfa' => 
  array (
    'Type' => 'mfa',
    'SQL' => 'SELECT COUNT(*) FROM `sys_friend_list` WHERE ( `ID`=\'__member_id__\' OR `Profile`=\'__member_id__\' ) AND `Check`=\'1\'',
  ),
  'mgc' => 
  array (
    'Type' => 'mgc',
    'SQL' => 'SELECT COUNT(*) FROM `sys_greetings` WHERE `ID` = \'__member_id__\' AND New = \'1\'',
  ),
  'mbc' => 
  array (
    'Type' => 'mbc',
    'SQL' => 'SELECT COUNT(*) FROM `sys_block_list` WHERE `ID` = \'__member_id__\'',
  ),
  'mgmc' => 
  array (
    'Type' => 'mgmc',
    'SQL' => 'SELECT COUNT(*) FROM `sys_greetings` WHERE `Profile` = \'__member_id__\' AND New = \'1\'',
  ),
  'phs' => 
  array (
    'Type' => 'phs',
    'SQL' => 'SELECT COUNT(*) FROM `bx_photos_main` WHERE `Owner` = \'__member_id__\' AND `Status` = \'approved\'',
  ),
); ?>