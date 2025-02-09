import React from "react";
// import { Link } from "react-router-dom";

export default function BgImg() {
  return (
    <>
      <div className="w-full p-4 bg-img1 ">
        <main
          role="main"
          className="w-full flex flex-col h-screen content-center justify-center"
        >
          <div className="w-full sm:w-1/2 lg:w-1/2 rounded-xl m-auto ">
            <div className="rounded px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
              <div className="sm:flex sm:items-start border shadow">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center Crimson p-8">
                  <h3
                    className="lg:text-5xl md:text-2xl sm:text-2xl textP leading-6 font-bold text-white mt-2 text-3xl"
                    id="modal-title"
                  >
                    Receive top-notch&nbsp;
                    <span className="text-[#e7aa40]">consultation</span> to
                    address your concerns at an affordable rate!
                  </h3>
                  <div className="mt-2 mb-4">
                    <p className="leading-relaxed p-0 font-medium text-2xl text-white textP">
                      <br /> At just a minimal &nbsp;
                      <span className="text-[#e7aa40]">cost!</span> <br /> We
                      offer optimal solutions for your&nbsp;
                      <span className="text-[#e7aa40]">legal issues.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
