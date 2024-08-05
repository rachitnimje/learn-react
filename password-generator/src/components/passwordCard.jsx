// import React, { useCallback, useState } from "react";
// import { useRef } from "react";

// function PasswordCard({ password }) {
//   const passwordRef = useRef(null);

//   const copyPassword = useCallback(() => {
//     passwordRef.current?.select();
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   return (
//     <div className="fixed top-1/2 flex-col">
//       <h1 className="text-white">Saved Password: {password}</h1>
//       <div className="w-92 px-6 py-4 rounded-md flex bg-gray-500">
//         <input
//           type="text"
//           readOnly
//           value={password}
//           ref={passwordRef}
//           className="p-2 w-80 rounded-tl-md rounded-bl-md outline-none"
//         />
//         <button
//           className="p-2 bg-orange-500 text-green rounded-tr-md rounded-br-md"
//           onClick={copyPassword}
//         >
//           copy
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PasswordCard;

import React, { useCallback, useRef, useState } from "react";

function PasswordCard({ password, savedPasswords }) {

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const [passwordVisiblity, setPasswordVisiblity] = useState(false);

  const changePasswordVisiblity = () => {
    setPasswordVisiblity((prev) => !prev)
  }

  return (
    <div className="w-full max-w-lg bg-blue-950 rounded-lg shadow-md p-4 mb-2">
      <h1 className="text-white text-lg mb-2">Saved Password:</h1>
      <div className="flex">
        <input
          type={passwordVisiblity ? "text" : "password"}
          readOnly
          value={password}
          ref={passwordRef}
          className="p-2 flex-grow rounded-l-md outline-none"
        />

        <div className="bg-white flex items-center p-2">
          {!passwordVisiblity ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current bg-white text-gray-950"
              viewBox="0 0 24 24"
              onClick={changePasswordVisiblity}
            >
              <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757C12.568 16.983 12.291 17 12 17c-5.351 0-7.424-3.846-7.926-5 .204-.47.674-1.381 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379-.069.205-.069.428 0 .633C2.073 12.383 4.367 19 12 19zM12 5c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657.069-.205.069-.428 0-.633C21.927 11.617 19.633 5 12 5zM16.972 15.558l-2.28-2.28C14.882 12.888 15 12.459 15 12c0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501C9.796 7.193 10.814 7 12 7c5.351 0 7.424 3.846 7.926 5C19.624 12.692 18.76 14.342 16.972 15.558z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current text-green-500"
                viewBox="0 0 24 24"
                onClick={changePasswordVisiblity}
            >
              <path d="M12,9c-1.642,0-3,1.359-3,3c0,1.642,1.358,3,3,3c1.641,0,3-1.358,3-3C15,10.359,13.641,9,12,9z" />
              <path d="M12,5c-7.633,0-9.927,6.617-9.948,6.684L1.946,12l0.105,0.316C2.073,12.383,4.367,19,12,19s9.927-6.617,9.948-6.684 L22.054,12l-0.105-0.316C21.927,11.617,19.633,5,12,5z M12,17c-5.351,0-7.424-3.846-7.926-5C4.578,10.842,6.652,7,12,7 c5.351,0,7.424,3.846,7.926,5C19.422,13.158,17.348,17,12,17z" />
            </svg>
          )}
        </div>

        <button
          className="p-2 bg-orange-500 text-white rounded-r-md"
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default PasswordCard;
