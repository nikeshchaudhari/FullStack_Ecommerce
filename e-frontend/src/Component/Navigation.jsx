import React from "react";
import { TfiAlignLeft } from "react-icons/tfi";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { CiDeliveryTruck } from "react-icons/ci";

const Navigation = () => {
  return (
    <div className="navigation w-[100%]">
      <div className="container flex items-center justify-end gap-3">
        <div className="col-1 w-[25%]">
          <Button className="!text-black text-[30px]">
            <TfiAlignLeft className="!mr-3" />
            SHORT BY CATEGORIES
            <TfiAngleDown className="!ml-3" />
          </Button>
        </div>
        <div className="col-2 w-[65%]">
          <ul className="flex">
            <li className="flex items-center gap-5 ">
              <Link to="/" className="link font-[500] ">
                Home
              </Link>
              <Link to="/" className="link font-[500] ">
                Fashion
              </Link>
              <Link to="/" className="link font-[500] ">
                Electronic
              </Link>
              <Link to="/" className="link font-[500] ">
                Bags
              </Link>
              <Link to="/" className="link font-[500] ">
                Footware
              </Link>
              <Link to="/" className="link font-[500] ">
                Groceries
              </Link>
              <Link to="/" className="link font-[500] ">
                Beauty
              </Link>
              <Link to="/" className="link font-[500] ">
                Wellness
              </Link>
              <Link to="/" className="link font-[500] ">
                Jewllery
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-3 w-[15%] flex justify-end  ">
            <CiDeliveryTruck />
          <p className="text-[14px] text-[500] ml-2">
            
            Free Delivery 
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
