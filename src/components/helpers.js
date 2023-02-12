export default function calculateAge(birthdate) {
  return Math.floor(
    new Date().getFullYear() - new Date(birthdate).getFullYear()
  );
}

export function ageToBirthdate(age, birthdate) {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;
  const date = new Date(birthdate);
  date.setFullYear(birthYear);
  return date.toISOString();
}
