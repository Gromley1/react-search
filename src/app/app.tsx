import React from 'react';
import styles from './app.module.scss';
import { AppButton, AppHeading } from './components';
import { ButtonStyle, ButtonType } from './shared/enums';

function App() {

	
	return (
    	<div className={styles.app}>
			<div className={styles.app__headings}>
			<AppHeading as='h2' size={2}>App heading H2</AppHeading>
			<AppHeading as='h3' size={3}>App heading H3</AppHeading>
			</div>

			<div className={styles.app__actions}>
				<AppButton
					style={ButtonStyle.inverted}
					onClick={(): void => console.log('btn inverted click')}
				>
					App Button Inverted
				</AppButton>

				<AppButton style={ButtonStyle.default} onClick={(): void => console.log('default')}>
					App Button Default
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
