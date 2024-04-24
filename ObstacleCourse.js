ObstacleCourse.js
//programmer: Marcus Campos-Jones
//Team Member: Zach Kirk
//Bolt ID:2FAE
//Date. 4.16.2024
//Program: Hello World - Sandbox
//Program URL:https://edu.sphero.com/program/16700423/edit
//player 1.Marcus campos-Jones
//player 2 .Zack kirk

//checkpoint one
async function startProgram() {
	setMainLed({ r: 200, g:55, b: 0 });
	await roll((getHeading() + 0), 60, 3);	
	await delay(1);
	await roll((getHeading() + 270), 40, 2);
	await delay(1);
	await roll((getHeading() + 270), 50, 2);
}
//player 1 code Marcus Campos-Jones