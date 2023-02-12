export default function calculateAge(birthdate) {
  return Math.floor(
    new Date().getFullYear() - new Date(birthdate).getFullYear()
  );
}
