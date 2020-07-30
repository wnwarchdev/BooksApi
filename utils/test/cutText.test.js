const cutText = require('../cutText.js');
const expect = require('chai').expect;

describe('CutText', () => {

    it('should return an error if "content" arg is not a string', () => {
        expect(cutText(undefined, 20)).to.equal('Error');
        expect(cutText(12, 20)).to.equal('Error');
        expect(cutText({}, 20)).to.equal('Error');
        expect(cutText([], 20)).to.equal('Error');
        expect(cutText(function() {}, 20)).to.equal('Error');
      });
  
  });