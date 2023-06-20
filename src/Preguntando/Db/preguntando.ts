import { PreguntasyRespuestas } from "./database";
import { IPreguntaRespuesta } from "./preguntando.interface";

// export function dibujarPreguntasRespuestas(
// 	pr: IPreguntaRespuesta,
// 	elemento: HTMLDivElement
// ) {
// 	elemento.innerHTML = `<h1>${pr.pregunta}</h1>`;

// 	let ul = document.createElement("ul");

// 	pr.respuestas.forEach((r) => {
// 		let li = document.createElement("li");
// 		let btn = document.createElement("button");
// 		btn.value = String(r.correcta);
// 		btn.textContent = r.respuesta;
// 		li.appendChild(btn);
// 		ul.appendChild(li);
// 	});

// 	elemento.appendChild(ul);
// }

// export function mostrarPreguntasyRespuestas(elemento: HTMLDivElement) {
// 	index = 0;
// 	puntaje = 0;
// 	let preguntaActual = db[index].pregunta;
// 	let respuestaActual = db[index].respuestas;
// 	let preguntaNum = index + 1;

// 	elemento.innerHTML = `<h1>${preguntaNum}.${preguntaActual}</h1>`;

// 	let ul = document.createElement("ul");

// 	respuestaActual.forEach((resp) => {
// 		let li = document.createElement("li");
// 		let btn = document.createElement("button");
// 		btn.value = String(resp.correcta);
// 		btn.textContent = resp.respuesta;
// 		li.appendChild(btn);
// 		ul.appendChild(li);
// 		btn.addEventListener("click", () => {
// 			if (btn.value === "true" && db.length -1) {
// 				puntaje++;
// 				index++;
// 				preguntaNum++;
// 				elemento.innerHTML = `<h1>${preguntaNum}.${preguntaActual}</h1>`;
// 			}
// 		});
// 	});
// 	elemento.appendChild(ul);
// }

export function mostrarPreguntasyRespuestas(elemento: HTMLDivElement) {
	let index = 0;
	let puntaje = 0;
	let db = PreguntasyRespuestas;

	function mostrarPregunta() {
		let preguntaActual = db[index].pregunta;
		let respuestaActual = db[index].respuestas;
		let preguntaNum = index + 1;

		elemento.innerHTML = `<h1>${preguntaNum}.${preguntaActual}</h1>`;

		let ul = document.createElement("ul");

		respuestaActual.forEach((resp) => {
			let li = document.createElement("li");
			let btn = document.createElement("button");
			btn.value = String(resp.correcta);
			btn.textContent = resp.respuesta;
			li.appendChild(btn);
			ul.appendChild(li);

			btn.addEventListener("click", () => {
				if (btn.value === "true") {
					puntaje++;
				}
				index++;
				if (index < db.length) {
					mostrarPregunta();
				} else {
					mostrarPuntaje();
				}
			});
		});
		elemento.appendChild(ul);
	}

	function mostrarPuntaje() {
		elemento.innerHTML = `<h1>Puntaje: ${puntaje}</h1>`;
	}

	mostrarPregunta();
}
