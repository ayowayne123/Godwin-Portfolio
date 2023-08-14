import React from "react";

const Map = () => {
  return (
    <>
      <div className="">
        <div className="embed-responsive embed-responsive-21by9">
          {/* <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26076.26451987057!2d33.36844505!3d35.218098049999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de16eb4c856e0b%3A0x5581ca46aaa8512a!2zSGFtaXRrw7Z5!5e0!3m2!1sen!2s!4v1692051361880!5m2!1sen!2s"
            width="800"
            height="600"
            // className="embed-responsive-item"
            title="location title"
            allowfullscreen="yes "
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
