
-- tables
DROP TABLE IF EXISTS `[db_prefix]main`;
DROP TABLE IF EXISTS `[db_prefix]fans`;
DROP TABLE IF EXISTS `[db_prefix]admins`;
DROP TABLE IF EXISTS `[db_prefix]images`;
DROP TABLE IF EXISTS `[db_prefix]videos`;
DROP TABLE IF EXISTS `[db_prefix]sounds`;
DROP TABLE IF EXISTS `[db_prefix]files`;
DROP TABLE IF EXISTS `[db_prefix]rating`;
DROP TABLE IF EXISTS `[db_prefix]rating_track`;
DROP TABLE IF EXISTS `[db_prefix]cmts`;
DROP TABLE IF EXISTS `[db_prefix]cmts_track`;
DROP TABLE IF EXISTS `[db_prefix]views_track`;
DROP TABLE IF EXISTS `[db_prefix]shoutbox`;

-- forum tables
DROP TABLE IF EXISTS `[db_prefix]forum`;
DROP TABLE IF EXISTS `[db_prefix]forum_cat`;
DROP TABLE IF EXISTS `[db_prefix]forum_cat`;
DROP TABLE IF EXISTS `[db_prefix]forum_flag`;
DROP TABLE IF EXISTS `[db_prefix]forum_post`;
DROP TABLE IF EXISTS `[db_prefix]forum_topic`;
DROP TABLE IF EXISTS `[db_prefix]forum_user`;
DROP TABLE IF EXISTS `[db_prefix]forum_user_activity`;
DROP TABLE IF EXISTS `[db_prefix]forum_user_stat`;
DROP TABLE IF EXISTS `[db_prefix]forum_vote`;
DROP TABLE IF EXISTS `[db_prefix]forum_actions_log`;
DROP TABLE IF EXISTS `[db_prefix]forum_attachments`;
DROP TABLE IF EXISTS `[db_prefix]forum_signatures`;

-- compose pages
DELETE FROM `sys_page_compose_pages` WHERE `Name` IN('cf_coins_view', 'cf_coins_celendar', 'cf_coins_main', 'cf_coins_my');
DELETE FROM `sys_page_compose` WHERE `Page` IN('cf_coins_view', 'cf_coins_celendar', 'cf_coins_main', 'cf_coins_my');
DELETE FROM `sys_page_compose` WHERE `Page` = 'index' AND `Desc` = 'Coins';
DELETE FROM `sys_page_compose` WHERE `Page` = 'member' AND `Desc` = 'Joined Coins';
DELETE FROM `sys_page_compose` WHERE `Page` = 'profile' AND `Desc` = 'User Coins';
DELETE FROM `sys_page_compose` WHERE `Page` = 'profile' AND `Desc` = 'Joined Coins';

-- system objects
DELETE FROM `sys_permalinks` WHERE `standard` = 'modules/?r=coins/';
DELETE FROM `sys_objects_vote` WHERE `ObjectName` = 'cf_coins';
DELETE FROM `sys_objects_cmts` WHERE `ObjectName` = 'cf_coins';
DELETE FROM `sys_objects_views` WHERE `name` = 'cf_coins';
DELETE FROM `sys_objects_categories` WHERE `ObjectName` = 'cf_coins';
DELETE FROM `sys_categories` WHERE `Type` = 'cf_coins';
DELETE FROM `sys_categories` WHERE `Type` = 'bx_photos' AND `Category` = 'Coins';
DELETE FROM `sys_objects_tag` WHERE `ObjectName` = 'cf_coins';
DELETE FROM `sys_tags` WHERE `Type` = 'cf_coins';
DELETE FROM `sys_objects_search` WHERE `ObjectName` = 'cf_coins';
DELETE FROM `sys_objects_actions` WHERE `Type` = 'cf_coins' OR `Type` = 'cf_coins_title';
DELETE FROM `sys_stat_site` WHERE `Name` = 'cf_coins';
DELETE FROM `sys_stat_member` WHERE TYPE IN('cf_coins', 'cf_coinsp');
DELETE FROM `sys_account_custom_stat_elements` WHERE `Label` = '_cf_coins';

-- email templates
DELETE FROM `sys_email_templates` WHERE `Name` = 'cf_coins_broadcast' OR `Name` = 'cf_coins_join_request' OR `Name` = 'cf_coins_join_reject' OR `Name` = 'cf_coins_join_confirm' OR `Name` = 'cf_coins_fan_remove' OR `Name` = 'cf_coins_fan_become_admin' OR `Name` = 'cf_coins_admin_become_fan' OR `Name` = 'cf_coins_sbs' OR `Name` = 'cf_coins_invitation';

-- top menu
SET @iCatRoot := (SELECT `ID` FROM `sys_menu_top` WHERE `Name` = 'Coins' AND `Parent` = 0 LIMIT 1);
DELETE FROM `sys_menu_top` WHERE `Parent` = @iCatRoot;
DELETE FROM `sys_menu_top` WHERE `ID` = @iCatRoot;

SET @iCatRoot := (SELECT `ID` FROM `sys_menu_top` WHERE `Name` = 'Coins' AND `Parent` = 0 LIMIT 1);
DELETE FROM `sys_menu_top` WHERE `Parent` = @iCatRoot;
DELETE FROM `sys_menu_top` WHERE `ID` = @iCatRoot;

DELETE FROM `sys_menu_top` WHERE `Parent` = 9 AND `Name` = 'Coins';
DELETE FROM `sys_menu_top` WHERE `Parent` = 4 AND `Name` = 'Coins';

-- member menu
DELETE FROM `sys_menu_member` WHERE `Name` = 'cf_coins';

-- admin menu
DELETE FROM `sys_menu_admin` WHERE `name` = 'cf_coins';

-- settings
SET @iCategId = (SELECT `ID` FROM `sys_options_cats` WHERE `name` = 'Coins' LIMIT 1);
DELETE FROM `sys_options` WHERE `kateg` = @iCategId;
DELETE FROM `sys_options_cats` WHERE `ID` = @iCategId;
DELETE FROM `sys_options` WHERE `Name` = 'cf_coins_permalinks';

-- membership levels
DELETE `sys_acl_actions`, `sys_acl_matrix` FROM `sys_acl_actions`, `sys_acl_matrix` WHERE `sys_acl_matrix`.`IDAction` = `sys_acl_actions`.`ID` AND `sys_acl_actions`.`Name` IN('coins view coin', 'coins browse', 'coins search', 'coins add coin', 'coins comments delete and edit', 'coins edit any coin', 'coins delete any coin', 'coins mark as featured', 'coins approve coins', 'coins broadcast message');
DELETE FROM `sys_acl_actions` WHERE `Name` IN('coins view coin', 'coins browse', 'coins search', 'coins add coin', 'coins comments delete and edit', 'coins edit any coin', 'coins delete any coin', 'coins mark as featured', 'coins approve coins', 'coins broadcast message');

-- alerts
SET @iHandler := (SELECT `id` FROM `sys_alerts_handlers` WHERE `name` = 'cf_coins_profile_delete' LIMIT 1);
DELETE FROM `sys_alerts` WHERE `handler_id` = @iHandler;
DELETE FROM `sys_alerts_handlers` WHERE `id` = @iHandler;

SET @iHandler := (SELECT `id` FROM `sys_alerts_handlers` WHERE `name` = 'cf_coins_media_delete' LIMIT 1);
DELETE FROM `sys_alerts` WHERE `handler_id` = @iHandler;
DELETE FROM `sys_alerts_handlers` WHERE `id` = @iHandler;

SET @iHandler := (SELECT `id` FROM `sys_alerts_handlers` WHERE `name` = 'cf_coins_map_install' LIMIT 1);
DELETE FROM `sys_alerts` WHERE `handler_id` = @iHandler;
DELETE FROM `sys_alerts_handlers` WHERE `id` = @iHandler;

-- privacy
DELETE FROM `sys_privacy_actions` WHERE `module_uri` = 'coins';

-- subscriptions
DELETE FROM `sys_sbs_entries` USING `sys_sbs_types`, `sys_sbs_entries` WHERE `sys_sbs_types`.`id`=`sys_sbs_entries`.`subscription_id` AND `sys_sbs_types`.`unit`='cf_coins';
DELETE FROM `sys_sbs_types` WHERE `unit`='cf_coins';

-- sitemap
DELETE FROM `sys_objects_site_maps` WHERE `object` = 'cf_coins';

-- chart
DELETE FROM `sys_objects_charts` WHERE `object` = 'cf_coins';

