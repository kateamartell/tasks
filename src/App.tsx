import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
                <h1>Hello World</h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img src="images/clover.png" alt="A picture of my dog clover" />
            This is <span style={{ color: "red" }}>colored text</span>.
            <div style={{ backgroundColor: "red", padding: "4px" }}>
                This will be red.
            </div>
            <ul>
                <li>First element</li>
                <li>Second element</li>
                <li>Third element</li>
            </ul>
            <Button onClick={() => console.log("I am logged")}>
                Log Hello World
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col>First column.</Col>
                        <Col>Second column. Hello</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
