describe("Settings Bill Function", function() {
    it('should return total call cost when "call" radio button is checked and call input value is provided', function(){
        var billWithSettings1 = billWithSettings();

        billWithSettings1.setCallTotal(2.00);
        //billWithSettings1.setCallTotal(3.00);
        billWithSettings1.getCallTotal()

        assert.equal(billWithSettings1.getCallTotal(), 5.00);
        billWithSettings1.setTotal();
        assert.equal(billWithSettings1.getTotal(), 5.00);

        billWithSettings1.setCallTotal(1.00);
        billWithSettings1.setCallTotal(0.00);
        billWithSettings1.setCallTotal(2.00);
        billWithSettings1.setCallTotal(2.00);
        assert.equal(billWithSettings1.getCallTotal(), 10.00);
        billWithSettings1.setTotal();
        assert.equal(billWithSettings1.getTotal(), 10.00);
    });

    it('should return total sms cost when "sms" radio button is checked and sms input value is provided', function(){
        var billWithSettings1 = billWithSettings();

        billWithSettings1.setSmsTotal(1.00);
        billWithSettings1.setSmsTotal(1.00);

        assert.equal(billWithSettings1.getSmsTotal(), 2.00);
        billWithSettings1.setTotal();
        assert.equal(billWithSettings1.getTotal(), 2.00);

        billWithSettings1.setSmsTotal(1.00);
        billWithSettings1.setSmsTotal(1.00);
        billWithSettings1.setSmsTotal(1.00);
        billWithSettings1.setSmsTotal(1.00);

        assert.equal(billWithSettings1.getSmsTotal(), 6.00);
        billWithSettings1.setTotal();
        assert.equal(billWithSettings1.getTotal(), 6.00);
    });

    it('should return totals when a valid input value for "calls and sms" is provided', function(){
        var billWithSettings1 = billWithSettings();

        billWithSettings1.setCallTotal(20.00);
        billWithSettings1.setSmsTotal(20.00);

        assert.equal(billWithSettings1.getCallTotal(), 20.00);
        assert.equal(billWithSettings1.getSmsTotal(), 20.00);
        billWithSettings1.setTotal();
        assert.equal(billWithSettings1.getTotal(), 40.00);
    });

    it('should return false when no input value is provided', function(){
        var billWithSettings1 = billWithSettings();

        billWithSettings1.setCallTotal();
        billWithSettings1.setSmsTotal();

        assert.equal(billWithSettings1.getCallTotal(), 'NaN');
        assert.equal(billWithSettings1.getSmsTotal(), 'NaN');

        billWithSettings1.setTotal();
        assert.equal(billWithSettings1.getTotal(), 'NaN');
    });
});