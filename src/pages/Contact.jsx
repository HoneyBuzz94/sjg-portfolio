export default function Contact() {
  return (
    <div className="tile is-ancestor is-6 m-0">
      <div className="box has-background-warning tile is-parent is-vertical">
        <div className="tile is-parent">
          <div className="tile is-child">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text" />
            </div>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Email" />
            </div>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
