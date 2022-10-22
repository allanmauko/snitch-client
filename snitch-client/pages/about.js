function About() {
  return (
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-sm-5 p-3 text-dark">
          <h5
            style={{
              fontFamily: "Acme",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "40px",
              lineHeight: "51px",
              textAlign: "center",
              color: "#000000",
            }}
          >
            A few words about this blog platform, <br />
            Snitch, and how this site was made
          </h5>
        </div>
        <div class="col-sm-7 p-3 text-dark">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-4">
                <img class='rounded'
                  src="https://pilbox.themuse.com/image.jpg?filter=antialias&h=384&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2Fquestions-to-ask-05202022-602012447-Thomas-Barwick.jpg%3Fv%3Ded8d97d1eee7834c77adc5d87afe41247a8b2473&w=767"
                  alt="Holding image"
                  width="200px"
                  height="150px"
                />
              </div>
              <div class="col-4">
                {" "}
                <h5>Mika Matikainen</h5>
                <p>Apr 15, 2020 · 4 min read</p>
              </div>
              <div class="col-4">Social media icons</div>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              velit tempus erat egestas efficitur. In hac habitasse platea
              dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              Aliquam quis posuere ligula. In eu dui molestie, molestie lectus
              eu, semper lectus.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
