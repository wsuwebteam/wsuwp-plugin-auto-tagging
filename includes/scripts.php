<?php namespace WSUWP\Plugin\AutoTagging;


class Scripts {
    public static function init(){
        add_action( 'enqueue_block_editor_assets', __CLASS__ . '::enqueue_block_editor_assets' );
    }

    public static function enqueue_block_editor_assets() {
        $editor_asset = include( Plugin::get('plugin_dir') . 'assets/dist/index.asset.php');

        wp_enqueue_script(
            'wsuwp-plugin-auto-tagging-scripts',
            Plugin::get('plugin_url') . 'assets/dist/index.js',
            $editor_asset['dependencies'],
            $editor_asset['version']
        );

        wp_enqueue_style(
            'wsuwp-plugin-auto-tagging-styles',
            Plugin::get('plugin_url') . 'assets/dist/style-index.css',
            array(),
            $editor_asset['version']
        );
    }
}

( new Scripts )->init();
