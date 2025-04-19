import "./contact.css";
const Contact = () => {
  return (
    <div className="w-full h-screen body pl-[2vw] pr-[2vw]">
      <div className="container">
        <h1>Get In Touch</h1>
        <form action="" method="post">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <button className=".button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
