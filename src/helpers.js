export default function calculateAge(birthdate) {
  return Math.floor(
    new Date().getFullYear() - new Date(birthdate).getFullYear()
  );
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SRC_REGEX = /\.(jpg|jpeg|png|webp|avif|gif)$/;

export const getValidate = (object) => {
  let isValid = true;

  const updatedErrors = {};

  Object.entries(object).forEach(([key, value]) => {
    if (value === "") {
      isValid = false;
      updatedErrors[key] = "This field is required!";
    }
    if (key === "email" && !EMAIL_REGEX.test(value)) {
      isValid = false;
      updatedErrors[key] = "Invalid email address";
    }
    if (key === "avatar" && !SRC_REGEX.test(value)) {
      isValid = false;
      updatedErrors[key] = "Invalid image source";
    }
  });

  return { isValid, updatedErrors };
};

export const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
