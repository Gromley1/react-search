import { MouseEventHandler, ReactElement, ReactNode } from "react";

interface AppButtonProps {
	className?: string;
	children: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

export const AppButton = (props: AppButtonProps): ReactElement => {
	const { children, onClick, className, ...rest} = props;

	return (
		<button className={className} onClick={onClick} {...rest}>
			{children}
		</button>
	)
}