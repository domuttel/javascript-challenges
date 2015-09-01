module.exports = {

  person: function() {
  var person = {firstName: "John",
  lastName: "Mayer"};
    return person;
  },

  obj: { lastName: 'cool', sweetness: 'super', extraName: 'cat'},

  sweetnessProperty: function(obj){
    return obj.sweetness;
  },

  obj1: { lastName: 'cool', "savory-ness": 'super', extraName: 'cat' },

  savorynessProperty: function(obj1) {
    return obj1["savory-ness"];
  },

  obj2: { the: true, best: [1,2,3], object: false },

  keys: function(obj2) {
    return Object.keys(obj2);
  },

  sortedKeys: function(obj2) {
    var array = Object.keys(obj2);
    return array.sort();
  },

  reverseSortedKeys: function(obj2) {
    var array = Object.keys(obj2);
    return array.sort().reverse();
  },
};