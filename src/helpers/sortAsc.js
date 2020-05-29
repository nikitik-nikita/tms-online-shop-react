export default function sortAsc(array) {
  array.sort((a, b) => b.price.value - a.price.value);

  return array;
}
