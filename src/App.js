import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';

function App() {
  const ongoing = [{
    title: "First Campaign",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    analytics: [{
      label: "Initiatives",
      value: 15,
      icon: "fa-calendar-check-o"
    },{
      label: "Conversions",
      value: 40,
      icon: "fa-percent"
    },{
      label: "Leads",
      value: 10,
      icon: "fa-users"
    }]
  },{
    title: "Second Campaign",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    analytics: [{
      label: "Initiatives",
      value: 15,
      icon: "fa-calendar-check-o"
    },{
      label: "Conversions",
      value: 40,
      icon: "fa-percent"
    },{
      label: "Leads",
      value: 10,
      icon: "fa-users"
    }]
  }];
  const completed = [{
    title: "First Campaign",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    analytics: [{
      label: "Initiatives",
      value: 15,
      icon: "fa-calendar-check-o"
    },{
      label: "Conversions",
      value: 40,
      icon: "fa-percent"
    },{
      label: "Leads",
      value: 10,
      icon: "fa-users"
    }]
  },{
    title: "Second Campaign",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    analytics: [{
      label: "Initiatives",
      value: 15,
      icon: "fa-calendar-check-o"
    },{
      label: "Conversions",
      value: 40,
      icon: "fa-percent"
    },{
      label: "Leads",
      value: 10,
      icon: "fa-users"
    }]
  },{
    title: "Third Campaign",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    analytics: [{
      label: "Initiatives",
      value: 15,
      icon: "fa-calendar-check-o"
    },{
      label: "Conversions",
      value: 40,
      icon: "fa-percent"
    },{
      label: "Leads",
      value: 10,
      icon: "fa-users"
    }]
  }];
  const cancelled = [{
    title: "First Campaign",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    analytics: [{
      label: "Initiatives",
      value: 15,
      icon: "fa-calendar-check-o"
    },{
      label: "Conversions",
      value: 40,
      icon: "fa-percent"
    },{
      label: "Leads",
      value: 10,
      icon: "fa-users"
    }]
  }];
  return (
    <section>
      <div className="contentpanel">
        <NavBar/>
        <div className="row campaigns-list">
          <CampaignsList campaigns={ongoing} type="ongoing">
            <thead>
                <tr className="flex-container">
                    <th><span className="text-warning">Ongoing Campaigns:</span></th>
                </tr>
            </thead>
          </CampaignsList>
          <CampaignsList campaigns={completed} type="completed">
            <thead>
                <tr className="flex-container">
                    <th><span className="text-success">Completed Campaigns:</span></th>
                </tr>
            </thead>
          </CampaignsList>
          <CampaignsList campaigns={cancelled} type="cancelled">
            <thead>
                <tr className="flex-container">
                    <th><span className="text-danger">Cancelled Campaigns:</span></th>
                </tr>
            </thead>
          </CampaignsList>
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
                        <a href=""><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;New Campaign</a>
                    </li>
                </ol>
            </div>
        </header>
      );
   }
}

class P extends React.PureComponent {
  render() {
    return <p>{this.props.children}</p>
  }
}

class Label extends React.Component {
  render() {
    switch(this.props.type) {
      case 'ongoing':
        return <span className="label label-warning pull-left">Ongoing</span>;
        break;
      case 'completed':
        return <span className="label label-success pull-left">Completed</span>;
        break;
        case 'cancelled':
        return <span className="label label-danger pull-left">Cancelled</span>;
        break;
      default:
       return <span className="label label-primary pull-left">-</span>;
        break;
    }
  }
}

class CampaignRow extends React.Component {
  render() {
    return(
      <tr className="flex-container">
          <td className="status">
              <Label type={this.props.type} />
          </td>
          <td className="description">
              <div>
                  <div className="text-primary"><strong>{this.props.campaign.title} · </strong><small>January 10, 2019 - </small></div>
                  <small>{this.props.campaign.description}</small>
                  
              </div>
          </td>
          <td className="stats">
              <div className="initiatives">
              {
                this.props.campaign.analytics.map(function(score){
                  return <ScoreCard label={score.label} value={score.value} icon={score.icon} />
                })
              }
              </div>
          </td>
      </tr>
    )
  }
}

class CampaignsList extends React.Component {
 
   render() {
      return (
         <div className="table-responsive">
            <table className="table">
                { this.props.children}
                <tbody>
                {
                  this.props.campaigns.map(function(campaign){
                    return <CampaignRow campaign={campaign} type={this.props.type} />
                  }, this)
                }
                </tbody>
            </table>
        </div>
      );
   }
}

class ScoreCard extends React.Component {
  render() {
    return (
        <span className="badge">
            <i className={["fa", this.props.icon].join(" ")}></i>&nbsp;{this.props.value}<br />{this.props.label}
          </span>
      );
  }
}

export default App;
