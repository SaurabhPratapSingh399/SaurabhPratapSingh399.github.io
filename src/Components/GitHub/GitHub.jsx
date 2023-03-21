import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GitHub.css";

const GitHub = () => {
  

  return (
    <div>
      <h2 className="section__title different">DAYS I CODE</h2>

      <div className="github_Calender">
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="SaurabhPratapSingh399"
        />
      </div>
    </div>
  );
};

export default GitHub;
