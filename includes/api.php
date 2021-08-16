<?php namespace WSUWP\Plugin\AutoTagging;


class Api
{
    public static function get_terms()
    {
        $result = array();

        $terms = get_terms(array(
            'taxonomy' => 'post_tag',
            'number' => 'all',
            'fields' => 'id=>name',
            'hide_empty' => false
        ));

        foreach ($terms as $id => $name) {
            array_push($result, array(
                'id' => $id,
                'name' => $name
            ));
        }

        return $result;
    }


    public function init()
    {
        add_action('rest_api_init', function () {
            register_rest_route('autotaggingapi/v1', '/terms', array(
                'methods' => \WP_REST_Server::READABLE,
                'callback' => array(__CLASS__, 'get_terms'),
                'permission_callback' => '__return_true' // https://wordpress.org/support/topic/missing-the-required-permission_callback-argument/
            ));
        });
    }
}


(new Api)->init();
