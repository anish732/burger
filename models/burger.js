var orm = require("../config/orm.js");

var burger = {
    selectAll : function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        })
    },
    insertOne : function(cols,vals,cb){
        console.log("Inside modell",vals)
        orm.insertOne ("burgers ",cols,vals,function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            console.log("update condition")
          cb(res);
        });
      },
      deleteOne: function(condition,cb){
          orm.deleteOne("burgers",condition, function(res){
              cb(res);
          })
      }
    
}

module.exports = burger;
