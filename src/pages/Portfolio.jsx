const styles = {
  mainProjectLegend: {
    backgroundColor: "#000000EE",
    color: "white",
    height: "40%",
  },
  mainProject: {
    backgroundImage: "url(../../images/book_nook.png)",
    backgroundPosition: "center",
    minHeight: "50vh",
  },
  otherProjectLegend: {
    backgroundColor: "#000000EE",
    color: "white",
    height: "80%",
  },
  blogmire: {
    backgroundImage: "url(../../images/blogmire.png)",
    backgroundPosition: "left top",
    minHeight: "30vh",
  },
  thoughtCloud: {
    backgroundImage: "url(../../images/thought_cloud.png)",
    backgroundPosition: "left top",
    minHeight: "30vh",
  },
  commerceElectronique: {
    backgroundImage: "url(../../images/commerce_electronique.png)",
    backgroundPosition: "left top",
    minHeight: "30vh",
  },
  holidayPlaylist: {
    backgroundImage: "url(../../images/playlist_generator.png)",
    backgroundPosition: "left top",
    minHeight: "30vh",
  },
  theWeatheredTraveler: {
    backgroundImage: "url(../../images/the_weathered_traveler.png)",
    backgroundPosition: "left top",
    minHeight: "30vh",
  },
};

export default function Portfolio() {
  return (
    <div className="tile is-ancestor is-8 is-vertical m-0">
      <div className="tile box" style={styles.mainProject}>
        <div className="box" style={styles.mainProjectLegend}>
          <p className="is-size-3 has-text-weight-semibold">Book Nook</p>
          <p>A neat and simple book journaling app.</p>
          <br />
          <div className="buttons">
            <a
              className="button is-link"
              href="https://github.com/HoneyBuzz94/book-nook"
              target="_blank"
            >
              GitHub project
            </a>
            <a className="button is-link" href="https://book-nook-2024-1c3caea5765b.herokuapp.com" target="_blank">
              Deployed application
            </a>
          </div>
        </div>
      </div>

      <div className="tile box" style={styles.blogmire}>
        <div className="box" style={styles.otherProjectLegend}>
          <p className="is-size-3 has-text-weight-semibold">Blogmire</p>
          <p>A blogging / social media platform.</p>
          <br />
          <div className="buttons">
            <a className="button is-link" href="https://github.com/HoneyBuzz94/blogmire?tab=readme-ov-file" target="_blank">
              GitHub project
            </a>
            <a className="button is-link" href="https://blogmire-0db218320fbf.herokuapp.com/" target="_blank">
              Deployed application
            </a>
          </div>
        </div>
      </div>

      <div className="tile box" style={styles.thoughtCloud}>
        <div className="box" style={styles.otherProjectLegend}>
          <p className="is-size-3 has-text-weight-semibold">
            Thought cloud
          </p>
          <p>A backend social media app.</p>
          <br />
          <div className="buttons">
            <a
              className="button is-link"
              href="https://github.com/HoneyBuzz94/thought-cloud"
              target="_blank"
            >
              GitHub project
            </a>
          </div>
        </div>
      </div>

      <div className="tile box" style={styles.holidayPlaylist}>
        <div className="box" style={styles.otherProjectLegend}>
          <p className="is-size-3 has-text-weight-semibold">
            Holiday playlist maker
          </p>
          <p>A playlist generator powered by Spotify.</p>
          <br />
          <div className="buttons">
            <a
              className="button is-link"
              href="https://github.com/ruthiepina/Project-1"
              target="_blank"
            >
              GitHub project
            </a>
            <a className="button is-link" href="https://ruthiepina.github.io/Project-1/" target="_blank">
              Deployed application
            </a>
          </div>
        </div>
      </div>

      <div className="tile box" style={styles.theWeatheredTraveler}>
        <div className="box" style={styles.otherProjectLegend}>
          <p className="is-size-3 has-text-weight-semibold">
            The weathered traveler
          </p>
          <p>A weather tracking app.</p>
          <br />
          <div className="buttons">
            <a
              className="button is-link"
              href="https://github.com/HoneyBuzz94/the-weathered-traveler"
              target="_blank"
            >
              GitHub project
            </a>
            <a className="button is-link" href="https://honeybuzz94.github.io/the-weathered-traveler/" target="_blank">
              Deployed application
            </a>
          </div>
        </div>
      </div>

      <div className="tile box" style={styles.commerceElectronique}>
        <div className="box" style={styles.otherProjectLegend}>
          <p className="is-size-3 has-text-weight-semibold">
            Commerce electronique
          </p>
          <p>A backend inventory management application.</p>
          <br />
          <div className="buttons">
            <a
              className="button is-link"
              href="https://github.com/HoneyBuzz94/commerce-electronique"
              target="_blank"
            >
              GitHub project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
