import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function toggleEditMode(e: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(e.target.checked);
    }

    function updateName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function toggleStudent(e: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(e.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="edit-mode-switch" className="mb-3">
                <Form.Check
                    type="switch"
                    id="edit-mode-switch-input"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={toggleEditMode}
                />
            </Form.Group>

            {!editMode && (
                <div>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </div>
            )}

            {editMode && (
                <div>
                    <Form.Group controlId="edit-name" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>

                    <Form.Group
                        as={Row}
                        controlId="edit-student"
                        className="mb-3"
                    >
                        <Col>
                            <Form.Check
                                type="checkbox"
                                id="is-student-checkbox"
                                label="Student?"
                                checked={isStudent}
                                onChange={toggleStudent}
                            />
                        </Col>
                    </Form.Group>
                </div>
            )}
        </div>
    );
}
