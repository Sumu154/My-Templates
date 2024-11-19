
export const calculateDiscount = (orgPrice, distPerc) => {
  if(distPerc<0 || distPerc>100){
    throw new console.error("Discount percentage must be between 0 and 100. ");
    
  }

  return orgPrice - (orgPrice*distPerc)/100;
}



