describe("Text Input Bill Function", function() {
    it('should return total call cost and totals when "call" is entered as input', function(){
        var callBillTotal = TextBillTotal();
        
        assert.equal(callBillTotal.getCallTotal('call'), 2.75);

        callBillTotal.getCallTotal('call');
        callBillTotal.getCallTotal('call');
        callBillTotal.getCallTotal('call');
        callBillTotal.getCallTotal('call');
        assert.equal(callBillTotal.getCallTotal('call'), 16.50);
        assert.equal(callBillTotal.getTotal(), 16.50);
    });

    it('should return sms total cost and total cost when "sms" is entered as input', function(){
        var smsBillTotal = TextBillTotal();
        
        smsBillTotal.getSmsTotal('sms');
        smsBillTotal.getSmsTotal('sms');
        assert.equal(smsBillTotal.getSmsTotal('sms'), 2.25);
        
        assert.equal(smsBillTotal.getSmsTotal('sms'), 3.00);

        smsBillTotal.getSmsTotal('sms');
        smsBillTotal.getSmsTotal('sms');

        assert.equal(smsBillTotal.getTotal(), 4.50);
    });

    it('should return "3.50" when one sms and one call input is provided', function(){
        var BillTotal = TextBillTotal();

        BillTotal.getSmsTotal('sms');
        BillTotal.getCallTotal('call');
        assert.equal(BillTotal.getTotal(), 3.50);
    });

    it('should return "0.00" when no data is provided as input', function(){
        var BillTotal = TextBillTotal();

        assert.equal(BillTotal.getCallTotal(), 0.00);
        assert.equal(BillTotal.getSmsTotal(),0.00);
        assert.equal(BillTotal.getTotal(), 0.00);
    });

    it('should return "0.00" when an invalid data is provided as input', function(){
        var BillTotal = TextBillTotal();

        assert.equal(BillTotal.getCallTotal('dssd'), 0.00);
        assert.equal(BillTotal.getSmsTotal('234r'), 0.00);
        assert.equal(BillTotal.getTotal(), 0.00);
    });
    
});