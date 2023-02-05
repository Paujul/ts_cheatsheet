const twoFer = (name: string = "you"): string => {
  return `One for ${name}, one for me.`;
};

twoFer("Elton");

const isLeapYear = (year: number): boolean => {
  //   return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};
