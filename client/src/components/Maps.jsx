import React from "react";

const Maps = ({ className = "w-full h-96" }) => {
  return (
    <div className={`shadow-lg border ${className}`}>
      <iframe
        title="Google Maps"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.537258130375!2d112.70892474543571!3d-7.28832240294685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc0b562a8417%3A0x10eca7a7d5e73de!2sCV.%20Kencana%20Surya!5e0!3m2!1sid!2sid!4v1745822365733!5m2!1sid!2sid"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
