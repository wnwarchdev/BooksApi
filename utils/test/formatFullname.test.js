const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;



describe('formatFullname', () => {

    it('should return an error if "content" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(213)).to.equal('Error');
        expect(formatFullname(true)).to.equal('Error'); 
      });

    it('should return an error if "fullName" arg length is 0', () => {
        expect(formatFullname(null)).to.equal('Error');
        expect(formatFullname('')).to.equal('Error');
      });

    it('should return first letter capital, rest in lowercase', () => {
        expect(formatFullname('Amanda Doe')).to.equal('Amanda Doe');
        expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
        expect(formatFullname('aManDA dOe')).to.equal('Amanda Doe');
      });

    it('should return an error if "fullName" has no spaces', () => {
        expect(formatFullname('Amanda')).to.equal('Error');
      });

    it('should return an error if "fullName" starts or ends with space', () => {
        expect(formatFullname(' manda')).to.equal('Error');
        expect(formatFullname('Amand ')).to.equal('Error');
      });

    it('should return name and surname only if "fullName" has more than one space', () => {
        expect(formatFullname('Amanda Doe Doe')).to.equal('Amanda Doe');
      });

     
  
  });