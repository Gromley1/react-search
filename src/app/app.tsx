import React from 'react';
import styles from './app.module.scss';
import { AppButton } from './components';

function App() {
	const btnProps = {type: 'button'}
	return (
    	<div className={styles.app}>
			<AppButton 
				className={styles.app__btn} 
				onClick={(): void => console.log('click')} 
				{...btnProps}>App Button
			</AppButton>
    	</div>
	);
}

export default App;
