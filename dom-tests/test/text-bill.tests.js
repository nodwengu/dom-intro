describe("Text Input Bill Function", function() {
    it('should return total call cost and totals when "call" is entered as input', function(){
        var callBillTotal = TextBillTotal();
        
        callBillTotal.setCallTotal();
        callBillTotal.setCallTotal();
        callBillTotal.getCallTotal()
        assert.equal(callBillTotal.getCallTotal(), 5.50);

        callBillTotal.setCallTotal();
        callBillTotal.setCallTotal();
        callBillTotal.setCallTotal();
        callBillTotal.setCallTotal();
        assert.equal(callBillTotal.getCallTotal(), 16.50);
        callBillTotal.setTotal()
        assert.equal(callBillTotal.getTotal(), 16.50);
    });

    it('should return sms total cost and total cost when "sms" is entered as input', function(){
        var smsBillTotal = TextBillTotal();
        
        smsBillTotal.setSmsTotal();
        smsBillTotal.setSmsTotal();
        assert.equal(smsBillTotal.getSmsTotal(), 1.50);

        smsBillTotal.setSmsTotal();
        smsBillTotal.setSmsTotal();

        smsBillTotal.setTotal()
        assert.equal(smsBillTotal.getTotal(), 3.00);
    });

    it('should return "3.50" when one sms and one call input is provided', function(){
        var BillTotal = TextBillTotal();

        BillTotal.setSmsTotal();
        BillTotal.setCallTotal();
        BillTotal.setTotal()
        assert.equal(BillTotal.getTotal(), 3.50);
    });

    it('should return "0.00" when no data is provided as input', function(){
        var BillTotal = TextBillTotal();

        assert.equal(BillTotal.getCallTotal(), 0.00);
        assert.equal(BillTotal.getSmsTotal(),0.00);
  
        assert.equal(BillTotal.getTotal(), 0.00);
    });

});