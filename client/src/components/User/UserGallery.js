import React from "react";
import { connect } from "react-redux";

function UserGallery({ data }) {
  return (
    <>
      <div className="w-full flex justify-center border-t-2 border-gray-200 pt-4 mb-4">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <span className="uppercase font-semibold text-gray-800 ml-2">
            postingan
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-3 lg:gap-7 md:gap-5 gap-1">
          {data.map((data) => (
            <div className="kotak lg:w-80 lg:h-80 md:w-60 md:h-60 w-40 h-40">
              <img
                src={data.image}
                className="object-cover lg:w-80 lg:h-80 md:w-60 md:h-60 w-40 h-40"
                alt=""
              />
              <div className="text-4xl text-gray-100 font-bold -mt-44 relative flex hidden">
                <div className="m-auto flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-14 -mt-2 mr-1 cursor-pointer text-red-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {data.loves.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserGallery;
