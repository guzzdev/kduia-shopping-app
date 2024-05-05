import { useState, useEffect } from "react";

export default function useCurrencyMultiplier(Location) {
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    let currencyCode = "";
    switch (Location) {
      case "£":
        currencyCode = "gbp";
        break;
      case "₹":
        currencyCode = "inr";
        break;
      case "€":
        currencyCode = "eur";
        break;
      case "CAD":
        currencyCode = "cad";
        break;
      default:
        currencyCode = "eur";
        break;
    }

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api/v1/currencies/eur.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setMultiplier(data.eur[currencyCode]);
      });
  }, [Location]);

  return multiplier;
}
