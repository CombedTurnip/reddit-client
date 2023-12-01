//function to get the reddit data as json and return it as a js object
async function fetchApiData() {
    const response = await fetch("https://www.reddit.com/r/popular/.json");
    const data = await response.json();
    return data;
};