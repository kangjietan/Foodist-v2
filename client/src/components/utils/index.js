// Format the food topics
export function formatTopics(list) {
  let categories = "";
  list.forEach((entry) => {
    categories += `${entry.title}, `;
  });
  categories = categories.substring(0, categories.length - 2);
  return categories;
}

// Format the transaction types
export function formatMethods(list) {
  let categories = "";
  list.forEach((entry) => {
    categories += `${entry}, `;
  });
  categories = categories.substring(0, categories.length - 2);
  categories = categories.split("_").join(" ");
  return categories;
}

// Format rating image url src
export function getRatingsUrl(num) {
  let rating = num.toString();
  let check = rating.split("");

  if (check[check.length - 1] === "5" && check.length === 3) {
    rating = `${check[0]}_half`;
  }

  const url = `./images/yelp_stars/web_and_ios/regular/regular_${rating}.png`;

  return url;
}

// Get random int for generating random business
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Get coordinates for user
export function getUserLocation() {
  return new Promise((resolve, reject) => {
    const showPosition = (position) =>
      resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}
