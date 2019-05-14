import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <section>
      <div className="contentpanel">
        <NavBar/>
        <div className="row campaigns-list">
          <OngoingCampaigns/>
          <CompletedCampaigns/>
        </div>
      </div>
     </section>
  );
}

class NavBar extends React.Component {
   render() {
      return (
         <header id="topbar" className="alt pull-right">
            <div className="topbar-left">
                <ol className="breadcrumb nomargin">
                    <li className="breadcrumb-link">
                        <a href="#">
                            <img alt="" src="" className="img-responsive" />
                        </a>
                    </li>
                    <li className="breadcrumb-current-item pull-right">
                        <a href=""><i className="fa fa-sign-out"></i>&ensp;Log Out</a>
                    </li>
                    <li className="breadcrumb-current-item pull-right">
                        <a href=""><i className="fa fa-plus" aria-hidden="true"></i>&ensp;New Campaign</a>
                    </li>
                </ol>
            </div>
        </header>
      );
   }
}

class OngoingCampaigns extends React.Component {
   render() {
      return (
         <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr className="flex-container">
                        <th><span className="text-warning">Ongoing Campaigns:</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="flex-container">
                        <td className="status">
                            <span className="label label-warning pull-left">Ongoing</span>
                        </td>
                        <td className="description">
                            <div>
                                <div className="text-primary"><strong>Campaign Name / Title · </strong><small>January 10, 2019 - </small></div>
                                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                                
                            </div>
                        </td>
                        <td className="stats">
                            <div className="initiatives">
                                <span className="badge"><i className="fa fa-calendar-check-o"></i>&nbsp;15<br/>Initiatives</span>
                                <span className="badge"><i className="fa fa-percent"></i>&nbsp;76<br/>Conversion</span>
                                <span className="badge"><i className="fa fa-users"></i>&nbsp;26<br/>Leads</span>
                            </div>
                        </td>
                    </tr>
                    <tr className="flex-container">
                        <td className="status">
                            <span className="label label-warning pull-left">Ongoing</span>
                        </td>
                        <td className="description">
                            <div>
                                <div className="text-primary"><strong>Campaign Name / Title · </strong><small>January 10, 2019 - </small></div>
                                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                                
                            </div>
                        </td>
                        <td className="stats">
                            <div className="initiatives">
                                <span className="badge"><i className="fa fa-calendar-check-o"></i>&nbsp;15<br/>Initiatives</span>
                                <span className="badge"><i className="fa fa-percent"></i>&nbsp;76<br/>Conversion</span>
                                <span className="badge"><i className="fa fa-users"></i>&nbsp;26<br/>Leads</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      );
   }
}

class CompletedCampaigns extends React.Component {
   render() {
      return (
         <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr className="flex-container">
                        <th><span className="text-success">Completed Campaigns:</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="flex-container">
                        <td className="status">
                            <span className="label label-success pull-left">Completed</span>
                        </td>
                        <td className="description">
                            <div>
                                <div className="text-primary"><strong>Campaign Name / Title · </strong><small>August 2, 2018 - December 12, 2018 </small></div>
                                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                            </div>
                        </td>
                        <td className="stats">
                            <div className="initiatives">
                                <span className="badge"><i className="fa fa-calendar-check-o"></i>&nbsp;15<br/>Initiatives</span>
                                <span className="badge"><i className="fa fa-percent"></i>&nbsp;76<br/>Conversion</span>
                                <span className="badge"><i className="fa fa-users"></i>&nbsp;26<br/>Leads</span>
                            </div>
                        </td>
                    </tr>
                    <tr className="flex-container">
                        <td className="status">
                            <span className="label label-success pull-left">Completed</span>
                        </td>
                        <td className="description">
                            <div>
                                <div className="text-primary"><strong>Campaign Name / Title · </strong><small>August 2, 2018 - December 12, 2018 </small></div>
                                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                            </div>
                        </td>
                        <td className="stats">
                            <div className="initiatives">
                                <span className="badge"><i className="fa fa-calendar-check-o"></i>&nbsp;15<br/>Initiatives</span>
                                <span className="badge"><i className="fa fa-percent"></i>&nbsp;76<br/>Conversion</span>
                                <span className="badge"><i className="fa fa-users"></i>&nbsp;26<br/>Leads</span>
                            </div>
                        </td>
                    </tr>
                    <tr className="flex-container">
                        <td className="status">
                            <span className="label label-success pull-left">Completed</span>
                        </td>
                        <td className="description">
                            <div>
                                <div className="text-primary"><strong>Campaign Name / Title · </strong><small>August 2, 2018 - December 12, 2018 </small></div>
                                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                            </div>
                        </td>
                        <td className="stats">
                            <div className="initiatives">
                                <span className="badge"><i className="fa fa-calendar-check-o"></i>&nbsp;15<br/>Initiatives</span>
                                <span className="badge"><i className="fa fa-percent"></i>&nbsp;76<br/>Conversion</span>
                                <span className="badge"><i className="fa fa-users"></i>&nbsp;26<br/>Leads</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      );
   }
}

export default App;
