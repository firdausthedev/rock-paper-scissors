import { describe, test as it, expect } from "vitest";
import {
  getHouseChoice,
  setHouseChoices,
  evalGame,
} from "./../app/components/context/actions";
import { choices } from "./../app/components/context/types";
choices;

describe("setHouseChoices function", () => {
  it("should not include the user's choice in the result", () => {
    const userChoice = choices.paper;
    const reducedChoices = setHouseChoices(userChoice);

    expect(reducedChoices).not.toContain(userChoice);
  });

  it("should return an array with one less choice", () => {
    const userChoice = choices.rock;
    const reducedChoices = setHouseChoices(userChoice);

    expect(reducedChoices).toHaveLength(4);
  });

  it("should work with different user choices", () => {
    for (const userChoice of Object.values(choices)) {
      const reducedChoices = setHouseChoices(userChoice);
      expect(reducedChoices).toHaveLength(4);
      expect(reducedChoices).not.toContain(userChoice);
    }
  });
});

describe("getHouseChoice function", () => {
  it("should return a valid choice from the input array", () => {
    const reducedChoices = [choices.rock, choices.paper, choices.scissors];
    const choice = getHouseChoice(reducedChoices);
    expect(reducedChoices.includes(choice)).toBe(true);
  });
});

describe("evalGame function", () => {
  it("should return true when user wins", () => {
    expect(evalGame(choices.rock, choices.scissors)).toBe(true);
    expect(evalGame(choices.rock, choices.lizard)).toBe(true);
  });

  it("should return false when user loses", () => {
    expect(evalGame(choices.rock, choices.paper)).toBe(false);
    expect(evalGame(choices.rock, choices.spock)).toBe(false);
  });
});
