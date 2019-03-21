import * as React from 'react';
import { useState, useEffect } from 'react';
import './style/index.css';
import classNames from 'classnames';
import CollapseItem, { CollapseItemProps } from './collapse-item';

export type CollapseTypes = {
    defaultActiveKey?: string | string[],
    activeKey?: string | string[],
    /** Only open one panel */
    accordion?: boolean,
    /** Allow to delete */
    deletable?: boolean,
    showArrow?: boolean,
    bordered?: boolean,
    onChange?: (keys: string[]) => any,
    children: React.ReactElement<CollapseItemProps>,
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
} & typeof defaultProps;

const defaultProps = {
    className: 'ty-collapse',
    showArrow: true,
    deletable: false,
    accordion: false,
    defaultActiveKey: [],
    onChange: () => {
    },
};

/**
 * Format active key to array
 * @param activeKey
 */
const toArray = (activeKey: string | string[]) => {
    return Array.isArray(activeKey) ? activeKey : [activeKey];
};

const Collapse = (props: CollapseTypes) => {
    const { defaultActiveKey, activeKey, onChange, deletable, showArrow, prefixCls, className, style,
        children } = props;
    let currentActiveKey: string | string[] = defaultActiveKey;
    if (activeKey) {
        currentActiveKey = activeKey;
    }
    const [activeItems, setActiveItems] = useState<string[]>(toArray(currentActiveKey));
    const cls = classNames(
        prefixCls,
        className,
    );

    const _itemClickCallback = (itemKey: string) => {
        const items = [...activeItems];
        const index = items.indexOf(itemKey);
        const isActive = index > -1;
        if (isActive) { // remove active state
            items.splice(index, 1);
        } else {
            items.push(itemKey);
        }

        updateActiveItems(items);
    };

    const updateActiveItems = (items: string[]) => {
        if (!activeKey) { // only for defaultKey
            setActiveItems(items);
        }
        onChange(items);
    };

    useEffect(() => {
        // Update state from updated props
        activeKey && setActiveItems(toArray(activeKey));
    });

    return (
        <div className={cls} style={style}>
            {React.Children.map(children, (child: React.ReactElement<CollapseItemProps>) => {
                const itemProps: CollapseItemProps = {
                    ...child.props,
                    deletable,
                    showArrow,
                    isActive: toArray(activeItems).includes(child.props.itemKey),
                    onItemClick: _itemClickCallback,
                };
                return React.cloneElement(child, itemProps);
            })}
        </div>
    );
};

Collapse.defaultProps = defaultProps;

Collapse.Item = CollapseItem;

export default Collapse;