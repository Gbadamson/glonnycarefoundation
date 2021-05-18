import React, { useState, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import "./payment.css";
import Header from "../includes/Header";

const Paymentpage = () => {
  const [usermail, setUsermail] = useState("");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");

  const hist = useHistory();
  const config = {
    reference: new Date().getTime(),
    email: usermail,
    amount: amount,
    publicKey: "pk_test_3385dfdb230a655b95672e8946dfe75765009867",
  };
  const onSuccess = (reference) => {
    hist.push("/10q");
  };
  const onClose = () => {
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <Header />
      <center>
        <div className="hint">
          You are about to donate N{parseInt(amount) / 100} to the Glonny Care
          Foundation
        </div>
        <div className="formHolder">
          <input
            type="text"
            value={phone}
            placeholder="PhoneNumber"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            type="text"
            value={usermail}
            placeholder="Email"
            onChange={(e) => {
              setUsermail(e.target.value);
            }}
          />
          <input
            type="text"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="payfor">
          <Button
            onClick={() => {
              initializePayment(onSuccess, onClose);
            }}
          >
            PayNow
          </Button>
        </div>
      </center>
    </div>
  );
};

export default Paymentpage;
