// Programmer: Marcus Campos-Jones 
// Team Member: Zach Kirk 
// Bolt ID: 2FAE
// Date 4.30.24: 
// Program: Maze Competition 
// Program URL: https://edu.sphero.com/program/16788348/edit

async function startProgram() {
	// Programmer: Marcus Campos - Start Text & audio checkpoint  Commit - Date: 
	await speak("start",true)
	await scrollMatrixText('start!', { r: 66, g: 56, b: 255 }, 30, true)

	// programmer:        -  Blue LED checkpoint Commit - date:
	setMainLed({ r: 0, g:0, b: 255 });
	await roll((getHeading() + 0), 60, 3);	
	await delay(1);

	// programmer:        -  Sound one checkpoint Commit - date:



	// programmer:        -  Red LED checkpoint Commit - date:



	// programmer:        -  Sound two checkpoint Commit - date:



	// programmer:        -  green checkpoint Commit - date:



	// programmer:        -  Purple Led & Sound three checkpoint Commit - date:



	// programmer:        -  Finsh text & audio commit checkpoint Commit - date:


}
