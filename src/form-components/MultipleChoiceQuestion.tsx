import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState<string>(options[0] ?? "");

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(e.target.value);
    }

    const correct = selected === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="mcq-select" className="mb-3">
                <Form.Label>Chose an answer</Form.Label>
                <Form.Select value={selected} onChange={handleChange}>
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div aria-live="polite">{correct ? "✔️" : "❌"}</div>
        </div>
    );
}
