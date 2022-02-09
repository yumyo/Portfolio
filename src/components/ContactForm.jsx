import React from "react"
import { GhostButton } from "./theme"

const FORMSPARK_ACTION_URL = "https://submit-form.com/0VlKJYuD"

export default function ContactForm(props) {
  return (
    <form
      className={` ${props.className} mt-2`}
      method="POST"
      action={FORMSPARK_ACTION_URL}
    >
      {/* <h2 className="text-xxs leading-none uppercase mb-4 ">Contact</h2> */}
      <div className="xs:gap-8 xs:columns-2 mt-4 ">
        <div className="flex flex-col">
          <label htmlFor="first-name" className="required mb-2">
            First name
          </label>
          <input id="first-name" className="first-name" type="text" required />
        </div>
        <div className="flex flex-col mt-4 xs:mt-0">
          <label htmlFor="last-name" className="required mb-2">
            Last name
          </label>
          <input id="last-name" className="last-name" type="text" required />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="email" className="required mb-2">
          Email
        </label>
        <input type="email" name="email" required />
      </div>
      <div className="flex flex-col mt-4 mb-4">
        <label htmlFor="message" className="required mb-2">
          Message
        </label>
        <textarea name="message" placeholder="Your awesome message!" required />
      </div>
      <button className={GhostButton} type="submit">
        Send
      </button>
    </form>
  )
}
