import WSUFlatTermSelector from './flat-term-selector';
import './style.scss'

function autofillTags( OriginalComponent ) {
    return function( props ) {
        const supportedPostTypes = ['news_article']; // TODO: implement as WP setting, so users can manage
        const postType = wp.data.select("core/editor").getCurrentPostType();

        if ( props.slug === 'post_tag' && supportedPostTypes.includes(postType) ) {
            return <WSUFlatTermSelector {...props} />;
        }

        // default return
        return <OriginalComponent { ...props } />;
    }
}


wp.hooks.addFilter(
    'editor.PostTaxonomyType',
    'wsuwp-plugin-auto-tagging',
    autofillTags
);
