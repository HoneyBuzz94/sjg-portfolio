import { useState } from "react";
import validateEmail from "../../utils/helpers";

const styles = {
  tile: {
    backgroundColor: "#F0DCCA",
  },
};

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("is-hidden");

  const handleInputChange = (e) => {
    setSuccess("is-hidden");
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    setSuccess('');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="tile is-ancestor is-9 m-0">
      <div className="tile is-vertical">
        <form
          className="tile is-parent is-vertical box form"
          onSubmit={handleFormSubmit}
          style={styles.tile}
        >
          <div className="tile is-parent">
            <div className="tile is-child">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleInputChange}
                  value={name}
                  required
                />
              </div>
            </div>
          </div>

          <div className="tile is-parent">
            <div className="tile is-child">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${email!='' && !validateEmail(email) ? 'is-danger' : ''}`}
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                  value={email}
                  required
                />
                <p class={`help is-danger ${email!='' && !validateEmail(email) ? '' : 'is-hidden'}`}>This email is invalid</p>
              </div>
            </div>
          </div>

          <div className="tile is-parent">
            <div className="tile is-child">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  type="textarea"
                  placeholder="Textarea"
                  onChange={handleInputChange}
                  value={message}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="tile is-parent">
            <div className="tile is-child">
              <div className="control">
                <button className={`button is-link ${success ? '' : 'is-hidden'}`}>Submit</button>
              </div>
              <p className={`has-text-success has-text-weight-bold ${success}`}>Your message was successfully submitted!</p>
            </div>
          </div>
        </form>
        <div
          className="tile is-parent is-vertical box has-text-centered"
          style={styles.tile}
        >
          <p>
            You can also contact me at:{" "}
            <a href="mailto:saybejay@gmail.com">saybejay@gmail.com</a>
          </p>
          <p>
            Or message me on <a href="https://github.com/HoneyBuzz94">GitHub</a>{" "}
            or{" "}
            <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAACPmBlgB-xYQKaSlpt5a7pgDv3kBm_9GhU4&keywords=samuel%20grow&origin=RICH_QUERY_SUGGESTION&position=0&searchId=df09f6e9-17d5-4e1a-bd35-76237d168ac9&sid=X6E&spellCorrectionEnabled=false">
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
