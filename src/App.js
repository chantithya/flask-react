// Filename - App.js

import React, { useState } from "react";
import "./App.css";

function App() {
    // State to store form input values
    const [keyword, setKeyword] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission behavior
        
        const response = await fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                keyword,
                start_date: startDate,
                end_date: endDate,
            }),
        });

        const data = await response.json();
        setSubmittedData(data);  // Update state with the response data
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Submit Data to Flask API</h1>
                <form onSubmit={handleSubmit} className="data-form">
                    <div className="form-group">
                        <label>Keyword:</label>
                        <input
                            type="text"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label>Start Date:</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label>End Date:</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>

                {submittedData && (
                    <div className="submitted-data">
                        <h2>Submitted Data:</h2>
                        <p><strong>Keyword:</strong> {submittedData.keyword}</p>
                        <p><strong>Start Date:</strong> {submittedData.start_date}</p>
                        <p><strong>End Date:</strong> {submittedData.end_date}</p>
                    </div>
                )}
            </header>
        </div>
    );
}

export default App;
