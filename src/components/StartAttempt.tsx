import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    /*
    You will need two pieces of state: the number of attempts and whether the quiz is in progress.
    The initial number of attempts is 4
    The quiz is initially NOT in progress
    There is a button labelled Start Quiz that puts the Quiz in progress and decreases the number of attempts by one.
    There is a button labelled Stop Quiz that stops the Quiz from being in progress.
    There is a button labelled Mulligan that increase the attempts by one.
    When the quiz is in progress, the Start Quiz and Mulligan buttons are disabled.
    When the quiz is not in progress, the Stop Quiz button is disabled.
    When the attempts are zero, the Start Quiz button is disabled.
    */

    const [attempts, setAttempts] = useState<number>(4);
    const [active, setActive] = useState<boolean>(false);

    return (
        <div>
            <div>
                <span>{attempts}</span>
            </div>
            <div>
                <Button
                    onClick={() => {
                        setAttempts(attempts - 1);
                        setActive(true);
                    }}
                    disabled={active || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => setActive(false)} disabled={!active}>
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setAttempts(attempts + 1)}
                    disabled={active}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
