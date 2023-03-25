import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { cartImg } from "../assets/index";

export default function Header() {
  return (
    <Navbar
      fluid={true}
      className="max-w-screen-xl shadow-lg mx-auto sticky top-0 z-20"
    >
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
            <span id="card-count" className="absolute top-1.5 text-sm left-2">
              {JSON.parse(localStorage.getItem("shoppingCart"))
                ?.map((item) => item.quantity)
                .reduce((a, b) => a + b, 0) || 0}
            </span>
          </div>
        </Link>
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
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
        <Link to="/">
          <Navbar.Link className="cursor-pointer" active={true}>
            Home
          </Navbar.Link>
        </Link>
        <Navbar.Link className="cursor-pointer">Pages</Navbar.Link>
        <Navbar.Link className="cursor-pointer">Shop</Navbar.Link>
        <Navbar.Link className="cursor-pointer">Element</Navbar.Link>
        <Navbar.Link className="cursor-pointer">Blog</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
