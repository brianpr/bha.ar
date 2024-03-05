import React, { ReactNode } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import PropTypes from 'prop-types';

interface CustomIconProps {
  icon: string;
  size?: number;
  color?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  icon,
  size = 24,
  color = 'black',
}) => {
  return (
    <div>
      {/* Puedes usar Icon o InlineIcon según tus necesidades */}
      <Icon icon={icon} width={size} height={size} style={{ color }} />
    </div>
  );
};

CustomIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default CustomIcon;
