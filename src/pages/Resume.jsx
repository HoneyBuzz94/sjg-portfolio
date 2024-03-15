export default function Resume() {
  return (
    <div className="tile is-ancestor is-8">
      <div className="tile is-parent is-vertical">
        <div className="tile is-child box">
          <div className="content">
            <p>My proficiencies:</p>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Express</li>
              <li>Node JS</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Sequelize</li>
            </ul>
          </div>
        </div>
        <div className="tile is-child box has-text-centered">
          <p className="subtitle">
            Read even more about my qualifications by downloading my full
            resume:
          </p>
          <button className="button is-link my-5">Download Sam's resume</button>
        </div>
      </div>
    </div>
  );
}
