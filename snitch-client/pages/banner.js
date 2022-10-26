import React from "react";

function Banner() {
  return (
    <div style={{ backgroundColor: "#b086fa" }}>
      <div class="container flex">
        <div class="row">
          <div class="col-5 mt-5">
            <h2
              style={{
                fontFamily: "Istok Web",
                fontStyle: "normal",
                // margin: '8.61% 61.18% 7.9% 85.98%',
                fontWeight: "700px",
                fontSize: "50px",
                lineHeight: "80px",
                color: "#010002"
              }}
            >
              Write with us.
              <br /> Your Dream ideas.
            </h2>
          </div>
          <div class="col-6 mb-4">
            <img
              //   loader={myLoader}
              className="rounded-3"
              src="https://img.huffingtonpost.com/asset/5cd367c02300003000b78bae.jpeg?ops=1778_1000"
              alt="Picture of the author"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
