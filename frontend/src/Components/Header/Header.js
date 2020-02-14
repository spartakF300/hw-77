import React from 'react';
import {ButtonToggle, Nav, NavItem} from "reactstrap";

const Header = (props) => {
    return (
        <div>
            <Nav className="bg-primary" pills>
                <NavItem className="m-3 ml-auto">

                    <ButtonToggle onClick={props.toggle} color="secondary">Add thread</ButtonToggle>{' '}
                </NavItem>

            </Nav>
        </div>
    );
};

export default Header;