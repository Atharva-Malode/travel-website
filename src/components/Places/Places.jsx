import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Premium Package",
    location: "Shimla",
    description: "Explore the beautiful hill station of Shimla, known for its snow-capped mountains and colonial history.",
    price: 6700,
    type: "Cultural Relax",
    route: "/shimla",
    latitude: 31.1048,
    longitude: 77.1734,
  },
  {
    img: Img2,
    title: "Gold Package",
    location: "Agra",
    description: "Visit the magnificent Taj Mahal, a symbol of love and one of the Seven Wonders of the World.",
    price: 6700,
    type: "Cultural Relax",
    route: "/agra",
    latitude: 27.1751,
    longitude: 78.0421,
  },
  {
    img: Img3,
    title: "Underwater Adventure",
    location: "Andaman and Nicobar Islands",
    description: "Discover marine life with an underwater experience in the pristine waters of Andaman.",
    price: 6200,
    type: "Adventure Relax",
    route: "/andaman",
    latitude: 11.7401,
    longitude: 92.6586,
  },
  {
    img: Img4,
    title: "Sunrise in Varanasi",
    location: "Varanasi",
    description: "Experience the spiritual richness by witnessing the sunrise along the banks of the Ganges.",
    price: 6700,
    type: "Cultural Relax",
    route: "/varanasi",
    latitude: 25.3176,
    longitude: 82.9739,
  },
  {
    img: Img5,
    title: "Beaches of Goa",
    location: "Goa",
    description: "Enjoy vibrant beach life, water sports, and rich Portuguese heritage in Goa.",
    price: 6700,
    type: "Beach Relax",
    route: "/goa",
    latitude: 15.2993,
    longitude: 74.1240,
  },
  {
    img: Img6,
    title: "Desert Safari in Jaisalmer",
    location: "Jaisalmer",
    description: "Embark on a desert safari in the Golden City of Jaisalmer, Rajasthan.",
    price: 6200,
    type: "Adventure Cultural",
    route: "/jaisalmer",
    latitude: 26.9157,
    longitude: 70.9083,
  },
  {
    img: Img6,
    title: "Houseboats in Kerala",
    location: "Alleppey",
    description: "Relax in Kerala's backwaters on a houseboat cruise through Alleppey.",
    price: 6800,
    type: "Nature Relax",
    route: "/alleppey",
    latitude: 9.4981,
    longitude: 76.3388,
  },
  {
    img: Img6,
    title: "Historical Hampi",
    location: "Hampi",
    description: "Explore the ancient ruins of Hampi, a UNESCO World Heritage Site.",
    price: 6400,
    type: "Cultural Adventure",
    route: "/hampi",
    latitude: 15.3350,
    longitude: 76.4600,
  },
  {
    img: Img6,
    title: "Munnar Tea Gardens",
    location: "Munnar",
    description: "Experience the scenic tea plantations and cool climate of Munnar.",
    price: 6600,
    type: "Nature Relax",
    route: "/munnar",
    latitude: 10.0889,
    longitude: 77.0595,
  },
  {
    img: Img6,
    title: "Palace Tour in Mysore",
    location: "Mysore",
    description: "Discover the grandeur of Mysore Palace and immerse yourself in history.",
    price: 6500,
    type: "Cultural Relax",
    route: "/mysore",
    latitude: 12.2958,
    longitude: 76.6394,
  },
  {
    img: Img6,
    title: "Udaipur Lake City",
    location: "Udaipur",
    description: "Sail on the picturesque lakes of Udaipur, known as the Venice of the East.",
    price: 6750,
    type: "Romantic Relax",
    route: "/udaipur",
    latitude: 24.5854,
    longitude: 73.7125,
  },
  {
    img: Img6,
    title: "Leh Ladakh",
    location: "Leh",
    description: "Experience the scenic beauty of Leh, with its mountains and peaceful monasteries.",
    price: 7000,
    type: "Adventure Relax",
    route: "/leh",
    latitude: 34.1526,
    longitude: 77.5770,
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
