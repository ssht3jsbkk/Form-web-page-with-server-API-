/*
 * Exercise: Refactor the code!
 *
 * This file is a collection of functions you've been asked to refactor.
 *
 * The primary purpose of this exercise is to use your judgement to decide when
 * and where to introduce appropriate abstractions, and whether you can use
 * either abstractions provided by JavaScript, or write your own.
 *
 * Advice:
 * + Try to recognise common patterns in the code.
 * + When you have recognised a pattern, think about if you could make a
 *   function to encapsulate it, instead of repeating code in several places.
 */
'use strict';

function mapObjKeys (fn, input) {
  return Object.keys(input)
    .reduce(function (acc, key) {
      acc[fn(key)] = input[key];
      return acc;
    }, {});
}

function mapObjVals (fn, input) {
  return Object.keys(input)
    .reduce(function (acc, key) {
      acc[key] = fn(input[key]);
      return acc;
    }, {});
}

function capitalise (str) {
  return str.slice(0, 1).toUpperCase().concat(str.slice(1));
}

function reverse (str) {
  return str.split('').reverse().join('');
}

function increment (n) {
  return n + 1;
}


function capitaliseObjectKeys (input) {
  return mapObjKeys(capitalise, input);
}

function capitaliseObjectValues (input) {
  return mapObjVals(capitalise, input);
}

function incrementObjectValues (input) {
  return mapObjVals(increment, input);
}

function reverseObjectKeys (input) {
  return mapObjKeys(reverse, input);
}

/* 3)


  function capitalise (str) {
  return str.slice(0, 1).toUpperCase().concat(str.slice(1));
}

function capitaliseObjectKeys (input) {
  return Object.keys(input)
    .reduce(function (acc, key) {
      acc[capitalise(key)] = input[key];
      return acc;
    }, {});
}


function capitaliseObjectValues (input) {
  return Object.keys(input)
    .reduce(function (acc, key) {
      acc[key] = capitalise(input[key]);
      return acc;
    }, {});
}

function incrementObjectValues (input) {
  return Object.keys(input)
    .reduce(function (acc, key) {
      acc[key] = input[key] + 1;
      return acc;
    }, {});
}

function reverseObjectKeys (input) {
  return Object.keys(input)
    .reduce(function (acc, key) {
      const reversedKey = key.split('').reverse().join('');
      acc[reversedKey] = input[key];
      return acc;
    }, {});
} */


/*  2)


  var capitalise = (value) => {
  return value.slice(0, 1).toUpperCase().concat(value.slice(1));

};

function capitaliseObjectKeys(input){
return Object.keys(input)
  .reduce((acc,cur) => {
return acc[capitalise(cur)] = input[cur];
  }, {});
}

function capitaliseObjectValues(input){
return Object.keys(input)
  .reduce((acc,cur) => {
return acc[cur] = capitalise(input[cur]);
  }, {});
} */


/*  1)



  function capitaliseObjectKeys (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const capitalisedKey = keys[ii].slice(0, 1).toUpperCase().concat(keys[ii].slice(1));
    result[capitalisedKey] = input[keys[ii]];
  }

  return result;
}


function capitaliseObjectValues (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const value = input[keys[ii]];
    const capitalisedValue = value.slice(0, 1).toUpperCase().concat(value.slice(1));
    result[keys[ii]] = capitalisedValue;
  }

  return result;
}

function incrementObjectValues (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const value = input[keys[ii]];
    result[keys[ii]] = value + 1;
  }

  return result;
}

function reverseObjectKeys (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const reversedKey = keys[ii].split('').reverse().join('');
    result[reversedKey] = input[keys[ii]];
  }

  return result;
}
*/
