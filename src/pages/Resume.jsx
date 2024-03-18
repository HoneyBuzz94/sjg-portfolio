const styles = {
  tile: {
    backgroundColor: "#F0DCCA",
  },
};

export default function Resume() {
  return (
    <div className="tile is-ancestor is-8">
      <div className="tile is-parent is-vertical">
        <div className="tile is-child box" style={styles.tile}>
          <div className="content">
            <p className="is-size-5">My proficiencies:</p>
            <div className="tile is-parent">
              <div className="tile is-child">
                <ul>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>React</li>
                  <li>Express</li>
                  <li>Node JS</li>
                </ul>
              </div>
              <div className="tile is-child">
                <ul>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>MongoDB</li>
                  <li>SQL</li>
                  <li>Sequelize</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tile is-child box has-text-centered"
          style={styles.tile}
        >
          <p className="is-size-5">
            Read even more about my qualifications by downloading my full
            resume:
          </p>
          <a
            className="button is-link my-5"
            href="https://docs.google.com/document/d/1MaRPnTKxExaXjLqPqelIbmiRdAoXdfnX3dT7FZQPHKc/edit?usp=sharing"
            target="_blank"
          >
            Download my resume
          </a>
        </div>
      </div>
    </div>
  );
}
