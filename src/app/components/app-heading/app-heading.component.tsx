import {
	ReactElement,
	ReactNode,
} from 'react';

import classnames from 'classnames';

import styles from './app-heading.module.scss';

interface AppHeadingProps {
    children: ReactNode;
    size?: 1 | 2 | 3 | 4;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    fontWeight?: 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';
}

export const AppHeading = ({
    as: Component = 'h1',
    size = 1,
    className,
    fontWeight = 'medium',
    ...rest
}: AppHeadingProps): ReactElement => (
    <Component
        className={classnames(`${styles.heading}`, styles[`heading--${size}`], styles[`heading--${fontWeight}`], className)}
        {...rest}
    />
);

AppHeading.defaultProps = { size: undefined, className: undefined, as: undefined, fontWeight: undefined };
