import React from 'react';
import styles from './app.module.scss';
import { ArticlesDisplay } from './features/articles-display/articles-display';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

	
	return (
    	<div className={styles.app}>
			<ArticlesDisplay />
    	</div>
	);
}

export default App;
