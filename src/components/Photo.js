import React, { useEffect, useState } from "react";
import "./Photo.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PicInfo from "./PicText";


function Photo() {
  const [data, setdata] = useState([]);
  const clientId = "tXpgV0NGuX9uMhwMwW4a6HvZKObsp7VY1LntUQTgjFA";
  const url = `https://api.unsplash.com/search/photos/?client_id=${clientId}&query=nature&per_page=24`;
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((picdata) => {
        return setdata(picdata);
      });
  }, [url]);
  if(!data){
    return <h1>Loading ...</h1>
  }
  return (
    <div className="pic_container">
      <div className="Image_description">
        <PicInfo />
      </div>
      <div className="pic_row">
        {data.results?.map((pic) => {
          return (
            <div key={pic.id} className="pic_info">
              <div className="user_info">
                <LazyLoadImage effect='blur' src={pic.user["profile_image"].small} alt={pic["alt_description"]} style={{borderRadius:"50%"}}/>
                <p>{pic.user["name"]}</p>
              </div>
              <div>
                <LazyLoadImage
                  effect="blur"
                  className="pic_item"
                  src={pic.urls.regular}
                  alt={pic["alt_description"]}
                  
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photo;
