import React from "react";
import { NavbarBrand } from "reactstrap";
function Header() {
  return (
    <React.Fragment>
      <div className="header_bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-3">
              <NavbarBrand href="/" className="logo">
                Room Manager
              </NavbarBrand>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
