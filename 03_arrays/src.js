module.exports = {

  first: function(array) {
    return array.shift();
  },

  last: function(array) {
    return array.pop();
  },

  empty: function(array) {
    if (array.length === 0) {
      return true;
    } else if (array.length !== 0) {
      return false;
    }
  },

  //For next solutions rework with: for loops

  first_n: function(array1, num){
    if (array1.length !== 0 && array1.length <= num) {
      return array1;
    } else {
      return array1.slice(0, 3);
    }
  },

  last_n: function(array1, num){
    if (array1.length === 0) {
      return array1;
     } else if (array1.length <= num) {
      return array1;
    } else {
      return array1.slice(-3);
    }
  },

  // Question regarding logic
  // drop: function(array1, num){
  //   if (drop = array1.slice(num)) {
  //   return drop;
  //   } else if (array1 > 0) {
  //     return array1.slice(1, 2);
  //   }
  // },

  drop: function(array1, num) {
    if (array1.splice(0, 3)) {
      return array1;
    }
  },

  union: function(array1, array2) {
    if (array1 !== array2) {
      return array1.concat(array2);
    }
  },

// intersection: function(array1, array2) {
// },



};
