import inquirer from "inquirer";

const userInput = async () => {
  const options = [
    { name: "dreams", value: "dreams" },
    { name: "inspirational", value: "inspirational" },
    { name: "love", value: "love" },
    { name: "money", value: "money" },
    { name: "success", value: "success" },
  ];

  const answers = await inquirer.prompt({
    type: "list",
    name: "selectedQuote",
    message: "please select from below options",
    choices: options,
  });
  return answers;
};

export default userInput;
