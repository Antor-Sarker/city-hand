export function get5DigitId(id) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) % 100000;
  }
  return "BK" + hash.toString().padStart(5, "0");
}
