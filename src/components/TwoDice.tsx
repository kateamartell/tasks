import React, { useState } from "react";
import { Button } from "react-bootstrap";


export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(3);
    const [rightDie, setRightDie] = useState<number>(2);

    const win = leftDie === rightDie;
    const lose = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <div>
                Die 1 : <span data-testid="left-die">{leftDie}</span> Die 2:{" "}
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                {lose ? "You Lose" : win ? "You win" : ""}
            </div>
            <Button onClick={() => setLeftDie(d6())}>Roll Left</Button>
            <Button onClick={() => setRightDie(d6())}>Roll Right</Button>
        </div>
    );
}
