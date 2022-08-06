import React from 'react';
import styles from './app.module.scss';
import { AppButton } from './components';

function App() {
	const btnProps = { type: 'button' }
	return (
    	<div className={styles.app}>

			<div className={styles.app__actions}>
				<AppButton 
					className={styles.app__btn} 
					{...btnProps}
					onClick={(): void => console.log('btn click')} 
				>
					App Button
				</AppButton>

				<AppButton 
					className={styles.app__btnInverted} 
					{...btnProps}
					onClick={(): void => console.log('btn inverted click')}
				>
					App Button Inverted
				</AppButton>
			</div>
    	</div>
	);
}

export default App;
