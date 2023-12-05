module.exports = {
  //param A : array of strings
  //param B : array of strings
  //param C : array of integers
  //return a array of integers
  solve: function (A, B, C) {
    let serverLocations = [];
    let ans = [];

    for (let i = 0; i < A.length; i++) {
      if (A[i] == "ADD") {
        ans.push(add(B[i], userHash(B[i], C[i])));
      } else if (A[i] == "ASSIGN") {
        ans.push(assign(B[i], userHash(B[i], C[i])));
      } else {
        //REMOVE
        ans.push(remove(B[i]));
      }
    }

    function add(serverName, location) {
      let serverToInsert = new CHServer(serverName, location);
      if (serverLocations.length == 0) {
        serverLocations.push(serverToInsert);
        return 0;
      } else {
        return insertIntoSortedArrayAndMove(serverLocations, serverToInsert);
      }
    }

    function remove(serverName) {
      let removeIndex = serverLocations.findIndex((item) => {
        return item.serverName == serverName;
      });
      let reassignedIndexCount = 0;
      reassignedIndexCount = serverLocations[removeIndex].requestHandled.length;
      if (
        removeIndex > 0 &&
        serverLocations[removeIndex].location ==
          serverLocations[removeIndex - 1].location
      ) {
        // Conflict : same location, another server
        // Resolve : move request to another server at same location
        serverLocations[removeIndex - 1].requestHandled = serverLocations[
          removeIndex - 1
        ].requestHandled.concat(serverLocations[removeIndex].requestHandled);
        serverLocations[removeIndex - 1].requestHandled.sort((a, b) => {
          return a.location - b.location;
        });
      } else {
        if (removeIndex + 1 < serverLocations.length) {
          serverLocations[removeIndex + 1].requestHandled = serverLocations[
            removeIndex + 1
          ].requestHandled.concat(serverLocations[removeIndex].requestHandled);
          serverLocations[removeIndex + 1].requestHandled.sort((a, b) => {
            return a.location - b.location;
          });
          serverLocations[removeIndex + 1].requestHandled.sort((a, b) => {
            return a.location - b.location;
          });
        } else {
          serverLocations[0].requestHandled =
            serverLocations[0].requestHandled.concat(
              serverLocations[removeIndex].requestHandled
            );
          serverLocations[0].requestHandled.sort((a, b) => {
            return a.location - b.location;
          });
        }
      }
      serverLocations.splice(removeIndex, 1);
      return reassignedIndexCount;
    }

    function assign(requestName, location) {
      let requestToInsert = new Request(requestName, location);
      let index = findIndexToInsert(serverLocations, requestToInsert);
      if (index >= serverLocations.length) {
        index = 0;
      }
      if (serverLocations[index].requestHandled.length == 0) {
        serverLocations[index].requestHandled.push(requestToInsert);
      } else {
        insertIntoSortedArray(
          serverLocations[index].requestHandled,
          requestToInsert
        );
      }
      if (index >= serverLocations.length) {
        index = 0;
      }
      serverLocations[index].requestHandled.sort((a, b) => {
        return a.location - b.location;
      });
      return serverLocations[index].location;
    }

    function userHash(username, hashKey) {
      const p = hashKey;
      const n = 360;
      let hashCode = 0;
      let p_pow = 1;
      for (let i = 0; i < username.length; i++) {
        let character = username[i];
        hashCode =
          (hashCode +
            (character.charCodeAt(0) - "A".charCodeAt(0) + 1) * p_pow) %
          n;
        p_pow = (p_pow * p) % n;
      }
      return hashCode;
    }

    function insertIntoSortedArray(serverLocations, serverToInsert) {
      let index = findIndexToInsert(serverLocations, serverToInsert);
      serverLocations.splice(index, 0, serverToInsert);
    }

    function insertIntoSortedArrayAndMove(serverLocations, serverToInsert) {
      let index = findIndexToInsert(serverLocations, serverToInsert);
      let requestModedCount = 0;
      if (index == serverLocations.length) {
        // if the server to be inserted is at the end of circle
        if (
          serverLocations[0].location !== serverToInsert.location &&
          serverLocations[0].requestHandled.length > 0
        ) {
          let arrUpdatedOld = [];
          let arrNew = [];
          for (let i = 0; i < serverLocations[0].requestHandled.length; i++) {
            if (
              serverLocations[0].requestHandled[i].location >
                serverToInsert.location ||
              serverLocations[0].requestHandled[i].location <=
                serverLocations[0].location
            ) {
              arrUpdatedOld.push(serverLocations[0].requestHandled[i]);
            } else {
              arrNew.push(serverLocations[0].requestHandled[i]);
            }
          }
          serverToInsert.requestHandled = arrNew;
          requestModedCount = arrNew.length;
          serverLocations[0].requestHandled = arrUpdatedOld;
        }
      } else if (index == 0) {
        // if the server to be inserted at the start
        if (
          serverLocations[0].location !== serverToInsert.location &&
          serverLocations[0].requestHandled.length > 0
        ) {
          let arrUpdatedOld = [];
          let arrNew = [];
          for (let i = 0; i < serverLocations[0].requestHandled.length; i++) {
            if (
              serverLocations[0].requestHandled[i].location >
                serverToInsert.location &&
              serverLocations[0].requestHandled[i].location <=
                serverLocations[0].location
            ) {
              arrUpdatedOld.push(serverLocations[0].requestHandled[i]);
            } else {
              arrNew.push(serverLocations[0].requestHandled[i]);
            }
          }
          serverToInsert.requestHandled = arrNew;
          requestModedCount = arrNew.length;
          serverLocations[0].requestHandled = arrUpdatedOld;
        }
      } else {
        let allIndex = getAllIndexWithLocation(index, serverLocations);
        for (let i = 0; i < allIndex.length; i++) {
          let tempIndex = allIndex[i];
          if (
            serverLocations[tempIndex].location !== serverToInsert.location &&
            serverLocations[tempIndex].requestHandled.length > 0
          ) {
            let partitionIndex = findIndexToInsert(
              serverLocations[tempIndex].requestHandled,
              serverToInsert
            );
            serverToInsert.requestHandled =
              serverToInsert.requestHandled.concat(
                serverLocations[tempIndex].requestHandled.slice(
                  0,
                  partitionIndex
                )
              );
            serverToInsert.requestHandled.sort((a, b) => {
              return a.location - b.location;
            });
            serverLocations[tempIndex].requestHandled.splice(0, partitionIndex);
            requestModedCount = partitionIndex;
          }
        }
      }
      serverLocations.splice(index, 0, serverToInsert);
      return requestModedCount;
    }

    function findIndexToInsert(serverLocations, serverToInsert) {
      let indexAnswer;
      let start = 0;
      let end = serverLocations.length - 1;
      let mid;
      while (start <= end) {
        mid = parseInt((start + end) / 2);
        if (serverToInsert.location == serverLocations[mid].location) {
          return mid;
        } else if (serverToInsert.location > serverLocations[mid].location) {
          start = mid + 1;
          indexAnswer = start;
        } else {
          end = mid - 1;
          indexAnswer = mid;
        }
      }
      return indexAnswer;
    }

    function getAllIndexWithLocation(i, serverLocations) {
      let arr = [i];
      for (let j = i + 1; j < serverLocations.length; j++) {
        if (serverLocations[j].location == serverLocations[i].location) {
          arr.push(j);
        } else {
          break;
        }
      }
      return arr;
    }

    return ans;
  },
};

function CHServer(serverName, location) {
  this.serverName = serverName;
  this.location = location;
  this.requestHandled = [];
}

function Request(serverName, location) {
  this.serverName = serverName;
  this.location = location;
}
//This solution is almost correct but the hashing.js is totally incorrect
//explanation
/*This code exports a module that contains a function called `solve`.
 *The `solve` function takes three parameters: `A`, `B`, and `C`.
 *`A` is an array of strings, `B` is an array of strings, and `C` is an array of integers.
 * The function returns an array of integers. Inside the `solve` function, there are several helper functions defined: `add`, `remove`, `assign`, `userHash`, `insertIntoSortedArray`, `insertIntoSortedArrayAndMove`, `findIndexToInsert`, and `getAllIndexWithLocation`.
 * These functions are used to perform various operations on server locations and requests. The `solve` function initializes two empty arrays: `serverLocations` and `ans`.
 *It then iterates over the elements of array `A` using a for loop. Inside the loop, it checks the value of each element of `A`. If the value is "ADD", it calls the `add` function with the corresponding elements of `B` and `C` arrays and pushes the result to the `ans` array.
 *If the value is "ASSIGN", it calls the `assign` function with the corresponding elements of `B` and `C` arrays and pushes the result to the `ans` array. If the value is neither "ADD" nor "ASSIGN", it calls the `remove` function with the corresponding element of `B` array and pushes the result to the `ans` array.
 * The `add` function creates a new `CHServer` object with the given server name and location. If the `serverLocations` array is empty, it pushes the new server object to the array and returns 0.
 *Otherwise, it calls the `insertIntoSortedArrayAndMove` function to insert the new server object into the `serverLocations` array in a sorted manner and returns the number of requests that were moved.
 *The `remove` function finds the index of the server with the given server name in the `serverLocations` array. It then checks if there is a conflict with another server at the same location.
 *If there is a conflict, it moves the requests from the server to another server at the same location. If there is no conflict, it moves the requests to the next server in the array.
 *Finally, it removes the server from the `serverLocations` array and returns the number of requests that were reassigned. The `assign` function creates a new `Request` object with the given request name and location.
 * It finds the index where the new request should be inserted in the `serverLocations` array using the `findIndexToInsert` function. If the index is greater than or equal to the length of the array, it wraps around to the beginning.
 *It then inserts the new request into the `requestHandled` array of the server at the found index and sorts the array based on the location of the requests.
 *Finally, it returns the location of the server. The `userHash` function calculates a hash code for a given username and hash key using a hashing algorithm.
 *It iterates over the characters of the username, converts each character to a numeric value, and calculates the hash code based on the hash key and a constant value.
 *It returns the calculated hash code. The `insertIntoSortedArray` function inserts a server object into a sorted array of server objects in a sorted manner.
 *It finds the index where the server should be inserted using the `findIndexToInsert` function and inserts the server at that index. The `insertIntoSortedArrayAndMove` function inserts a server object into a sorted array of server objects in a sorted manner and moves the requests if necessary.
 *It finds the index where the server should be inserted using the `findIndexToInsert` function. If the server to be inserted is at the end of the array, it checks if there is a conflict with the first server in the array and moves the requests accordingly. If the server to be inserted is at the beginning of the array, it checks if there is a conflict with the first server in the array and moves the requests accordingly.
 * If the server to be inserted is in the middle of the array, it checks if there is a conflict with other servers at the same location and moves the requests accordingly. Finally, it inserts the server at the found index and returns the number of requests that were moved.
 *The `findIndexToInsert` function finds the index where a server object should be inserted into a sorted array of server objects. It uses a binary search algorithm to find the index based on the location of the server object.
 *The `getAllIndexWithLocation` function finds all the indexes in a sorted array of server objects that have the same location as the server object at a given index. It iterates over the array starting from the given index and checks if the location of each server object is the same as the location of the server object at the given index.
 *It returns an array of indexes with the same location. The code also defines two classes: `CHServer` and `Request`.
 *The `CHServer` class represents a server with a server name, location, and an array of requests handled by the server.
 *The `Request` class represents a request with a server name and location.*******/
