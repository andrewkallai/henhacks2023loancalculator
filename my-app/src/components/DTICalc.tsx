import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function DTICalc(): JSX.Element {
    const [rent, setRent] = useState<number>(0.0);
    const [loan, setLoan] = useState<number>(0.0);
    const [lease, setLease] = useState<number>(0.0);
    const [card, setCard] = useState<number>(0.0);
    const [others, setOthers] = useState<number>(0.0);
    const [income, setIncome] = useState<number>(0.0);
    const [result, setResult] = useState<number>(0.0);

    function updateRent(event: React.ChangeEvent<HTMLInputElement>) {
        setRent(parseFloat(event.target.value)); //CHECK PARSE FLOAT
    }
    function updateLoan(event: React.ChangeEvent<HTMLInputElement>) {
        setLoan(parseFloat(event.target.value)); //CHECK PARSE FLOAT
    }
    function updateLease(event: React.ChangeEvent<HTMLInputElement>) {
        setLease(parseFloat(event.target.value)); //CHECK PARSE FLOAT
    }
    function updateCard(event: React.ChangeEvent<HTMLInputElement>) {
        setCard(parseFloat(event.target.value)); //CHECK PARSE FLOAT
    }
    function updateOthers(event: React.ChangeEvent<HTMLInputElement>) {
        setOthers(parseFloat(event.target.value)); //CHECK PARSE FLOAT
    }
    function updateIncome(event: React.ChangeEvent<HTMLInputElement>) {
        setIncome(parseFloat(event.target.value)); //CHECK PARSE FLOAT
    }
    function updateResult(): void {
        setResult((rent+loan+lease+card+others)/income);
    }

    return (
        <><h3>DTI Calculator</h3>
        <div style={{ border: "1px solid#111", padding:"10px", width:"900px"}} className="calculator">
            <Form.Group>
                <Form.Label>Enter Monthly Rent: </Form.Label>
                <Form.Control onChange={updateRent} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter Aggregate of all Monthly Loan Payments: </Form.Label>
                <Form.Control onChange={updateLoan} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter Aggregate of all Monthly Lease Payments: </Form.Label>
                <Form.Control onChange={updateLease} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter Monthly Credit Card Payments: </Form.Label>
                <Form.Control onChange={updateCard} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter Aggregate of other Monthly Payments: </Form.Label>
                <Form.Control onChange={updateOthers} />
            </Form.Group>
            <div>Your Total Monthly Debt: <span style={{color:"yellow"}}>${rent + loan + lease + card + others}</span></div>
            <Form.Group>
                <Form.Label>Enter Gross Monthly Income: </Form.Label>
                <Form.Control onChange={updateIncome} />
            </Form.Group>
            <Button onClick={updateResult}>
                Calculate Debt-To-Income Ratio
            </Button>
            <div>Your DTI is <span style={{color: "lime"}}>{result * 100}%</span></div>
        </div></>
    )
}