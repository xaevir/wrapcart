var map = function(){
  for (var i in this.dependentOn) {
    emit(i, this);
  }
};

var reduce = function(key, emits) {
  var children = [];
  for (var i in emits) {
    children.push(i);
  }
  return children;
};

db.runCommand({"mapreduce": "attributes", "map": map, "reduce": reduce, "out": "bobbycool"})

