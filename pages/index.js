import Head from "next/head";
import NFTCard from "../components/NFTCard.jsx";
import { useState } from "react";
// ==================================
export default function Home() {
	const [address, setAddress] = useState("");
	const [data, setData] = useState([]);

	const fetchNFTs = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/get-nfts?wallet=${address}`);
			if (!response.ok) return alert("Something went wrong!");
			const data = await response.json();
			console.log(data);
			if (data.data.totalCount == 0) return alert("Wallet has no NFTs");
			setData(data.data.ownedNfts);
		} catch (err) {
			console.error(err);
			alert("There was an error fetching NFTs!");
		}
	};
	return (
		<div className="container text-center m-auto">
			<Head>
				<title>NFT Land</title>
				<meta
					name="NFT Land"
					content="A simple web-app for Eplore NFT"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<search-box>
				<h1 className="text-center font-bold">NFT Land</h1>
				<form className="flex flex-col mt-10">
					<input
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						type="text"
						placeholder="Wallet Address"
						className="pl-2 w-3/5 self-center"
					/>
					<button
						onClick={fetchNFTs}
						className="border w-1/5 self-center mt-5 rounded-md"
					>
						Find NFTs !
					</button>
				</form>
			</search-box>
			<div className="grid grid-cols-3 gap-5 mt-10">
				{data.map((nft) => (
					<NFTCard key={nft.tokenId} data={nft}></NFTCard>
				))}
			</div>
		</div>
	);
}
