export default function HomePage() {
  return (
    <div className="tile is-ancestor is-8">
      <div className="tile is-4 is-vertical is-parent">
        <div className="tile is-child box has-background-warning">
          <img src="../../images/profile_pic.jpg" alt="Profile Picture" style={{borderRadius: 5}}/>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box has-background-warning">
          <p>
            Hi! My name is Sam, and I'm a fullstack web developer. I have a
            diverse professional background that has given me the opportunity to
            work with all kinds of people on all kinds of projects. From child
            care to residential care, from the military to state regulation and
            enforcement, and even from construction to coding. I've had many
            oppportunities to both be involved in and lead out on numerous
            projects. My goal with each project that I undertake is to increase
            productivity and (ultimately) make life easier for others. My
            passion lies in helping other people succeed!
          </p>
        </div>
      </div>
    </div>
  );
}
