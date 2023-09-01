import React from "react";
import Card from "./Card";
import "./Blogs.css";

const Blogs = () => {
  let blogData = [
    {
      title: "About Europe",
      img: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Europe, known for its rich history and diverse cultures, is a continent where the past seamlessly blends with the present. From the iconic landmarks of Paris to the charming villages of Italy, Europe offers an array of experiences. Whether you're exploring ancient ruins or indulging in world-class cuisine, Europe promises unforgettable adventures.",
      author: "Marija Nikolic",
      time: "day ago",
    },
    {
      title: "About North America",
      img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80",
      text: "North America, a land of vast landscapes and innovation, is a continent of contrasts. From the towering skyscrapers of New York City to the serene beauty of Canada's national parks, it boasts a wide spectrum of experiences. Whether you're seeking outdoor adventures or vibrant city life, North America has something for everyone.",
      author: "Emily Johnson",
      time: "day ago",
    },
    {
      title: "About South America",
      img: "https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      text: "South America, a continent of breathtaking natural wonders and vibrant cultures, beckons travelers with its diversity. From the Amazon Rainforest's lush jungles to the historic streets of Buenos Aires, it's a place of adventure and passion. Whether you're trekking through the Andes or dancing to the rhythms of salsa, South America is a land of rhythm and charm.",
      author: "Alex Martinez",
      time: "day ago",
    },
    {
      title: "About Asia",
      img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2042&q=80",
      text: "Asia, the world's largest continent, is a tapestry of traditions and modernity. From the ancient temples of Angkor Wat to the futuristic skyline of Tokyo, it offers an unparalleled mix of old and new. Whether you're savoring street food in Bangkok or meditating in the Himalayas, Asia is a continent of spiritual awakening and culinary delight.",
      author: "Mei Chen",
      time: "day ago",
    },
    {
      title: "About Africa",
      img: "https://images.unsplash.com/photo-1609158063294-c7014069f886?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Africa, the cradle of humanity, is a continent of diverse landscapes and wildlife wonders. From the endless savannas of the Serengeti to the bustling markets of Marrakech, it's a place of adventure and discovery. Whether you're on a safari in Kenya or exploring the pyramids of Egypt, Africa promises awe-inspiring experiences.",
      author: "Kwame Jalloh",
      time: "day ago",
    },
    {
      title: "About Oceania",
      img: "https://images.unsplash.com/photo-1656177303261-bb9dfbdd37ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      text: "Oceania, a world of islands and blue horizons, is a continent of paradise and adventure. From the coral reefs of the Great Barrier Reef to the indigenous culture of New Zealand's Maori, it's a realm of natural beauty and cultural richness. Whether you're surfing in Fiji or hiking in the Australian Outback, Oceania is a continent of endless exploration.",
      author: "Tane Williams",
      time: "day ago",
    },
  ];

  return (
    <>
      <h1 className="container blogs">Blogs</h1>
      <main className="site-main">
        <div className="container">
          <section className="post-feed">
            {blogData.map((blogData, index) => (
              <Card key={index} blogData={blogData}/>
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Blogs;
