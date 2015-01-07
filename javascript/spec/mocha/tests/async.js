// MOCHA - Async Test

describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(done){
      var user = new User('Vitor');
      user.save(function(err){
        if (err) throw err;
        done();
      });
    })
  })
})
