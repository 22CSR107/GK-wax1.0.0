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
        {
            title: "Soothing Scents",
            description: "Choose from a wide range of fragrances that calm the mind and uplift the spirit.",
            image: "https://i.pinimg.com/236x/11/2c/cf/112ccfc14c84e922ff175460ee5e2f42.jpg",
        },
        {
            title: "Customizable Candles",
            description: "Personalize your candles with custom scents and designs, perfect for gifts and special occasions.",
            image: "https://i.pinimg.com/236x/85/a1/b9/85a1b97603987c7f5c774d92de3132b7.jpg",
        },
        {
            title: "Elegant Packaging",
            description: "Each candle comes in beautifully designed packaging, adding a touch of luxury to any setting.",
            image: "https://i.pinimg.com/736x/aa/81/e2/aa81e27cf0da6ae7a776150eef5530ae.jpg",
        },
    ];

    const reviews = [
        {
            name: "Sophia",
            comment: "The scents are heavenly, and the burn time is impressive! My home smells amazing.",
        },
        {
            name: "Daniel",
            comment: "Absolutely love the eco-friendly aspect. These candles are now a staple in my home.",
        },
        {
            name: "Olivia",
            comment: "Beautifully packaged and perfect for gifting. Highly recommend!",
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

                <h2 style={styles.reviewHeading}>What Our Customers Say</h2>
                <div style={styles.reviewContainer}>
                    {reviews.map((review, index) => (
                        <div key={index} style={styles.reviewCard}>
                            <p style={styles.reviewComment}>&ldquo;{review.comment}&rdquo;</p>
                            <p style={styles.reviewName}>- {review.name}</p>
                        </div>
                    ))}
                </div>

                <div style={styles.subscriptionSection}>
                    <h2 style={styles.subscriptionHeading}>Subscribe for Exclusive Offers</h2>
                    <p style={styles.subscriptionText}>
                        Join our community and be the first to know about new scents, discounts, and special editions.
                    </p>
                    <input type="email" placeholder="Enter your email" style={styles.emailInput} />
                    <button style={styles.subscribeButton}>Subscribe Now</button>
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
    reviewHeading: {
        fontSize: "30px",
        fontWeight: "bold",
        color: "#8B4513",
        margin: "50px 0 20px",
    },
    reviewContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
    },
    reviewCard: {
        backgroundColor: "#FCEBD4",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    },
    reviewComment: {
        fontSize: "16px",
        color: "#5A4A42",
        fontStyle: "italic",
    },
    reviewName: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#8B4513",
        marginTop: "10px",
    },
    subscriptionSection: {
        backgroundColor: "#FAE5D3",
        padding: "40px",
        borderRadius: "10px",
        marginTop: "50px",
        textAlign: "center",
    },
    subscriptionHeading: {
        fontSize: "28px",
        fontWeight: "bold",
        color: "#8B4513",
        marginBottom: "10px",
    },
    subscriptionText: {
        fontSize: "16px",
        color: "#5A4A42",
        marginBottom: "20px",
    },
    emailInput: {
        padding: "10px",
        width: "250px",
        borderRadius: "5px",
        border: "1px solid #8B4513",
        marginRight: "10px",
    },
    subscribeButton: {
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#8B4513",
        color: "white",
        cursor: "pointer",
        fontSize: "16px",
    },
};

export default AboutPage;
