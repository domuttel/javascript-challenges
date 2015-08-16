module.exports = {
  sameLength: function(string1, string2) {
    if (string1.length === string2.length){
      return true;
    } else {
      return false;
    }
  },
  firstGreater: function(a, b) {
    if (a > b) {
      return true;
    } else {
      return false;
    }
  },
  firstGreaterOrEqualTo: function(a, b){
    if (a >= b) {
      return true;
    } else if (a < b) {
      return (false);
    }
  },
  firstLengthGreater: function(a, b){
    if (a.length > b.length) {
      return true;
    } else if (a.length <= b.length){
      return false;
    }
  },
  secondGreater: function(a, b){
    if (a < b) {
      return true;
    } else if (a >= b) {
      return false;
    }
  },
};
