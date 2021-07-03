import { h, Fragment } from 'preact';
import View from './View';

function ButtonBadge({ children }) {
  return (
    <View as="span" className="s-btn--badge ml4">
      <View as="span" className="s-btn--number">
        {children}
      </View>
    </View>
  );
}

export default function Button({
  as = 'button',
  children,
  className = '',
  badge,
  modifier,
  dropdown,
  hasIcon,
  loading,
  size,
  variant = 'secondary',
  ...rest
}) {
  return (
  <View
      as={as}
      className={`
        s-btn
        ${variant ? `s-btn__${variant}` : ''}
        ${modifier ? `s-btn__${modifier}` : ''}
        ${size ? `s-btn__${size}` : ''}
        ${dropdown ? 's-btn__dropdown' : ''}
        ${hasIcon ? 's-btn__icon' : ''}
        ${loading ? 'is-loading' : ''}
        ${className}
      `}
      {...rest}
    >
      {children}
      {badge ? <ButtonBadge>{badge}</ButtonBadge> : ''}
    </View>
  );
}
