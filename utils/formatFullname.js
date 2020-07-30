module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  if(fullName.length == 0) return 'Error';
  if(fullName[0] == ' ') return 'Error';
  if(fullName.slice(-1) == ' ') return 'Error';
  if(!fullName.includes(' ')) return 'Error';
  const [ firstName, lastName ] = fullName.split(' ');
  if(!firstName || !lastName) return false;
  const firstNameLetter = firstName[0];
  let firstNameCapital = firstNameLetter.toUpperCase()
  const lastNameLetter = lastName[0];
  const lastNameCapital = lastNameLetter.toUpperCase()

  return firstNameCapital + firstName.slice(1).toLowerCase() + ' ' + lastNameCapital + lastName.slice(1).toLowerCase() ;
};
