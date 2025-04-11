// src/pages/OrderPage.js
import React, { useState } from "react";
import Page from "../components/Page";

function OrderPage({ setActivePageIndex }) {
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setError("Please enter a valid email.");
            return;
        }

        if (!/^\d{10}$/.test(mobile)) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }

        // Send order to admin logic here...

        setError("");
        alert("Order placed successfully!");
        setActivePageIndex(0); // Navigate to home page
        fetch("/api/send-sms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                mobile,
                message: "Your order has been placed successfully. Thank you!"
            })
        });
    };

    return (
        <Page>
            <div style={styles.container}>
                <h2>Order Details</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        style={styles.input}
                    />
                    {error && <p style={styles.error}>{error}</p>}
                    <button type="submit" style={styles.submitButton}>Submit Order</button>
                </form>
            </div>
        </Page>
    );
}

const styles = {
    container: {
        padding: "40px",
        textAlign: "center",
        backgroundColor: "#FFF5EE",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        maxWidth: "400px",
        margin: "0 auto",
    },
    input: {
        padding: "10px",
        width: "100%",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    submitButton: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#8B4513",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    error: {
        color: "red",
        fontSize: "14px",
    },
};

export default OrderPage;
