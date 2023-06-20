import { mostrarPreguntasyRespuestas } from "./Preguntando/Db/preguntando";

export const divApp = document.querySelector<HTMLDivElement>("#app")!;
const divPuntaje = document.querySelector<HTMLDivElement>("#divPuntaje")!;

// dibujarPreguntasRespuestas(db[0], divApp);

// console.log(db.length);
// b.forEach((btn) => {
// 	btn.addEventListener("click", () => {
// 		for (let cont = 0; cont < db.length - 1; cont++) {
// 			if (btn.value == "true" && cont < db.length - 1) {
// 				dibujarPreguntasRespuestas(db[cont], divApp);
// 				console.log(cont);
// 			} else {
// 				console.log("false");
// 			}
// 		}
// 	});
// });

mostrarPreguntasyRespuestas(divApp);
