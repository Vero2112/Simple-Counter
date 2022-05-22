import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

//create your first component
export const Contador = (props) => {
	return (
		<div className="container-fluid counter">
			<div className="row justify-content-center">
				<div className="col-1 bg-dark text-white">
					<i className={props.digitoIcono} aria-hidden="true"></i>
				</div>
				<div className="col-1 bg-dark text-white">
					{props.digitoUno % 10}
				</div>
				<div className="col-1 bg-dark text-white">
					{props.digitoDos % 10}
				</div>
				<div className="col-1 bg-dark text-white">
					{props.digitoTres % 10}
				</div>
				<div className="col-1 bg-dark text-white">
					{props.digitoCuatro % 10}
				</div>
				<div className="col-1 bg-dark text-white">
					{props.digitoCinco % 10}
				</div>
				<div className="col-1 bg-dark text-white">
					{props.digitoSeis % 10}
				</div>
			</div>
		</div>
	);
};

Contador.propTypes = {
	digitoIcono: propTypes.string,
	digitoUno: propTypes.number,
	digitoDos: propTypes.number,
	digitoTres: propTypes.number,
	digitoCuatro: propTypes.number,
	digitoCinco: propTypes.number,
	digitoSeis: propTypes.number,
};

let counter = 0;
setInterval(function () {
	const one = Math.floor(counter / 100000);
	const two = Math.floor(counter / 10000);
	const three = Math.floor(counter / 1000);
	const four = Math.floor(counter / 100);
	const five = Math.floor(counter / 10);
	const six = Math.floor(counter / 1);
	counter++;

	ReactDOM.render(
		<Contador
			digitoIcono="far fa-clock"
			digitoUno={one}
			digitoDos={two}
			digitoTres={three}
			digitoCuatro={four}
			digitoCinco={five}
			digitoSeis={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
