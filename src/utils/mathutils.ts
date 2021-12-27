

export function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

export function radiansToDegrees(radians: number) {
  return radians * 180.0 / Math.PI
}

//javascript % operator by default has undesired behavior for negative numbers
export function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}