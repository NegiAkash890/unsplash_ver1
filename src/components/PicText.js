import React from "react";
import "./PicText.css";
function PicInfo() {
  return (
    <div className="pictext_container">
      <div className="pic_description">
        <h1 className='pic_heading'>Nature</h1>
        <p className='pic_summary'>
          Let’s celebrate the magic of Mother Earth — with images of everything
          our planet has to offer, from stunning seascapes, starry skies, and
          everything in between.
        </p>
      </div>
      <div className="pic_stats_content">
        <div className="pic_stats">
          <div>
            <p>Status</p>
            <p style={{backgroundColor:"#C2EBD3" , padding:"5px 15px"}}>Open</p>
          </div>
          <div>
            <p>Curator</p>
            <p>
              <img
                className="curator_img"
                alt="unsplash_logo"
                src={process.env.PUBLIC_URL + "/main.svg"}
                style={{width:"14px",height:"14px"}}/>
            </p>
          </div>
          <div>
            <p>Contributions</p>
            <p className='text_bold'>8.2k</p>
          </div>
          <div>
            <p>Top contributors</p>
            <p className='text_bold'>1k</p>
          </div>
        </div>
        <button className="btn-dark">Submit to Nature</button>
      </div>
    </div>
  );
}

export default PicInfo;
