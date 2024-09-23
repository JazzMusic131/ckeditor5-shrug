import { Shrug as ShrugDll, icons } from '../src/index.js';
import Shrug from '../src/shrug.js';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 Shrug DLL', () => {
	it( 'exports Shrug', () => {
		expect( ShrugDll ).to.equal( Shrug );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
