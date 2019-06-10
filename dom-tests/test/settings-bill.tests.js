describe("Settings Bill Function", function() {
    it('should return total call cost when "call" radio button is checked and call input value is provided', function(){
        var billWithSettings1 = billWithSettings();

        assert.equal(billWithSettings1.getCallTotal('call', 2.00), 2.00);
        assert.equal(billWithSettings1.getCallTotal('call', 3.00), 5.00);
        assert.equal(billWithSettings1.getTotal(), 5.00);

        billWithSettings1.getCallTotal('call', 1.00);
        billWithSettings1.getCallTotal('call', 0.00);
        billWithSettings1.getCallTotal('call', 2.00);
        billWithSettings1.getCallTotal('call', 2.00);
        assert.equal(billWithSettings1.getCallTotal('call', 0.00), 10.00);
        assert.equal(billWithSettings1.getTotal(), 10.00);
    });

    it('should return total sms cost when "sms" radio button is checked and sms input value is provided', function(){
        var billWithSettings1 = billWithSettings();

        assert.equal(billWithSettings1.getSmsTotal('sms', 1.00), 1.00);
        assert.equal(billWithSettings1.getSmsTotal('sms', 1.00), 2.00);
        assert.equal(billWithSettings1.getTotal(), 2.00);

        billWithSettings1.getSmsTotal('sms', 1.00);
        billWithSettings1.getSmsTotal('sms', 1.00);
        billWithSettings1.getSmsTotal('sms', 1.00);
        billWithSettings1.getSmsTotal('sms', 1.00);

        assert.equal(billWithSettings1.getSmsTotal('sms', 0.00), 6.00);
        assert.equal(billWithSettings1.getTotal(), 6.00);
    });

    it('should return "0.00" when no radio button is selected but input value is provided', function(){
        var billWithSettings1 = billWithSettings();

        assert.equal(billWithSettings1.getCallTotal(20.00), 0.00);
        assert.equal(billWithSettings1.getSmsTotal(20.00), 0.00);
        assert.equal(billWithSettings1.getTotal(), 0.00);
    });

    it('should return false when no input value is provided but radio button is selected', function(){
        var billWithSettings1 = billWithSettings();

        assert.equal(billWithSettings1.getCallTotal('call'), 'NaN');
        assert.equal(billWithSettings1.getSmsTotal('sms'), 'NaN');
        assert.equal(billWithSettings1.getTotal(), 'NaN');
    });

    it('should return "0.00" when no input is provided', function(){
        var billWithSettings1 = billWithSettings();

        assert.equal(billWithSettings1.getCallTotal(), 0.00);
        assert.equal(billWithSettings1.getSmsTotal(), 0.00);
        assert.equal(billWithSettings1.getTotal(), 0.00);
    });

});