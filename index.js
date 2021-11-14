const app = require("express")();
const cors = require("cors");
const convertBase64 = require("./modules/convertbase64");

const openPort = process.env.PORT || 3000;

app.use(cors());

app.get("/", async (req, res) => {
  const query = req.query;
  let url = query.q;
  for (const property in query) {
    if (property !== "q") {
      url = `${url}&${property}=${query[property]}`;
    }
  }

  if (url) {
    try {
      const response = await convertBase64(url);
      res.send(response);
    } catch (error) {
      res.status(400).send({
        error: true,
        msg: ":(",
        url,
      });
    }
  } else {
    res.status(400).json({
      error: true,
      message: "Please add query ?q=<url>",
    });
  }
});

app.listen(openPort, () => {
  console.log(`Running on ${openPort}`);
});
