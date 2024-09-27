import React from "react";

const topBrands = [
  { id: "Charliee", redirect: "/", label: "Charliee" },
  { id: "The", redirect: "/", label: "The Body Shop" },
  { id: "Plum", redirect: "/", label: "Plum" },
  { id: "Khadi", redirect: "/", label: "Khadi" },
  { id: "24", redirect: "/", label: "24 Mantra" },
  { id: "One", redirect: "/", label: "One 8" },
  { id: "Spinz", redirect: "/", label: "Spinz" },
  { id: "Clean", redirect: "/", label: "Clean & Clear" },
  { id: "Neutrogena", redirect: "/", label: "Neutrogena" },
  { id: "Moksh", redirect: "/", label: "Moksh Swarna" },
  { id: "Nikhil", redirect: "/", label: "Nikhil's" },
  { id: "Glow", redirect: "/", label: "Glow & Lovely" },
  { id: "Krack", redirect: "/", label: "Krack" },
  { id: "Exo", redirect: "/", label: "Exo" },
  { id: "Margo", redirect: "/", label: "Margo" },
  { id: "Maxo", redirect: "/", label: "Maxo" },
  { id: "Maya", redirect: "/", label: "Maya Durga Shakti" },
  { id: "Prill", redirect: "/", label: "Prill" },
  { id: "Savlon", redirect: "/", label: "Savlon" },
  { id: "VWash", redirect: "/", label: "VWash" },
  { id: "Hit", redirect: "/", label: "Hit" },
  { id: "Clean", redirect: "/", label: "Clean and Dry" },
  { id: "Harpic", redirect: "/", label: "Harpic" },
  { id: "Scotch", redirect: "/", label: "Scotch Brite" },
  { id: "Gala", redirect: "/", label: "Gala" },
  { id: "Mr", redirect: "/", label: "Mr. Muscle" },
  { id: "Mortein", redirect: "/", label: "Mortein" },
  { id: "Evane", redirect: "/", label: "Evane" },
  { id: "Capital", redirect: "/", label: "Capital" },
  { id: "Odonil", redirect: "/", label: "Odonil" },
  { id: "Loreal", redirect: "/", label: "Loreal" },
  { id: "Garnier", redirect: "/", label: "Garnier" },
  { id: "Allegro", redirect: "/", label: "Allegro" },
  { id: "Maybelline", redirect: "/", label: "Maybelline" },
  { id: "Super", redirect: "/", label: "Super Shine" },
  { id: "Classic", redirect: "/", label: "Classic Star" },
  { id: "Clean", redirect: "/", label: "Clean Bright" },
  { id: "Badshah", redirect: "/", label: "Badshah" },
  { id: "Red", redirect: "/", label: "Red Label" },
  { id: "Taaza", redirect: "/", label: "Taaza" },
  { id: "KitKat", redirect: "/", label: "KitKat" },
  { id: "Brown", redirect: "/", label: "Brown & Polson" },
  { id: "Rex", redirect: "/", label: "Rex" },
  { id: "Madhur", redirect: "/", label: "Madhur" },
  { id: "Twinings", redirect: "/", label: "Twinings of London" },
  { id: "Thums", redirect: "/", label: "Thums Up" },
  { id: "GAIA", redirect: "/", label: "GAIA" },
  { id: "Maaza", redirect: "/", label: "Maaza" },
  { id: "Kinley", redirect: "/", label: "Kinley" },
  { id: "Samrat", redirect: "/", label: "Samrat" },
  { id: "Frooti", redirect: "/", label: "Frooti" },
  { id: "Organic", redirect: "/", label: "Organic Gyaan" },
  { id: "Nestea", redirect: "/", label: "Nestea" },
  { id: "Bar", redirect: "/", label: "Bar" },
  { id: "Mapro", redirect: "/", label: "Mapro" },
  { id: "Prince", redirect: "/", label: "Prince" },
  { id: "Pears", redirect: "/", label: "Pears" },
  { id: "Borges", redirect: "/", label: "Borges" },
  { id: "Kaya", redirect: "/", label: "Kaya" },
  { id: "Odomos", redirect: "/", label: "Odomos" },
  { id: "Hamam", redirect: "/", label: "Hamam" },
];

const TopBrandsComponent = () => {
  return (
    <div className="container-lg home-container">
      <div className="fs-4 pb-3 fs-1">Top Brands</div>
      <div className="brand-list-footer">
        {topBrands?.map((value) => {
          return (
            <span
              role="button"
              onClick={() => {}}
              className="brand-list-footer-text"
              key={value?.label}
            >
              {`${value?.label}   |  `}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TopBrandsComponent;
