function FruitEater() {
    var applesCounter = 0;
    var pearsCounter = 0;

    function eat(fruitName) {
        if(fruitName == 'apple') {
            applesCounter++;
        } else if(fruitName == 'pear') {
            pearsCounter++;
        } else {
            return 'error, invalid input'
        }
    }

    function pearsEaten() {
        return pearsCounter;
    }

    function applesEaten() {
        return applesCounter;
    }

    return {
        eat,
        pearsEaten,
        applesEaten
    }
}

// var fruitEaterOne = FruitEater();
// var fruitEaterTwo = FruitEater();

// fruitEaterOne.eat('apple');
// fruitEaterTwo.eat('apple');
// fruitEaterTwo.eat('apple');
// fruitEaterTwo.eat('apple');

// // will print '1'
// console.log(fruitEaterOne.applesEaten());

// // will print '3'
// console.log(fruitEaterTwo.applesEaten());
