return (
        
    <div className="home">
      <div className="container navigation pt-3">
  <div className="row">
    <div className="col-6 d-flex justify-content-start align-items-center">
      <i className="fas fa-code fa-2x text-warning pb-3"></i>
      <h5 className="d-inline pl-2 text-white">Portfolio</h5>
    </div>
    <div className="col-6 pt-2">
      <div
        className="row text-center p-0 d-flex justify-content-end align-items-center"
      >
        <div className="col-3">
          <a href="#about" className="text-white navigation-link">About</a>
        </div>
        <div className="col-3">
          <a href="#projects" className="text-white navigation-link"
            >Projects</a
          >
        </div>
        <div className="col-3">
          <a href="#social-media" className="text-white navigation-link"
            >Social Media</a
          >
        </div>
        <div className="col-3">
       
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- Main Container --> */}
<div className="main-container container">
  <div className="row main_row">
    <div className="col-6">
      <h2 className="text-white">Hello, I'm</h2>
      <h1 className="text-warning m-heading">Ayesiza Hawah</h1>
      <h2 className="text-white">Software Developer</h2>
    </div>
    <div className="col-6">
      {/* <img
        src="https://via.placeholder.com/554x1350.png/373c5e/FFFFFF"
        className="img-fluid"
      /> */}
    </div>
  </div>
</div>

{/* <!-- About Section --> */}
<div id="about" className="container about p-5">
  <div className="row">
    <div className="col-6">
      <img src="./images/about_img.svg" className="img-fluid" />
    </div>
    <div className="col-6 pl-5 pt-5 pb-5 text-white">
      <h3 className="text-warning">About Me</h3>
      <h1 className="m-heading">A little bit about me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
        eligendi natus, ex maiores
        <b className="text-warning">quaerat provident</b> iusto tenetur vero
        ipsum. Beatae expedita obcaecati odio dignissimos itaque nulla
        voluptatum doloremque sed iusto!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
        magni <b className="text-warning">adipisci sunt eum</b>, reprehenderit
        dignissimos quaerat maiores ad. Magni, totam iure. Doloribus ea
        <b className="text-warning">molestiae deleniti</b> excepturi iure neque,
        harum illum!
      </p>
      <button className="btn btn-outline-warning">Learn More</button>
    </div>
  </div>
</div>

{/* <!-- Projects Section -->   style="height: 13rem;" style="width: 18rem;"*/}
<div id="projects" className="container mt-5 pt-5">
  <h1 className="text-warning mb-3 pb-2">My Projects</h1>
  <div className="row">
    <div className="col-4 mb-5">
      <div className="card">
        <img
          src="./images/messaging.svg"
          className="card-img-top"
         
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Messaging Web App</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-warning">See Project</a>
        </div>
      </div>
    </div>
    <div className="col-4 mb-5">
      <div className="card" >
        <img
          src="./images/fitness.svg"
          className="card-img-top img-fluid"
          alt="..."
          
        />
        <div className="card-body">
          <h5 className="card-title">Fitness Web App</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-warning">See Project</a>
        </div>
      </div>
    </div>
    <div className="col-4 mb-5">
      <div className="card" >
        <img
          src="./images/e_commerce_platform.svg"
          className="card-img-top"
          alt="..."
          
        />
        <div className="card-body">
          <h5 className="card-title">E-Commerce Platform</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-warning">See Project</a>
        </div>
      </div>
    </div>
    <div className="col-4 mb-5">
      <div className="card">
        <img
          src="./images/music.svg"
          className="card-img-top"
          alt="..."
         
        />
        <div className="card-body">
          <h5 className="card-title">Music Player</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-warning">See Project</a>
        </div>
      </div>
    </div>
    <div className="col-4 mb-5">
      <div className="card" >
        <img
          src="./images/photography.svg"
          className="card-img-top"
          alt="..."
          
        />
        <div className="card-body">
          <h5 className="card-title">Photography Platform</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-warning">See Project</a>
        </div>
      </div>
    </div>
    <div className="col-4 mb-5">
      <div className="card" >
        <img
          src="./images/web_scraping.svg"
          className="card-img-top"
          alt="..."
         
        />
        <div className="card-body">
          <h5 className="card-title">Manga Scraping Web App</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-warning">See Project</a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- Social Media Section --> */}
<div id="social-media" className="container-fluid">
  <div className="container text-white py-5">
    <h4 className="text-warning">Social Media</h4>
    <h1 className="m-heading">Let's be friends</h1>
    <div className="row pt-5">
      <div className="col-3 media_link btn" href="#">
        <div className="row">
          <div className="col-6 d-flex justify-content-start">
            <h3 className="m-0 pt-2 text-white">LinkedIn</h3>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <i className="fab fa-linkedin-in fa-2x text-secondary"></i>
          </div>
        </div>
      </div>

      <div className="col-3 media_link btn">
        <div className="row">
          <div className="col-6 d-flex justify-content-start">
            <h3 className="m-0 pt-2 text-white">Github</h3>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <i className="fab fa-github fa-2x text-secondary"></i>
          </div>
        </div>
      </div>

      <div className="col-3 media_link btn">
        <div className="row">
          <div className="col-6 d-flex justify-content-start">
            <h3 className="m-0 pt-2 text-white">Youtube</h3>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <i className="fab fa-youtube fa-2x text-secondary"></i>
          </div>
        </div>
      </div>

      <div className="col-3 media_link bg-warning btn">
        <div className="row">
          <div className="col-6 d-flex justify-content-start">
            <h3 className="m-0 pt-2 text-dark">Email</h3>
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <i className="fas fa-envelope fa-2x text-secondary"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- Footer --> */}
<footer>
  <div className="container text-muted text-center py-3 mt-5">
    <h5>
      Copyright &copy; 2020 |
      <a className="text-warning text-decoration-none" href="#about"
        >Kamal Teja</a
      >
    </h5>
  </div>
</footer>
    </div>
)