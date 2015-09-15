/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
  peak: function() {
    return '/\\';
  },

  valley: function() {
    return '___';
  },

  peaks: function(number) {
    var peakQuant = "";
    for (var i = 0; i < number; i++) {
      peakQuant += '/\\';
    }
    return peakQuant;
  },

  valleys: function(number){
    var valleyQuant = "";
    for (var i = 0; i < number; i++) {
      valleyQuant += '___';
    }
    return valleyQuant;
  },

  peaksAndValleys: function (num1, num2) {
    var valleyQuant = "";
    var peakQuant = "";
    for (var i = 0; i < num1; i++) {
      peakQuant += '/\\';
    }
    for (var n = 0; n < num2; n++) {
      valleyQuant += '___';
    }
    return peakQuant + valleyQuant;
  }
};
