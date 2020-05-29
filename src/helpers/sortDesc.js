export default function sortDesc(array) {
  array.sort((a, b) => a.price.value - b.price.value);

  return array;
}
