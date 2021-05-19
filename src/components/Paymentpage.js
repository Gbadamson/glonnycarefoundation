import React, { useState, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";
import { Button, Input, Modal } from "antd";
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import "./payment.css";
import Header from "../includes/Header";
import frad from "../includes/images/process.svg";

const Paymentpage = () => {
  const [name, setName] = useState("");
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

      <div className="hint">
        You are about to donate N{parseInt(amount) / 100} to the Glonny Care
        Foundation
      </div>
      <div className="placement">
        <div className="placeImage">
          <img src={frad} width="100%" height="100%" />
        </div>
        <div className="formHolder">
          <Input
            prefix={<UserOutlined />}
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            prefix={<PhoneOutlined />}
            type="text"
            value={phone}
            placeholder="PhoneNumber"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <Input
            prefix={<MailOutlined />}
            type="text"
            value={usermail}
            placeholder="Email"
            onChange={(e) => {
              setUsermail(e.target.value);
            }}
          />
          <Input
            type="text"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <div className="payfor">
            <Button
              onClick={() => {
                initializePayment(onSuccess, onClose);
              }}
            >
              PayNow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentpage;
