export function oneOf<T>(value: T, valueList: Array<T>): boolean {
  for (let i = 0; i < valueList.length; i++) {
    if (value === valueList[i]) {
      return true;
    }
  }
  return false;
}
