import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-32" style={{ background: `url(${appointment})` }}>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            alt=""
            src={doctor}
            className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h4 className="text-lg text-primary font-bold">Appointment</h4>
            <h1 className="text-white text-4xl font-bold">
              Make an Appointment Today
            </h1>
            <p className="py-6 text-white">
              From sending appointment instructions, healthcare tips,
              promotional communications, or reminding patients of their
              upcoming appointments, this channel is a fantastic opportunity to
              reduce no-shows and scheduling mistakes, build trust with your
              clientele, and facilitate administrative tasks with less effort.
              All of this, paired with the fact that 76% of people worldwide
              want to be reminded of their medical.
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
