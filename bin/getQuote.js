import boxen from "boxen";
import axios from "axios";
import dotenv from "dotenv";

const getQuote = async (category) => {
  try {
    dotenv.config({ path: "./config.env" });
    const apiKey = process.env.API_KEY;
    const configs = {
      headers: { "x-api-key": apiKey },
      contentType: "application/json",
    };
    const result = await axios.get(
      `https://api.api-ninjas.com/v1/quotes?category=${category}`,
      configs
    );
    const quoteObj = result.data[0];
    const title = quoteObj.category.toUpperCase();
    const quote = `"${quoteObj.quote}"\n- ${quoteObj.author}`;

    const message = boxen(quote, {
      padding: 1,
      margin: 1,
      borderStyle: "double",
      align: "center",
      borderColor: "green",
      title,
      titleAlignment: "center",
    });

    console.log(message);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default getQuote;
