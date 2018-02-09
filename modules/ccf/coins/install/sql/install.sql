-- create tables
CREATE TABLE IF NOT EXISTS `[db_prefix]main` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `title` varchar(100) NOT NULL default '',
  `uri` varchar(255) NOT NULL,
  `desc` text NOT NULL,
  `country` varchar(2) NOT NULL,
  `city` varchar(64) NOT NULL,
  `zip` varchar(16) NOT NULL,
  `status` enum('approved','pending') NOT NULL default 'approved',
  `thumb` int(11) NOT NULL,
  `created` int(11) NOT NULL,
  `author_id` int(10) unsigned NOT NULL default '0',
  `tags` varchar(255) NOT NULL default '',
  `categories` text NOT NULL,
  `views` int(11) NOT NULL,
  `rate` float NOT NULL,
  `rate_count` int(11) NOT NULL,
  `comments_count` int(11) NOT NULL,
  `fans_count` int(11) NOT NULL,
  `featured` tinyint(4) NOT NULL,
  `allow_view_coin_to` int(11) NOT NULL,
  `allow_view_fans_to` varchar(16) NOT NULL,
  `allow_comment_to` varchar(16) NOT NULL,
  `allow_rate_to` varchar(16) NOT NULL,  
  `allow_post_in_forum_to` varchar(16) NOT NULL,
  `allow_view_forum_to` varchar(16) NOT NULL,
  `allow_join_to` int(11) NOT NULL,
  `join_confirmation` tinyint(4) NOT NULL default '0',
  `allow_upload_photos_to` varchar(16) NOT NULL,
  `allow_upload_videos_to` varchar(16) NOT NULL,
  `allow_upload_sounds_to` varchar(16) NOT NULL,
  `allow_upload_files_to` varchar(16) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uri` (`uri`),
  KEY `author_id` (`author_id`),
  KEY `created` (`created`),
  FULLTEXT KEY `search` (`title`,`desc`,`tags`,`categories`),
  FULLTEXT KEY `tags` (`tags`),
  FULLTEXT KEY `categories` (`categories`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `[db_prefix]fans` (
  `id_entry` int(10) unsigned NOT NULL,
  `id_profile` int(10) unsigned NOT NULL,
  `when` int(10) unsigned NOT NULL,
  `confirmed` tinyint(4) UNSIGNED NOT NULL default '0',
  PRIMARY KEY (`id_entry`, `id_profile`)
) ENGINE=MYISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `[db_prefix]admins` (
  `id_entry` int(10) unsigned NOT NULL,
  `id_profile` int(10) unsigned NOT NULL,
  `when` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id_entry`, `id_profile`)
) ENGINE=MYISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `[db_prefix]images` (
  `entry_id` int(10) unsigned NOT NULL,
  `media_id` int(10) unsigned NOT NULL,
  UNIQUE KEY `entry_id` (`entry_id`,`media_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `[db_prefix]videos` (
  `entry_id` int(10) unsigned NOT NULL,
  `media_id` int(11) NOT NULL,
  UNIQUE KEY `entry_id` (`entry_id`,`media_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `[db_prefix]sounds` (
  `entry_id` int(10) unsigned NOT NULL,
  `media_id` int(11) NOT NULL,
  UNIQUE KEY `entry_id` (`entry_id`,`media_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `[db_prefix]files` (
  `entry_id` int(10) unsigned NOT NULL,
  `media_id` int(11) NOT NULL,
  UNIQUE KEY `entry_id` (`entry_id`,`media_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `[db_prefix]rating` (
  `gal_id` smallint( 6 ) NOT NULL default '0',
  `gal_rating_count` int( 11 ) NOT NULL default '0',
  `gal_rating_sum` int( 11 ) NOT NULL default '0',
  UNIQUE KEY `gal_id` (`gal_id`)
) ENGINE=MYISAM DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `[db_prefix]rating_track` (
  `gal_id` smallint( 6 ) NOT NULL default '0',
  `gal_ip` varchar( 20 ) default NULL,
  `gal_date` datetime default NULL,
  KEY `gal_ip` (`gal_ip`, `gal_id`)
) ENGINE=MYISAM DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `[db_prefix]cmts` (
  `cmt_id` int( 11 ) NOT NULL AUTO_INCREMENT ,
  `cmt_parent_id` int( 11 ) NOT NULL default '0',
  `cmt_object_id` int( 12 ) NOT NULL default '0',
  `cmt_author_id` int( 10 ) unsigned NOT NULL default '0',
  `cmt_text` text NOT NULL ,
  `cmt_mood` tinyint( 4 ) NOT NULL default '0',
  `cmt_rate` int( 11 ) NOT NULL default '0',
  `cmt_rate_count` int( 11 ) NOT NULL default '0',
  `cmt_time` datetime NOT NULL default '0000-00-00 00:00:00',
  `cmt_replies` int( 11 ) NOT NULL default '0',
  PRIMARY KEY ( `cmt_id` ),
  KEY `cmt_object_id` (`cmt_object_id` , `cmt_parent_id`)
) ENGINE=MYISAM DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `[db_prefix]cmts_track` (
  `cmt_system_id` int( 11 ) NOT NULL default '0',
  `cmt_id` int( 11 ) NOT NULL default '0',
  `cmt_rate` tinyint( 4 ) NOT NULL default '0',
  `cmt_rate_author_id` int( 10 ) unsigned NOT NULL default '0',
  `cmt_rate_author_nip` int( 11 ) unsigned NOT NULL default '0',
  `cmt_rate_ts` int( 11 ) NOT NULL default '0',
  PRIMARY KEY (`cmt_system_id` , `cmt_id` , `cmt_rate_author_nip`)
) ENGINE=MYISAM DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `[db_prefix]views_track` (
  `id` int(10) unsigned NOT NULL,
  `viewer` int(10) unsigned NOT NULL,
  `ip` int(10) unsigned NOT NULL,
  `ts` int(10) unsigned NOT NULL,
  KEY `id` (`id`,`viewer`,`ip`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `[db_prefix]shoutbox` (
  `ID` int(10) unsigned NOT NULL auto_increment,
  `HandlerID` int(11) NOT NULL,
  `OwnerID` int(11) NOT NULL,
  `Message` blob NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `IP` int(10) unsigned NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `IP` (`IP`),
  KEY `HandlerID` (`HandlerID`)
) ENGINE=MyISAM;

-- create forum tables

CREATE TABLE `[db_prefix]forum` (
  `forum_id` int(10) unsigned NOT NULL auto_increment,
  `forum_uri` varchar(255) NOT NULL default '',
  `cat_id` int(11) NOT NULL default '0',
  `forum_title` varchar(255) default NULL,
  `forum_desc` varchar(255) NOT NULL default '',
  `forum_posts` int(11) NOT NULL default '0',
  `forum_topics` int(11) NOT NULL default '0',
  `forum_last` int(11) NOT NULL default '0',
  `forum_type` enum('public','private') NOT NULL default 'public',
  `forum_order` int(11) NOT NULL default '0',
  `entry_id` int(10) unsigned NOT NULL,
  PRIMARY KEY  (`forum_id`),
  KEY `cat_id` (`cat_id`),
  KEY `forum_uri` (`forum_uri`),
  KEY `entry_id` (`entry_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `[db_prefix]forum_cat` (
  `cat_id` int(10) unsigned NOT NULL auto_increment,
  `cat_uri` varchar(255) NOT NULL default '',
  `cat_name` varchar(255) default NULL,
  `cat_icon` varchar(32) NOT NULL default '',
  `cat_order` float NOT NULL default '0',
  `cat_expanded` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`cat_id`),
  KEY `cat_order` (`cat_order`),
  KEY `cat_uri` (`cat_uri`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `[db_prefix]forum_cat` (`cat_id`, `cat_uri`, `cat_name`, `cat_icon`, `cat_order`) VALUES 
(1, 'Coins', 'Coins', '', 64);

CREATE TABLE `[db_prefix]forum_flag` (
  `user` varchar(32) NOT NULL default '',
  `topic_id` int(11) NOT NULL default '0',
  `when` int(11) NOT NULL default '0',
  PRIMARY KEY  (`user`,`topic_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `[db_prefix]forum_post` (
  `post_id` int(10) unsigned NOT NULL auto_increment,
  `topic_id` int(11) NOT NULL default '0',
  `forum_id` int(11) NOT NULL default '0',
  `user` varchar(32) NOT NULL default '0',
  `post_text` mediumtext NOT NULL,
  `when` int(11) NOT NULL default '0',
  `votes` int(11) NOT NULL default '0',
  `reports` int(11) NOT NULL default '0',
  `hidden` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`post_id`),
  KEY `topic_id` (`topic_id`),
  KEY `forum_id` (`forum_id`),
  KEY `user` (`user`),
  KEY `when` (`when`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `[db_prefix]forum_topic` (
  `topic_id` int(10) unsigned NOT NULL auto_increment,
  `topic_uri` varchar(255) NOT NULL default '',
  `forum_id` int(11) NOT NULL default '0',
  `topic_title` varchar(255) NOT NULL default '',
  `when` int(11) NOT NULL default '0',
  `topic_posts` int(11) NOT NULL default '0',
  `first_post_user` varchar(32) NOT NULL default '0',
  `first_post_when` int(11) NOT NULL default '0',
  `last_post_user` varchar(32) NOT NULL default '',
  `last_post_when` int(11) NOT NULL default '0',
  `topic_sticky` int(11) NOT NULL default '0',
  `topic_locked` tinyint(4) NOT NULL default '0',
  `topic_hidden` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`topic_id`),
  KEY `forum_id` (`forum_id`),
  KEY `forum_id_2` (`forum_id`,`when`),
  KEY `topic_uri` (`topic_uri`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `[db_prefix]forum_user` (
  `user_name` varchar(32) NOT NULL default '',
  `user_pwd` varchar(32) NOT NULL default '',
  `user_email` varchar(128) NOT NULL default '',
  `user_join_date` int(11) NOT NULL default '0',
  PRIMARY KEY  (`user_name`),
  UNIQUE KEY `user_email` (`user_email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `[db_prefix]forum_user_activity` (
  `user` varchar(32) NOT NULL default '',
  `act_current` int(11) NOT NULL default '0',
  `act_last` int(11) NOT NULL default '0',
  PRIMARY KEY  (`user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `[db_prefix]forum_user_stat` (
  `user` varchar(32) NOT NULL default '',
  `posts` int(11) NOT NULL default '0',
  `user_last_post` int(11) NOT NULL default '0',
  KEY `user` (`user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `[db_prefix]forum_vote` (
  `user_name` varchar(32) NOT NULL default '',
  `post_id` int(11) NOT NULL default '0',
  `vote_when` int(11) NOT NULL default '0',
  `vote_point` tinyint(4) NOT NULL default '0',
  PRIMARY KEY  (`user_name`,`post_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `[db_prefix]forum_actions_log` (
  `user_name` varchar(32) NOT NULL default '',
  `id` int(11) NOT NULL default '0',
  `action_name` varchar(32) NOT NULL default '',
  `action_when` int(11) NOT NULL default '0',
  KEY `action_when` (`action_when`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `[db_prefix]forum_attachments` (
  `att_hash` char(16) COLLATE utf8_unicode_ci NOT NULL,
  `post_id` int(10) unsigned NOT NULL,
  `att_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `att_type` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `att_when` int(11) NOT NULL,
  `att_size` int(11) NOT NULL,
  `att_downloads` int(11) NOT NULL,
  PRIMARY KEY (`att_hash`),
  KEY `post_id` (`post_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `[db_prefix]forum_signatures` (
  `user` varchar(32) NOT NULL,
  `signature` varchar(255) NOT NULL,
  `when` int(11) NOT NULL,
  PRIMARY KEY (`user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- page compose pages
SET @iMaxOrder = (SELECT `Order` FROM `sys_page_compose_pages` ORDER BY `Order` DESC LIMIT 1);
INSERT INTO `sys_page_compose_pages` (`Name`, `Title`, `Order`) VALUES ('cf_coins_view', 'Coins View Coin', @iMaxOrder+1);
INSERT INTO `sys_page_compose_pages` (`Name`, `Title`, `Order`) VALUES ('cf_coins_celendar', 'Coins Calendar', @iMaxOrder+2);
INSERT INTO `sys_page_compose_pages` (`Name`, `Title`, `Order`) VALUES ('cf_coins_main', 'Coins Home', @iMaxOrder+3);
INSERT INTO `sys_page_compose_pages` (`Name`, `Title`, `Order`) VALUES ('cf_coins_my', 'Coins User', @iMaxOrder+4);

-- page compose blocks
INSERT INTO `sys_page_compose` (`Page`, `PageWidth`, `Desc`, `Caption`, `Column`, `Order`, `Func`, `Content`, `DesignBox`, `ColWidth`, `Visible`, `MinWidth`) VALUES 
    ('cf_coins_view', '1140px', 'Coin''s info block', '_cf_coins_block_info', 2, 0, 'Info', '', '1', 28.1, 'non,memb', '0'),
    ('cf_coins_view', '1140px', 'Coin''s actions block', '_cf_coins_block_actions', 2, 1, 'Actions', '', '1', 28.1, 'non,memb', '0'),    
    ('cf_coins_view', '1140px', 'Coin''s rate block', '_cf_coins_block_rate', 2, 2, 'Rate', '', '1', 28.1, 'non,memb', '0'),    
    ('cf_coins_view', '1140px', 'Coin''s social sharing block', '_sys_block_title_social_sharing', 2, 3, 'SocialSharing', '', 1, 28.1, 'non,memb', 0),
    ('cf_coins_view', '1140px', 'Coin''s fans block', '_cf_coins_block_fans', 2, 4, 'Fans', '', '1', 28.1, 'non,memb', '0'),    
    ('cf_coins_view', '1140px', 'Coin''s unconfirmed fans block', '_cf_coins_block_fans_unconfirmed', 2, 5, 'FansUnconfirmed', '', '1', 28.1, 'memb', '0'),
    ('cf_coins_view', '1140px', 'Coin''s Location', '_Location', 2, 6, 'PHP', 'return BxDolService::call(''wmap'', ''location_block'', array(''coins'', $this->aDataEntry[$this->_oDb->_sFieldId]));', 1, 28.1, 'non,memb', 0),
    ('cf_coins_view', '1140px', 'Coin''s chat', '_Chat', 2, 7, 'PHP', 'return BxDolService::call(''shoutbox'', ''get_shoutbox'', array(''cf_coins'', $this->aDataEntry[$this->_oDb->_sFieldId]));', 11, 28.1, 'non,memb', 0),
    ('cf_coins_view', '1140px', 'Coin''s description block', '_cf_coins_block_desc', 1, 0, 'Desc', '', '1', 71.9, 'non,memb', '0'),
    ('cf_coins_view', '1140px', 'Coin''s photo block', '_cf_coins_block_photo', 1, 1, 'Photo', '', '1', 71.9, 'non,memb', '0'),
    ('cf_coins_view', '1140px', 'Coin''s videos block', '_cf_coins_block_video', 1, 2, 'Video', '', '1', 71.9, 'non,memb', '0'),    
    ('cf_coins_view', '1140px', 'Coin''s sounds block', '_cf_coins_block_sound', 1, 3, 'Sound', '', '1', 71.9, 'non,memb', '0'),    
    ('cf_coins_view', '1140px', 'Coin''s files block', '_cf_coins_block_files', 1, 4, 'Files', '', '1', 71.9, 'non,memb', '0'),    
    ('cf_coins_view', '1140px', 'Coin''s comments block', '_cf_coins_block_comments', 1, 5, 'Comments', '', '1', 71.9, 'non,memb', '0'),
    ('cf_coins_view', '1140px', 'Coin''s forum feed', '_sys_block_title_forum_feed', 1, 6, 'ForumFeed', '', '1', 71.9, 'non,memb', '0'),

    ('cf_coins_main', '1140px', 'Latest Featured Coin', '_cf_coins_block_latest_featured_coin', '1', '0', 'LatestFeaturedCoin', '', '1', '71.9', 'non,memb', '0'),
    ('cf_coins_main', '1140px', 'Recent Coins', '_cf_coins_block_recent', '1', '1', 'Recent', '', '1', '71.9', 'non,memb', '0'),
    ('cf_coins_main', '1140px', 'Map', '_Map', '1', '2', 'PHP', 'return BxDolService::call(''wmap'', ''homepage_part_block'', array (''coins''));', 1, 71.9, 'non,memb', 0),
    ('cf_coins_main', '1140px', 'Coins Categories', '_cf_coins_block_categories', '2', '0', 'Categories', '', '1', '28.1', 'non,memb', '0'),

    ('cf_coins_my', '1140px', 'Administration Owner', '_cf_coins_block_administration_owner', '1', '0', 'Owner', '', '1', '100', 'non,memb', '0'),
    ('cf_coins_my', '1140px', 'User''s coins', '_cf_coins_block_users_coins', '1', '1', 'Browse', '', '0', '100', 'non,memb', '0'),

    ('index', '1140px', 'Coins', '_cf_coins_block_homepage', 0, 0, 'PHP', 'cf_import(''BxDolService''); return BxDolService::call(''coins'', ''homepage_block'');', 1, 71.9, 'non,memb', 0),
	('profile', '1140px', 'Joined Coins', '_cf_coins_block_my_coins_joined', 0, 0, 'PHP', 'cf_import(''BxDolService''); return BxDolService::call(''coins'', ''profile_block_joined'', array($this->oProfileGen->_iProfileID));', 1, 71.9, 'non,memb', 0),
    ('profile', '1140px', 'User Coins', '_cf_coins_block_my_coins', 0, 0, 'PHP', 'cf_import(''BxDolService''); return BxDolService::call(''coins'', ''profile_block'', array($this->oProfileGen->_iProfileID));', 1, 71.9, 'non,memb', 0),
    ('member', '1140px', 'Joined Coins', '_cf_coins_block_my_coins_joined', 0, 0, 'PHP', 'cf_import(''BxDolService''); return BxDolService::call(''coins'', ''profile_block_joined'', array($this->oProfileGen->_iProfileID));', 1, 71.9, 'non,memb', 0);

-- permalinkU
INSERT INTO `sys_permalinks` VALUES (NULL, 'modules/?r=coins/', 'm/coins/', 'cf_coins_permalinks');

-- settings
SET @iMaxOrder = (SELECT `menu_order` + 1 FROM `sys_options_cats` ORDER BY `menu_order` DESC LIMIT 1);
INSERT INTO `sys_options_cats` (`name`, `menu_order`) VALUES ('Coins', @iMaxOrder);
SET @iCategId = (SELECT LAST_INSERT_ID());
INSERT INTO `sys_options` (`Name`, `VALUE`, `kateg`, `desc`, `Type`, `check`, `err_text`, `order_in_kateg`, `AvailableValues`) VALUES
('cf_coins_permalinks', 'on', 26, 'Enable friendly permalinks in coins', 'checkbox', '', '', '0', ''),
('cf_coins_autoapproval', 'on', @iCategId, 'Activate all coins after creation automatically', 'checkbox', '', '', '0', ''),
('cf_coins_author_comments_admin', 'on', @iCategId, 'Allow coin admin to edit and delete any comment', 'checkbox', '', '', '0', ''),
('cf_coins_max_email_invitations', '10', @iCategId, 'Max number of email invitation to send per one invite', 'digit', '', '', '0', ''),
('category_auto_app_cf_coins', 'on', @iCategId, 'Activate all categories after creation automatically', 'checkbox', '', '', '0', ''),
('cf_coins_perpage_view_fans', '6', @iCategId, 'Number of fans to show on coin view page', 'digit', '', '', '0', ''),
('cf_coins_perpage_browse_fans', '30', @iCategId, 'Number of fans to show on browse fans page', 'digit', '', '', '0', ''),
('cf_coins_perpage_main_recent', '10', @iCategId, 'Number of recently added COINS to show on coins home', 'digit', '', '', '0', ''),
('cf_coins_perpage_browse', '14', @iCategId, 'Number of coins to show on browse pages', 'digit', '', '', '0', ''),
('cf_coins_perpage_profile', '4', @iCategId, 'Number of coins to show on profile page', 'digit', '', '', '0', ''),
('cf_coins_perpage_homepage', '5', @iCategId, 'Number of coins to show on homepage', 'digit', '', '', '0', ''),
('cf_coins_homepage_default_tab', 'featured', @iCategId, 'Default coins block tab on homepage', 'select', '', '', '0', 'featured,recent,top,popular'),
('cf_coins_max_rss_num', '10', @iCategId, 'Max number of rss items to provide', 'digit', '', '', '0', '');

-- search objects
INSERT INTO `sys_objects_search` VALUES(NULL, 'cf_coins', '_cf_coins', 'CfCoinsSearchResult', 'modules/ccf/coins/classes/CfCoinsSearchResult.php');

-- vote objects
INSERT INTO `sys_objects_vote` VALUES (NULL, 'cf_coins', '[db_prefix]rating', '[db_prefix]rating_track', 'gal_', '5', 'vote_send_result', 'BX_PERIOD_PER_VOTE', '1', '', '', '[db_prefix]main', 'rate', 'rate_count', 'id', 'CfCoinsVoting', 'modules/ccf/coins/classes/CfCoinsVoting.php');

-- comments objects
INSERT INTO `sys_objects_cmts` VALUES (NULL, 'cf_coins', '[db_prefix]cmts', '[db_prefix]cmts_track', '0', '1', '90', '5', '1', '-3', 'none', '0', '1', '0', 'cmt', '[db_prefix]main', 'id', 'comments_count', 'CfCoinsCmts', 'modules/ccf/coins/classes/CfCoinsCmts.php');

-- views objects
INSERT INTO `sys_objects_views` VALUES(NULL, 'cf_coins', '[db_prefix]views_track', 86400, '[db_prefix]main', 'id', 'views', 1);

-- tag objects
INSERT INTO `sys_objects_tag` VALUES (NULL, 'cf_coins', 'SELECT `Tags` FROM `[db_prefix]main` WHERE `id` = {iID} AND `status` = ''approved''', 'cf_coins_permalinks', 'm/coins/browse/tag/{tag}', 'modules/?r=coins/browse/tag/{tag}', '_cf_coins');

-- category objects
INSERT INTO `sys_objects_categories` VALUES (NULL, 'cf_coins', 'SELECT `Categories` FROM `[db_prefix]main` WHERE `id` = {iID} AND `status` = ''approved''', 'cf_coins_permalinks', 'm/coins/browse/category/{tag}', 'modules/?r=coins/browse/category/{tag}', '_cf_coins');

INSERT INTO `sys_categories` (`Category`, `ID`, `Type`, `Owner`, `Status`) VALUES 
('Coins', '0', 'cf_photos', '0', 'active'),
('Arts & Literature', '0', 'cf_coins', '0', 'active'),
('Animals & Pets', '0', 'cf_coins', '0', 'active'),
('Activities', '0', 'cf_coins', '0', 'active'),
('Automotive', '0', 'cf_coins', '0', 'active'),
('Business & Money', '0', 'cf_coins', '0', 'active'),
('Companies & Co-workers', '0', 'cf_coins', '0', 'active'),
('Cultures & Nations', '0', 'cf_coins', '0', 'active'),
('Dolphin Community', '0', 'cf_coins', '0', 'active'),
('Family & Friends', '0', 'cf_coins', '0', 'active'),
('Fan Clubs', '0', 'cf_coins', '0', 'active'),
('Fashion & Style', '0', 'cf_coins', '0', 'active'),
('Fitness & Body Building', '0', 'cf_coins', '0', 'active'),
('Food & Drink', '0', 'cf_coins', '0', 'active'),
('Gay, Lesbian & Bi', '0', 'cf_coins', '0', 'active'),
('Health & Wellness', '0', 'cf_coins', '0', 'active'),
('Hobbies & Entertainment', '0', 'cf_coins', '0', 'active'),
('Internet & Computers', '0', 'cf_coins', '0', 'active'),
('Love & Relationships', '0', 'cf_coins', '0', 'active'),
('Mass Media', '0', 'cf_coins', '0', 'active'),
('Music & Cinema', '0', 'cf_coins', '0', 'active'),
('Places & Travel', '0', 'cf_coins', '0', 'active'),
('Politics', '0', 'cf_coins', '0', 'active'),
('Recreation & Sports', '0', 'cf_coins', '0', 'active'),
('Religion', '0', 'cf_coins', '0', 'active'),
('Science & Innovations', '0', 'cf_coins', '0', 'active'),
('Sex', '0', 'cf_coins', '0', 'active'),
('Teens & Schools', '0', 'cf_coins', '0', 'active'),
('Other', '0', 'cf_coins', '0', 'active');

-- users actions
INSERT INTO `sys_objects_actions` (`Caption`, `Icon`, `Url`, `Script`, `Eval`, `Order`, `Type`) VALUES 
    ('{TitleEdit}', 'edit', '{evalResult}', '', '$oConfig = $GLOBALS[''oCfCoinsModule'']->_oConfig; return  BX_DOL_URL_ROOT . $oConfig->getBaseUri() . ''edit/{ID}'';', '0', 'cf_coins'),
    ('{TitleDelete}', 'remove', '', 'getHtmlData( ''ajaxy_popup_result_div_{ID}'', ''{evalResult}'', false, ''post'', true); return false;', '$oConfig = $GLOBALS[''oCfCoinsModule'']->_oConfig; return  BX_DOL_URL_ROOT . $oConfig->getBaseUri() . ''delete/{ID}'';', 1, 'cf_coins'),
    ('{TitleShare}', 'share-square-o', '', 'showPopupAnyHtml (''{BaseUri}share_popup/{ID}'');', '', '2', 'cf_coins'),
    ('{TitleBroadcast}', 'envelope', '{BaseUri}broadcast/{ID}', '', '', '3', 'cf_coins'),
    ('{TitleJoin}', '{IconJoin}', '', 'getHtmlData( ''ajaxy_popup_result_div_{ID}'', ''{evalResult}'', false, ''post'');return false;', '$oConfig = $GLOBALS[''oCfCoinsModule'']->_oConfig; return BX_DOL_URL_ROOT . $oConfig->getBaseUri() . ''join/{ID}/{iViewer}'';', '4', 'cf_coins'),
    ('{TitleInvite}', 'plus-circle', '{evalResult}', '', '$oConfig = $GLOBALS[''oCfCoinsModule'']->_oConfig; return BX_DOL_URL_ROOT . $oConfig->getBaseUri() . ''invite/{ID}'';', '5', 'cf_coins'),
    ('{AddToFeatured}', 'star-o', '', 'getHtmlData( ''ajaxy_popup_result_div_{ID}'', ''{evalResult}'', false, ''post'');return false;', '$oConfig = $GLOBALS[''oCfCoinsModule'']->_oConfig; return BX_DOL_URL_ROOT . $oConfig->getBaseUri() . ''mark_featured/{ID}'';', '6', 'cf_coins'),
    ('{TitleManageFans}', 'users', '', 'showPopupAnyHtml (''{BaseUri}manage_fans_popup/{ID}'');', '', '8', 'cf_coins'),
    ('{TitleUploadPhotos}', 'picture-o', '{BaseUri}upload_photos/{URI}', '', '', '9', 'cf_coins'),
    ('{TitleUploadVideos}', 'film', '{BaseUri}upload_videos/{URI}', '', '', '10', 'cf_coins'),
    ('{TitleUploadSounds}', 'music', '{BaseUri}upload_sounds/{URI}', '', '', '11', 'cf_coins'),
    ('{TitleUploadFiles}', 'save', '{BaseUri}upload_files/{URI}', '', '', '12', 'cf_coins'),
    ('{TitleSubscribe}', 'paperclip', '', '{ScriptSubscribe}', '', '13', 'cf_coins'),
    ('{TitleActivate}', 'check-circle-o', '', 'getHtmlData( ''ajaxy_popup_result_div_{ID}'', ''{evalResult}'', false, ''post'');return false;', '$oConfig = $GLOBALS[''oCfCoinsModule'']->_oConfig; return BX_DOL_URL_ROOT . $oConfig->getBaseUri() . ''activate/{ID}'';', '14', 'cf_coins'),
    ('{repostCpt}', 'repeat', '', '{repostScript}', '', 15, 'cf_coins'),

    ('{evalResult}', 'plus', '{BaseUri}browse/my&cf_coins_filter=add_coin', '', 'return ($GLOBALS[''logged''][''member''] && BxDolModule::getInstance(''CfCoinsModule'')->isAllowedAdd()) || $GLOBALS[''logged''][''admin''] ? _t(''_cf_coins_action_add_coin'') : '''';', 1, 'cf_coins_title'),
    ('{evalResult}', 'users', '{BaseUri}browse/my', '', 'return $GLOBALS[''logged''][''member''] || $GLOBALS[''logged''][''admin''] ? _t(''_cf_coins_action_my_coins'') : '''';', '2', 'cf_coins_title');
    
-- top menu 
INSERT INTO `sys_menu_top`(`ID`, `Parent`, `Name`, `Caption`, `Link`, `Order`, `Visible`, `Target`, `Onclick`, `Check`, `Editable`, `Deletable`, `Active`, `Type`, `Picture`, `Icon`, `BQuickLink`, `Statistics`) VALUES
(NULL, 0, 'Coins', '_cf_coins_menu_root', 'modules/?r=coins/view/|modules/?r=coins/broadcast/|modules/?r=coins/invite/|modules/?r=coins/edit/|forum/coins/', '', 'non,memb', '', '', '', 1, 1, 1, 'system', 'users', '', '0', '');
SET @iCatRoot := LAST_INSERT_ID();
INSERT INTO `sys_menu_top`(`ID`, `Parent`, `Name`, `Caption`, `Link`, `Order`, `Visible`, `Target`, `Onclick`, `Check`, `Editable`, `Deletable`, `Active`, `Type`, `Picture`, `Icon`, `BQuickLink`, `Statistics`) VALUES
(NULL, @iCatRoot, 'Coin View', '_cf_coins_menu_view_coin', 'modules/?r=coins/view/{cf_coins_view_uri}', 0, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, ''),
(NULL, @iCatRoot, 'Coin View Forum', '_cf_coins_menu_view_forum', 'forum/coins/forum/{cf_coins_view_uri}-0.htm|forum/coins/', 1, 'non,memb', '', '', '$oModuleDb = new BxDolModuleDb(); return $oModuleDb->getModuleByUri(''forum'') ? true : false;', 1, 1, 1, 'custom', '', '', 0, ''),
(NULL, @iCatRoot, 'Coin View Fans', '_cf_coins_menu_view_fans', 'modules/?r=coins/browse_fans/{cf_coins_view_uri}', 2, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, ''),
(NULL, @iCatRoot, 'Coin View Comments', '_cf_coins_menu_view_comments', 'modules/?r=coins/comments/{cf_coins_view_uri}', 3, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, '');


SET @iMaxMenuOrder := (SELECT `Order` + 1 FROM `sys_menu_top` WHERE `Parent` = 0 ORDER BY `Order` DESC LIMIT 1);
INSERT INTO `sys_menu_top`(`ID`, `Parent`, `Name`, `Caption`, `Link`, `Order`, `Visible`, `Target`, `Onclick`, `Check`, `Editable`, `Deletable`, `Active`, `Type`, `Picture`, `Icon`, `BQuickLink`, `Statistics`) VALUES
(NULL, 0, 'Coins', '_cf_coins_menu_root', 'modules/?r=coins/home/|modules/?r=coins/', @iMaxMenuOrder, 'non,memb', '', '', '', 1, 1, 1, 'top', 'users', 'users', 1, '');
SET @iCatRoot := LAST_INSERT_ID();
INSERT INTO `sys_menu_top`(`ID`, `Parent`, `Name`, `Caption`, `Link`, `Order`, `Visible`, `Target`, `Onclick`, `Check`, `Editable`, `Deletable`, `Active`, `Type`, `Picture`, `Icon`, `BQuickLink`, `Statistics`) VALUES
(NULL, @iCatRoot, 'Coins Main Page', '_cf_coins_menu_main', 'modules/?r=coins/home/', 0, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, ''),
(NULL, @iCatRoot, 'Recent Coins', '_cf_coins_menu_recent', 'modules/?r=coins/browse/recent', 2, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, ''),
(NULL, @iCatRoot, 'Top Rated Coins', '_cf_coins_menu_top_rated', 'modules/?r=coins/browse/top', 3, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, ''),
(NULL, @iCatRoot, 'Popular Coins', '_cf_coins_menu_popular', 'modules/?r=coins/browse/popular', 4, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, ''),
(NULL, @iCatRoot, 'Featured Coins', '_cf_coins_menu_featured', 'modules/?r=coins/browse/featured', 5, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, ''),
(NULL, @iCatRoot, 'Coins Tags', '_cf_coins_menu_tags', 'modules/?r=coins/tags', 8, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, 'cf_coins'),
(NULL, @iCatRoot, 'Coins Categories', '_cf_coins_menu_categories', 'modules/?r=coins/categories', 9, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, 'cf_coins'),
(NULL, @iCatRoot, 'Calendar', '_cf_coins_menu_calendar', 'modules/?r=coins/calendar', 10, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, ''),
(NULL, @iCatRoot, 'Search', '_cf_coins_menu_search', 'modules/?r=coins/search', 11, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, '');

SET @iCatProfileOrder := (SELECT MAX(`Order`)+1 FROM `sys_menu_top` WHERE `Parent` = 9 ORDER BY `Order` DESC LIMIT 1);
INSERT INTO `sys_menu_top`(`ID`, `Parent`, `Name`, `Caption`, `Link`, `Order`, `Visible`, `Target`, `Onclick`, `Check`, `Editable`, `Deletable`, `Active`, `Type`, `Picture`, `Icon`, `BQuickLink`, `Statistics`) VALUES
(NULL, 9, 'Coins', '_cf_coins_menu_my_coins_profile', 'modules/?r=coins/browse/user/{profileUsername}|modules/?r=coins/browse/joined/{profileUsername}', @iCatProfileOrder, 'non,memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, '');
SET @iCatProfileOrder := (SELECT MAX(`Order`)+1 FROM `sys_menu_top` WHERE `Parent` = 4 ORDER BY `Order` DESC LIMIT 1);
INSERT INTO `sys_menu_top`(`ID`, `Parent`, `Name`, `Caption`, `Link`, `Order`, `Visible`, `Target`, `Onclick`, `Check`, `Editable`, `Deletable`, `Active`, `Type`, `Picture`, `Icon`, `BQuickLink`, `Statistics`) VALUES
(NULL, 4, 'Coins', '_cf_coins_menu_my_coins_profile', 'modules/?r=coins/browse/my', @iCatProfileOrder, 'memb', '', '', '', 1, 1, 1, 'custom', '', '', 0, '');

-- member menu
SET @iMemberMenuParent = (SELECT `ID` FROM `sys_menu_member` WHERE `Name` = 'AddContent');
SET @iMemberMenuOrder = (SELECT MAX(`Order`) + 1 FROM `sys_menu_member` WHERE `Parent` = IFNULL(@iMemberMenuParent, -1));
INSERT INTO `sys_menu_member` SET `Name` = 'cf_coins', `Eval` = 'return BxDolService::call(''coins'', ''get_member_menu_item_add_content'');', `Position`='top_extra', `Type` = 'linked_item', `Parent` = IFNULL(@iMemberMenuParent, 0), `Order` = IFNULL(@iMemberMenuOrder, 1);

-- admin menu
SET @iMax = (SELECT MAX(`order`) FROM `sys_menu_admin` WHERE `parent_id` = '2');
INSERT IGNORE INTO `sys_menu_admin` (`parent_id`, `name`, `title`, `url`, `description`, `icon`, `order`) VALUES
(2, 'cf_coins', '_cf_coins', '{siteUrl}modules/?r=coins/administration/', 'Coins module by CCFTechSpot','users', @iMax+1);

-- site stats
SET @iStatSiteOrder := (SELECT `StatOrder` + 1 FROM `sys_stat_site` WHERE 1 ORDER BY `StatOrder` DESC LIMIT 1);
INSERT INTO `sys_stat_site` VALUES(NULL, 'cf_coins', 'cf_coins', 'modules/?r=coins/browse/recent', 'SELECT COUNT(`id`) FROM `[db_prefix]main` WHERE `status`=''approved''', 'modules/?r=coins/administration', 'SELECT COUNT(`id`) FROM `[db_prefix]main` WHERE `status`=''pending''', 'users', @iStatSiteOrder);

-- PQ statistics
INSERT INTO `sys_stat_member` VALUES ('cf_coins', 'SELECT COUNT(*) FROM `[db_prefix]main` WHERE `author_id` = ''__member_id__'' AND `status`=''approved''');
INSERT INTO `sys_stat_member` VALUES ('cf_coinsp', 'SELECT COUNT(*) FROM `[db_prefix]main` WHERE `author_id` = ''__member_id__'' AND `Status`!=''approved''');
INSERT INTO `sys_account_custom_stat_elements` VALUES(NULL, '_cf_coins', '__cf_coins__ (<a href="modules/?r=coins/browse/my&cf_coins_filter=add_coin">__l_add__</a>)');

-- email templates
INSERT INTO `sys_email_templates` (`Name`, `Subject`, `Body`, `Desc`, `LangID`) VALUES 
('cf_coins_broadcast', '<BroadcastTitle>', '<cf_include_auto:_email_header.html />\r\n\r\n<p>Hello <NickName>,</p> \r\n<p>Message from <a href="<EntryUrl>"><EntryTitle></a> coin admin:</p> <pre><hr><BroadcastMessage></pre> <hr> \r\n\r\n<cf_include_auto:_email_footer.html />', 'Coins broadcast message', 0),

('cf_coins_join_request', 'Request To Join Your Coin', '<cf_include_auto:_email_header.html />\r\n\r\n<p>Hello <NickName>,</p> \r\n\r\n<p>New request to join your coin: <a href="<EntryUrl>"><EntryTitle></a>.</p> \r\n\r\n<cf_include_auto:_email_footer.html />', 'Join request to a coin', 0),

('cf_coins_join_reject', 'Request To Join A Coin Was Rejected', '<cf_include_auto:_email_header.html />\r\n\r\n <p>Hello <NickName>,</p> <p>Your request to join <a href="<EntryUrl>"><EntryTitle></a> coin was rejected by coin admin.</p> \r\n<cf_include_auto:_email_footer.html />', 'Join coin request was rejected', 0),

('cf_coins_join_confirm', 'Your Request To Join A Coin Was Confirmed', '<cf_include_auto:_email_header.html />\r\n\r\n<p>Hello <NickName>,</p> \r\n<p>Your request to join <a href="<EntryUrl>"><EntryTitle></a> coin was confirmed by the coin admin.</p> \r\n\r\n<cf_include_auto:_email_footer.html />', 'Join coin request confirmed', 0),

('cf_coins_fan_remove', 'Your Profile Removed From Coin Fans', '<cf_include_auto:_email_header.html /> \r\n\r\n<p>Hello <NickName>,</p> <p>Your profile was removed fans list of <a href="<EntryUrl>"><EntryTitle></a> coin by the coin admin.</p> \r\n\r\n<cf_include_auto:_email_footer.html />', 'Profile Removed From Coin Fans', 0),

('cf_coins_fan_become_admin', 'You Are A Coin Admin Now', '<cf_include_auto:_email_header.html />\r\n\r\n<p>Hello <NickName>,</p> \r\n\r\n<p>You are an admin of <a href="<EntryUrl>"><EntryTitle></a> coin now.</p>\r\n\r\n<cf_include_auto:_email_footer.html />', 'Coin admin status granted', 0),

('cf_coins_admin_become_fan', 'Your Coin Admin Status Was Revoked', '<cf_include_auto:_email_header.html />\r\n\r\n<p>Hello <NickName>,</p> \r\n\r\n<p>Your admin status was revoked from <a href="<EntryUrl>"><EntryTitle></a> coin by the coin creator.</p> \r\n\r\n<cf_include_auto:_email_footer.html />', 'Coin admin status revoked', 0),

('cf_coins_invitation', 'Invitation to <CoinName> Coin', '<cf_include_auto:_email_header.html />\r\n\r\n<p>Hello <NickName>,</p> \r\n\r\n<p><a href="<InviterUrl>"><InviterNickName></a> invited you to <a href="<CoinUrl>"><CoinName> coin</a>.</p> \r\n\r\n<p>\r\n<hr><InvitationText><hr> \r\n</p>\r\n\r\n<cf_include_auto:_email_footer.html />', 'Invitation to coin', 0),

('cf_coins_sbs', 'Subscription: Coin Details Changed', '<cf_include_auto:_email_header.html />\r\n\r\n<p>Hello <NickName>,</p> \r\n\r\n<p><a href="<ViewLink>"><EntryTitle></a> coin details changed: <br /> <ActionName> </p> \r\n<hr>\r\n<p>Cancel this subscription: <a href="<UnsubscribeLink>"><UnsubscribeLink></a></p>\r\n\r\n<cf_include_auto:_email_footer.html />', 'Subscription: coin changes', 0);


-- membership actions
SET @iLevelNonMember := 1;
SET @iLevelStandard := 2;
SET @iLevelPromotion := 3;

INSERT INTO `sys_acl_actions` VALUES (NULL, 'coins view coin', NULL);
SET @iAction := LAST_INSERT_ID();
INSERT INTO `sys_acl_matrix` (`IDLevel`, `IDAction`) VALUES 
    (@iLevelNonMember, @iAction), (@iLevelStandard, @iAction), (@iLevelPromotion, @iAction);

INSERT INTO `sys_acl_actions` VALUES (NULL, 'coins browse', NULL);
SET @iAction := LAST_INSERT_ID();
INSERT INTO `sys_acl_matrix` (`IDLevel`, `IDAction`) VALUES 
    (@iLevelNonMember, @iAction), (@iLevelStandard, @iAction), (@iLevelPromotion, @iAction);

INSERT INTO `sys_acl_actions` VALUES (NULL, 'coins search', NULL);
SET @iAction := LAST_INSERT_ID();
INSERT INTO `sys_acl_matrix` (`IDLevel`, `IDAction`) VALUES 
    (@iLevelNonMember, @iAction), (@iLevelStandard, @iAction), (@iLevelPromotion, @iAction);

INSERT INTO `sys_acl_actions` VALUES (NULL, 'coins add coin', NULL);
SET @iAction := LAST_INSERT_ID();
INSERT INTO `sys_acl_matrix` (`IDLevel`, `IDAction`) VALUES 
    (@iLevelStandard, @iAction), (@iLevelPromotion, @iAction);

INSERT INTO `sys_acl_actions` VALUES (NULL, 'coins comments delete and edit', NULL);
INSERT INTO `sys_acl_actions` VALUES (NULL, 'coins edit any coin', NULL);
INSERT INTO `sys_acl_actions` VALUES (NULL, 'coins delete any coin', NULL);
INSERT INTO `sys_acl_actions` VALUES (NULL, 'coins mark as featured', NULL);
INSERT INTO `sys_acl_actions` VALUES (NULL, 'coins approve coins', NULL);
INSERT INTO `sys_acl_actions` VALUES (NULL, 'coins broadcast message', NULL);

-- alert handlers
INSERT INTO `sys_alerts_handlers` VALUES (NULL, 'cf_coins_profile_delete', '', '', 'BxDolService::call(''coins'', ''response_profile_delete'', array($this));');
SET @iHandler := LAST_INSERT_ID();
INSERT INTO `sys_alerts` VALUES (NULL , 'profile', 'delete', @iHandler);

INSERT INTO `sys_alerts_handlers` VALUES (NULL, 'cf_coins_media_delete', '', '', 'BxDolService::call(''coins'', ''response_media_delete'', array($this));');
SET @iHandler := LAST_INSERT_ID();
INSERT INTO `sys_alerts` VALUES (NULL , 'cf_photos', 'delete', @iHandler);
INSERT INTO `sys_alerts` VALUES (NULL , 'cf_videos', 'delete', @iHandler);
INSERT INTO `sys_alerts` VALUES (NULL , 'cf_sounds', 'delete', @iHandler);
INSERT INTO `sys_alerts` VALUES (NULL , 'cf_files', 'delete', @iHandler);

INSERT INTO `sys_alerts_handlers` VALUES (NULL, 'cf_coins_map_install', '', '', 'if (''wmap'' == $this->aExtras[''uri''] && $this->aExtras[''res''][''result'']) BxDolService::call(''coins'', ''map_install'');');
SET @iHandler := LAST_INSERT_ID();
INSERT INTO `sys_alerts` VALUES (NULL , 'module', 'install', @iHandler);

-- privacy
INSERT INTO `sys_privacy_actions` (`module_uri`, `name`, `title`, `default_group`) VALUES
('coins', 'view_coin', '_cf_coins_privacy_view_coin', '3'),
('coins', 'view_fans', '_cf_coins_privacy_view_fans', '3'),
('coins', 'comment', '_cf_coins_privacy_comment', 'f'),
('coins', 'rate', '_cf_coins_privacy_rate', 'f'),
('coins', 'post_in_forum', '_cf_coins_privacy_post_in_forum', 'f'),
('coins', 'view_forum', '_cf_coins_privacy_view_forum', 'f'),
('coins', 'join', '_cf_coins_privacy_join', '3'),
('coins', 'upload_photos', '_cf_coins_privacy_upload_photos', 'a'),
('coins', 'upload_videos', '_cf_coins_privacy_upload_videos', 'a'),
('coins', 'upload_sounds', '_cf_coins_privacy_upload_sounds', 'a'),
('coins', 'upload_files', '_cf_coins_privacy_upload_files', 'a');

-- subscriptions
INSERT INTO `sys_sbs_types` (`unit`, `action`, `template`, `params`) VALUES
('cf_coins', '', '', 'return BxDolService::call(''coins'', ''get_subscription_params'', array($arg2, $arg3));'),
('cf_coins', 'change', 'cf_coins_sbs', 'return BxDolService::call(''coins'', ''get_subscription_params'', array($arg2, $arg3));'),
('cf_coins', 'commentPost', 'cf_coins_sbs', 'return BxDolService::call(''coins'', ''get_subscription_params'', array($arg2, $arg3));'),
('cf_coins', 'join', 'cf_coins_sbs', 'return BxDolService::call(''coins'', ''get_subscription_params'', array($arg2, $arg3));');

-- sitemap
SET @iMaxOrderSiteMaps = (SELECT MAX(`order`)+1 FROM `sys_objects_site_maps`);
INSERT INTO `sys_objects_site_maps` (`object`, `title`, `priority`, `changefreq`, `class_name`, `class_file`, `order`, `active`) VALUES
('cf_coins', '_cf_coins', '0.8', 'auto', 'CfCoinsSiteMaps', 'modules/ccf/coins/classes/CfCoinsSiteMaps.php', @iMaxOrderSiteMaps, 1);

-- chart
SET @iMaxOrderCharts = (SELECT MAX(`order`)+1 FROM `sys_objects_charts`);
INSERT INTO `sys_objects_charts` (`object`, `title`, `table`, `field_date_ts`, `field_date_dt`, `query`, `active`, `order`) VALUES
('cf_coins', '_cf_coins', 'cf_coins_main', 'created', '', '', 1, @iMaxOrderCharts);

