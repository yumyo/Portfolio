import React from "react";

const FORMSPARK_ACTION_URL = "https://submit-form.com/0VlKJYuD";

export default function ContactForm(props) {
  return (
    <form className={` ${props.className}`} method="POST" action={FORMSPARK_ACTION_URL}>
      {/* <h2 className="text-xxs leading-none uppercase mb-4 ">Contact</h2> */}
      <label htmlFor="first-name" className="required">First name</label>
      <input id="first-name" className="first-name" type="text" required />
      <label htmlFor="last-name" className="required">Last name</label>
      <input id="last-name" className="last-name" type="text" required />
      <label htmlFor="email" className="required">Email</label>
      <input type="email" name="email" required />
      <label htmlFor="message" className="required">Message</label>
      <textarea name="message" placeholder="Your awesome message!" required />
      <button className="px-4 mt-4 leading-none py-3 border text-violet-600 dark:text-violet-400 border-violet-600 dark:border-violet-400 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-400 dark:hover:text-black" type="submit">Send</button>
    </form>
  );
}