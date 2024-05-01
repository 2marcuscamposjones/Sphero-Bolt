// Programmer: Marcus Campos-Jones 
// Team Member: Zach Kirk 
// Bolt ID: 2FAE
// Date 4.30.24: 
// Program: Maze Competition 
// Program URL: https://edu.sphero.com/program/16788348/edit

async function startProgram() {
	// Programmer: zack Kirk - Start Text & audio checkpoint  Commit - Date:4/30
	await speak("start",true)
	await scrollMatrixText('start!', { r: 66, g: 56, b: 255 }, 30, true)


	// programmer: Marcus Campos-Jones -  Blue LED checkpoint Commit - date:5/1
	setMainLed({ r: 0, g:0, b: 255 });
	await roll((getHeading() + 0), 60, 3);	
	await delay(1);


	// programmer:  Zack Kirk-Sound one checkpoint Commit-date:5/1
	setMainLed({ r: 0, g:255, b: 0 });
	await roll((getHeading() + 90), 60, 2);
	await speak("Among Us",true)


	// programmer:   marcus campos-Red LED checkpoint Commit-date:5/1
	setMainLed({ r: 255, g:0, b: 0 });
	await roll((getHeading() + 90), 50, 2);
	await delay(2);
	await roll((getHeading() + 45), 40, 2);
	// programmer:        -  Sound two checkpoint Commit - date:



	// programmer:        -  green checkpoint Commit - date:



	// programmer:        -  Purple Led & Sound three checkpoint Commit - date:



	// programmer:        -  Finsh text & audio commit checkpoint Commit - date:


}
