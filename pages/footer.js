
function Footer() {
  return (
    <div>
      <div class="container-flex" background-color="#9054F7">
        <footer
          style={{ backgroundColor: "#b086fa" }}
          class="text-center text-white"
        >
          <div class="container p-5 pb-0">
            <section class="">
              <form action="">
                <div class="row d-flex justify-content-center">
                  <div class="col-auto">
                    <h1 class="pt-2">
                      <strong>Snitch</strong>
                    </h1>
                  </div>
                  <div class="col-auto">
                    <h1 class="pt-2">
                      <strong>Menu</strong>
                    </h1>
                  </div>
                  <div class="col-auto">
                    <p class="pt-2">
                      <strong>Subscribe to our monthly newsletter</strong>
                    </p>
                  </div>
                  <div class="col-md-5 col-12">
                    <div class="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        class="form-control"
                        text
                      />
                      <label class="form-label" for="form5Example2">
                        Email address
                      </label>
                    </div>
                  </div>
                  <div class="col-auto">
                    <button type="submit" class="btn btn-outline-light mb-4">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
          <div class="text-center p-3">
            © 2022 Copyright:
            <a class="text-white" href="">
              Snitch.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer