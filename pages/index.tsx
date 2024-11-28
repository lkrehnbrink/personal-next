import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Lew Krehnbrink</title>
				<meta name='description' content='Full-stack Web Developer' />
				<link rel='icon' href='/favicon/favicon.ico' />
			</Head>
		</div>
	);
};

export default Home;
