const axios = require("axios");

const convertBase64 = async (url) => {
  try {
    const response = await axios({
      method: "GET",
      url: url,
      responseType: "arraybuffer",
      header: {
        Host: "i.instagram.com",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:92.0) Gecko/20100101 Firefox/92.0",
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Access-Control-Request-Method": "GET",
        "Access-Control-Request-Headers":
          "x-asbd-id,x-ig-app-id,x-ig-www-claim",
        Referer: "https://www.instagram.com/",
        Origin: "https://www.instagram.com",
        Connection: "keep-alive",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        TE: "trailers",
      },
    });
    const buffer = Buffer.from(response.data, "binary").toString("base64");
    return `data:image/png;base64, ${buffer}`;
  } catch (error) {
    return Promise.reject({
      error: true,
      msg: ":(",
      url: urls,
    });
  }
};

module.exports = convertBase64;
