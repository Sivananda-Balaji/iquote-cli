import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import boxen from "boxen";

const timer = () => {
  return new Promise((resolve, reject) => setTimeout(resolve, 1000));
};

const welcomeMsg = async () => {
  let rainbow;
  figlet("GOOD DAY!", (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    rainbow = chalkAnimation.rainbow(data);
  });
  await timer();
  rainbow.stop();

  console.log(boxen("Welcome to the Quotes World!", { padding: 1 }));
};

export default welcomeMsg;
