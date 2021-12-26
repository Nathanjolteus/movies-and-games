import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import SearchResults from "../layout/SearchResults";

const Dashboard = (props) => {
  return (
    <>
      <div className="dashboard">
        <SearchResults />
      </div>
    </>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

