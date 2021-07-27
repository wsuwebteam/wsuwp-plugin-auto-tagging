import WSUFlatTermSelector from './flat-term-selector';
import './style.scss'

const el = wp.element.createElement;

function autofillTags( OriginalComponent ) {
    return function( props ) {
        // TODO: Only enable on specific post type
        // console.log(props);
        // console.log(wp.data.select("core/editor").getCurrentPostType());

        if ( props.slug === 'post_tag' ) {
            return <WSUFlatTermSelector {...props} />;
        }

        // default return
        return el(
            OriginalComponent,
            props
        );
    }
}


wp.hooks.addFilter(
    'editor.PostTaxonomyType',
    'wsuwp-plugin-auto-tagging',
    autofillTags
);
