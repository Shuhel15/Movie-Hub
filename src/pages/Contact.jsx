import { Form } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error.message);
  }
};
export const Contact = () => {
  return (
    <>
      <div className="contactform">
        <Form method="POST" action="/contact">
          <h1>Contact Us</h1>
          <p>Get in touch with us. We are always here to help you</p>
          <div className="form-inputs">
            <div>
              <p htmlFor="username">Full Name</p>
              <input
                type="text"
                name="username"
                required
                id="username"
                autoComplete="off"
                placeholder="enter full name"
              />
            </div>

            <div>
              <p htmlFor="email">Email</p>
              <input
                type="email"
                name="email"
                required
                id="email"
                autoComplete="off"
                placeholder="example@123.com "
              />
            </div>

            <div>
              <p htmlFor="message">Message</p>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="we are always here to help you"
              />
            </div>
            <button className="ticket-btn">Send Message</button>
          </div>
        </Form>
      </div>
    </>
  );
};
