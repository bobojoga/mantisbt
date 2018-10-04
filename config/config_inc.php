<?php
$g_hostname               = '10.201.131.142';
$g_db_type                = 'oci8';
$g_database_name          = 'dge02';
$g_db_username            = 'mantisbt';
$g_db_password            = 'mantisbt';

$g_db_table_prefix          = 'm';
$g_db_table_plugin_prefix   = 'plg';
$g_db_table_suffix          = '';

$g_default_timezone       = 'UTC';

$g_crypto_master_salt     = 'N3vfhNRNV2LSMIp8xjauF/7fXtOgCF/EtDw4xD8loDY=';

# --- Email Configuration ---
$g_phpMailer_method             = PHPMAILER_METHOD_SMTP; # or PHPMAILER_METHOD_SMTP, PHPMAILER_METHOD_SENDMAIL
$g_smtp_host                    = 'localhost';                  # used with PHPMAILER_METHOD_SMTP
$g_smtp_username                = '';                                   # used with PHPMAILER_METHOD_SMTP
$g_smtp_password                = '';                                   # used with PHPMAILER_METHOD_SMTP
$g_webmaster_email      = 'dragan.podvezanec@gmail.com';
$g_from_email           = 'mantis@igea.hr';        # the "From: " field in emails
$g_return_path_email    = 'dragan.podvezanec@gmail.com';  # the return address for bounced mail
$g_window_title = 'ESDEGE';


# --- CAS Configuration ---
$g_cas_debug = '';
$g_cas_version = '2.0'; 
$g_cas_server = '10.201.26.186';
$g_cas_port = 443;
$g_cas_uri = '/cas';
$g_cas_use_ldap = OFF;
$g_ldap_organization = '';
$g_ldap_root_dn = '';
$g_ldap_language_field = '';
$g_ldap_uid_field = '';
$g_ldap_mantis_uid = 'uid';
$g_cas_ldap_update_fields = '';
$g_cas_ldap_update_map = '';
$g_cas_ldap_update = '';
$g_ldap_language_keys = '';
$g_ldap_language_values = '';
#$g_path = '../cas/';
#$g_login_method = 'CAS_AUTH';

$g_log_level = 'ALL';
$g_log_destination = 'file:/var/www/html/mantis/temp/mantis.log';


# --- Roles Configuration ---
$g_limit_reporters = ON;
$g_access_levels_enum_string = '25:korisnik,55:korisnicka_podrska_dgu,70:korisnicka_podrska_igea,90:administrator';

# --- Layout Configuration ---
$g_font_family = 'Open Sans';
$g_top_include_page = 'top_page_test.php';
$g_bottom_include_page = 'top_page_test.php';
$g_default_home_page = 'view_all_bug_page.php';
$g_short_date_format  = 'd.m.Y. H:i';


# threshold for viewing roadmap
$g_roadmap_view_threshold = NOBODY;
	
# threshold for updating roadmap, target_version, etc
$g_roadmap_update_threshold = NOBODY;

$g_bug_view_page_fields = array (
	'id',
	'summary',
	'date_submitted',
	'custom_Ured',
	'custom_Ime i prezime podnositelja',
	'custom_Dio u aplikaciji',
	'custom_Naziv elaborata',
	'custom_Broj predmeta',
	'description',
	'category_id',
	'priority',
	'severity',
);

# --- Issue Details Page (New & Update) ---
$g_bug_report_page_fields = array(
	'custom_Broj prijave',
	'date_submitted',
	'custom_Ured',
	'id',
	'summary',
	'custom_Ime i prezime podnositelja',
	'custom_Dio u aplikaciji',
	'custom_Naziv elaborata',
	'custom_Broj predmeta',
	'attachments',
	'category_id',
	'priority',
        'severity',
);

/**
 * An array of the fields to show on the bug update page.
 *
 * To overload this setting per project, then the settings must be included in the database through
 * the generic configuration form.
 *
 * @global array $g_bug_update_page_fields
 */
$g_bug_update_page_fields = array (
	'custom_Broj prijave',
	'date_submitted',
	'custom_Ured',
	'id',
	'summary',
	'custom_Ime i prezime podnositelja',
	'custom_Dio u aplikaciji',
	'custom_Naziv elaborata',
	'custom_Broj predmeta',
	'attachments',
	'priority',
        'severity',
);


$g_status_colors = array( 'new' => '#ffa0a0', # red,
                          'feedback' => '#ff50a8', # purple
                          'acknowledged' => '#ffd850', # orange
                          'confirmed' => '#ffffb0', # yellow
                          'assigned' => '#c8c8ff', # blue
                          'resolved' => '#cceedd', # buish-green
                          'closed' => '#e8e8e8'); # light gray

# CustomContent Plugin settings
# ------------------------------------------------------

# this file will be included right before the closing <header> tag
#$custom_head_file = "/var/www/html/mantis/plugins/CustomContent/inc/custom_head_file.php";

# this file will be included right after the opening <body> tag
$g_custom_body_begin_file = "/var/www/html/mantis/plugins/CustomContent/inc/custom_body_begin_file.php";

# this file will be included at the end of the header layout section, i.e. the main menu
#$g_custom_page_header_file = "/var/www/html/mantis/plugins/CustomContent/inc/custom_page_header_file.php";

# this file will be included at the end of the footer layout section, i.e the Mantis copyright
#$g_custom_page_footer_file = "/var/www/html/mantis/plugins/CustomContent/inc/custom_page_footer_file.php";

# this file will be included right before the closing <body> tag
#$g_custom_body_end_file = "/var/www/html/mantis/plugins/CustomContent/inc/custom_body_end_file.php";


?>
