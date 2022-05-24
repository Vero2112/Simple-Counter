import React, { useState } from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

//create your first component
export const Contador = (props) => {
	const [counter, setCounter] = useState(95);
	const stoptime = function myStopFunction() {
		clearInterval(myInterval);
	};
	const resettime = function (sec) {
		sec = typeof sec !== "undefined" ? sec : 0;
		counter = sec;
		generateTime(time);
	};

	const gettime = function () {
		return counter;
	};
	return (
		<div>
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
			<div className="position-absolute top-50 start-50 translate-middle">
				<button className="m-2">Countdown</button>
				<button onClick={stoptime} className="m-2">
					Stop
				</button>
				<button onClick={resettime} className="m-2">
					Reset
				</button>
				<button onClick={gettime} className="m-2">
					Resume
				</button>
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
const myInterval = setInterval(function generateTime(time) {
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
