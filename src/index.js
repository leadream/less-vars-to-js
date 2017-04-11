export default sheet => {
  const lessVars = {};
  const matches = sheet.match(/@(.*:[^;]*)/g) || [];

  matches.forEach(variable => {
    // calculate the value of this property
    const value = variable.substr(variable.indexOf(':')+1);
    const property = variable.split(/:\s*/)[0];
    lessVars[property] = value;
  });

  return lessVars;
};
