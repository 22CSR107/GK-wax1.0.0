import React from "react";
import Slider from "react-slick";
import Page from "../components/Page";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
    const images = [
        "https://i.pinimg.com/736x/4c/35/08/4c35081ea66c264f92ec597b2f921d62.jpg",
        "https://i.pinimg.com/736x/59/40/28/5940280b2d90c6dcba3f7689d95c894d.jpg",
        "https://i.pinimg.com/736x/ef/e7/df/efe7df333dd86b36186a96b552f55a54.jpg",
    ];

    const testimonials = [
        { name: "Sarah J.", review: "Absolutely love the aroma! These candles set the perfect mood." },
        { name: "David P.", review: "The quality and burn time are exceptional. Highly recommend!" },
        { name: "Priya K.", review: "Beautifully crafted and smells amazing. My new favorite!" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Page>
            <motion.div
                style={styles.container}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 style={styles.heading}>Welcome to GK Wax</h1>
                <p style={styles.subtitle}>
                    Discover the finest handcrafted candles for every occasion.
                </p>
                <button style={styles.shopButton}>Shop Now</button>

                <div style={styles.carouselContainer}>
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <div key={index} style={styles.imageWrapper}>
                                <img src={img} alt={`Candle ${index + 1}`} style={styles.image} />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div style={styles.benefitsContainer}>
                    <h2 style={styles.aboutHeading}>Why Choose GK Wax?</h2>
                    <ul style={styles.benefitsList}>
                        <li>🌿 100% Natural Soy Wax</li>
                        <li>🕯 Long-Lasting Burn Time</li>
                        <li>🌎 Eco-Friendly Ingredients</li>
                        <li>✨ Handcrafted with Love</li>
                    </ul>
                </div>

                <div style={styles.aboutContainer}>
                    <h2 style={styles.aboutHeading}>About GK Wax</h2>
                    <p style={styles.aboutText}>
                        At GK Wax, we specialize in premium handcrafted candles made from
                        <strong> natural soy wax</strong> and <strong>eco-friendly ingredients</strong>. Our collection
                        features a variety of <strong>aromatic blends</strong>, ensuring a soothing and long-lasting
                        experience. Explore our range and find the perfect candle for your home or special occasion.
                    </p>
                </div>

                <div style={styles.testimonialContainer}>
                    <h2 style={styles.aboutHeading}>What Our Customers Say</h2>
                    <Slider {...settings}>
                        {testimonials.map((item, idx) => (
                            <div key={idx} style={styles.testimonialCard}>
                                <p style={styles.testimonialText}>&ldquo;{item.review}&rdquo;</p>
                                <p style={styles.testimonialAuthor}>— {item.name}</p>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div style={styles.newsletterContainer}>
                    <h2 style={styles.aboutHeading}>Subscribe for Updates</h2>
                    <p style={styles.subtitle}>Join our newsletter to receive exclusive offers and updates!</p>
                    <input type="email" placeholder="Enter your email" style={styles.emailInput} />
                    <button style={styles.subscribeButton}>Subscribe</button>
                </div>
            </motion.div>
        </Page>
    );
}

const styles = {
    container: {
        textAlign: "center",
        backgroundColor: "#FDF6EC",
        padding: "40px",
        borderRadius: "10px",
    },
    heading: {
        fontSize: "36px",
        fontWeight: "bold",
        color: "#8B4513",
        fontFamily: "'Playfair Display', serif",
        marginBottom: "10px",
    },
    subtitle: {
        fontSize: "18px",
        color: "#5A4A42",
        fontFamily: "'Poppins', sans-serif",
        marginBottom: "30px",
    },
    shopButton: {
        padding: "12px 30px",
        backgroundColor: "#8B4513",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
        marginBottom: "30px",
    },
    carouselContainer: {
        maxWidth: "600px",
        margin: "0 auto",
    },
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "auto",
        maxHeight: "400px",
        objectFit: "cover",
        borderRadius: "10px",
    },
    aboutContainer: {
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#FAE5D3",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    aboutHeading: {
        fontSize: "28px",
        fontWeight: "bold",
        color: "#8B4513",
        fontFamily: "'Playfair Display', serif",
        marginBottom: "10px",
    },
    aboutText: {
        fontSize: "16px",
        color: "#5A4A42",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: "1.6",
    },
    benefitsContainer: {
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#F9E2D2",
        borderRadius: "10px",
    },
    benefitsList: {
        listStyle: "none",
        padding: 0,
        fontSize: "16px",
        color: "#5A4A42",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: "2",
    },
    testimonialContainer: {
        marginTop: "40px",
        backgroundColor: "#FCEBDE",
        padding: "20px",
        borderRadius: "10px",
    },
    testimonialCard: {
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    },
    testimonialText: {
        fontSize: "16px",
        fontStyle: "italic",
        color: "#5A4A42",
    },
    testimonialAuthor: {
        marginTop: "10px",
        fontWeight: "bold",
        color: "#8B4513",
    },
    newsletterContainer: {
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#FAF3E3",
        borderRadius: "10px",
    },
    emailInput: {
        padding: "10px",
        width: "60%",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginRight: "10px",
    },
    subscribeButton: {
        padding: "10px 20px",
        backgroundColor: "#8B4513",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default HomePage;