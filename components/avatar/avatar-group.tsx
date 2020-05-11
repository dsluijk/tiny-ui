import React, { useContext } from 'react';
import classNames from 'classnames';
import { AvatarProps } from './avatar';
import { BaseProps } from '../_utils/props';
import { ConfigContext } from '../config-provider/config-context';
import { getPrefixCls } from '../_utils/general';

export interface AvatarGroupProps
  extends BaseProps,
    React.PropsWithoutRef<JSX.IntrinsicElements['span']> {
  gap: number | string;
  children: React.ReactNode;
}

const AvatarGroup = (props: AvatarGroupProps): JSX.Element => {
  const { gap = -15, className, style, children, prefixCls: customisedCls, ...otherProps } = props;
  const configContext = useContext(ConfigContext);
  const prefixCls = getPrefixCls('avatar-group', configContext.prefixCls, customisedCls);
  const cls = classNames(prefixCls, className);

  return (
    <span {...otherProps} className={cls} style={style}>
      {React.Children.map(children, (child, idx) => {
        const childElement = child as React.FunctionComponentElement<AvatarProps>;
        if (childElement.type.displayName === 'Avatar') {
          const childProps = {
            ...childElement.props,
            style: {
              ...childElement.props.style,
              marginLeft: idx === 0 ? 0 : gap,
            },
          };
          return React.cloneElement(childElement, childProps);
        }
        return child;
      })}
    </span>
  );
};

AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
