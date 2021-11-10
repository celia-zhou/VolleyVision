const fetch = require("node-fetch");
const { YOUTUBE_API_KEY } = require("./config");

if (!YOUTUBE_API_KEY) {
  throw new Error("No API key is provided");
}

async function main(query) {
  console.log("Ready to get Youtube data!");
  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&q=${query}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return data;
}

main("JavaScript");