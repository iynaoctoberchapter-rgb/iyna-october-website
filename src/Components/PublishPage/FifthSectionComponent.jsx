function FifthSectionComponent() {
  return (
    <div className="publish-fifth-section section">
      <div className="title">
        <hr />
        <div className="title-content">
          <h2>Publishing Form</h2>
          <p>Submit your paper for review</p>
        </div>
        <hr />
      </div>
      <form
        id="publish-form"
        name="publish-form"
        method="POST"
        data-netlify="true"
        encType="multipart/form-data"
        netlify-honeypot="bot-field"
        action="/Success" 
      >
        <input type="hidden" name="form-name" value="publish-form" />
        <input type="hidden" name="bot-field" />
        <h3>Personal info</h3>
        <hr />
        <div className="row">
          <div className="formField">
            <input type="text" required name="name" id="name" />
            <span>Full Name</span>
          </div>
          <div className="formField">
            <input type="email" required name="email" id="email" />
            <span>Email Address</span>
          </div>
        </div>
        <h3>Article Data</h3>
        <hr />
        <div className="row">
          <div className="formField">
            <input type="text" required name="title" id="title" />
            <span>Article Title</span>
          </div>
        </div>
        <label htmlFor="images" className="drop-container" id="dropcontainer">
          <span className="drop-title">Drop files here</span>
          or
          <input
            type="file"
            id="images"
            name="images"
            required
            max={10485760} 
          />
          <span className="drop-title" id="file-progress">
            No file chosen
          </span>
        </label>
        <button className="btn" type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FifthSectionComponent;