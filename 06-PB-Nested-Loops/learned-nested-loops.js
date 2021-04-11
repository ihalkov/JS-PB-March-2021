let i = 0;
while (i < 4) {
  switch(i) {
    case 1:    console.log(i);
    case 2:    console.log(i);
    case 3:    console.log(i);
    break;
  }
  i++;
}
// case 1 || case 2 || case 3
// This method takes advantage of the fact that if there is no break below a case clause
// it will continue to execute the next case clause regardless if the case meets the criteria.