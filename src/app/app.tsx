import React from 'react';
import styles from './app.module.scss';
import { AppButton, AppHeading } from './components';
import { ArticlesDisplay } from './features/articles-display/articles-display';
import { ButtonStyle, ButtonType } from './shared/enums';

function App() {

	
	return (
    	<div className={styles.app}>
			<ArticlesDisplay />
    	</div>
	);
}

export default App;
