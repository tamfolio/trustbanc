import React from 'react';
import './sidebar.css';
import {
  LineStyle,
  Timeline,
  CreditCard,
  PhoneAndroid,
  SignalCellularAlt,
  Settings,
} from '@material-ui/icons';
import {Link} from 'react-router-dom';

function Sidebar () {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <img src="./assets/TrustBanc.svg" alt="" />
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Transfers
            </li>
            <li className="sidebarListItem">
              <SignalCellularAlt className="sidebarIcon" />
              Target Savings
            </li>
            <li className="sidebarListItem">
              <PhoneAndroid className="sidebarIcon" />
              Airtime and Bills
            </li>
            <li className="sidebarListItem">
              <CreditCard className="sidebarIcon" />
              Cards
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Loans
            </li>
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              Settings
            </li>

          </ul>
        </div>

      </div>

    </div>
  );
}

export default Sidebar;
