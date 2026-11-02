export const internationalPhoneError =
  "Enter a valid phone number with its international country code, for example +1 415 555 0132.";

export function isValidInternationalPhone(value: string) {
  const phone = value.trim();
  if (!/^(?:\+|00)[\d\s().-]+$/.test(phone)) return false;

  const digits = phone.replace(/\D/g, "");
  const nationalDigits = phone.startsWith("00") ? digits.slice(2) : digits;
  return nationalDigits.length >= 7 && nationalDigits.length <= 15;
}
