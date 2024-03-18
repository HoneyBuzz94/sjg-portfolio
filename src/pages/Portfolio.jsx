const styles = {
  img: {
    borderRadius: 5,
    marginTop: 15,
  },
};

export default function Portfolio() {
  return (
    <div className="tile is-ancestor is-10">
      <div className="tile is-vertical is-8">
        <div className="tile is-parent">
          <a
            className="tile is-child box has-background-danger-dark has-text-white"
            href="https://github.com/HoneyBuzz94/book-nook"
            target="_blank"
          >
            <p className="is-size-3">Book Nook</p>
            <p>A neat and simple book journaling app.</p>
            <figure className="image is-hidden-touch">
              <img
                src="../../images/book_nook.png"
                alt="Book nook"
                style={styles.img}
              />
            </figure>
          </a>
        </div>
        <div className="tile">
          <div className="tile is-parent">
            <a
              className="tile is-child box has-background-primary-dark has-text-white"
              href="https://github.com/HoneyBuzz94/blogmire"
              target="_blank"
            >
              <p className="is-size-3">Blogmire</p>
              <p>A blogging / social media platform.</p>
              <figure className="image is-hidden-touch">
                <img
                  src="../../images/blogmire.png"
                  alt="Book nook"
                  style={styles.img}
                />
              </figure>
            </a>
          </div>
          <div className="tile is-parent is-vertical">
            <a
              className="tile is-child box has-background-warning-dark has-text-white"
              href="https://github.com/HoneyBuzz94/employee-tracker-plus"
              target="_blank"
            >
              <p className="is-size-3">Employee Tracker +</p>
              <p>A backend employee management application.</p>
            </a>
            <a
              className="tile is-child box has-background-link-dark has-text-white"
              href="https://github.com/HoneyBuzz94/commerce-electronique"
              target="_blank"
            >
              <p className="is-size-3">Commerce Electronique</p>
              <p>A backend inventory management application.</p>
            </a>
          </div>
        </div>
      </div>
      <div className="tile is-parent is-vertical">
        <a
          className="tile is-child box has-background-info-dark has-text-white"
          href="https://github.com/ruthiepina/Project-1"
          target="_blank"
        >
          <p className="is-size-3">Holiday Playlister</p>
          <p>A playlist generator powered by Spotify.</p>
          <figure className="image is-hidden-touch">
            <img
              src="../../images/playlist_generator.png"
              alt="Holiday playlist generator"
              style={styles.img}
            />
          </figure>
        </a>
        <a
          className="tile is-child box has-background-success-dark has-text-white"
          href="https://github.com/HoneyBuzz94/the-weathered-traveler"
          target="_blank"
        >
          <p className="is-size-3">The Weathered Traveler</p>
          <p>A straightforward weather app.</p>
          <figure className="image is-hidden-touch">
            <img
              src="../../images/the_weathered_traveler.png"
              alt="Book nook"
              style={styles.img}
            />
          </figure>
        </a>
      </div>
    </div>
  );
}
