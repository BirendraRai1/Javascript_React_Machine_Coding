export default function basicOps(
  products,
  searchTerm,
  sortDir,
  currCategory,
  pageNum,
  pageSize
) {
  let filteredArr = products;
  function increComparator(product1, product2) {
    if (product1.price > product2.price) return -1;
    else return 1;
  }
  function decreComparator(product1, product2) {
    if (product1.price > product2.price) return 1;
    else return -1;
  }
  if (searchTerm != "") {
    filteredArr = filteredArr.filter((product) => {
      let lowerSearchTerm = searchTerm.toLowerCase();
      let lowerTitle = product.title.toLowerCase();
      return lowerTitle.includes(lowerSearchTerm);
    });
    console.log("filteredArr is ", filteredArr);
  }
  let filteredProductArr = filteredArr;
  if (sortDir != 0) {
    if (sortDir == 1) {
      filteredProductArr = filteredProductArr.sort(increComparator);
      console.log("filteredProductArr increment is ", filteredProductArr);
      console.log("filteredArr increment is ", filteredArr);
    } else {
      filteredProductArr = filteredProductArr.sort(decreComparator);
      console.log("filteredProductArr decrement is ", filteredProductArr);
      console.log("filteredArr decrement is ", filteredArr);
    }
  }
  let filteredAndSortArr = filteredProductArr;
  if (currCategory != "All categories") {
    filteredAndSortArr = filteredAndSortArr.filter((product) => {
      return product.category == currCategory;
    });
    console.log("filteredAndSortArr is ", filteredAndSortArr);
    console.log("filtered Arr is ", filteredArr);
  }
  let totalPage = Math.ceil(filteredAndSortArr.length / pageSize);
  let sidx = (pageNum - 1) * pageSize;
  let eidx = sidx + pageSize;
  filteredAndSortArr = filteredAndSortArr.slice(sidx, eidx);
  console.log("filteredAndSortArr after pagination ", filteredAndSortArr);
  return { filteredAndSortArr, totalPage };
}
