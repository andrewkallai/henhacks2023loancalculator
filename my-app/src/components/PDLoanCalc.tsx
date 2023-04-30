import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function CalcDisplay (): JSX.Element {
    const [result, setResult] = useState<number>(0.0);
    const [fee, setFee] = useState<number>(0.0);
    const [interval, setInterval] = useState<number>(0.0);

    function updateResult(): void {
        setResult(fee * (52/interval));
    }
    
    function updateFee(event: React.ChangeEvent<HTMLInputElement>) {
        setFee(parseFloat(event.target.value)); //CHECK PARSE FLOAT
    }

    function updateInterval(event: React.ChangeEvent<HTMLInputElement>) {
        setInterval(parseFloat(event.target.value)); //CHECK PARSE FLOAT
    }

    return(
        <>
        <div style={{ border: "2px dashed grey", padding: "10px", width: "800px" }} className="calculator">
            <Form.Group>
                <Form.Label>Enter Loan Fee per $100: </Form.Label>
                <Form.Control onChange={updateFee} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter Time Period between paychecks in weeks: </Form.Label>
                <Form.Control onChange={updateInterval} />
            </Form.Group>
            <Button onClick={updateResult}>
                Calculate PayDay Loan APR
            </Button>
            <div>Your PayDay Loan APR: <span style={{ color: "lime" }}>{result}%</span></div>
            <div>This APR is <span style={{ color: "aqua" }}>{result / 24}</span> times greater than the average Credit Card APR.</div>
        </div>
        </>
    );
}