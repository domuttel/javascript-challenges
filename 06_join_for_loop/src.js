/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
  var string = "";
    for (i = 0; i < list.length; i++) {
      string += list[i];
    }
    return string;
  },

  joinWithForAndIndex: function(list) {
  var string = "";
    for (i = 0; i < list.length; i++) {
      string += list[i] + i;
    }
    return string;
  },

  joinWithoutOddCharacters: function(list) {
    var string = "";
    for (i = 0; i < list.length; i = i + 2) {
      string += list[i];
    }
    return string;
  },

  joinWithForAndToken: function(list) {
    var string = "";
    for (var i = 0; i < list.length; i++) {
      string += list[i] + '*';
    }
    return string.slice(0, -1);
  },

  joinWithForAndAlternatingTokens: function(list) {
    var string = "";
    for (var i = 0; i < list.length; i++) {
      if (list[i] % 2 === 0) {
        string += list[i] + '+';
      }
      else {
        string += list[i] + '*';
      }
    }
    return string.slice(0, -1);
  }

};
