describe("Settings Bill Function", function() {
    it('should return totals when one of radio button is checked and input values are provided', function(){
        var billWithSettings1 = billWithSettings();

        billWithSettings1.setWarningLevel(10)
        billWithSettings1.setCriticalLevel(20)

        billWithSettings1.setCallCost(2.00);
        billWithSettings1.setSmsCost(1.00);

        billWithSettings1.makeCall();
        billWithSettings1.sendSms();

        assert.equal(billWithSettings1.getCallTotal(), 2.00);
        assert.equal(billWithSettings1.getSmsTotal(), 1.00);
        assert.equal(billWithSettings1.getTotal(), 3.00);
       
        assert.equal(billWithSettings1.getCritical(), 20);
        assert.equal(billWithSettings1.getWarning(), 10);
    });

    it('should return total call cost when "call" radio button is checked and call input value is provided', function(){
        var billWithSettings1 = billWithSettings();

        billWithSettings1.setWarningLevel(10)
        billWithSettings1.setCriticalLevel(20)

        billWithSettings1.setCallCost(2.00);
        billWithSettings1.makeCall();

        assert.equal(billWithSettings1.getCallTotal(), 2.00);
        
        billWithSettings1.makeCall();
        assert.equal(billWithSettings1.getTotal(), 4.00);

        billWithSettings1.makeCall();
        billWithSettings1.makeCall();
        billWithSettings1.makeCall();
       
        assert.equal(billWithSettings1.getCallTotal(), 10.00);
        assert.equal(billWithSettings1.getTotal(), 10.00);

        assert.equal(billWithSettings1.getCritical(), 20);
        assert.equal(billWithSettings1.getWarning(), 10);
    });

    it('should return total sms cost when "sms" radio button is checked and sms input value is provided', function(){
        var billWithSettings1 = billWithSettings();

        billWithSettings1.setSmsCost(1.00);
        billWithSettings1.sendSms();

        assert.equal(billWithSettings1.getSmsTotal(), 1.00);
        assert.equal(billWithSettings1.getTotal(), 1.00);

        billWithSettings1.sendSms();
        billWithSettings1.sendSms();
       
        assert.equal(billWithSettings1.getSmsTotal(), 3.00);
        assert.equal(billWithSettings1.getTotal(), 3.00);
    });

    it('should critical and warning levels when input is provided', function(){
        var billWithSettings1 = billWithSettings();

        billWithSettings1.setWarningLevel(10)
        billWithSettings1.setCriticalLevel(20)

        assert.equal(billWithSettings1.getCritical(), 20);
        assert.equal(billWithSettings1.getWarning(), 10);
    });

    it('should return false when input value for sms and call is not provided', function(){
        var billWithSettings1 = billWithSettings();

        billWithSettings1.setSmsCost();
        billWithSettings1.setCallCost();
        billWithSettings1.makeCall();
        billWithSettings1.sendSms();

        assert.equal(billWithSettings1.getSmsTotal(), 'NaN');
        assert.equal(billWithSettings1.getCallTotal(), 'NaN');
        assert.equal(billWithSettings1.getTotal(), 'NaN');
    });
});