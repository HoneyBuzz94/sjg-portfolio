export default function Contact() {
  return (
    <div className="box tile is-ancestor is-vertical is-6">
      <div class="tile is-parent field">
        <div className="tile is-child">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text" />
          </div>
        </div>
      </div>

      <div class="tile is-parent field">
        <div className="tile is-child">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Email" />
          </div>
        </div>
      </div>

      <div class="tile is-parent field">
        <div className="tile is-child">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>
      </div>

      <div class="tile is-parent field">
        <div className="tile is-child">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
