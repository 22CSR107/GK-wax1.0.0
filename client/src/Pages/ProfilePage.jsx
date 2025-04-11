import React, { useState } from "react";
import Page from "../components/Page";

function ProfilePage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        description: "",
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData); // Save data to display
        setFormData({ name: "", email: "", address: "", description: "" }); // Reset form
    };

    return (
        <Page>
            <div style={styles.pageWrapper}>
                {/* Profile Summary (Top Right Column) */}
                {submittedData && (
                    <div style={styles.profileBox}>
                        <img
                            src="/logo192.png" // Replace with your logo path
                            alt="Logo"
                            style={styles.logo}
                        />
                        <h3 style={styles.profileHeading}>Profile Summary</h3>
                        <p><strong>Name:</strong> {submittedData.name}</p>
                        <p><strong>Email:</strong> {submittedData.email}</p>
                        <p><strong>Address:</strong> {submittedData.address}</p>
                        <p><strong>Description:</strong> {submittedData.description}</p>
                    </div>
                )}

                {/* Profile Form */}
                <div style={styles.container}>
                    <h1 style={styles.heading}>Profile Information</h1>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <label style={styles.label}>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />

                        <label style={styles.label}>Email Address:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />

                        <label style={styles.label}>Address:</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            style={styles.textarea}
                        ></textarea>

                        <label style={styles.label}>Description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            style={styles.textarea}
                        ></textarea>

                        <button type="submit" style={styles.button}>Send</button>
                    </form>
                </div>
            </div>
        </Page>
    );
}

const styles = {
    pageWrapper: {
        position: "relative",
        padding: "40px",
    },
    container: {
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#FDF6EC",
        borderRadius: "10px",
    },
    heading: {
        fontSize: "36px",
        fontWeight: "bold",
        color: "#8B4513",
        fontFamily: "'Playfair Display', serif",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "400px",
        margin: "0 auto",
        backgroundColor: "#FAE5D3",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    label: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#5A4A42",
        marginBottom: "5px",
        alignSelf: "flex-start",
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        border: "1px solid #8B4513",
        borderRadius: "5px",
        fontSize: "16px",
    },
    textarea: {
        width: "100%",
        height: "80px",
        padding: "10px",
        marginBottom: "15px",
        border: "1px solid #8B4513",
        borderRadius: "5px",
        fontSize: "16px",
        resize: "none",
    },
    button: {
        fontSize: "18px",
        padding: "10px 20px",
        backgroundColor: "#8B4513",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    profileBox: {
        position: "absolute",
        top: "20px",
        right: "20px",
        width: "250px",
        padding: "20px",
        backgroundColor: "#FFF4E6",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
    },
    logo: {
        width: "50px",
        marginBottom: "10px",
    },
    profileHeading: {
        fontSize: "18px",
        marginBottom: "10px",
        color: "#8B4513",
    },
};

export default ProfilePage;
