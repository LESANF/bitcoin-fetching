import { handleName, handlePrice } from "./coin.js";

const API_URL = "https://api.coinpaprika.com/v1/tickers";

export const callApi = () => {
  fetch(API_URL, { method: "GET", mode: "cors" })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      handleName(data);
      handlePrice(data);
    });
};

const init = () => {
  callApi();
};

init();
