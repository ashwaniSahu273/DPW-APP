/** Array of years starting from 1970 till present */
export const years = (startYear: number = 1970): Array<number> =>{

  return Array.from(
    { length: new Date().getFullYear() + 1 - startYear },
    (_v, i) => i + startYear
  ).reverse();
 }

/**
 * Gets the difference in years between the year when the skill was achieved, and the last used year
 * @param sTmstp  year when skill was achieved
 * @param eTmstp  year when skill was last used
 */
export const getNumYears = (sTmstp?: number, eTmstp?: number): number => {
  const start = sTmstp || 0;
  const end = eTmstp ? eTmstp : new Date().getFullYear();

  if (start && end){
    return end - start;
  } 
  return 0;
};
