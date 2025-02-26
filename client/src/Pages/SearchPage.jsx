import React, { useState } from "react";
import Page from "../components/Page";

function SearchPage() {
    const initialCandles = [
        { id: 1, name: "Vanilla Bliss", price: 299, image: "https://i.pinimg.com/736x/4c/35/08/4c35081ea66c264f92ec597b2f921d62.jpg" },
        { id: 2, name: "Lavender Dreams", price: 349, image: "https://i.pinimg.com/736x/59/40/28/5940280b2d90c6dcba3f7689d95c894d.jpg" },
        { id: 3, name: "Rose Petal Glow", price: 399, image: "https://i.pinimg.com/736x/ef/e7/df/efe7df333dd86b36186a96b552f55a54.jpg" },
        { id: 4, name: "Cinnamon Spice", price: 279, image: "https://i.pinimg.com/474x/d5/9e/32/d59e3211336332113676f9d78198f2dc.jpg" },
        { id: 5, name: "Jasmine Serenity", price: 329, image: "https://i.pinimg.com/236x/e8/ec/0e/e8ec0e3eda4ada57a579f177fedea354.jpg" },
        { id: 6, name: "Ocean Breeze", price: 359, image: "https://i.pinimg.com/236x/7f/f4/c6/7ff4c63364b454db3d5fe0ca2ddace6c.jpg" },
        { id: 7, name: "Coconut Paradise", price: 319, image: "https://i.pinimg.com/236x/28/c6/f2/28c6f2547192b9bf605f969d1c3f5c29.jpg" },
        { id: 8, name: "Sandalwood Bliss", price: 389, image: "https://i.pinimg.com/474x/18/6d/f9/186df964e62cce30b80d193a2c3a1eae.jpg" },
        { id: 9, name: "Berry Delight", price: 299, image: "https://i.pinimg.com/236x/b5/a6/65/b5a6655d6ff05c42d0b76d79e3588673.jpg" },
        { id: 10, name: "Peach Blossom", price: 349, image: "https://i.pinimg.com/236x/16/33/f3/1633f34d8b8e8926e222e77ee4d2d3e2.jpg" },
    ];

    const [candles, setCandles] = useState(
        initialCandles.map(candle => ({ ...candle, quantity: 0 }))
    );
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const increaseQuantity = (id) => {
        setCandles(candles.map(candle =>
            candle.id === id ? { ...candle, quantity: candle.quantity + 1 } : candle
        ));
    };

    const decreaseQuantity = (id) => {
        setCandles(candles.map(candle =>
            candle.id === id && candle.quantity > 0
                ? { ...candle, quantity: candle.quantity - 1 }
                : candle
        ));
    };

    const clearCart = () => {
        setCandles(candles.map(candle => ({ ...candle, quantity: 0 })));
    };

    const totalPrice = candles.reduce((acc, candle) => acc + candle.price * candle.quantity, 0);

    const filteredCandles = candles
        .filter((candle) => candle.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

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
