<?php $mixedData=array (
  'profile' => 
  array (
    'table_rating' => 'sys_profile_rating',
    'table_track' => 'sys_profile_voting_track',
    'row_prefix' => 'pr_',
    'max_votes' => '5',
    'post_name' => 'vote_send_result',
    'is_duplicate' => 604800,
    'is_on' => '1',
    'className' => '',
    'classFile' => '',
    'trigger_table' => 'Profiles',
    'trigger_field_rate' => 'Rate',
    'trigger_field_rate_count' => 'RateCount',
    'trigger_field_id' => 'ID',
    'override_class_name' => '',
    'override_class_file' => '',
  ),
  'bx_photos' => 
  array (
    'table_rating' => 'bx_photos_rating',
    'table_track' => 'bx_photos_voting_track',
    'row_prefix' => 'gal_',
    'max_votes' => '5',
    'post_name' => 'vote_send_result',
    'is_duplicate' => 604800,
    'is_on' => '1',
    'className' => 'BxPhotosRate',
    'classFile' => 'modules/boonex/photos/classes/BxPhotosRate.php',
    'trigger_table' => 'bx_photos_main',
    'trigger_field_rate' => 'Rate',
    'trigger_field_rate_count' => 'RateCount',
    'trigger_field_id' => 'ID',
    'override_class_name' => '',
    'override_class_file' => '',
  ),
); ?>