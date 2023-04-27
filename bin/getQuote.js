import boxen from "boxen";
import axios from "axios";

const getQuote = async (category, apiKey) => {
  try {
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
    console.log(
      boxen(err.response.data.error, {
        padding: 0.5,
        borderColor: "red",
      })
    );
    process.exit(1);
  }
};

export default getQuote;
