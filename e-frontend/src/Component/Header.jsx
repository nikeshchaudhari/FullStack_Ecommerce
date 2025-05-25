import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Searchbox from "./Searchbox";

const Header = () => {
  return (
    <>
      <header>
        <div className="main-strip py-2 border-t-[1px] border-b-[1px] ">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="col-1 w-[50%]">
                <p className="text[14px] font-medium">
                  Get up to 50% off new season styles, limited time only
                </p>
              </div>
              <div className="col-2 w-[50%] flex items-center justify-end gap-5">
                <ul>
                  <li className="list-none">
                    <Link
                      to="/helpcenter"
                      className="m-2 text-[14px] transition duration-1000 hover:text-red-600"
                    >
                      Help Center
                    </Link>
                    <Link
                      to="/tracking"
                      className="m-2 text-[14px] transition duration-1000 hover:text-red-600"
                    >
                      Order Tracking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="container flex justify-between items-center ">
            <div className="col1 w-[30%]">
              <Link to="/">
                <img src={logo} className="w-28 py-3"></img>
              </Link>
            </div>
            <div className="col2 w-[40%] py-3">
              <Searchbox />
            </div>
            <div className="col3 w-[30%]">
                
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
