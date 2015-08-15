module.exports = {

  helloWorld: function(){
    return "Hello World";
  },

  hello: function(string){
     return "Hello " + string;
  },

  shout: function(string){
   return "Hello " + string.toUpperCase();
  },

  whisper: function(string){
    return "Hello " + string.toLowerCase();
  },
  separate: function(string){
    return string.split("");
  },
  reverseJoin: function(array){
    array.reverse();
    var whiteSpace = array.join(",");
    return whiteSpace;
  },
  reverseJoinCompact: function(array){
    array.reverse();
    var noSpace = array.join("");
    return noSpace;
  },
  backwardsDay: function(string){
    array = string.split("");
    array.reverse();
    // have to create a new var to hold the joined ["g", "o", "r", "F"] :: join(); also joins the ARRAY as a STRING
    var joined = array.join("");
    return "Hello " + joined;
  },
};

