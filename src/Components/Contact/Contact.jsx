import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const onSubmit = async (event) => {
    // event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c6d49556-e787-4855-8122-d7655554d552");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };


  return (
    <div className="new-col contact">
      <div className="title">Let's Chat!</div>
      <p>you can contact me at:</p>
      <div className="contact-email">sarthakmittalcs@gmail.com</div>
      <p>or just you can message here:</p>
      <form onSubmit={onSubmit} className="form">
        <div className="space"></div>
        <label htmlFor="name">Who are you?</label>
        <input
         
          placeholder="Sarthak Mittal"
          type="text"
          name="name"
          id=""
        />
        <div className="space"></div>
        <label htmlFor="email">Where can i reach you?</label>
        <input
          
          placeholder="youremail@mail.com"
          type="email"
          name="email"
          id=""
        />
        <div className="space"></div>
        <label htmlFor="message">What do you want to say??</label>
        <textarea
          style={{ height: "100px" }}
          type="text"
          name="message"
          id=""
        />
        <div className="space"></div>
        <button  className="button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
