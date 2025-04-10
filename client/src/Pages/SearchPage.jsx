import React, { useState } from "react";
import Page from "../components/Page";

// Importing images from src/assets
import img1 from "../assets/candle1.jpg";
import img2 from "../assets/candle2.jpg";
import img3 from "../assets/candle3.jpg";
import img4 from "../assets/candle4.jpg";
import img5 from "../assets/candle5.jpg";
import img6 from "../assets/candle6.jpg";
import img7 from "../assets/candle7.jpg";
import img8 from "../assets/candle8.jpg";
import img9 from "../assets/candle9.jpg";
import img10 from "../assets/candle10.jpg";

function SearchPage() {
    const initialCandles = [
        { id: 1, name: "Spices with Rose", price: 80, image: img1 },
        { id: 2, name: "Coconut shell rose flower", price: 80, image: img2 },
        { id: 3, name: "Coconut shell oval type full polished rose petals with rose perfume", price: 100, image: img3 },
        { id: 4, name: "Cinnamon Spice", price: 80, image: img4 },
        { id: 5, name: "Coconut shell candle gift", price: 100, image: img5 },
        { id: 6, name: "Painted Coconut shell candle", price: 100, image: img6 },
        { id: 7, name: "Leaf leaf type candle", price: 120, image: img7 },
        { id: 8, name: "Pepper Salt", price: 200, image: img8 },
        { id: 9, name: "Full Polished Coconut Shell Candle", price: 200, image: img9 },
        { id: 10, name: "Rose Coconut Shell Candle", price: 80, image: img10 },
    ];

    const [candles, setCandles] = useState(initialCandles.map(c => ({ ...c, quantity: 0 })));
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const increaseQuantity = (id) => {
        setCandles(candles.map(c => c.id === id ? { ...c, quantity: c.quantity + 1 } : c));
    };

    const decreaseQuantity = (id) => {
        setCandles(candles.map(c => c.id === id && c.quantity > 0 ? { ...c, quantity: c.quantity - 1 } : c));
    };

    const clearCart = () => {
        setCandles(candles.map(c => ({ ...c, quantity: 0 })));
    };

    const totalPrice = candles.reduce((acc, c) => acc + c.price * c.quantity, 0);

    const filteredCandles = candles
        .filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);

    return (
        <Page>
            <div style={styles.container}>
                <h1 style={styles.heading}>Candle Collection 🕯️</h1>
                <div style={styles.searchSortContainer}>
                    <input
                        type="text"
                        placeholder="Search candles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={styles.searchInput}
                    />
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        style={styles.sortSelect}
                    >
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>
                </div>

                <div style={styles.candleList}>
                    {filteredCandles.map((candle) => (
                        <div key={candle.id} style={styles.card}>
                            <img src={candle.image} alt={candle.name} style={styles.image} />
                            <h2 style={styles.candleName}>{candle.name}</h2>
                            <p style={styles.price}>₹{candle.price}</p>
                            <div style={styles.controls}>
                                <button onClick={() => decreaseQuantity(candle.id)} style={styles.button}>-</button>
                                <span style={styles.quantity}>{candle.quantity}</span>
                                <button onClick={() => increaseQuantity(candle.id)} style={styles.button}>+</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={styles.summaryContainer}>
                    <h3>Total Price: ₹{totalPrice}</h3>
                    <button onClick={clearCart} style={styles.clearButton}>Clear Cart</button>
                </div>
            </div>
        </Page>
    );
}

const styles = {
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
    searchSortContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "30px",
    },
    searchInput: {
        padding: "10px",
        width: "250px",
        borderRadius: "5px",
        border: "1px solid #8B4513",
        outline: "none",
        fontFamily: "'Poppins', sans-serif",
    },
    sortSelect: {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #8B4513",
        fontFamily: "'Poppins', sans-serif",
    },
    candleList: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
    },
    card: {
        backgroundColor: "#FAE5D3",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "250px",
        textAlign: "center",
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px",
    },
    candleName: {
        fontSize: "20px",
        color: "#8B4513",
        fontFamily: "'Playfair Display', serif",
        margin: "10px 0",
    },
    price: {
        fontSize: "16px",
        color: "#5A4A42",
        fontFamily: "'Poppins', sans-serif",
        marginBottom: "10px",
    },
    controls: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
    },
    button: {
        fontSize: "18px",
        padding: "5px 10px",
        backgroundColor: "#8B4513",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    quantity: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#5A4A42",
    },
    summaryContainer: {
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "#F9E1CC",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontSize: "20px",
        color: "#5A4A42",
    },
    clearButton: {
        marginTop: "10px",
        padding: "10px 20px",
        backgroundColor: "#A0522D",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    },
};

export default SearchPage;
