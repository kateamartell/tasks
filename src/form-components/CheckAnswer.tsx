import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
    }

    const correct = answer === expectedAnswer;
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="check-answer-input" className="mb-3">
                <Form.Label>Answer</Form.Label>
                <Form.Control value={answer} onChange={handleChange} />
            </Form.Group>
            <div aria-live="polite">{correct ? "✔️" : "❌"}</div>
        </div>
    );
}
