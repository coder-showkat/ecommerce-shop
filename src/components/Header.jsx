import { Avatar, Dropdown, Navbar } from "flowbite-react";
import PubSub from "pubsub-js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartImg } from "../assets/index";

export default function Header() {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("shoppingCart"))
      ?.map((item) => item.quantity)
      .reduce((a, b) => a + b, 0) || 0
  );

  useEffect(() => {
    const token = PubSub.subscribe("valueChanged", (event, data) => {
      setCount(data);
    });

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  return (
    <header className="shadow-lg bg-white border-gray-200 sticky top-0 z-20">
      <Navbar fluid={true} className="max-w-screen-2xl mx-auto">
        <Link to="/">
          <div className="cursor-pointer flex items-center">
            <span className="text-2xl mr-2">
              <ion-icon name="cart-outline"></ion-icon>
            </span>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              SAM
            </span>
          </div>
        </Link>

        <div className="flex items-center md:order-2">
          <Link to="/cart">
            <div className="relative mr-2 cursor-pointer">
              <img className="w-6" src={cartImg} alt="" />
              <span className="absolute top-1.5 text-sm left-2">{count}</span>
            </div>
          </Link>
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://avatars.githubusercontent.com/u/119802653?v=4"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Showkat Ali Sam</span>
              <span className="block truncate text-sm font-medium">
                showkat.official2@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="cursor-pointer">Home</Navbar.Link>
          <Navbar.Link className="cursor-pointer">Pages</Navbar.Link>
          <Navbar.Link className="cursor-pointer">Shop</Navbar.Link>
          <Navbar.Link className="cursor-pointer">Element</Navbar.Link>
          <Navbar.Link className="cursor-pointer">Blog</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
