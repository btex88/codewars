function isPrime(num) {
  if (typeof num !== 'number') return false;
  if (num === 2 || num === 3) return true;
  if (num > 2) {
    for (index = 2; index < num; index += 1) {
      if (num % index === 0) return false;
    }
    return true;
  }
  return false;
}
