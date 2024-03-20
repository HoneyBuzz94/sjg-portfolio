import bookNook from "../images/book_nook.png";
import blogmire from "../images/blogmire.png";
import thoughtCloud from "../images/thought_cloud.png";
import commerceElectronique from "../images/commerce_electronique.png";
import playlistGenerator from "../images/playlist_generator.png";
import theWeatheredTraveler from "../images/the_weathered_traveler.png";

const styles = {
  tile: {
    backgroundColor: "#F0DCCA",
  },
  img: {
    borderRadius: 5,
    filter: "grayscale(0%) contrast(100%)",
    transition: "filter 0.3s ease",
  },
  imgHover: {
    filter: "grayscale(100%) contrast(95%)",
  },
};

export default function Portfolio() {
  const handleHover = (e) => {
    if (e.target.classList.contains("project-image")) {
      e.target.style.filter = styles.imgHover.filter;
    }
  };

  const handleLeave = (e) => {
    if (e.target.classList.contains("project-image")) {
      e.target.style.filter = styles.img.filter;
    }
  };

  return (
    <div className="tile is-ancestor is-8 is-vertical">
      <div className="tile">
        <div className="tile is-parent">
          <div className="tile is-child box" style={styles.tile}>
            <a
              href="https://book-nook-2024-1c3caea5765b.herokuapp.com"
              target="_blank"
            >
              <img
                className="project-image"
                src={bookNook}
                style={styles.img}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              />
            </a>
            <div className="columns is-vcentered">
              <div className="column">
                <p className="is-size-5 has-text-centered has-text-weight-semibold">
                  Book Nook
                </p>
                <p className="has-text-centered">
                  A neat and simple book journal.
                </p>
              </div>
              <div className="column is-2 has-text-centered">
                <a
                  target="_blank"
                  href="https://github.com/HoneyBuzz94/book-nook"
                >
                  <ion-icon name="logo-github" size="large"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box" style={styles.tile}>
            <a
              href="https://blogmire-0db218320fbf.herokuapp.com"
              target="_blank"
            >
              <img
                className="project-image"
                src={blogmire}
                style={styles.img}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              />
            </a>
            <div className="columns is-vcentered">
              <div className="column">
                <p className="is-size-5 has-text-centered has-text-weight-semibold">
                  Blogmire
                </p>
                <p className="has-text-centered">A blogging platform.</p>
              </div>
              <div className="column is-2 has-text-centered">
                <a
                  target="_blank"
                  href="https://github.com/HoneyBuzz94/blogmire?tab=readme-ov-file"
                >
                  <ion-icon name="logo-github" size="large"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box" style={styles.tile}>
            <img
              src={thoughtCloud}
              style={styles.img}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />
            <div className="columns is-vcentered">
              <div className="column">
                <p className="is-size-5 has-text-centered has-text-weight-semibold">
                  Thought Cloud
                </p>
                <p className="has-text-centered">
                  A backend social media framework.
                </p>
              </div>
              <div className="column is-2 has-text-centered">
                <a
                  target="_blank"
                  href="https://github.com/HoneyBuzz94/thought-cloud"
                >
                  <ion-icon name="logo-github" size="large"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tile">
        <div className="tile is-parent">
          <div className="tile is-child box" style={styles.tile}>
            <img
              src={commerceElectronique}
              style={styles.img}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />
            <div className="columns is-vcentered">
              <div className="column">
                <p className="is-size-5 has-text-centered has-text-weight-semibold">
                  Commerce Electronique
                </p>
                <p className="has-text-centered">
                  A backend inventory management system.
                </p>
              </div>
              <div className="column is-2 has-text-centered">
                <a
                  target="_blank"
                  href="https://github.com/HoneyBuzz94/commerce-electronique"
                >
                  <ion-icon name="logo-github" size="large"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box" style={styles.tile}>
            <a href="https://ruthiepina.github.io/Project-1/" target="_blank">
              <img
                className="project-image"
                src={playlistGenerator}
                style={styles.img}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              />
            </a>
            <div className="columns is-vcentered">
              <div className="column">
                <p className="is-size-5 has-text-centered has-text-weight-semibold">
                  Playlist Generator
                </p>
                <p className="has-text-centered">A holiday playlist creator</p>
              </div>
              <div className="column is-2 has-text-centered">
                <a
                  target="_blank"
                  href="https://github.com/ruthiepina/Project-1"
                >
                  <ion-icon name="logo-github" size="large"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box" style={styles.tile}>
            <a
              href="https://honeybuzz94.github.io/the-weathered-traveler/"
              target="_blank"
            >
              <img
                className="project-image"
                src={theWeatheredTraveler}
                style={styles.img}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              />
            </a>
            <div className="columns is-vcentered">
              <div className="column">
                <p className="is-size-5 has-text-centered has-text-weight-semibold">
                  The Weathered Traveler
                </p>
                <p className="has-text-centered">A weather application.</p>
              </div>
              <div className="column is-2 has-text-centered">
                <a
                  target="_blank"
                  href="https://github.com/HoneyBuzz94/the-weathered-traveler"
                >
                  <ion-icon name="logo-github" size="large"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
