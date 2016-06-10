<?php
/**
 * WP Table of Contents
 *
 * @package     wp-table-of-contents
 * @author      Sylvain Marty
 * @author      Loïc Rey
 * @copyright   2016 Sylvain Marty & Loïc Rey
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: WP Table of Contents
 * Plugin URI:  http://galago.eu
 * Description: Genère une table des matières automatiquement, en identifiant les différents titres h2
 * Version:     1.0.0
 * Author:      Sylvain Marty
 * Author:      Loïc Rey
 * Author URI:  http://galago.eu
 * Text Domain: wp-table-of-contents
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

/*
Iniialisation du fichier .js
*/
function toc_js_init() {
     wp_enqueue_script( 'the_js', plugins_url('/js/jquery-toc.js',__FILE__), array('jquery') );
 }
 add_action('init', 'toc_js_init');

 /**
 * Génère une table des matières à partir des niveaux de titre 2
 */
function shortcode_table_des_matieres( $atts ) {
  // Paramétrage des attributs
  $a = shortcode_atts( array(
    'title' => 'Tables des matières',
  ), $atts );

    ob_start(); ?>
  <!-- Table des matières -->
  <div id="table-des-matieres">
    <h2><?php echo $a['title']; ?></h2>
    <ol></ol>
  </div>
  <!-- / Table des matières -->
  <?php
    return ob_get_clean();
}

add_shortcode( 'table_des_matieres', 'shortcode_table_des_matieres' );
