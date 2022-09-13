export const isFloat = (val: any) => {
  const floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
  if (!floatRegex.test(val))
      return false;

  val = parseFloat(val);
  if (isNaN(val))
      return false;
  return true;
}

export const isInt = (val: any) => {
  const intRegex = /^-?\d+$/;
  if (!intRegex.test(val))
      return false;
  const intVal = parseInt(val, 10);
  return parseFloat(val) == intVal && !isNaN(intVal);
}