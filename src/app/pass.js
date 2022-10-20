let letras = 'abcdefghijklmnopqrstuvwxyz';
let numeros = '0123456789';
let caracteres = '°!"#$%&/=?¡¨*';

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

	let regex1 = /[0-9]/g;
	let regex2 = /[a-z]/g;
	let regex3 = /[A-Z]/g;
	let regex4 = /[°!"#$%&/=?¡¨*]/g;

	let valid1 = true;
	let valid2 = true;
	let valid3 = true;
	let valid4 = true;

	let general = false;

	function pass() {
		if (allChar.length > 0) {
			for (let i = 0; i < cantidad; i++) {
				const random = Math.floor(Math.random() * allChar.length);
				result += allChar[random];
			}
		}

		payload.lower ? '' : (valid1 = regex1.test(result));
		payload.upper ? '' : (valid2 = regex2.test(result));
		payload.number ? '' : (valid3 = regex3.test(result));
		payload.special ? '' : (valid4 = regex4.test(result));

		general = valid1 * valid2 * valid3 * valid4;
	}

	if (general == false) {
		pass();
	}

	return result;
};
