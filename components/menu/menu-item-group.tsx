import React from 'react';
import classNames from 'classnames';
import { BaseProps } from '../_utils/props';
import { MenuItemProps } from './menu-item';

export interface MenuItemGroupProps
  extends BaseProps,
    Omit<React.PropsWithoutRef<JSX.IntrinsicElements['li']>, 'title'> {
  index?: string;
  title?: string;
  children?: React.ReactNode;
}

const MenuItemGroup = (props: MenuItemGroupProps): React.ReactElement => {
  const {
    prefixCls = 'ty-menu-item-group',
    index,
    title,
    className,
    style,
    children,
    ...otherProps
  } = props;
  const cls = classNames(prefixCls, className);

  return (
    <li {...otherProps} key={title} className={cls} style={style}>
      <div className={`${prefixCls}__title`}>{title}</div>
      <ul className={`${prefixCls}__list`}>
        {React.Children.map(children, (child, idx) => {
          const childElement = child as React.FunctionComponentElement<MenuItemProps>;
          if (childElement.type.displayName === 'MenuItem') {
            const childProps = {
              ...childElement.props,
              index: `${index}-${idx}`,
            };
            return React.cloneElement(childElement, childProps);
          } else {
            console.warn('Menu has a child that is not a MenuItem component.');
            return null;
          }
        })}
      </ul>
    </li>
  );
};

MenuItemGroup.displayName = 'MenuItemGroup';

export default MenuItemGroup;