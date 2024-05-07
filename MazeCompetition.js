// Programmer: Marcus Campos-Jones 
// Team Member: Zach Kirk 
// Bolt ID: 2FAE
// Date 4.30.24: 
// Program: Maze Competition 
// Program URL: https://edu.sphero.com/program/16788348/edit

async function startProgram() {
	// Programmer: Zach Kirk- Start Text & audio Checkpoint Commit - Date: 4/30
	await speak("start",true)
	await scrollMatrixText('start!', { r: 200, g: 55, b: 0 }, 30, true)
	
	// Programmer:  Marcus Campos Jones      - Blue LED Checkpoint Commit - Date: 5/1
	await roll((getHeading() + 0), 60, 3);	
	await delay(1);
	

    // Programmer: Zach Kirk      - Sound One Checkpoint Commit - Date: 5/1
    setMainLed({ r: 0, g:0, b: 255 });
	await roll((getHeading() + 90), 60, 2);
	await delay(2);
	await speak("Pikachu",true)
	await delay(2);
 
    // Programmer:  Marcus Campos Jones      - Red LED Checkpoint Commit - Date: 5/1
	await roll((getHeading() + 90), 50, 2);
	await delay(2);
	await roll((getHeading() + 45), 40, 2);
	await delay(2);
	setMainLed({ r: 255, g:0, b: 0 });
	await delay(2);
    // Programmer:  Zach Kirk - Sound Two Checkpoint Commit - Date:5/6 
    
	await roll((getHeading() - 90), 40, 1);
    await delay(2);
    await roll((getHeading() + 270), 40, 2);
    await delay(2);
	await roll((getHeading() + 30), 40, 1);
    await delay(2);
	await Sound.Game.DigitalDelay.play(true);
    // Programmer:   marcus Campos-Jones - Green LED Checkpoint Commit - Date: 5/7
	await roll((getHeading() + 45), 40, 1);
    await delay(2);
    await roll((getHeading() + 60), 40, 2);
	await delay(2)
	await roll((getHeading() - 90), 40, 1);
    await delay(2)
	setMainLed({ r: 1, g:253, b: 1 });

    // Programmer:    Zack Kirk    - Purple LED & Sound Three Checkpoint Commit - Date: 5/7
    await roll((getHeading() + 270), 40, 1);
    await delay(2);
    await roll((getHeading() + 60), 40, 1);


    // Programmer:        - Finish Text & Audio Checkpoint Commit - Date: 


}