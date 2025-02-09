import React,{ useState, useEffect } from "react";
import axiosInstance from "../Auth/AxiosInstance";
import TestimonialBox from "./TestimonialBox";
export default function Testimonials() {
  let [testimonial, setTestimonial] = useState([]);

  let TestimonialData = async () => {
    let response = await axiosInstance.get("/testimonials");
    let { status, Testimonials } = response.data;
    // console.log(status);
    try {
      if (status) {
        setTestimonial([...Testimonials]);
      } else {
        alert("No Testimonial received");
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    TestimonialData();
  }, []);
  return (
    <>
      <section className="text-gray-600 body-font color5 dark:bg-gray-800">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl lg:text-5xl font-bold title-font mb-4 text-[#e7aa40] underline  Crimson">
              Testimonials
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-white">
              We have been rated by the 
              <strong> Worlds top notch personalities </strong>
            </p>
          </div>
          <div className="flex flex-wrap -m-4  ">
            {testimonial.map((test) => {
              return <TestimonialBox test={test} key={test._id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}