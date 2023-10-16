import React from "react";
import "./App.css";
<<<<<<< HEAD
import img from "./assets/Dreams.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    COS420 with React Hooks and TypeScript by Ryan Giles
                </header>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>

                <div style={{ backgroundColor: "purple" }}>
                    <h1>This is a new header!</h1>
                </div>

                <p>Hello World!</p>

                <img
                    src={img}
                    alt="A composite image of a guy sitting in a field I made in High School"
                />

                <ol>
                    <li>This is a</li>
                    <li>3 Item List that</li>
                    <li>Is not part of a paragraph style</li>
                </ol>

                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "10000px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "10000px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </>
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
>>>>>>> upstream/task-state
    );
}

export default App;
