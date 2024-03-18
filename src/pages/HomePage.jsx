const styles = {
  tile: {
    backgroundColor: "#F0DCCA",
  },
  img: {
    borderRadius: 5,
  },
  column: {
    margin: 0,
    padding: 0,
  },
};

export default function HomePage() {
  return (
    <div className="tile is-ancestor is-9 is-vertical">
      <div className="tile">
        <div className="tile is-parent is-4 is-vertical">
          <div
            className="columns is-vcentered tile is-child box"
            style={styles.tile}
          >
            <div className="column" style={styles.column}>
              <img
                src="../../images/profile_pic.jpg"
                alt="Profile Picture"
                style={styles.img}
              />
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div
            className="columns is-vcentered tile is-child box"
            style={styles.tile}
          >
            <div className="column" style={styles.column}>
              <p className="is-size-5">Hi! My name is Sam.</p>
              <br />
              <p className="is-size-5">
                I'm a fullstack web developer with a diverse professional
                background. I've had the opportunity to work with all kinds of
                people on all kinds of projects. From child care to residential
                care, from the military to state regulation and enforcement, and
                even from construction to coding.
              </p>
              <br />
              <p className="is-size-5">
                My goal with each project that I undertake is to increase
                productivity and (ultimately) make life easier for others. My
                passion lies in helping other people succeed!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tile"></div>
      <div className="tile is-parent is-vertical">
        <a href="/portfolio">
          <div className="tile is-child box" style={styles.tile}>
            <p className="is-size-3 has-text-weight-semibold">
              See my portfolio
            </p>
          </div>
        </a>
      </div>
      <div className="tile is-parent is-vertical">
        <a href="/contact">
          <div className="tile is-child box" style={styles.tile}>
            <p className="is-size-3 has-text-weight-semibold">
              Contact me
            </p>
          </div>
        </a>
      </div>
      <div className="tile is-parent is-vertical">
        <a href="/resume">
          <div className="tile is-child box" style={styles.tile}>
            <p className="is-size-3 has-text-weight-semibold">
              See my resume
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
