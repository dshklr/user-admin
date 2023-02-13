export default function calculateAge(birthdate) {
  return Math.floor(
    new Date().getFullYear() - new Date(birthdate).getFullYear()
  );
}
export const getValidate = (object) => {
  let isValid = true;

  const updatedErrors = {};

  Object.entries(object).forEach(([key, value]) => {
    if (value === "") {
      isValid = false;
      updatedErrors[key] = "This information is important to us!";
    }
  });

  return { isValid, updatedErrors };
};

