import welcomeMsg from "./welcomeMsg.js";
import userInput from "./userInput.js";
import getQuote from "./getQuote.js";
import inquirer from "inquirer";
import getApiKey from "./getApiKey.js";

const app = async () => {
  await welcomeMsg();
  const apiKey = await getApiKey();
  let repeatValue;
  do {
    const userOption = await userInput();
    await getQuote(userOption.selectedQuote, apiKey);
    repeatValue = await repeatOption();
  } while (repeatValue);
  process.exit(0);
};

const repeatOption = async () => {
  const userChoice = await inquirer.prompt({
    type: "confirm",
    name: "repeat",
    message: "Want Another Quote (y/n): ",
  });
  return userChoice.repeat;
};

export default app;
