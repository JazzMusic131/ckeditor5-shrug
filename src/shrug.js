import { Plugin } from 'ckeditor5/src/core.js';
import { ButtonView } from 'ckeditor5/src/ui.js';

// import ckeditor5Icon from '../theme/icons/ckeditor.svg';
import shrugIcon from '../theme/icons/shrug.svg';

export default class Shrug extends Plugin {
	static get pluginName() {
		return 'Shrug';
	}

	init() {
		const editor = this.editor;
		const t = editor.t;
		const model = editor.model;

		// Add the "shrugButton" to feature components.
		editor.ui.componentFactory.add( 'shrugButton', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Shrug' ),
				icon: shrugIcon,
				tooltip: true
			} );

			// Insert a text into the editor after clicking the button.
			this.listenTo( view, 'execute', () => {
				model.change( writer => {
					const textNode = writer.createText( '¯\\_(ツ)_/¯' );

					model.insertContent( textNode );
				} );

				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
