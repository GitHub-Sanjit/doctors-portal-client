import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { format } from "date-fns";
import { DayPicker, Footer } from "react-day-picker";

const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <header className="my-6">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img alt="" src={chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              footer={Footer}
            ></DayPicker>
            <p>You Have Selected: {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
