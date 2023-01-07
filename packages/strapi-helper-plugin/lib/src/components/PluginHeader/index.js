/**
 *
 * PluginHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import PluginHeaderTitle from '../PluginHeaderTitle';
import PluginHeaderActions from '../PluginHeaderActions';

import StyledPluginHeader from './StyledPluginHeader';

function PluginHeader({
  actions,
  description,
  icon,
  onClickIcon,
  overrideRendering,
  subActions,
  title,
  titleId,
  withDescriptionAnim,
}) {
  return (
    <StyledPluginHeader>
      <div className="row">
        <div className="col-lg-6">
          <PluginHeaderTitle
            icon={icon}
            onClickIcon={onClickIcon}
            title={title}
            titleId={titleId}
            description={description}
            withDescriptionAnim={withDescriptionAnim}
          />
        </div>
        <div className="col-lg-6 justify-content-end">
          <PluginHeaderActions actions={subActions} />
          <PluginHeaderActions actions={actions} overrideRendering={overrideRendering} />
        </div>
      </div>
    </StyledPluginHeader>
  );
}

PluginHeader.defaultProps = {
  actions: [],
  description: '',
  icon: null,
  onClickIcon: () => {},
  overrideRendering: false,
  subActions: [],
  title: '',
  titleId: '',
  withDescriptionAnim: false,
};

PluginHeader.propTypes = {
  actions: PropTypes.array,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      values: PropTypes.object,
    }),
  ]),
  icon: PropTypes.string,
  onClickIcon: PropTypes.func,
  overrideRendering: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  subActions: PropTypes.array,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      values: PropTypes.object,
    }),
  ]),
  titleId: PropTypes.string,
  withDescriptionAnim: PropTypes.bool,
};

export default PluginHeader;
