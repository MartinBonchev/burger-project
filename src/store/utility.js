export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
export const checkValidity = (value, rules) => {
  let isValid = true;
  // eslint-disable-next-line
  const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // eslint-disable-next-line
  const patternNumeric = /^\d+$/;
  if (!rules) return isValid;
  if (rules.required) isValid = value.trim() !== "" && isValid;
  if (rules.minLength) isValid = value.length >= rules.minLength && isValid;
  if (rules.maxLength) isValid = value.length <= rules.minLength && isValid;
  if (rules.isEmail) isValid = patternEmail.test(value) && isValid;
  if (rules.isNumeric) isValid = patternNumeric.test(value) && isValid;
  return isValid;
};
