import React from 'react';

import FontAwesome from 'react-fontawesome';

class HelpPanel extends React.Component {
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
    this.baseUrl = '/about.html';
    this.feedbackUrl = '/feedback.html';
    this.contributeUrl = '/contribute.html';
    this.helpUrl = '/help.html';
    this.privacyPolicyUrl = '/policy.html';

  }

  navigate(e) {
    e.preventDefault();
    const href = e.target.href;
    chrome.tabs.create({ url: href });
  }

  render() {
    return (
      <div className="help-panel">
        <div className="help-panel-title"><FontAwesome name='question-circle' fixedWidth={true} /> Help</div>
        <img className="help-panel-icon" src='/images/icon48.png' />
        <div style={{ fontWeight: 'bold' }} >FARBERE</div>
        <div className="help-panel-links">
          <a onClick={this.navigate} href={this.helpUrl} >User Guide</a> 
          <a onClick={this.navigate} href={this.baseUrl} >About</a> 
        </div>
      </div>
    );
  }
}

export default HelpPanel;
