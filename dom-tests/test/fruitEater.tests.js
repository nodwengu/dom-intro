describe('The FruitEater function ', function(){
    it('should count how many apples have beed eaten', function(){
        var appleAndPearEater = FruitEater();
        appleAndPearEater.eat('apple');
        appleAndPearEater.eat('apple');
        assert.equal(appleAndPearEater.applesEaten(), 2);
    });
    
    it('should count how many apples and pears have beed eaten', function(){
        var appleAndPearEater = FruitEater();
        appleAndPearEater.eat('apple');
        appleAndPearEater.eat('pear');
        appleAndPearEater.eat('apple');
        appleAndPearEater.eat('pear');
        appleAndPearEater.eat('apple');
        assert.equal(appleAndPearEater.applesEaten(), 3);
        assert.equal(appleAndPearEater.pearsEaten(), 2);
    });

    it('should return 0 if input is not apple or pear', function(){
        var appleAndPearEater = FruitEater();
        appleAndPearEater.eat('@sxcxcxd');
        assert.equal(appleAndPearEater.applesEaten(), 0);
    });
})