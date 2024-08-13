export const validateName = (value: string): boolean => {
  const flags = "gm";
  const pattern = "[A-Za-z]";
  const regexPattern = new RegExp(pattern, flags);

  console.log(regexPattern.test(value));

  return regexPattern.test(value);
};

export const validateEmail = (email: string) => {
  const flags = "gm";
  const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}";
  const regexPattern = new RegExp(pattern, flags);

  return regexPattern.test(String(email).toLowerCase());
};
