/*problem description
We have a hash ring where we have locations available from 0 degrees to 359 degrees. Implement a consistent hashing in the following way : You can add a server to the hash ring. We just need to pass the serverID and the hash functions automatically assign them one location on the hash ring. The serverID can be strings.

To add any server you give input as ADD servername . This will add that server to your hash ring. You also have the option to remove an added server which can be done by giving the input as REMOVE servername . This will remove the server from the hash ring. Lastly, to the servers added on the ring, you can assign incoming requests based on keys.

So, when you do ASSIGN keyname, you basically want to assign this request to one of the servers nearest to the name hash location in clockwise direction ( If no server found in clockwise direction, pick the nearest server from 0 degrees in clockwise direction or if there is more than one nearest server available then assign this request to the latest server added to that location). It has been guaranteed that all the key names and server names would be unique and at least one server exists for ASSIGN type requests.

You are given two string vectors A and B and an integer array C. For all valid i, A[i] tells you the type of operation of i-th query and B[i] tells you the key/server name depending on the type of query and C[i] tells you the hashKey for the i-th operation. A[i] can only take 3 values - "ADD", "REMOVE", "ASSIGN". Ignore the hashKey value C[i] for "REMOVE" operations.

1>For "ADD" queries, B[i] is an uppercase string with 5 or more letters. They are all unique among add queries.
2>For "REMOVE" queries, B[i] is an uppercase string with 5 or more letters. They are all unique among remove queries.
3>For "ASSIGN" queries, B[i] is an uppercase string with exactly 4 letters. They are all unique among all queries.

You need to return an integer array. Let's call it ans. The value ans[i] should correspond to the output for the i-th query. The rules for the output are:
1>For "ADD" queries, ans[i] should be equal to the number of keys that got reassigned to the server added in the i-th query.
2>For "REMOVE" queries, ans[i] should be equal to the number of keys that assigned to the server getting removed (before removal).
3>For "ASSIGN" queries, ans[i] should be equal to the hash location of the server where this request gets assigned.

It is guaranteed that there will not be any removals of servers that are not already there. It is also guaranteed that number of queries of types "ADD" / "REMOVE" do not exceed 11 each.


***/

let answers = [];
let locationToServerMapping = {};
let serverToKeyMappings = {};
module.exports = {
  //param A : array of strings
  //param B : array of strings
  //param C : array of integers
  //return a array of integers
  solve: function (A, B, C) {
    for (let i = 0; i < A.length; i++) {
      performOperation(A[i], B[i], C[i]);
    }
    return answers;
  },
};

function performOperation(A, B, C) {
  let operation = A;
  if (operation === "ADD") {
    let serverID = B;
    answers.push(addServer(serverID, C));
  } else if (operation === "REMOVE") {
    let serverID = B;
    answers.push(removeServer(serverID));
  } else if (operation === "ASSIGN") {
    let keyname = B;
    answers.push(assignRequest(keyname, C));
  }
}

function addServer(serverID, hashKey) {
  let firstLocation = userHash(serverID, hashKey);
  locationToServerMapping[firstLocation] = serverID;
  findRequestsToServe(firstLocation);
  return (serverToKeyMappings[serverID] || []).length;
}

function userHash(username, hashKey) {
  let p = hashKey;
  let n = 360;
  let hashCode = 0;
  let p_pow = 1;
  for (let i = 0; i < username.length; i++) {
    let character = username[i];
    hashCode =
      (hashCode + (character.charCodeAt(0) - "A".charCodeAt(0) + 1) * p_pow) %
      n;
    p_pow = (p_pow * p) % n;
  }
  return hashCode;
}

function removeServer(serverID) {
  for (let loc in locationToServerMapping) {
    if (locationToServerMapping[loc] === serverID) {
      delete locationToServerMapping[loc];
      break;
    }
  }
  let keynamesToReassign = serverToKeyMappings[serverID] || [];
  if (serverID in serverToKeyMappings) {
    delete serverToKeyMappings[serverID];
  }
  for (let i = 0; i < keynamesToReassign.length; i++) {
    let keyname = keynamesToReassign[i][0];
    let hashKey = keynamesToReassign[i][1];
    assignRequest(keyname, hashKey);
  }
  return keynamesToReassign.length;
}

function assignRequest(keyname, hashKey) {
  if (Object.keys(locationToServerMapping).length === 0) {
    return 1000;
  }
  let keyLocation = userHash(keyname, hashKey);
  let serverLocations = Object.keys(locationToServerMapping).sort();
  for (let i = 0; i < serverLocations.length; i++) {
    let loc = serverLocations[i];
    if (loc >= keyLocation) {
      let serverID = locationToServerMapping[loc];
      if (!(serverID in serverToKeyMappings)) {
        serverToKeyMappings[serverID] = [];
      }
      serverToKeyMappings[serverID].push([keyname, hashKey]);
      return loc;
    }
  }
  let serverID = locationToServerMapping[serverLocations[0]];
  if (!(serverID in serverToKeyMappings)) {
    serverToKeyMappings[serverID] = [];
  }
  serverToKeyMappings[serverID].push([keyname, hashKey]);
  return serverLocations[0];
}

function findRequestsToServe(serverLocation) {
  if (Object.keys(serverToKeyMappings).length === 0) {
    return;
  }
  let serverLocations = Object.keys(locationToServerMapping).sort();
  for (let i = 0; i < serverLocations.length; i++) {
    let loc = serverLocations[i];
    if (loc > serverLocation) {
      let serverID = locationToServerMapping[loc];
      let keynames = serverToKeyMappings[serverID] || [];
      serverToKeyMappings[serverID] = [];
      for (let j = 0; j < keynames.length; j++) {
        let keyname = keynames[j][0];
        let hashKey = keynames[j][1];
        assignRequest(keyname, hashKey);
      }
      return;
    }
  }
  let serverID = locationToServerMapping[serverLocations[0]];
  let keynames = serverToKeyMappings[serverID] || [];
  serverToKeyMappings[serverID] = [];
  for (let i = 0; i < keynames.length; i++) {
    let keyname = keynames[i][0];
    let hashKey = keynames[i][1];
    assignRequest(keyname, hashKey);
  }
}

// explanation of the code

/*
*The given code is a JavaScript program that implements a server load balancing algorithm. 
*The program exports a single function called "solve" that takes three parameters: A, B, and C. 
*A is an array of strings, B is an array of strings, and C is an array of integers. The function returns an array of integers. 
*The "solve" function iterates over the elements of arrays A, B, and C using a for loop. For each iteration, it calls the "performOperation" function with the corresponding elements from A, B, and C as arguments. 
*The return value of each "performOperation" call is pushed into the "answers" array. The "performOperation" function takes three parameters: A, B, and C. 
*It checks the value of A and performs different operations based on its value. If A is equal to "ADD", it calls the "addServer" function with B and C as arguments and pushes the return value into the "answers" array. 
*If A is equal to "REMOVE", it calls the "removeServer" function with B as an argument and pushes the return value into the "answers" array. If A is equal to "ASSIGN", it calls the "assignRequest" function with B and C as arguments and pushes the return value into the "answers" array. 
*The "addServer" function takes two parameters: serverID and hashKey. It calculates the firstLocation using the "userHash" function with serverID and hashKey as arguments. It assigns the serverID to the firstLocation in the "locationToServerMapping" object. 
*It then calls the "findRequestsToServe" function with firstLocation as an argument. Finally, it returns the length of the array stored in the "serverToKeyMappings" object for the given serverID. The "userHash" function takes two parameters: username and hashKey. 
*It calculates a hash code based on the username and hashKey using a hashing algorithm. The hash code is then returned. The "removeServer" function takes one parameter: serverID. It iterates over the keys of the "locationToServerMapping" object and checks if the value is equal to serverID. 
*If a match is found, it deletes the key-value pair from the "locationToServerMapping" object. It then retrieves the array of keynames to reassign from the "serverToKeyMappings" object for the given serverID. If the serverID exists in the "serverToKeyMappings" object, it is deleted. 
*For each keyname and hashKey pair in the keynamesToReassign array, it calls the "assignRequest" function with the keyname and hashKey as arguments. Finally, it returns the length of the keynamesToReassign array. The "assignRequest" function takes two parameters: keyname and hashKey. 
*It first checks if the "locationToServerMapping" object is empty. If it is, it returns 1000. It then calculates the keyLocation using the "userHash" function with keyname and hashKey as arguments. It retrieves the serverLocations from the keys of the "locationToServerMapping" object, sorted in ascending order. 
It iterates over the serverLocations and checks if the current location is greater than or equal to the keyLocation. If it is, it retrieves the serverID from the "locationToServerMapping" object for the current location. If the serverID does not exist in the "serverToKeyMappings" object, it is created as an empty array. 
The keyname and hashKey pair is pushed into the array in the "serverToKeyMappings" object for the given serverID. The current location is then returned. If no location is found, the serverID is retrieved from the "locationToServerMapping" object for the first location in the serverLocations array. 
If the serverID does not exist in the "serverToKeyMappings" object, it is created as an empty array. The keyname and hashKey pair is pushed into the array in the "serverToKeyMappings" object for the given serverID. 
Finally, the first location is returned. The "findRequestsToServe" function takes one parameter: serverLocation. It first checks if the "serverToKeyMappings" object is empty. If it is, the function returns. 
It then retrieves the serverLocations from the keys of the "locationToServerMapping" object, sorted in ascending order. 
It iterates over the serverLocations and checks if the current location is greater than the serverLocation. If it is, it retrieves the serverID from the "locationToServerMapping" object for the current location. It retrieves the keynames array from the "serverToKeyMappings" object for the given serverID. 
*The array in the "serverToKeyMappings" object for the given serverID is then reset to an empty array. For each keyname and hashKey pair in the keynames array, it calls the "assignRequest" function with the keyname and hashKey as arguments. Finally, the function returns. If no location is found, the serverID is retrieved from the "locationToServerMapping" object for the first location in the serverLocations array. The keynames array is retrieved from the "serverToKeyMappings" oThe given code is a JavaScript program that implements a server load balancing algorithm. The program exports a single function called "solve" that takes three parameters: A, B, and C. A is an array of strings, B is an array of strings, and C is an array of integers. The function returns an array of integers. The "solve" function iterates over the elements of arrays A, B, and C using a for loop. For each iteration, it calls the "performOperation" function with the corresponding elements from A, B, and C as arguments. The return value of each "performOperation" call is pushed into the "answers" array. The "performOperation" function takes three parameters: A, B, and C. It checks the value of A and performs different operations based on its value. If A is equal to "ADD", it calls the "addServer" function with B and C as arguments and pushes the return value into the "answers" array. If A is equal to "REMOVE", it calls the "removeServer" function with B as an argument and pushes the return value into the "answers" array. If A is equal to "ASSIGN", it calls the "assignRequest" function with B and C as arguments and pushes the return value into the "answers" array. The "addServer" function takes two parameters: serverID and hashKey. It calculates the firstLocation using the "userHash" function with serverID and hashKey as arguments. It assigns the serverID to the firstLocation in the "locationToServerMapping" object. It then calls the "findRequestsToServe" function with firstLocation as an argument. Finally, it returns the length of the array stored in the "serverToKeyMappings" object for the given serverID. The "userHash" function takes two parameters: username and hashKey. It calculates a hash code based on the username and hashKey using a hashing algorithm. The hash code is then returned. The "removeServer" function takes one parameter: serverID. It iterates over the keys of the "locationToServerMapping" object and checks if the value is equal to serverID. If a match is found, it deletes the key-value pair from the "locationToServerMapping" object. It then retrieves the array of keynames to reassign from the "serverToKeyMappings" object for the given serverID. If the serverID exists in the "serverToKeyMappings" object, it is deleted. For each keyname and hashKey pair in the keynamesToReassign array, it calls the "assignRequest" function with the keyname and hashKey as arguments. Finally, it returns the length of the keynamesToReassign array. The "assignRequest" function takes two parameters: keyname and hashKey. It first checks if the "locationToServerMapping" object is empty. If it is, it returns 1000. It then calculates the keyLocation using the "userHash" function with keyname and hashKey as arguments. It retrieves the serverLocations from the keys of the "locationToServerMapping" object, sorted in ascending order. It iterates over the serverLocations and checks if the current location is greater than or equal to the keyLocation. If it is, it retrieves the serverID from the "locationToServerMapping" object for the current location. If the serverID does not exist in the "serverToKeyMappings" object, it is created as an empty array. The keyname and hashKey pair is pushed into the array in the "serverToKeyMappings" object for the given serverID. The current location is then returned. If no location is found, the serverID is retrieved from the "locationToServerMapping" object for the first location in the serverLocations array. If the serverID does not exist in the "serverToKeyMappings" object, it is created as an empty array. The keyname and hashKey pair is pushed into the array in the "serverToKeyMappings" object for the given serverID. Finally, the first location is returned. The "findRequestsToServe" function takes one parameter: serverLocation. It first checks if the "serverToKeyMappings" object is empty. If it is, the function returns. It then retrieves the serverLocations from the keys of the "locationToServerMapping" object, sorted in ascending order. It iterates over the serverLocations and checks if the current location is greater than the serverLocation. If it is, it retrieves the serverID from the "locationToServerMapping" object for the current location. It retrieves the keynames array from the "serverToKeyMappings" object for the given serverID. The array in the "serverToKeyMappings" object for the given serverID is then reset to an empty array. For each keyname and hashKey pair in the keynames array, it calls the "assignRequest" function with the keyname and hashKey as arguments. Finally, the function returns. If no location is found, the serverID is retrieved from the "locationToServerMapping" object for the first location in the serverLocations array. The keynames array is retrieved from the "serverToKeyMappings" object for the given serverID. The array in the "serverToKeyMappings" object for the given serverID is then reset to an empty array. For each keyname and hashKey pair in the keynames array, it calls the "assignRequest" function with the keyname and hashKey as arguments. Finally, the function returns.
object for the given serverID. The array in the "serverToKeyMappings" object for the given serverID is then reset to an empty array. For each keyname and hashKey pair in the keynames array, it calls the "assignRequest" function with the keyname and hashKey as arguments. Finally, the function returns.

*****/
