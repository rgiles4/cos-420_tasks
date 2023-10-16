import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    /*
    - You will need two states, one for each die.
    - Each die’s value should be rendered in the View in a span tag of their own, 
    with the first dice having the data-testid of left-die and the second dice having the data-testid 
    of right-die.
    - You will need two “Roll” buttons (labelled Roll Left and Roll Right).
    - Clicking a Roll button will change the value for the corresponding dice using the provided d6 function.
    - The initial values of the dice cannot be the same.
    - When the two states are equal, render a message that includes the word Lose.
    - When the two states are equal, render a message that includes the word Win.
    - If you do all these and are still not passing all tests, read the test file, it is a good practice! 
    In much of software engineering, the tests are the product spec.
    */

    const [left_die, setLeftDie] = useState<number>(1);
    const [right_die, setRightDie] = useState<number>(6);

    function rollLeftDie(): void {
        setLeftDie(d6());
    }

    function rollRightDie(): void {
        setRightDie(d6());
    }

    return (
        <div>
            <div>
                <Button onClick={() => rollLeftDie()}>Roll Left</Button>
            </div>
            <div>
                <Button onClick={() => rollRightDie()}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="left-die">{left_die}</span>
                <span data-testid="right-die">{right_die}</span>
            </div>
            <div>{left_die === 1 && right_die === 1 && <span>Lose</span>}</div>
            <div>
                {left_die === right_die &&
                    left_die !== 1 &&
                    right_die !== 1 && <span>Win</span>}
            </div>
        </div>
    );
}
