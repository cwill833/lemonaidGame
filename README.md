# lemonadeGame

[**Wireframe save**](https://wireframe.cc/Jyh39k)

[**link to game**](https://cwill833.github.io/lemonaidGame/)

# How much lemonade can you sell in 5 min????

Pseudocode: May 1st 2019

You will have 5:00min  to make as much money as you can.
This will be a high score beater game.
The game will start with nothing happening just show the buttons you can click.

There will be anywhere from 4-6 buttons 
each button will be something you can use toward your drinks
Player starts out with 10$

There will be an aside that will display timer countdown with how much time is left in the game and how much money has been accumulated. Also a reset button to play again

The circles will show icons/img of the upgrades that are being purchase.

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

Once your time has expired, game over, money accumulated is how much money you have accumulated selling lemonade…… can you beat it?

### Above was the thought process of this game on day 1......My how it had grown!

My game is a good old fashion clicker game!  
The object of the game is to click the sell buttons in order to make as much money as you can within 100 seconds.  
See above where I first thought 5 minutes was a good idea for play time.... You'll have enough after 100 seconds ;)  
Now you also have upgrade buttons, however, that cost money and can only be clicked 3 times!  
Good news is once you upgrade a certain clicker, the upgraded speed remains for the rest of the time.

I got my inspiration from a game called [AdVenture Capitalist](https://play.google.com/store/apps/details?id=com.kongregate.mobile.adventurecapitalist.google&hl=en_US) so if you enjoyed my game, I highly recommend playing this one!

The game starts off with an instruction page that shows the buttons that will appear and what they do.  
![Landing Page](https://i.imgur.com/XsgamvK.png)

