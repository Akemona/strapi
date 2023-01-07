/*
 *
 * OverlayBlocker
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import Container from './Container';
import Overlay from './Overlay';

const DELAY = 1000;

class OverlayBlocker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { elapsed: 0, start: 0 };
    this.overlayContainer = document.createElement('div');

    document.body.appendChild(this.overlayContainer);
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;

    if (prevProps.isOpen !== this.props.isOpen && isOpen) {
      this.startTimer();
    }

    if (prevProps.isOpen !== isOpen && !isOpen) {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.overlayContainer);
  }

  tick = () => {
    const { elapsed } = this.state;

    if (elapsed > 15) {
      clearInterval(this.timer);

      return;
    }

    this.setState((prevState) => ({
      elapsed: Math.round(Date.now() - prevState.start) / 1000,
    }));
  };

  startTimer = () => {
    this.setState({ start: Date.now() });
    this.timer = setInterval(this.tick, DELAY);
  };

  stopTimer = () => {
    this.setState({ elapsed: 0 });
    clearInterval(this.timer);
  };

  render() {
    let { title, description, icon } = this.props;
    const { elapsed } = this.state;

    let button = (
      <div className="buttonContainer">
        <a
          className={cn('primary', 'btn')}
          href="https://strapi.akemona.com/documentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the documentation
        </a>
      </div>
    );

    if (elapsed > 15) {
      button = null;
      icon = ['far', 'clock'];
      description = 'components.OverlayBlocker.description.serverError';
      title = 'components.OverlayBlocker.title.serverError';
    }

    const content = this.props.children ? (
      this.props.children
    ) : (
      <Container>
        <div className={cn('icoContainer', elapsed < 15 && 'spinner')}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>
          <h4>
            <FormattedMessage id={title} />
          </h4>
          <p>
            <FormattedMessage id={description} />
          </p>
          {button}
        </div>
      </Container>
    );

    if (this.props.isOpen) {
      return ReactDOM.createPortal(
        <Overlay noGradient={this.props.noGradient}>
          <div>{content}</div>
        </Overlay>,
        this.overlayContainer
      );
    }

    return '';
  }
}

OverlayBlocker.defaultProps = {
  children: null,
  description: 'components.OverlayBlocker.description',
  icon: 'sync-alt',
  isOpen: false,
  noGradient: false,
  title: 'components.OverlayBlocker.title',
};

OverlayBlocker.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  icon: PropTypes.string,
  isOpen: PropTypes.bool,
  noGradient: PropTypes.bool,
  title: PropTypes.string,
};

export default OverlayBlocker;
