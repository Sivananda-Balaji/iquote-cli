import inquirer from "inquirer";

const getApiKey = async () => {
  const userKey = await inquirer.prompt({
    type: "input",
    name: "apiKey",
    message: "Enter your api-key:",
  });
  return userKey.apiKey;
};

export default getApiKey;
