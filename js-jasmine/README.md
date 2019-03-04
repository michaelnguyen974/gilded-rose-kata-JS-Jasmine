# User stories 
## Aged Brie
```
I am aged Brie, 
As long as my quality starts at < 50, it will increase by 2
When my SellIn date is 0

I am aged Brie, 
My quality does not increase regardless of SellIn date, 
When my quality is at the threshold of 50

I am aged Brie, 
My quality will increase by 1, 
when Sellin date is a positive integer

I am aged Brie, 
My quality does not change based on SellIn,
When the threshhold of 50 has been reached

I am aged Brie,
My SellIn date decreases by 1, 
regardless of my quality
```

```
I am any food,
If my SellIn date is a positive integer, 
the quality will decrease by 1

I am anything,
If my SellIn date is 0,
the quality will decrease by 2

I am food, 
Regardless of my quality, 
the Sellin date will decrease by 1
```

```
I am a ticket, 
My quality decreases to 0, 
when SellIn = 0

I am a ticket, 
My quality increases by 1, 
when SellIn < 11 and quality < 50

I am a ticket,
My quality will increase by 2, 
when SellIn <6 and quality threshold hits 50

I am a ticket, 
My quality will increase by 3, 
if SellIn < 6 and quality < 50

I am a ticket, 
My quality will increase by 2, 
if SellIn > 5 and quality < 50 

I am a ticket, 
My quality increases by 1 
if SellIn >= 11

I am a ticket, 
My quality will no depreciate if quality >= 50 and SellIn is a positive integer

I am a ticket, 
My SellIn date decreases by 1, 
Regardless of my quality
```