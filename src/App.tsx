import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { ChangeType } from "./components/ChangeType";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
                <h1>Hello World</h1>
            </header>

            
            <p>
                hello world
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img src="images/clover.png" alt="A picture of my dog clover" />

            <div style={{ backgroundColor: "red", padding: "10px" }}>
                This div has a red background.
            </div>

            <p>
                This is <span style={{ color: "blue" }}>colored text</span>.
            </p>

            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>

            
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            
            <Container>
                <Row>
                    <Col>Column 1</Col>
                    <Col>Column 2</Col>
                </Row>
            </Container>

            
            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <TwoDice />
            <hr />
            <ChangeType />
        </div>
    );
}

export default App;
