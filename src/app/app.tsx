import React from 'react';
import styles from './app.module.scss';
import { ArticlesDisplay } from './features/articles-display/articles-display';

function App() {

	
	return (
    	<div className={styles.app}>
			<ArticlesDisplay />
    	</div>
	);
}

export default App;
