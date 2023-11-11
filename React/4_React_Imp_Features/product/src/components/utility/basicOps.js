export default function basicOps(
  products,
  searchTerm,
  sortDir,
  currCategory,
  pageNum,
  pageSize
) {
  /*************filtering -> hiding  products*************/
  //Since products is an object .Therefore filteredArr is also an object
  let filteredArr = products;
  if (searchTerm != "") {
    filteredArr = filteredArr.filter((product) => {
      let lowerSearchTerm = searchTerm.toLowerCase();
      let lowerTitle = product.title.toLowerCase();
      return lowerTitle.includes(lowerSearchTerm);
    });
  }
  /***********************sorting -> rearranging the products**********************************/
  //since filteredArr is an object . Therefore filteredSortedArr is also an object so after sorting we need need not to reassign filteredSortedArr to filteredArr
  let filteredSortedArr = filteredArr;
  if (sortDir != 0) {
    // increasing
    if (sortDir == 1) {
      filteredSortedArr = filteredSortedArr.sort(incComparator);
    }
    //    decreasing order
    else {
      filteredSortedArr = filteredSortedArr.sort(decComparator);
    }
  }

  /**************************categorization**********************************************/
  let filteredSortedgroupByArr = filteredSortedArr;
  if (currCategory != "All categories") {
    filteredSortedgroupByArr = filteredSortedgroupByArr.filter((product) => {
      return product.category == currCategory;
    });
  }

  let totalPages = Math.ceil(filteredSortedgroupByArr.length / pageSize); //math.ceil is used because if we have 3/5 then floor will give 0 and ceil will give 1
  /************************Pagination *********************/
  let sidx = (pageNum - 1) * pageSize;
  let eidx = sidx + pageSize;
  filteredSortedgroupByArr = filteredSortedgroupByArr.slice(sidx, eidx);
  console.log(filteredSortedArr);

  return { filteredSortedgroupByArr, totalPages };
}

// totalNumber of pages =totalNumPages = total element /elementperPage

function incComparator(product1, product2) {
  if (product1.price > product2.price) {
    return 1;
  } else {
    return -1;
  }
}
function decComparator(product1, product2) {
  if (product1.price < product2.price) {
    return 1;
  } else {
    return -1;
  }
}
