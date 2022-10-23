let letras = 'abcdefghijklmnopqrstuvwxyz';
let numeros = '0123456789';
let caracteres = '!#$%&/=?¡*';

export const generatePass = (cantidad, payload) => {
	let lower = '';
	let upper = '';
	let numb = '';
	let spec = '';

	payload.lower ? (lower = letras) : '';
	payload.upper ? (upper = letras.toUpperCase()) : '';
	payload.number ? (numb = numeros) : '';
	payload.special ? (spec = caracteres) : '';

	let allChar = lower + upper + numb + spec;
	let result = '';

	function pass() {
		if (allChar.length > 0) {
			for (let i = 0; i < cantidad; i++) {
				const random = Math.floor(Math.random() * allChar.length);
				result += allChar[random];
			}
		}

		verificar();
	}

	let regex1 = /[a-z]/g;
	let regex2 = /[A-Z]/g;
	let regex3 = /[0-9]/g;
	let regex4 = /[!#$%&/=?¡*]/g;

	let valid1 = false;
	let valid2 = false;
	let valid3 = false;
	let valid4 = false;

	let general = false;
	/* 	let contador = 0; */

	function verificar() {
		/* contador = contador + 1; */

		if (payload.lower === true) {
			valid1 = regex1.test(result);
			/* console.log(valid1); */
		}
		if (payload.upper === true) {
			valid2 = regex2.test(result);
			/* console.log(valid2); */
		}
		if (payload.number === true) {
			valid3 = regex3.test(result);
			/* console.log(valid3); */
		}
		if (payload.special === true) {
			valid4 = regex4.test(result);
			/* console.log(valid4); */
		}

		if (
			valid1 === payload.lower &&
			valid2 === payload.upper &&
			valid3 === payload.number &&
			valid4 === payload.special
		) {
			general = true;
			return;
		}
		valid1 = false;
		valid2 = false;
		valid3 = false;
		valid4 = false;
		result = '';
		pass();
		return;
	}

	pass();

	/* return [result, contador]; */
	return result;
};

/* console.log(
	generatePass(4, {
		lower: false,
		upper: true,
		number: true,
		special: false,
	}),
);
 */
