import React, { useState } from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [data, setData] = useState();

  axios
    .get('https://hrf-asylum-be-b.herokuapp.com/cases')
    .then(result => {
      setData(result.data);
    })
    .catch(error => {
      console.err(error);
    });

  const handleDownload = data => {
    // convert data obj into string
    const dataString = JSON.stringify(data, null, 2);

    // create a blob to house the string data
    const blob = new Blob([dataString], {
      type: 'application/json',
    });

    // create a temp URL to hold the blob
    const url = URL.createObjectURL(blob);

    // create a link to house the download
    const link = document.createElement('a');

    // set link attributes
    link.href = url;

    link.download = 'download.json';

    // insert the link into the webpage to be clicked
    document.body.appendChild(link);

    // trigger the download
    link.click();

    // clean up the link after click
    document.body.removeChild(link);
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      {/* <div className="graphs-section"> */}
      <div className="graphs-section">
        <div className="img-container">
          <img
            src={GrantRatesByOfficeImg}
            alt="grant rates by office img"
            className="img"
          />
          <figcaption className="img-label">
            Search Grant Rates By Office
          </figcaption>
        </div>
        <div className="img-container">
          <img
            src={GrantRatesByNationalityImg}
            alt="Grant Rates By Nationality Img"
            className="img"
          />
          <figcaption className="img-label">
            Search Grant Rates By Nationality
          </figcaption>
        </div>
        <div className="img-container">
          <img
            src={GrantRatesOverTimeImg}
            alt="Grant Rates Over Time Img"
            className="img"
          />
          <figcaption className="img-label">
            Search Grant Rates Over Time
          </figcaption>
        </div>
      </div>
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => handleDownload(data)}
        >
          Download the Data
        </Button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        {/* <div className="bottom-section">*/}
        <div className="bottom-section">
          <h1>Systemic Disparity Insights</h1>
          <div className="statistics-container">
            <div className="statistic">
              <h1>36%</h1>
              <p>
                By the end of the Trump administration, the average asylum
                office grant rate had fallen 36 percent from an average of 44
                percent in fiscal year 2016 to 28 percent in fiscal year 2020
              </p>
            </div>
            <div className="statistic">
              <h1>5%</h1>
              <p>
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020
              </p>
            </div>
            <div className="statistic">
              <h1>6x Lower</h1>
              <p>
                Between fiscal year 2017 and 2020, the New York asylum office's
                average grant rate was six times lower than the San Francisco
                asylum office
              </p>
            </div>
          </div>
          <div className="read-more-button-container">
            <Button
              type="default"
              style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
              onClick={() => console.log('Read More')}
              className="read-more-button"
            >
              Read More
            </Button>
          </div>
        </div>
        <div className="back-to-top-container">
          <p onClick={() => scrollToTop()} className="back-to-top">
            Back To Top ^
          </p>
        </div>
      </div>
    </div>
  );
}
export default RenderLandingPage;
