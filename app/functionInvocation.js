
QUnit.test( "hello test", function( assert ) {

    var list=["raman","neha","noni"];
    foreach(list,function(index){
        assert.equal(this,list[index],"Got the expected value of " + list [index]);
    });
});
function foreach(list,callback) {
    for (var n = 0; n < list.length; n++) {
        callback.call(list[n],n);
    }
}

