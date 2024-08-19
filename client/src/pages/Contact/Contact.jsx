import { useState } from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import "./Contact.css"; // Assuming you have a CSS file to style the components

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let errors = {};
    let emailRegex = /\S+@\S+\.\S+/;

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      e.target.submit(); // Submits the form to the action URL
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <img
                  src="https://www.anandgroupindia.com/wp-content/uploads/2019/05/contactus.jpg"
                  alt="contact us"
                  className="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card2 d-flex card border-0 px-4 py-5">
              <div className="row">
                <div className="row">
                  <h4 className="icon">
                    Contact With
                    <BsLinkedin
                      color="black"
                      size={20}
                      className="ms-3"
                      cursor="pointer"
                    />
                    <BsGithub
                      color="black"
                      size={20}
                      className="ms-3"
                      cursor="pointer"
                    />
                    <BsFacebook
                      color="black"
                      size={20}
                      className="ms-3"
                      cursor="pointer"
                    />
                  </h4>
                </div>

                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>
                <form
                  action="https://formspree.io/f/mdknlgew"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  {isSubmitted && (
                    <p className="success-message">
                      Your message has been sent successfully!
                    </p>
                  )}
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      value={name}
                      onChange={handleChange}
                      className={errors.name ? "error-input" : "mb-3"}
                    />
                    {errors.name && (
                      <span className="error-text">{errors.name}</span>
                    )}
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      value={email}
                      onChange={handleChange}
                      className={errors.email ? "error-input" : ""}
                    />
                    {errors.email && (
                      <span className="error-text">{errors.email}</span>
                    )}
                  </div>
                  <div className="row px-3">
                    <textarea
                      name="message"
                      placeholder="Write your message"
                      value={message}
                      onChange={handleChange}
                      className={errors.message ? "error-input mb-3" : "mb-3"}
                    />
                    {errors.message && (
                      <span className="error-text">{errors.message}</span>
                    )}
                  </div>
                  <div className="row px-3">
                    <button className="button" type="submit">
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
