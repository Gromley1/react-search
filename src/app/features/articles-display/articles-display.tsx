import { ReactElement, useEffect, useState } from "react";
import { GetArticles } from "../../services/models";
import { getArticles }  from '../../services/ny-times.service';
import { AppCard } from '../../shared/components';
import styles from './articles-display.module.scss';

export const ArticlesDisplay = (): ReactElement => {
	const [articles, setArticles] = useState<GetArticles>({ results: [] });

	useEffect(() => {
		getArticles()
			.then((res) => setArticles(res.data))
	}, [])

	useEffect(() => {
		console.log(articles)
	}, [articles])

	return (
		<>
			<div className={styles.articles}>
				{articles?.results.map((x: any) => (
					<AppCard key={x.id}>
						{x.title}
					</ AppCard>
				))}
			</ div>
		</>
	)
}