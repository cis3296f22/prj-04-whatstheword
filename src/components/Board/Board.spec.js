import ReactDOM from "react-dom";
import { within } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import Board, { chooseCorrectWord } from "./index";
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

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Board length={5} letters={() => {}} />, div);
  });

  it.each`
    length
    ${4}
    ${5}
    ${6}
  `("Correct rows and columns", ({ length }) => {
    render(<Board length={length} letters={() => {}} />);
    const rows = screen.getAllByTestId("row");
    expect(rows).toHaveLength(length + 1);
    for (const row of rows) {
      expect(within(row).getAllByTestId("col")).toHaveLength(length);
    }
  });
});
