import { useState } from "react";
import ContactDetailForm from "./ContactDetailForm";
import formatDate from "../helper/helper";

function BookTableForm() {
  const { timeNow, dateToday } = formatDate();

  const [bookingTotalPersons, setBookingTotalPersons] = useState(1);
  const [bookingDate, setBookingDate] = useState(dateToday);
  const [bookingTime, setBookingTime] = useState(timeNow);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");

  return (
    <div className="m-3 mt-0">
      <div className="p-6 border-1 rounded-[.5rem] max-w-max">
        {bookingStep == 3 ? (
          <div>Your reservation request has been submitted.</div>
        ) : (
          <h1 className="text-3xl">Book a Table</h1>
        )}
        {bookingStep == 2 && (
          <ContactDetailForm
            bookingTotalPersons={bookingTotalPersons}
            bookingDate={bookingDate}
            bookingTime={bookingTime}
            bookingName={bookingName}
            bookingPhone={bookingPhone}
            onNameInput={setBookingName}
            onPhoneInput={setBookingPhone}
            onFormStep={setBookingStep}
          />
        )}
        {bookingStep == 1 && (
          <>
            <h6 className="pt-2">{`This is where you'll add the details of your booking`}</h6>
            <div>
              <label>People:</label>
              <select
                className="border rounded-xs ms-3 mt-2"
                onChange={(e) => setBookingTotalPersons(e.target.value)}
                value={bookingTotalPersons}
                required
              >
                {[...Array(10).keys()].map(
                  (c) => (
                    (c = c + 1),
                    (
                      <option key={c} value={c}>
                        {c} {c == 1 ? "person" : "persons"}
                      </option>
                    )
                  )
                )}
              </select>
            </div>
            <div>
              <label>Date:</label>
              <input
                type="date"
                className="ml-2 mt-2"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Time:</label>
              <input
                type="time"
                className="ml-2 mt-2"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
              ></input>
            </div>
            <button
              type="submit"
              className="border-2 rounded-xl auto p-3 m-4 ml-0 bg-sky-600 text-amber-50"
              onClick={() => setBookingStep(2)}
            >
              {"Book now"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BookTableForm;
