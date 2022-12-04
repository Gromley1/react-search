import { ReactElement, useEffect, useState } from "react";
import { GetArticles } from "../../services/models";
import { getArticles, searchArticles }  from '../../services/ny-times.service';
import { AppCard, AppSearch } from '../../shared/components';
import styles from './articles-display.module.scss';

export const ArticlesDisplay = (): ReactElement => {
	const [articles, setArticles] = useState<GetArticles>({ results: [] });

	useEffect(() => {
		getArticles()
			.then((res) => setArticles(res.data))
	}, [])

	const onSearchArticles = (searchQuery: string): void => {
		searchArticles(searchQuery)
			.then(res => console.log(res.data))
	}

	return (
		<>
			<div className={styles.articles}>
				<AppSearch onChange={(e: any): void => onSearchArticles(e.target.value)}/>

				{articles?.results.map((x: any) => (
					<AppCard key={x.id}>
						{x.title}
					</ AppCard>
				))}
			</ div>
		</>
	)
}