import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { GhostButton } from "./theme"

const FORMSPARK_ACTION_URL = "https://submit-form.com/0VlKJYuD"

const onVerifyCaptcha = (token) => {
  console.log("Verified: " + token)
}

export default function ContactForm(props) {
  return (
    <form
      className={` ${props.className} mt-2`}
      method="POST"
      action={FORMSPARK_ACTION_URL}
    >

      <input
        type="hidden"
        name="_redirect"
        value="https://kdsign.com/thank-you"
      />
      <input type="hidden" name="_feedback.dark" value="true" />
      <div className="xs:gap-8 xs:columns-2 mt-4 ">
        <div className="flex flex-col">
          <label htmlFor="name" className="required mb-2">
            First name
          </label>
          <input id="name" name="name" className="name" type="text" required />
        </div>
        <div className="flex flex-col mt-4 xs:mt-0">
          <label htmlFor="surname" className="required mb-2">
            Last name
          </label>
          <input id="surname" name="surname"  className="surname" type="text" required />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="email" className="required mb-2">
          Email
        </label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="flex flex-col mt-4 mb-4">
        <label htmlFor="message" className="required mb-2">
          Message
        </label>
        <textarea name="message" id="message" placeholder="Your awesome message!" required />
      </div>
      <div className="my-4">
      <ReCAPTCHA sitekey="6LdG6tcdAAAAAB7yrhfhB7hsIy735tBG2iV43HiX" theme="dark"  />
      </div>
      
      <button className={GhostButton} type="submit">
        Send
      </button>
      <input type="hidden" name="_email.subject" value="New message from the website " />
      <input type="hidden" name="_email.from" value="kdsign.com" />
      <input type="hidden" name="_email.template.footer" value="false" />
    </form>
  )
}
