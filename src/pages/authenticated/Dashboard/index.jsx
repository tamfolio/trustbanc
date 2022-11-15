import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [apiError, setError] = useState("");

  const handleFetchAccounts = () => {
    let phoneNumber = localStorage.getItem("phoneNumber");
    let session = localStorage.getItem("sessionID");
    let dataToPost = JSON.stringify({
      phoneNumber: phoneNumber,
      session: session,
    });

    fetch(
      "https://bespoke.trustbancgroup.com/omnichannel_interview/api/account/fetchaccounts",
      {
        method: "POST",
        body: dataToPost,
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.responseMessage) {
          setError(response.responseMessage);
        }

        if (response.accounts) {
          setAccounts(response.accounts);
        }
      })
      .catch((e) => {
        console.log("e", e);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  const handleFetchTransactions = () => {
    let phoneNumber = localStorage.getItem("phoneNumber");
    let session = localStorage.getItem("sessionID");
    let dataToPost = JSON.stringify({
      phoneNumber: phoneNumber,
      session: session,
    });

    fetch(
      "https://bespoke.trustbancgroup.com/omnichannel_interview/api/account/fetchtransactions",
      {
        method: "POST",
        body: dataToPost,
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.responseMessage) {
          setError(response.responseMessage);
        }

        if (response.transactions) {
          setTransactions(response.transactions);
        }
      })
      .catch((e) => {
        console.log("e", e);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleFetchAccounts();
    handleFetchTransactions();
  }, []);

  return <div className=''></div>;
};

export default Dashboard;
