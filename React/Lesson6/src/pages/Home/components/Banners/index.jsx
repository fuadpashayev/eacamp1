import React from "react";
import BannerItem from "./components/BannerItem";

const Banners = () => {
  const getBanners = async () => {
    const response = await fetch("https://api.example.com/banners");
    const data = await response.json();
    console.log(data);
  };

  // DRY - Don't Repeat Yourself
  // YAGNI - You Aren't Gonna Need It

  return (
    <>
      <h1>Banners</h1>
      <ul>
        {banners.map((banner) => (
          <BannerItem item={banner} />
        ))}
      </ul>
    </>
  );
};

export default Banners;
