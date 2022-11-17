import { chooseCorrectWord } from "./index";
import words from "../../words";

describe("Board", () => {
  describe("chooseCorrectWord()", () => {
    it.each`
      wordLength
      ${4}
      ${5}
      ${6}
    `(
      "randomly chooses a word of length wordLength from words object",
      ({ wordLength }) => {
        const randomlyChosenWord = chooseCorrectWord(wordLength);
        expect(randomlyChosenWord).toHaveLength(wordLength);
        expect(words[wordLength]).toContain(randomlyChosenWord.toLowerCase());
      }
    );
  });
});
