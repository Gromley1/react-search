import { ReactElement, ReactNode } from "react";
import styles from './app-card.module.scss';

interface AppCardProps {
	children: ReactNode;
}
export const AppCard = ({ children }: AppCardProps): ReactElement => 
	<>
		<div className={styles.card}>
			{children}
		</div>
	</>;