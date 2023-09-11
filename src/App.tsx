import React from "react";
import "./App.css";
import img from "./assets/Dreams.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
<<<<<<< HEAD
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
                                width: "5px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "5px",
                                height: "10px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </>
=======
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
        </div>
>>>>>>> upstream/task-functions
    );
}

export default App;
