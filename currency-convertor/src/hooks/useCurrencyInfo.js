import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  let url = `${import.meta.env.VITE_CURRENCY_API_URL}/${currency}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        //console.log(res.conversion_rates);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

// ----------------------------------------------------------------------------------------------------------------------------

// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState(null);
//   const url = `https://v6.exchangerate-api.com/v6/7826daba40c4fc6803b2b080/latest/INR`;

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res); // Assuming the API returns conversion_rates
//         console.log("Fetched data:", res); // Log after setting state
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [currency, url]);

//   return data;
// }

// export default useCurrencyInfo;
