<?php $mixedData=array (
  'browse_page' => 
  array (
    'Title' => 'All Members',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          37 => 
          array (
            'Func' => 'SearchedMembersBlock',
            'Content' => '',
            'Caption' => '_People',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          36 => 
          array (
            'Func' => 'SettingsBlock',
            'Content' => '',
            'Caption' => '_Browse',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_avatar_main' => 
  array (
    'Title' => 'Avatar',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          72 => 
          array (
            'Func' => 'Wide',
            'Content' => '',
            'Caption' => '_bx_ava_block_wide',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          71 => 
          array (
            'Func' => 'Tight',
            'Content' => '',
            'Caption' => '_bx_ava_block_tight',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_chat_plus' => 
  array (
    'Title' => 'Chat+',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          74 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'chat_plus\', \'chat_block\', array());',
            'Caption' => '_bx_chat_plus_chat',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_albums_my' => 
  array (
    'Title' => '',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          96 => 
          array (
            'Func' => 'add',
            'Content' => '',
            'Caption' => '_bx_photos_albums_add',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          95 => 
          array (
            'Func' => 'adminShort',
            'Content' => '',
            'Caption' => '_bx_photos_albums_admin',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          97 => 
          array (
            'Func' => 'adminFull',
            'Content' => '',
            'Caption' => '_bx_photos_albums_admin',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          98 => 
          array (
            'Func' => 'adminFullDisapproved',
            'Content' => '',
            'Caption' => '_bx_photos_albums_disapproved',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          99 => 
          array (
            'Func' => 'edit',
            'Content' => '',
            'Caption' => '_bx_photos_album_edit',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          100 => 
          array (
            'Func' => 'delete',
            'Content' => '',
            'Caption' => '_bx_photos_album_delete',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          101 => 
          array (
            'Func' => 'organize',
            'Content' => '',
            'Caption' => '_bx_photos_album_organize',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          102 => 
          array (
            'Func' => 'addObjects',
            'Content' => '',
            'Caption' => '_bx_photos_album_add_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          103 => 
          array (
            'Func' => 'manageObjects',
            'Content' => '',
            'Caption' => '_bx_photos_album_manage_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          104 => 
          array (
            'Func' => 'manageObjectsDisapproved',
            'Content' => '',
            'Caption' => '_bx_photos_album_manage_objects_disapproved',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          105 => 
          array (
            'Func' => 'manageObjectsPending',
            'Content' => '',
            'Caption' => '_bx_photos_album_manage_objects_pending',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          106 => 
          array (
            'Func' => 'adminAlbumShort',
            'Content' => '',
            'Caption' => '_bx_photos_album_main_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          107 => 
          array (
            'Func' => 'albumObjects',
            'Content' => '',
            'Caption' => '_bx_photos_album_objects',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          108 => 
          array (
            'Func' => 'my',
            'Content' => '',
            'Caption' => '_bx_photos_albums_my',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_albums_owner' => 
  array (
    'Title' => 'Photos Profile Albums',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          109 => 
          array (
            'Func' => 'ProfilePhotos',
            'Content' => '',
            'Caption' => '_bx_photos_photo_album_block',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          110 => 
          array (
            'Func' => 'Browse',
            'Content' => '',
            'Caption' => '_bx_photos_albums_owner',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          111 => 
          array (
            'Func' => 'Favorited',
            'Content' => '',
            'Caption' => '_bx_photos_favorited',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_album_view' => 
  array (
    'Title' => 'Photos View Album',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          90 => 
          array (
            'Func' => 'Objects',
            'Content' => '',
            'Caption' => '',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
          91 => 
          array (
            'Func' => 'Comments',
            'Content' => '',
            'Caption' => '_bx_photos_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          92 => 
          array (
            'Func' => 'Author',
            'Content' => '',
            'Caption' => '_bx_photos_author',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          93 => 
          array (
            'Func' => 'Info',
            'Content' => '',
            'Caption' => '_bx_photos_info_album',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          94 => 
          array (
            'Func' => 'Actions',
            'Content' => '',
            'Caption' => '_bx_photos_actions',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_crop' => 
  array (
    'Title' => 'Photos Crop Photo',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          114 => 
          array (
            'Func' => 'Crop',
            'Content' => '',
            'Caption' => '_bx_photos_crop',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_home' => 
  array (
    'Title' => 'Photos Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          83 => 
          array (
            'Func' => 'Cover',
            'Content' => '',
            'Caption' => '_bx_photos_cover',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          86 => 
          array (
            'Func' => 'LatestFile',
            'Content' => '',
            'Caption' => '_bx_photos_latest_file',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          87 => 
          array (
            'Func' => 'All',
            'Content' => '',
            'Caption' => '_bx_photos_public',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      3 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          88 => 
          array (
            'Func' => 'Calendar',
            'Content' => '',
            'Caption' => '_bx_photos_top_menu_calendar',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          84 => 
          array (
            'Func' => 'Albums',
            'Content' => '',
            'Caption' => '_bx_photos_albums',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          89 => 
          array (
            'Func' => 'Tags',
            'Content' => '',
            'Caption' => '_bx_photos_top_menu_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_rate' => 
  array (
    'Title' => 'Photos Rate',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          112 => 
          array (
            'Func' => 'RatedSet',
            'Content' => '',
            'Caption' => '_bx_photos_previous_rated',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          113 => 
          array (
            'Func' => 'RateObject',
            'Content' => '',
            'Caption' => '_bx_photos_rate_header',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'bx_photos_view' => 
  array (
    'Title' => 'Photos View Photo',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          75 => 
          array (
            'Func' => 'ViewFile',
            'Content' => '',
            'Caption' => '_bx_photos_view',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          76 => 
          array (
            'Func' => 'ViewComments',
            'Content' => '',
            'Caption' => '_bx_photos_comments',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          77 => 
          array (
            'Func' => 'FileAuthor',
            'Content' => '',
            'Caption' => '_bx_photos_author',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          78 => 
          array (
            'Func' => 'MainFileInfo',
            'Content' => '',
            'Caption' => '_bx_photos_info_main',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          79 => 
          array (
            'Func' => 'ActionList',
            'Content' => '',
            'Caption' => '_bx_photos_actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          80 => 
          array (
            'Func' => 'SocialSharing',
            'Content' => '',
            'Caption' => '_sys_block_title_social_sharing',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          81 => 
          array (
            'Func' => 'ViewAlbum',
            'Content' => '',
            'Caption' => '_bx_photos_album_photos_rest',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'categ_calendar' => 
  array (
    'Title' => 'Categories Calendar',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          60 => 
          array (
            'Func' => 'Calendar',
            'Content' => '',
            'Caption' => '_categ_caption_calendar',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          61 => 
          array (
            'Func' => 'CategoriesDate',
            'Content' => '',
            'Caption' => '_categ_caption_day',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'categ_module' => 
  array (
    'Title' => 'Categories Module',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          64 => 
          array (
            'Func' => 'Common',
            'Content' => '',
            'Caption' => '_categ_caption_common',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          65 => 
          array (
            'Func' => 'All',
            'Content' => '',
            'Caption' => '_categ_caption_all',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'categ_search' => 
  array (
    'Title' => 'Categories Search',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          62 => 
          array (
            'Func' => 'Form',
            'Content' => '',
            'Caption' => '_categ_caption_search_form',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 86400,
          ),
          63 => 
          array (
            'Func' => 'Founded',
            'Content' => '',
            'Caption' => '_categ_caption_founded',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'communicator_page' => 
  array (
    'Title' => 'Communicator',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          50 => 
          array (
            'Func' => 'Connections',
            'Content' => '',
            'Caption' => '_sys_cnts_bcpt_connections',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          51 => 
          array (
            'Func' => 'FriendRequests',
            'Content' => '',
            'Caption' => '_sys_cnts_bcpt_friend_requests',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'friends' => 
  array (
    'Title' => 'Friends',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          33 => 
          array (
            'Func' => 'Friends',
            'Content' => '',
            'Caption' => '_Member Friends',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          34 => 
          array (
            'Func' => 'FriendsRequests',
            'Content' => '',
            'Caption' => '_Member Friends Requests',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          35 => 
          array (
            'Func' => 'FriendsMutual',
            'Content' => '',
            'Caption' => '_Member Friends Mutual',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'index' => 
  array (
    'Title' => 'Homepage',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          121 => 
          array (
            'Func' => 'Echo',
            'Content' => '',
            'Caption' => '_HTML Block',
            'Visible' => 'non,memb',
            'DesignBox' => 11,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'join' => 
  array (
    'Title' => 'Join Page',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          48 => 
          array (
            'Func' => 'JoinForm',
            'Content' => '',
            'Caption' => '_Join_now',
            'Visible' => 'non',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'mail_page' => 
  array (
    'Title' => 'Mail Messages',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          38 => 
          array (
            'Func' => 'MailBox',
            'Content' => '',
            'Caption' => '_Mail box',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          39 => 
          array (
            'Func' => 'Contacts',
            'Content' => '',
            'Caption' => '_My contacts',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'mail_page_compose' => 
  array (
    'Title' => 'Mail Compose Message',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          42 => 
          array (
            'Func' => 'ComposeMessage',
            'Content' => '',
            'Caption' => '_COMPOSE_H',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          43 => 
          array (
            'Func' => 'Contacts',
            'Content' => '',
            'Caption' => '_My contacts',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'mail_page_view' => 
  array (
    'Title' => 'Mail View Message',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          40 => 
          array (
            'Func' => 'ViewMessage',
            'Content' => '',
            'Caption' => '_Mail box',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          41 => 
          array (
            'Func' => 'Archives',
            'Content' => '',
            'Caption' => '_Archive',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'member' => 
  array (
    'Title' => 'Account',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          14 => 
          array (
            'Func' => 'QuickLinks',
            'Content' => '',
            'Caption' => '_Quick Links',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          15 => 
          array (
            'Func' => 'FriendRequests',
            'Content' => '',
            'Caption' => '_sys_bcpt_member_friend_requests',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          16 => 
          array (
            'Func' => 'NewMessages',
            'Content' => '',
            'Caption' => '_sys_bcpt_member_new_messages',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          17 => 
          array (
            'Func' => 'AccountControl',
            'Content' => '',
            'Caption' => '_sys_bcpt_member_account_control',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'pedit' => 
  array (
    'Title' => 'Profile Edit',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          66 => 
          array (
            'Func' => 'Info',
            'Content' => '',
            'Caption' => '_edit_profile_info',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          67 => 
          array (
            'Func' => 'Privacy',
            'Content' => '',
            'Caption' => '_edit_profile_privacy',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          68 => 
          array (
            'Func' => 'Membership',
            'Content' => '',
            'Caption' => '_edit_profile_membership',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          73 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'avatar\', \'manage_avatars\', array ((int)$_REQUEST[\'ID\']));',
            'Caption' => '_bx_ava_manage_avatars',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'profile' => 
  array (
    'Title' => 'Profile',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          19 => 
          array (
            'Func' => 'Cover',
            'Content' => '',
            'Caption' => '_sys_bcpt_profile_cover',
            'Visible' => 'non,memb',
            'DesignBox' => 0,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          117 => 
          array (
            'Func' => 'PHP',
            'Content' => 'return BxDolService::call(\'photos\', \'get_profile_album_block\', array($this->oProfileGen->_iProfileID), \'Search\');',
            'Caption' => '_bx_photos_photo_album_block',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          20 => 
          array (
            'Func' => 'ActionsMenu',
            'Content' => '',
            'Caption' => '_Actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          21 => 
          array (
            'Func' => 'FriendRequest',
            'Content' => '',
            'Caption' => '_FriendRequest',
            'Visible' => 'memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          23 => 
          array (
            'Func' => 'PFBlock',
            'Content' => '21',
            'Caption' => '_FieldCaption_Admin Controls_View',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          24 => 
          array (
            'Func' => 'PFBlock',
            'Content' => '17',
            'Caption' => '_FieldCaption_General Info_View',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          25 => 
          array (
            'Func' => 'RateProfile',
            'Content' => '',
            'Caption' => '_rate profile',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      3 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          22 => 
          array (
            'Func' => 'Description',
            'Content' => '',
            'Caption' => '_Description',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'profile_info' => 
  array (
    'Title' => 'Profile Info',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          30 => 
          array (
            'Func' => 'GeneralInfo',
            'Content' => '',
            'Caption' => '_FieldCaption_General Info_View',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          32 => 
          array (
            'Func' => 'Description',
            'Content' => '',
            'Caption' => '_Description',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          31 => 
          array (
            'Func' => 'AdditionalInfo',
            'Content' => '',
            'Caption' => '_Additional information',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'profile_private' => 
  array (
    'Title' => 'Profile Private',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          69 => 
          array (
            'Func' => 'ActionsMenu',
            'Content' => '',
            'Caption' => '_Actions',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          70 => 
          array (
            'Func' => 'PrivacyExplain',
            'Content' => '',
            'Caption' => '_sys_profile_private_text_title',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'search' => 
  array (
    'Title' => 'Search Profiles',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          44 => 
          array (
            'Func' => 'Results',
            'Content' => '',
            'Caption' => '_Search result',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          45 => 
          array (
            'Func' => 'SearchForm',
            'Content' => '',
            'Caption' => '_Search profiles',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'search_home' => 
  array (
    'Title' => 'Search Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          46 => 
          array (
            'Func' => 'Keyword',
            'Content' => '',
            'Caption' => '_sys_box_title_search_keyword',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 86400,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          47 => 
          array (
            'Func' => 'People',
            'Content' => '',
            'Caption' => '_sys_box_title_search_people',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'tags_calendar' => 
  array (
    'Title' => 'Tags Search',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          54 => 
          array (
            'Func' => 'Calendar',
            'Content' => '',
            'Caption' => '_tags_calendar',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
          55 => 
          array (
            'Func' => 'TagsDate',
            'Content' => '',
            'Caption' => '_Tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'tags_home' => 
  array (
    'Title' => 'Tags Home',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          52 => 
          array (
            'Func' => 'Recent',
            'Content' => '',
            'Caption' => '_tags_recent',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          53 => 
          array (
            'Func' => 'Popular',
            'Content' => '',
            'Caption' => '_popular_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'tags_module' => 
  array (
    'Title' => 'Tags Module',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 28.10000000000000142108547152020037174224853515625,
        'Blocks' => 
        array (
          58 => 
          array (
            'Func' => 'Recent',
            'Content' => '',
            'Caption' => '_tags_recent',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
      2 => 
      array (
        'Width' => 71.900000000000005684341886080801486968994140625,
        'Blocks' => 
        array (
          59 => 
          array (
            'Func' => 'All',
            'Content' => '',
            'Caption' => '_all_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
  'tags_search' => 
  array (
    'Title' => 'Tags Calendar',
    'Width' => '1140px',
    'Columns' => 
    array (
      1 => 
      array (
        'Width' => 100,
        'Blocks' => 
        array (
          56 => 
          array (
            'Func' => 'Form',
            'Content' => '',
            'Caption' => '_tags_search_form',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 86400,
          ),
          57 => 
          array (
            'Func' => 'Founded',
            'Content' => '',
            'Caption' => '_tags_founded_tags',
            'Visible' => 'non,memb',
            'DesignBox' => 1,
            'Cache' => 0,
          ),
        ),
      ),
    ),
  ),
); ?>