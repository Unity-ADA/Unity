function FormatAtomic(decimals: number, total: number): number {
  let returning_value = total;

  switch (decimals) {
    case 10:
      returning_value = total / 1e10;
      break;
    case 9:
      returning_value = total / 1e9;
      break;
    case 8:
      returning_value = total / 1e8;
      break;
    case 7:
      returning_value = total / 1e7;
      break;
    case 6:
      returning_value = total / 1e6;
      break;
    case 5:
      returning_value = total / 1e5;
      break;
    case 4:
      returning_value = total / 1e4;
      break;
    case 3:
      returning_value = total / 1e3;
      break;
    case 2:
      returning_value = total / 1e2
      break;
    case 1:
      returning_value = total / 10
      break;
    case 0:
      break;
    default:
      break;
  }

  return returning_value;
}

export default FormatAtomic;