/***
 * Problem statement .You have to create a cachedFetch(timer).It takes a timer
 * */

function createCachedFetch(expirey) {
  console.log("came here");
  // Cached data storage
  const cache = {};
  //if that request is made before and the response is not older than expirey you will return result from cache

  return async function cachedFetch(url) {
    console.log("cache[url]", cache[url]);
    // Check if data is available in cache
    if (cache[url]) {
      console.log("getting response from cache url");
      const cachedData = cache[url];
      const cacheTime = cachedData.timestamp;
      const currentTime = new Date().getTime();
      if (currentTime - cacheTime < expirey * 60 * 1000) {
        return cachedData.data;
      }
    }

    // Data not in cache or cache expired, fetch and cache
    try {
      const response = await fetch(url);
      const data = await response.json();

      // Store data in cache
      cache[url] = {
        data,
        timestamp: new Date().getTime(),
      };
      console.log("cache[url] after setting it ", cache[url]);

      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };
}

const cachedFetch = createCachedFetch(10000);
// Example usage
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

cachedFetch(apiUrl)
  .then((data) => {
    // Handle the fetched data
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
