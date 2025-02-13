import React from "react";
import Page from "../components/Page";

function AboutPage() {
    const features = [
        {
            title: "Eco-Friendly",
            description: "Our wax is made from natural and sustainable materials, ensuring a minimal carbon footprint.",
            image: "https://i.pinimg.com/236x/dc/1b/03/dc1b0333ac0ec29450e5caa056b8fcbd.jpg",
        },
        {
            title: "Long-Lasting Burn",
            description: "Enjoy extended hours of soothing candlelight with our slow-burning wax formula.",
            image: "https://i.pinimg.com/236x/97/11/c7/9711c7ad677206c20cb28371518460ed.jpg",
        },
        {
            title: "Non-Toxic",
            description: "Our candles are free from harmful chemicals, making them safe for both you and the environment.",
            image: "https://i.pinimg.com/474x/ba/c3/7d/bac37d4aa4f498f4504d9380292fb66c.jpg",
        },
        {
            title: "Aromatherapy Benefits",
            description: "Infused with essential oils, our candles create a calming and therapeutic atmosphere.",
            image: "https://i.pinimg.com/474x/91/f4/d7/91f4d760290104fc66805c4bc65e062e.jpg",
        },
        {
            title: "Handcrafted Perfection",
            description: "Each candle is carefully hand-poured to ensure premium quality and craftsmanship.",
            image: "https://i.pinimg.com/736x/a9/3d/e9/a93de9e7958d14cbe1f6fd7eddde7e2e.jpg",
        },
    ];

    return (
        <Page>
            <div style={styles.container}>
                <h1 style={styles.heading}>Welcome to GK Wax</h1>
                <p style={styles.description}>
                    Experience the elegance and purity of handcrafted candles with GK Wax. Our candles are designed to bring warmth, relaxation, and a touch of luxury to your space.
                </p>
                
                <div style={styles.featuresContainer}>
                    {features.map((feature, index) => (
                        <div key={index} style={styles.featureCard}>
                            <img src={feature.image} alt={feature.title} style={styles.image} />
                            <h2 style={styles.featureTitle}>{feature.title}</h2>
                            <p style={styles.featureDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Page>
    );
}

const styles = {
    container: {
        textAlign: "center",
        backgroundColor: "#FDF6EC",
        padding: "50px",
        borderRadius: "10px",
    },
    heading: {
        fontSize: "40px",
        fontWeight: "bold",
        color: "#8B4513",
        fontFamily: "'Playfair Display', serif",
        marginBottom: "20px",
    },
    description: {
        fontSize: "18px",
        color: "#5A4A42",
        fontFamily: "'Poppins', sans-serif",
        marginBottom: "40px",
        maxWidth: "700px",
        margin: "0 auto",
    },
    featuresContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        justifyContent: "center",
    },
    featureCard: {
        backgroundColor: "#FAE5D3",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px",
        marginBottom: "15px",
    },
    featureTitle: {
        fontSize: "22px",
        fontWeight: "bold",
        color: "#8B4513",
        marginBottom: "10px",
    },
    featureDescription: {
        fontSize: "16px",
        color: "#5A4A42",
        fontFamily: "'Poppins', sans-serif",
    },
};

export default AboutPage;
