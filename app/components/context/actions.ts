import { choices } from "./types";

export const evalGame = (
  userChoice: choices,
  houseChoice: choices,
): boolean => {
  if (
    (userChoice === choices.rock &&
      (houseChoice === choices.scissors || houseChoice === choices.lizard)) ||
    (userChoice === choices.paper &&
      (houseChoice === choices.rock || houseChoice === choices.spock)) ||
    (userChoice === choices.scissors &&
      (houseChoice === choices.paper || houseChoice === choices.lizard)) ||
    (userChoice === choices.lizard &&
      (houseChoice === choices.spock || houseChoice === choices.paper)) ||
    (userChoice === choices.spock &&
      (houseChoice === choices.scissors || houseChoice === choices.rock))
  ) {
    return true;
  } else {
    return false;
  }
};

export const getHouseChoice = (reducedChoices: choices[]): choices => {
  const randomIndex: number = Math.floor(Math.random() * reducedChoices.length);
  return reducedChoices[randomIndex];
};

export const setHouseChoices = (userChoice: choices): choices[] => {
  const choicesList = [
    choices.rock,
    choices.paper,
    choices.lizard,
    choices.scissors,
    choices.spock,
  ];

  // remove user choice from available pool, this ensures no tie will take place
  return choicesList.filter(choice => choice !== userChoice);
};
