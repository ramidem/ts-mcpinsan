import React from "react";
import { AMENITIES } from "../../assets/data";

import "./AmenitiesList.scss";

const AmenitiesList: React.FC = () => {
  const listItems = AMENITIES.map((amenity) => {
    let list;
    if (amenity.name !== "Meeting Rooms") {
      list = (
        <li className="media" key={amenity.name}>
          <img src={amenity.icon.small} className="mr-3" alt={amenity.name} />
          <div className="media-body">
            <p className="mt-0 mb-1">{amenity.name}</p>
          </div>
        </li>
      );
    }
    return list;
  });

  return (
    <>
      <ul className="list-unstyled">
        {listItems}

        <p className="small mt-4">* applies for both hourly and daypass</p>
      </ul>
    </>
  );
};

export default AmenitiesList;
