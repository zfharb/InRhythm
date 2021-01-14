import {longestWord} from '../longest-word-finder.js';

describe("inrhythem interview test", function() {
    it("find longest word in a valid string", function() {
        console.log(longestWord('abc bloomberg bbbb'));
    });

    it("find longest word in a valid string with numbers", function() {
        console.log(longestWord('abc bloomberg 1234567890'));
    });
    
    it("find longest word in an empty string with space", function() {
        try {
            longestWord(' ');
          } catch (e) {
            console.error(e);
          }
    });

    it("find longest word in an empty string with no space", function() {
        try {
            longestWord('');
          } catch (e) {
            console.error(e);
          }
    });

    it("find longest word in a null", function() {
        try {
            longestWord(null);
          } catch (e) {
            console.error(e);
          }
    });

    it("find longest word in a number", function() {
        try {
            longestWord(-21);
          } catch (e) {
            console.error(e);
          }
    });

    it("find longest word in a null", function() {
        try {
            longestWord(true);
          } catch (e) {
            console.error(e);
          }
    });
  });