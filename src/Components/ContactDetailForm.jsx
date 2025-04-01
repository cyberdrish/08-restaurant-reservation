import { useEffect, useState } from "react";
import formatDate from "../helper/helper";
import Modal from "./Modal";

const ContactDetailForm = ({
  bookingTotalPersons,
  bookingDate,
  bookingTime,
  bookingName,
  bookingPhone,
  onNameInput,
  onPhoneInput,
  onFormStep,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { timeNow, dateToday } = formatDate();
    if (bookingDate < dateToday || bookingTime < timeNow) {
      alert("Booking cannot be in the past");
      onFormStep(1);
      return;
    }
    onFormStep(3);
    const data = {
      persons: bookingTotalPersons,
      date: bookingDate,
      time: bookingTime,
      name: bookingName,
      phone: bookingPhone,
    };
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-sky-200 mt-2 p-2">
          You are making reservation for <b>{bookingTotalPersons} persons</b>,
          on <b>{bookingDate}</b> at <b>{bookingTime}</b>.
        </div>
        <div className="flex flex-col mt-2">
          <label>Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded-xs mb-2"
            value={bookingName}
            onChange={(e) => onNameInput(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col mt-2">
          <label>Phone Number</label>
          <input
            type="number"
            className="border border-gray-300 rounded-xs mb-2"
            value={bookingPhone}
            onChange={(e) => onPhoneInput(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-xl auto p-2 m-3 ml-0 bg-sky-600 text-amber-50"
        >
          Confirm reservation
        </button>
      </form>
    </>
  );
};

export default ContactDetailForm;
