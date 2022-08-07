import { MouseEventHandler, ReactElement, ReactNode } from "react";
import classNames from 'classnames';
import styles from './app-button.module.scss';
import { ButtonStyle, ButtonType } from "../../shared/enums";

interface AppButtonProps {
	children: ReactNode;
	type: "button" | "submit" | "reset" | undefined;
	disabled?: boolean;
	style?: ButtonStyle;
	className?: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

export const AppButton = (props: AppButtonProps): ReactElement => {
	const { children, type, disabled, style, className, onClick, ...rest } = props;

	const classNameProps = classNames(styles.btn, styles[`btn--${style}`] , className);

	return (
		<button className={classNameProps} type={type} disabled={disabled} onClick={onClick} {...rest}>
			{children}
		</button>
	);
};

AppButton.defaultProps = { style: ButtonStyle.default, type: ButtonType.button };