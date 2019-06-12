describe("Calculate Bill Function", function() {
    it("Should return 9.00 if input is: 'call, call, call, sms' ", function() {
        var data = "call, call, call, sms"
        assert.equal(totalPhoneBill(data), 9.00) 
    })

    it("Should return 0.00 when there is no input provided", function() {
        var data = ""
        assert.equal(totalPhoneBill(data), 0.00) 
    })

    it("Should false when an invalid data is provided", function() {
        var data = "23232"
        assert.equal(totalPhoneBill(data), 0.00) 
    })
});