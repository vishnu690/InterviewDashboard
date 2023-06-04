import React from "react";
import dashboard from "./assets/dashboard.png";
import cardimage1 from "./assets/cardimage1.png";
function Dashboard() {
  return (
    <div>
      <div className="Reactngle2">
        {" "}
        <div className="logo"></div>
        <div className="Dashboard_listitem">
          <div className="Rectangle_687">
            <img className="dashboard_2" src={dashboard}></img>
            <span className="Dashboard_label ">Dashboard</span>
          </div>
        </div>
      </div>
      <h3 className="Project">Project</h3>
      <div className="Rectangle_559">
        <h4 className="Adidas_Mobile">Adidas Mobile</h4>
        <h6 className="Campaigns">Campaigns</h6>
        <h6 className="Channels">Channels</h6>
        <h6 className="Last_Edited_by">Last Edited by</h6>
        <h6 className="Last_Edited_on ">Last Edited on </h6>
        <p className="eight">8</p>
        <p className="divi">9/10</p>
        <p className="Varun">Varun</p>
        <p className="_5_hours_ago">5 hours ago</p>
      </div>
      {/* card one starts */}
      <div className="Rectangle_180">
        <p className="General_Information">General Information</p>
        <div className="row1">
          <p className="card1_label1">Projects</p>
          <div className="Rectangle_184">
            <div className="Rectangle_188"></div>
            <span className="twobyten">02/10</span>
          </div>
        </div>

        <div className="row2">
          <p className="card1_label1">Users</p>
          <div className="Rectangle_184">
            <div className="Rectangle_185"></div>
            <span className="twobyten">03/03</span>
          </div>
        </div>

        <div className="row3">
          <p className="card1_label1">Channels</p>
          <div className="Rectangle_184">
            <div className="Rectangle_185"></div>
            <span className="twobyten">10/10</span>
          </div>
        </div>

        <div className="row4">
          <p className="card1_label1">Devices</p>
          <div className="Rectangle_184">
            <div className="Rectangle_191"></div>
            <span className="twobyten">05/10</span>
          </div>
        </div>
      </div>
      {/* card one ends */}
      {/* card two starts  */}
      <div className="Rectangle_183">
        <p className="Live_Statistics">Live statitics</p>
        <div className="Ellipse_16">
          {" "}
          <div className="Ellipse_17">
            <p className="five">15</p>
          </div>
        </div>
        <div className="Rectangle_622">
          <span className="info_label">Info</span>
        </div>

        <div className="Ellipse_15">
          {" "}
          <div className="Ellipse_14">
            <p className="five">27</p>
          </div>
        </div>
        <div className="Rectangle_623">
          <span className="warning_label">Warnings</span>
        </div>

        <div className="Ellipse_13">
          {" "}
          <div className="Ellipse_14">
            <p className="five">1</p>
          </div>
        </div>

        <div className="Rectangle_624">
          <span className="error_label">Errors</span>
        </div>
      </div>

      {/* card three starts */}
      <div className="Rectangle_178">
        <p className="Live_Statistics">Location - Devices </p>
        <div className="Rectangle_182">
            <div className="location-icon-png-4226"></div>
        </div>
      </div>

      {/* card three ends */}

      <div className="Rectangle_179">Device Status</div>
      <div className="Rectangle_179copy">Activity Logs </div>
      <div className="Rectangle_192">Domain Quota </div>
      <div className="Rectangle_372">
        {" "}
        <span className="footerText">Copyright@2023.FutureIK</span>{" "}
      </div>

      <div className="Rectangle">
        <div className="headset"> </div>
        <div className="notification"> </div>
        <div className="account"> </div>
      </div>
    </div>
  );
}

export default Dashboard;
