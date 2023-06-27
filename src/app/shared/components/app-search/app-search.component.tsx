import { ChangeEventHandler, ReactElement, useState } from "react";
import styles from './app-search.module.scss';

interface AppSearchProps {

	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const AppSearch = ({ onChange }: AppSearchProps): ReactElement => (
	<>
		<input
			className={styles.search}
			type="text"
			onChange={onChange}
			placeholder="Search by the title ..."
		/>
	</>
);