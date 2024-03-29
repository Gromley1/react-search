import { ChangeEvent, ReactElement, useEffect, useMemo, useState } from "react";
import { getArticles, searchArticles } from '../../services/ny-times.service';
import { AppCard, AppSearch } from '../../shared/components';
import debounce from 'lodash.debounce';
import styles from './articles-display.module.scss';
import { Article } from "../../shared/models";

export const ArticlesDisplay = (): ReactElement => {
	const [articles, setArticles] = useState < Article[] > ([]);

	useEffect(() => {
		getArticles()
			.then((res) => {
				let articles: Article[] = [];

				res?.data?.results?.forEach((x: any) => {
					const article: Article = {
						id: x?.id,
						title: x?.title,
					}

					articles.push(article)
				})

				setArticles(articles)
			})
	}, [])

	const onSearchArticles = (searchQuery: string): void => {
		searchArticles(searchQuery)
			.then(res => {
				let articles: Article[] = [];

				res?.data?.response?.docs?.forEach((x: any) => {
					const article: Article = {
						id: x._id,
						title: x.headline.print_headline ?? x.headline?.main,

					}

					articles.push(article)
				})

				// console.log(res?.data?.response?.docs)

				setArticles(articles);
			})
	}

	const debouncedArticles = useMemo(() => debounce(onSearchArticles, 500), []);

	return (
		<>
			<div className={styles.articles}>
				<AppSearch onChange={(e: ChangeEvent<HTMLInputElement>): void => debouncedArticles(e.target.value)} />

				{articles?.map((x: Article) => (
					<AppCard key={x?.id}>
						{x?.title}

					</ AppCard>
				))}
			</ div>
		</>
	)
}