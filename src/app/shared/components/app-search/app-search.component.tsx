import { ReactElement, useState } from "react";
import styles from './app-search.module.scss';

interface AppSearchProps {
	onChange: (e: any) => void;
}

export const AppSearch = ({ onChange }: AppSearchProps): ReactElement => {
	const [results, setResults] = useState();

	
	return (
		<>
			<input
      			className={styles.search}
      			type="text"
      			onChange={onChange}
      			placeholder="Search by the title ..."
    		/>
		</>
	);
} 