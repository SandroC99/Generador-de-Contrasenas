import React, { useEffect } from 'react';
import '../css/PassGen.css';
import { useSelector, useDispatch } from 'react-redux';
import { UPD_RANGE, UPD_CHECKED, P_GENERATE } from '../reducer/passGen/passGenSlice';

export const PassGen = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.passGenSlice);

	useEffect(() => {
		if (state.checked.lower == true) {
			document.getElementById('chk_lower').checked = true;
		}
		if (state.checked.upper == true) {
			document.getElementById('chk_upper').checked = true;
		}
		if (state.checked.number == true) {
			document.getElementById('chk_number').checked = true;
		}
		if (state.checked.special == true) {
			document.getElementById('chk_special').checked = true;
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('values_passGen', JSON.stringify(state));
	}, [state]);

	const BUTTON_COPY = (e) => {
		e.preventDefault();
		navigator.clipboard.writeText(state.password);
		console.log('Contraseña copiada');
	};
	const HANDLE_RANGE = (e) => {
		dispatch(UPD_RANGE(e.target.value));
		console.log('Rango cambiado');
	};
	const HANDLE_CHECKED = (e) => {
		dispatch(UPD_CHECKED(e.target.name));
		console.log('Opciones actualizadas');
	};
	const BUTTON_GENERATOR = (e) => {
		e.preventDefault();
		dispatch(P_GENERATE());
		console.log('Contraseña generada');
	};

	const VERIFICAR = () => {
		console.log(state);
	};
	return (
		<>
			<form className='container_generator'>
				<h1 className='Tittle'>Pass Generator</h1>
				<div className='pass_contain'>
					<input type='text' value={state.password} readOnly />
					<button onClick={BUTTON_COPY}>Copy</button>
				</div>
				<div className='range_contain'>
					<h2>Numero de Caracteres: {state.range}</h2>
					<input
						onChange={HANDLE_RANGE}
						type='range'
						name=''
						id=''
						min={4}
						max={20}
						value={Number(state.range)}
					/>
				</div>
				<div className='checked_contain'>
					<label htmlFor='chk_lower'>
						<input
							onClick={HANDLE_CHECKED}
							type='checkbox'
							name='lower'
							id='chk_lower'
						/>
						Minusculas
					</label>
					<label htmlFor='chk_upper'>
						<input
							onClick={HANDLE_CHECKED}
							type='checkbox'
							name='upper'
							id='chk_upper'
						/>
						Mayusculas
					</label>
					<label htmlFor='chk_number'>
						<input
							onClick={HANDLE_CHECKED}
							type='checkbox'
							name='number'
							id='chk_number'
						/>
						Numeros
					</label>
					<label htmlFor='chk_special'>
						<input
							onClick={HANDLE_CHECKED}
							type='checkbox'
							name='special'
							id='chk_special'
						/>
						Especiales
					</label>
				</div>
				<button onClick={BUTTON_GENERATOR} className='btn_Generator'>
					GENERAR
				</button>
			</form>
			<button onClick={VERIFICAR}>Confirmar</button>
		</>
	);
};
