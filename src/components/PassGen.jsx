import React from 'react';
import '../css/PassGen.css';

export const PassGen = () => {
	return (
		<>
			<form className='container_generator'>
				<h1 className='Tittle'>Pass Generator</h1>
				<div className='pass_contain'>
					<input type='text' />
					<button>Copy</button>
				</div>
				<div className='range_contain'>
					<h2>Numero de Caracteres: 0</h2>
					<input type='range' name='' id='' min={4} max={20} />
				</div>
				<div className='checked_contain'>
					<label htmlFor='chk_lower'>
						<input type='checkbox' name='lower' id='chk_lower' />
						Minusculas
					</label>
					<label htmlFor='chk_upper'>
						<input type='checkbox' name='upper' id='chk_upper' />
						Mayusculas
					</label>
					<label htmlFor='chk_number'>
						<input type='checkbox' name='number' id='chk_number' />
						Numeros
					</label>
					<label htmlFor='chk_special'>
						<input type='checkbox' name='special' id='chk_special' />
						Especiales
					</label>
				</div>
				<button className='btn_Generator'>GENERAR</button>
			</form>
		</>
	);
};
