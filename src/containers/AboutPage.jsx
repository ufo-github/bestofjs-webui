import React from 'react';
import { connect } from 'react-redux';

import About from '../components/about/About';
import populate from '../helpers/populate';
import log from '../helpers/log';

const AboutPage  = React.createClass({

  render: function() {
    log('Render the <AboutPage> container', this.props);
    const { staticContent, project } = this.props;
    return (
      <About
        project={ project }
        staticContent={ staticContent }
      />
    );
  }

});

function mapStateToProps(state) {
  const {
    entities: { projects, tags },
    popularProjectIds
  } = state.githubProjects;

  const project = popularProjectIds
    .map( id => projects[id] )
    .slice(0, 1)
    .map( populate(tags) );

  return {
    project: project[0],
    staticContent: state.staticContent
  };
}

export default connect(mapStateToProps, {
})(AboutPage);