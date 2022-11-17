import Head from "next/head";
import NFTCard from "../components/NFTCard.jsx";
import { useState } from "react";
import Lottie from "lottie-react";
import cryptoTower from "../images/crypto-tower.json";
//------------------------------

export default function Home() {
	const [address, setAddress] = useState("");
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	//
	const fetchNFTs = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await fetch(`/api/get-nfts?wallet=${address}`);
			if (!response.ok) return alert("Something went wrong!");
			const data = await response.json();
			if (data.data.totalCount == 0) return alert("Wallet has no NFTs");
			setData(data.data.ownedNfts);
		} catch (err) {
			alert("There was an error fetching NFTs!");
		}
		setIsLoading(false);
	};
	//
	return (
		<div className="container mx-auto px-4 text-center m-auto">
			<Head>
				<title>NFT Land</title>
				<meta
					name="NFT Land"
					content="A simple web-app for Eplore NFT"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="mt-10">
				<h1 className="text-center font-extrabold text-6xl text-amber-400 drop-shadow-xl">
					NFT Land
				</h1>
				<form className="flex flex-col my-5">
					<input
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						type="text"
						placeholder="Wallet Address"
						className="pl-2 w-3/5 self-center rounded-sm"
					/>
					<button
						onClick={fetchNFTs}
						className=" w-1/5 self-center my-5 rounded-lg bg-teal-300 hover:bg-amber-200 ease-in-out duration-200 drop-shadow-xl"
					>
						Find NFTs !
					</button>
				</form>
			</header>
			{isLoading && (
				<Lottie
					className="w-auto h-80"
					animationData={cryptoTower}
					loop={true}
				></Lottie>
			)}
			<main className="grid grid-cols-3 gap-5 mt-10">
				{data.map((nft) => (
					<NFTCard key={Math.random()} data={nft}></NFTCard>
				))}
			</main>
		</div>
	);
}
