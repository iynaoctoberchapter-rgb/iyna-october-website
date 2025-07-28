function ContactForm() {
    return (
       <div id="section-wrapper">
            <div className="box-wrapper">
                <div className="info-wrap">
                    <h2 className="info-title">Contact Information</h2>
                    <h3 className="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                    <ul className="info-details">
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <a href="tel:+201102432367">+ 201 102 432 367</a>
                        </li>
                        <li>
                            <i className="fas fa-paper-plane"></i>
                            <a href="mailto:iynaoctchapter@gmail.com">iynaoctchapter@gmail.com</a>
                        </li>
                        <li>
                            <i className="fas fa-globe"></i>
                            <a href="https://iyna-oct.site">iyna-oct.site</a>
                        </li>
                    </ul>
                    <ul className="social-icons">
                        <li><a href="https://www.facebook.com/iynaoctoberchapter?mibextid=kFxxJD"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/iyna.october?igsh=MWZkY3UzamZrOW5xZQ=="><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/iyna-october-chapter/"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                <div className="form-wrap">
                    <form action="https://api.web3forms.com/submit" method="POST">
                     <input type="hidden" name="access_key" value="8cc708c8-8bf8-42ff-9b1f-42786fd1c9c0" />
                        <h2 className="form-title">Send us a message</h2>
                        <div className="form-fields">
                            <div className="form-group">
                                <input type="text" name="First name" className="fname" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="Last name" className="lname" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="Email Address" className="email" placeholder="Email address" />
                            </div>
                            <div className="form-group">
                                <input type="tel" name="Phone number" className="phone" placeholder="Phone nmber" />
                            </div>
                            <div className="form-group">
                                <textarea name="Message" placeholder="Write your message"></textarea>
                            </div>
                        </div>
                        <input type="submit" value="Send Message" className="submit-button" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;