# blackjack
JavaScript single page blackjack game

## Table of Contents
* [General Information](#General-Information)
* [Requirements](#requirements)
* [Installation](#installation)
* [Instructions](#instructions)
* [Status](#status)

## General Information
Visualizer for pathfinding algorithms created with 
- JavaScript
- JQuery

## Requirements
This is a web based app, so you need a web browser to run it

## Installation
- Download the .zip archive from this [github page](https://github.com/SteHeRa/blackjack)
- Unarchive it
- Open file "index.html"

## Instructions
- Upon pressing the 'Deal' button, you and the dealer will be dealt two cards each.
- The dealer's cards will be dealt one exposed and one hidden.
- Your aim is to have the sum of your cards' values be greater than the dealers, without going over 21.
- All number cards have the value displayed on the card (2 through 10).
- Face cards (Jack, Queen, King) are all worth 10 and an Ace can either equal 11 or 1.
- You can attempt to increase the score of your hand being pressing 'Hit' and being dealt a new card.
- If your score exceeds 21 and you have an Ace with value 11 in your hand, it will automatically set its value to 1.
- Once you are happy with your hand, press the 'Stand' button.
- The dealer will then reveal their hidden card and will 'Hit' until their score is at least 17.
- Once the dealer's score is at least 17 they will stand.
- If your score exceeds 21 you 'bust' and you lose, even if the dealer's score exceeds 21.
- If the dealer 'busts' and you do not, you win.
- If your final score is higher than the dealer's and the dealer does not go bust, you win.
- If both you and the dealer have the same score, it's a tie.
- Good luck!

## Status
I'm happy with the state if this for now, but may add animations to cards being dealt and time delay between dealer hits.
