import * as $ from "jquery"
import Bloc from './bloc'

export default class Grid {

	constructor(el:HTMLElement) {
		const blocs: Bloc[] = $( '> div', el ).map( (i, el) => { return new Bloc(el) } ).get()
	}
}