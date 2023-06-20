import { IPreguntaRespuesta } from "./preguntando.interface";

export const PreguntasyRespuestas: IPreguntaRespuesta[] = [
	{
		pregunta: "¿Cuál es el país más poblado del mundo?",
		respuestas: [
			{
				respuesta: "China",
				correcta: true,
			},
			{
				respuesta: "India",
				correcta: false,
			},
			{
				respuesta: "Estados Unidos",
				correcta: false,
			},
			{
				respuesta: "Brasil",
				correcta: false,
			},
		],
	},
	{
		pregunta: "¿Cual es el océano más grande del mundo?",
		respuestas: [
			{
				respuesta: "Pacífico",
				correcta: true,
			},
			{
				respuesta: "Atlántico",
				correcta: false,
			},
			{
				respuesta: "Índico",
				correcta: false,
			},
			{
				respuesta: "Ártico",
				correcta: false,
			},
		],
	},
	{
		pregunta: "¿Cuál es el álbum más vendido de todos los tiempos?",
		respuestas: [
			{
				respuesta: "Back in Black - AC/DC",
				correcta: true,
			},
			{
				respuesta: "Thriller - Michael Jackson",
				correcta: false,
			},
			{
				respuesta: "The Dark Side of the Moon - Pink Floyd",
				correcta: false,
			},
			{
				respuesta: "Abbey Road - The Beatles",
				correcta: false,
			},
		],
	},
];
