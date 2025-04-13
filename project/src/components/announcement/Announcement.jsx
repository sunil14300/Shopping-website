import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Announcement.css";

const Announcement = () => {
  return (
    <div className="container-fluid text-white py-2 text-center" style={{backgroundColor:"teal"}}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h6 className="mb-0">🚚 Free Delivery</h6>
        </div>
        <div className="col-md-4">
          <h6 className="mb-0">🎉 Welcome Offer 15% Off</h6>
        </div>
        <div className="col-md-4">
          <h6 className="mb-0">🔄 Free Returns</h6>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
