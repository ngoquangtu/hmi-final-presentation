import React from "react";

const ThankYou = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Thank You!</h1>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Chiều cao toàn màn hình
    width: "100vw", // Chiều rộng toàn màn hình
    backgroundColor: "#04152d", // Nền đỏ
    margin: 0, // Xóa khoảng cách mặc định
    padding: 0,
    overflow: "hidden", // Đảm bảo không có thanh cuộn
  },
  heading: {
    fontSize: "10vw", // Kích thước chữ dựa trên chiều rộng màn hình
    fontWeight: "bold", // Chữ đậm
    textAlign: "center", // Căn giữa
    margin: 0, // Xóa khoảng cách
    background: "linear-gradient(to right, #ff7e5f, #feb47b)", // Hiệu ứng gradient
    WebkitBackgroundClip: "text", // Chỉ tô màu cho phần chữ
    WebkitTextFillColor: "transparent", // Làm nền chữ trong suốt
  },
};

export default ThankYou;
