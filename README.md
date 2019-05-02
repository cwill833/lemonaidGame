# lemonaidGame
Wireframe save = https://wireframe.cc/Jyh39k

How much lemonade can you sell in 5 min????

Pseudocode:

You will have 3s:00min  to make as much money as you can.
This will be a high score beater game.
The game will start with nothing happening just show the buttons you can click.

There will be anywhere from 4-6 buttons 
each button will be something you can use toward your drinks
Player starts out with 10$

There will be an aside that will display timer countdown with how much time is left in the game and how much money has been accumulated. Also a reset button to play again

The circles will show icons/img of the upgrades that are being purchase.

Grey buttons ={
First button = lemonade worth 1$ (side button upgrade - which speeds up time but costs money)  
Second button = ice worth 2$ (side button upgrade - which speeds up time but costs money to unlock) 
third button = honey worth 3$ (side button upgrade - which speeds up time but costs money to unlock) 
Forth = straw  worth 5$ (side button upgrade - which speeds up time but costs money to unlock) 
Fifth = umbrella  worth 11$ (side button upgrade - which speeds up time but costs money to unlock) 
Sixth = metal cups  worth 25$ (side button upgrade - which speeds up time but costs money to unlock) 
}

The gray button will need to be pressed in order to active that timer. Once timer completes add specific value to money accumulated. 
They are all going to have initial timers for completion from shortest time (first button) to longest time(sixth button). 

Code would be something like:
	-on click (grey button)
	-start timer or add time to timer
	-once time === 0 =>(this will prob be a while loop)
		-add button value to money accumulated 

Buttons 2-6 will need  be purchased first to use. Upgrades will also unlock which can be click go speed up timer for a price - it may or may not get more expensive each click also we will see…

Black buttons = {
will be blacked out until money accumulated raises above cost
once money acc is >= cost, button will become a different color signaling its available to click to purchase 
These buttons will subtract time off the original button timer each time its clicked but will deduct money also each time its click 

}

 Code would be something like:
	let active =  false
	color = black 
	cost = $
	if moneyAcc>= cost  ==> turn green
	on click turn active true
	if active  true
		on click 
			subtract time from grey button timer
			subtract money from money acc


Once your time has expired, game over, money accumulated is how much money you have accumulated selling lemonade…… can you beat it?



