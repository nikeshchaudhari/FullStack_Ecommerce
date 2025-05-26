import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Searchbox from "./Searchbox";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));
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
            <div className="col1 w-[20%]">
              <Link to="/">
                <img src={logo} className="w-28 py-3"></img>
              </Link>
            </div>
            <div className="col2 w-[50%] py-3">
              <Searchbox />
            </div>
            <div className="col3 w-[30%] flex items-center pl-8">
              <ul className="flex items-center justify-center gap-4 w-full ml-5">
                <li className="list-none">
                  <Link to="/#" className="link transition-[1000]">
                    Log In
                  </Link>{" "}
                  |{" "}
                  <Link to="/#" className="link transition-[1000]">
                    Register
                  </Link>
                </li>
                <li className="list-none">
                      <Tooltip title="Wishlist">
                     <IconButton aria-label="cart">
      <StyledBadge badgeContent={1} color="secondary">
<FaRegHeart/>

      </StyledBadge>
      {/* Cart  */}
      
    </IconButton>
    </Tooltip>
    <Tooltip title="Cart">
                     <IconButton aria-label="cart">
      <StyledBadge badgeContent={1} color="secondary">
        <MdOutlineShoppingCart  className="ml-4"/>

      </StyledBadge>
    </IconButton>
    </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
