import React from 'react';
import styles from './app.module.scss';
import { AppButton } from './components';
import { ButtonStyle, ButtonType } from './shared/enums';

function App() {
	return (
    	<div className={styles.app}>

			<div className={styles.app__actions}>
				<AppButton
					onClick={(): void => console.log('btn click')} 
				>
					App Button
				</AppButton>

				<AppButton
					style={ButtonStyle.inverted}
					onClick={(): void => console.log('btn inverted click')}
				>
					App Button Inverted
				</AppButton>

				<AppButton
					style={ButtonStyle.inverted}
					rounded
					onClick={(): void => console.log('btn rounded inverted click')}
				>
					App Button Inverted
				</AppButton>
			</div>
    	</div>
	);
}

export default App;
