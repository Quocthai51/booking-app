import React from "react";
import { Link, useParams } from "react-router-dom";

const PlacesPage = () => {
  const { action } = useParams();
  // console.log(action)

  return (
    <div>
      {action !== "new" && (
        <div className=" text-center">
          <Link
            className="inline-flex gap-2 bg-primary text-white py-2 px-6 rounded-full"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add my new places
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            {/* Title */}

            <h2 className=" text-2xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">
              Title for your place should be short and catchy as in
              advertisement
            </p>
            <input
              type="text"
              placeholder="title, for example: My lovely apt"
            />

            {/* Address */}

            <h2 className=" text-2xl mt-4">Address</h2>
            <p className="text-gray-500 text-sm">
              Address to this place, so people can find it
            </p>
            <input type="text" placeholder="address" />

            {/* Photos */}

            <h2 className=" text-2xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">
              Upload photos of your place, so people can see it
            </p>

            {/* photo by link */}

            <div className="flex gap-2">
              <input type="text" placeholder={"Add using a link...."} />
              <button className="bg-gray-200 px-2 rounded-2xl grow">
                Add&nbsp;photo
              </button>
            </div>

            {/* photo by add file*/}

            <div className="mt-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <button
                className="flex gap-1 justify-center border 
            bg-transparent rounded-2xl p-8 text-2xl text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Upload
              </button>
            </div>

            {/* Description */}

            <h2 className=" text-2xl mt-4">Description</h2>
            <p className="text-gray-500 text-sm">
              description of your place, so people can understand what it is
            </p>
            <textarea className="h-24 rounded-2xl" />

            {/* Perks */}

            <h2 className=" text-2xl mt-4">Perks</h2>
            <p className="text-gray-500 text-sm">
              Select all the perks that your place has
            </p>
            {/* all perks div */}
            <div className=" gap-2 mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              {/* Wifi perk */}
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer ">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>
                <span className="ml-2">Wifi</span>
              </label>

              {/* Free parking spot  */}

              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer ">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>

                <span className="ml-2">Free parking spot</span>
              </label>

              {/* TV */}

              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer ">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
                <span className="ml-2">TV</span>
              </label>

              {/* Radio */}

              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer ">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>

                <span className="ml-2">Radio</span>
              </label>

              {/* Pets */}

              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer ">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span className="ml-2">Pets</span>
              </label>

              {/* Private entrance */}

              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer ">
                <input type="checkbox" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>

                <span className="ml-2">Private entrance</span>
              </label>
            </div>

            {/* Extra info */}

            <h2 className=" text-2xl mt-4">Extra info</h2>
            <p className="text-gray-500 text-sm">House rules, etc</p>
            <textarea className="h-24 rounded-2xl" />

            {/* Check in & out times */}

            <h2 className=" text-2xl mt-4">Check in & out times</h2>
            <p className="text-gray-500 text-sm">
              add check in and out time for your place
            </p>
            <div className="grid  gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input type="text" placeholder="14:00" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1" placeholder="18:00">Check out time</h3>
                <input type="text" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1" placeholder="4">Max number of guests</h3>-
                <input type="text" />
              </div>
            </div>
            <div>
              <button className="primary mt-4">Save</button>
            </div>
          </form>
        </div>
      )}
      my places
    </div>
  );
};

export default PlacesPage