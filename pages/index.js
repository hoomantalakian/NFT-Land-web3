import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
	return (
		<div>
			<Head>
				<title>NFT Land</title>
				<meta
					name="NFT Land"
					content="A simple web-app for Eplore NFT"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Fragment>
				<h1 className="text-3xl font-bold underline">Hello!</h1>
			</Fragment>
		</div>
	);
}
