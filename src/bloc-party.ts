/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/**
 * First install the jquery typings:
 * npm install --save-dev @types/jquery
 *
 * Can use a reference tag, specific to TS:
 * /// <reference path ="../typings/jquery/jquery.d.ts" />
 *
 * Or import using
 * import * as $ from "jquery"
 * or
 * import { $ } from "jquery"
 * but with that second one I get an error, so I suspect no you can't
 * https://www.typescriptlang.org/docs/handbook/modules.html
 *
 */

//import * as $ from "jquery"
import Grid from './grid'
import Config from './config'

export default class BlocParty {

	constructor(private config: Config) {
		const gridEls: Grid[] = $( "div[data-bp-grid-w]" ).map( (i, el) => { return new Grid(el) } ).get()

		/*
		let gridNodes = document.querySelectorAll('div[data-bp-grid-w]');
		// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
		// but I like map.
		let gridNodeArr = Array.apply(null, gridNodes);
		gridNodeArr.map(_ => console.log(_));
		*/
	}
}