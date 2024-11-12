import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  route,
  latitude,
  longitude,
  handleOrderPopup,
}) => {
  return (
    <Link
      to={{
        pathname: `/city${route}`,
      }}
      state={{
        title,
        description,
        latitude,
        longitude,
        price,
        type,
      }}
      onClick={handleOrderPopup}
    >
      <div className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer">
        <div className="overflow-hidden">
          <img
            src={img}
            alt="No image"
            className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
          <div className="flex items-center gap-2 opacity-70">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="line-clamp-2">{description}</p>
          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70">
              <p>{type}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">${price}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;







// import React from "react";
// import { IoLocationSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const PlaceCard = ({
//   img,
//   title,
//   location,
//   description,
//   price,
//   type,
//   route,
//   handleOrderPopup,
// }) => {
//   return (
//     <Link to={route} onClick={handleOrderPopup}>
//       <div className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer">
//         <div className="overflow-hidden">
//           <img
//             src={img}
//             alt="No image"
//             className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
//           />
//         </div>

//         <div className="space-y-2 p-3">
//           <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
//           <div className="flex items-center gap-2 opacity-70">
//             <IoLocationSharp />
//             <span>{location}</span>
//           </div>
//           <p className="line-clamp-2">{description}</p>
//           <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
//             <div className="opacity-70">
//               <p>{type}</p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold">${price}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default PlaceCard;
