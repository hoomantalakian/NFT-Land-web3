import Head from "next/head";
import NFTCard from "../components/NFTCard.jsx";
import { useState } from "react";
import Lottie from "lottie-react";
import movingCubes from "../images/moving-cubes.json";
import cryptoTower from "../images/crypto-tower.json";
//------------------------------

export default function Home() {
	const [address, setAddress] = useState("");
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isInHome, setIsInHome] = useState(true);
	//
	const fetchNFTs = async (e) => {
		e.preventDefault();
		setData([]);
		setIsLoading(true);
		setIsInHome(false);

		try {
			const response = await fetch(`/api/get-nfts?wallet=${address}`);
			if (!response.ok) {
				alert("Something went wrong!");
				setIsLoading(false);
				setIsInHome(true);
			}
			const data = await response.json();
			if (data.data.totalCount == 0) return alert("Wallet has no NFTs");
			setData(data.data.ownedNfts);
			setIsInHome(false);
			setIsLoading(false);
		} catch (err) {
			alert("There was an error fetching NFTs!");
			setIsInHome(true);
		}
	};
	//
	return (
		<div
			className={`flex flex-col  ${
				data == [] ? "justify-evenly" : "justify-between"
			} h-screen container mx-auto px-20 text-center`}
		>
			<Head>
				<title>NFT Land</title>
				<meta
					name="NFT Land"
					content="A simple web-app for Eplore NFT"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* B1 */}
			<header className="mt-10">
				<h1 className="text-center font-extrabold text-6xl text-amber-400 drop-shadow-xl ">
					<a href="./">NFT Land </a>
				</h1>
				<form className="flex flex-col my-5">
					<input
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						type="text"
						placeholder="Paste Wallet Address Here"
						className="pl-2 w-2/5 self-center rounded-sm shadow-lg"
					/>
					<button
						onClick={fetchNFTs}
						className=" w-1/5 self-center my-5 rounded-lg bg-amber-400 hover:bg-teal-300 ease-in-out duration-200  drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]"
					>
						Find NFTs !
					</button>
				</form>
			</header>
			{/* B2 */}
			{isInHome && (
				<Lottie
					id="crypto-tower"
					className="w-auto h-80 opacity-80 drop-shadow-[0_30px_40px_rgba(0,0,0,0.50)] -translate-x-3"
					animationData={cryptoTower}
					loop={true}
				></Lottie>
			)}
			{isLoading && (
				<Lottie
					id="loading-cubes"
					className="w-auto h-80 opacity-80"
					animationData={movingCubes}
					loop={true}
				></Lottie>
			)}

			<main className="grid md:grid-cols-3 gap-5 mt-5">
				{data.map((nft) => (
					<NFTCard key={Math.random()} data={nft}></NFTCard>
				))}
			</main>
			{/* B3 */}
			<footer className="mt-8 mb-5">
				Made by{" "}
				<a
					className=" text-blue-900 font-semibold"
					href="https://github.com/hoomantalakian"
					target="_blank"
					rel="noreferrer"
				>
					Hooman Talakian
				</a>
			</footer>
		</div>
	);
}
