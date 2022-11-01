import React from "react";

function Banner() {
  return (
      <div style={{backgroundColor: '#b086fa'}}>
        <div className="container flex">
          <div className="row">
            <div className="col-6">
              <h2
                  style={{
                    fontFamily: "Istok Web",
                    fontStyle: "normal",
                    // margin: '8.61% 61.18% 7.9% 85.98%',
                    fontWeight: "700px",
                    fontSize: "50px",
                    lineHeight: "80px",
                    color: "#010002",
                  }}
              >
                Your Dream ideas.
                <br/> Write with us.
              </h2>
            </div>
            <div className="col-6">
              <img
                  //   loader={myLoader}
                  src="https://img.huffingtonpost.com/asset/5cd367c02300003000b78bae.jpeg?ops=1778_1000"
                  alt="Picture of the author"
                  width={700}
                  height={400}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Banner;
