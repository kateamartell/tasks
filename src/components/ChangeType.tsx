import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ChangeType(): JSX.Element {
    const [isShortAnswer, setIsShortAnswer] = useState<boolean>(true);

    function toggleType() {
        setIsShortAnswer(!isShortAnswer);
    }

    return (
        <div>
            <div>{isShortAnswer ? "Short Answer" : "Multiple Choice"}</div>
            <Button onClick={toggleType}>Change Type</Button>
        </div>
    );
}
