import { ReactElement, useEffect, useState } from "react";
import { GetArticles } from "../../services/models";
import { getArticles }  from '../../services/ny-times.service';
import styles from './articles-display.module.scss';

export const ArticlesDisplay = (): ReactElement => {
	const [articles, setArticles] = useState<GetArticles>({ results: [] });

	useEffect(() => {
		getArticles()
			.then((res) => setArticles(res.data))
	}, [])

	return (
		<>
			{articles?.results.map((x: any) => (
				<div key={x.id} className={styles.articles}>
					{x.title}
				</ div>
			))}
		</>
	)
}