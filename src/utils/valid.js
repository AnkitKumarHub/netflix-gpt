export const checkvalidData = (email, password, name = null) => {
  const isEmailValid = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (name !== null) {
    const isNameValid = /^[a-zA-Z\s]+$/.test(name); // Example: Name should contain only letters and spaces
    if (!isNameValid) {
      return "Invalid Name";
    }
  }

  if (!isEmailValid) {
    return "Invalid Email";
  }
  if (!isPasswordValid) {
    return "Invalid Password";
  }

  return null;
};
