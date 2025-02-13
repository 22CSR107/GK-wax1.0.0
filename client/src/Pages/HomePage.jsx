import React from "react";
import Slider from "react-slick";
import Page from "../components/Page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
    const images = [
        "https://i.pinimg.com/736x/4c/35/08/4c35081ea66c264f92ec597b2f921d62.jpg",
        "https://i.pinimg.com/736x/59/40/28/5940280b2d90c6dcba3f7689d95c894d.jpg",
        "https://i.pinimg.com/736x/ef/e7/df/efe7df333dd86b36186a96b552f55a54.jpg",
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
            <div style={styles.container}>
                <h1 style={styles.heading}>Welcome to GK Wax</h1>
                <p style={styles.subtitle}>
                    Discover the finest handcrafted candles for every occasion.
                </p>

                <div style={styles.carouselContainer}>
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <div key={index} style={styles.imageWrapper}>
                                <img src={img} alt={`Candle ${index + 1}`} style={styles.image} />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* About Section */}
                <div style={styles.aboutContainer}>
                    <h2 style={styles.aboutHeading}>About GK Wax</h2>
                    <p style={styles.aboutText}>
                        At GK Wax, we specialize in premium handcrafted candles made from 
                        **natural soy wax** and **eco-friendly ingredients**. Our collection features 
                        a variety of **aromatic blends**, ensuring a soothing and long-lasting experience.  
                        Each candle is crafted with precision to create a warm and **relaxing ambiance**.  
                        Explore our range and find the perfect candle for your home or special occasion.
                    </p>
                </div>
            </div>
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
};

export default HomePage;
