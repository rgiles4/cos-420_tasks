import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "New Year's"
    | "St. Patrick's Day"
    | "Easter"
    | "Fourth of July"
    | "Halloween";

const HOLIDAY_YEAR: Record<Holiday, Holiday> = {
    "New Year's": "St. Patrick's Day",
    "St. Patrick's Day": "Easter",
    Easter: "Fourth of July",
    "Fourth of July": "Halloween",
    Halloween: "New Year's"
};

const HOLIDAY_ALPHABET: Record<Holiday, Holiday> = {
    Easter: "Fourth of July",
    "Fourth of July": "Halloween",
    Halloween: "New Year's",
    "New Year's": "St. Patrick's Day",
    "St. Patrick's Day": "Easter"
};
export function CycleHoliday(): JSX.Element {
    /*
    - You will need one state, either a string or an enumeration of 5 strings like QuestionType 
    (perhaps named Holiday).
    - You will need to define two functions (or two Records) that can take in an existing holiday and 
    produce the next holiday - one function should produce the next holiday alphabetically, and the other produces the next holiday in the year.
    - The view should render the current holiday with the text Holiday: followed by the emoji 
    (e.g., Holiday: 🎃).
    - The first button should include the text Alphabet somewhere (e.g., Advance by Alphabet) 
    and changes the current holiday to the next one alphabetically.
    - The second button should include the text Year somewhere (e.g., Advance by Year) 
    and changes the current holiday to the next one in the year.
    */

    const [holiday, setHoliday] = useState<Holiday>("New Year's");

    function alphabetHoliday(): void {
        const newHoliday = HOLIDAY_ALPHABET[holiday];
        setHoliday(newHoliday);
    }

    function yearHoliday(): void {
        const newHoliday = HOLIDAY_YEAR[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <div>
                Holiday: {holiday}
                {holiday === "New Year's" ? (
                    <span>✨</span>
                ) : holiday === "St. Patrick's Day" ? (
                    <span>☘️</span>
                ) : holiday === "Easter" ? (
                    <span>🐇</span>
                ) : holiday === "Fourth of July" ? (
                    <span>🎆</span>
                ) : (
                    <span>🎃</span>
                )}
            </div>
            <div>
                <Button onClick={alphabetHoliday}>Alphabet</Button>
                <Button onClick={yearHoliday}>Year</Button>
            </div>
        </div>
    );
}
