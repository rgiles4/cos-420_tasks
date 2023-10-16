import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    /* 
    You will need a state to handle whether the text is visible.
    There is a button labelled Reveal Answer that inverts the state.
    The text 42 is not initially visible.
    When the button is clicked, the text 42 should be visible. 
    */

    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={flipVisibility}>Show/Hide</Button>
            {visible && <div>42</div>}
        </div>
    );
}
