export const isExpiredDate = (expirationDate: Date): boolean => {
  const nowDateInNumber = new Date().getTime();
  const expirationDateInNumber = expirationDate.getTime();

  if (expirationDateInNumber < nowDateInNumber) {
    return true;
  }

  return false;
};
