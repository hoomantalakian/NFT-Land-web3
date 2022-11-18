import Head from "next/head";
import NFTCard from "../components/NFTCard.jsx";
import { useState } from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
// import "@lottiefiles/lottie-player";
// import Lottie from "lottie-react";
// import * as LottiePlayer from "@lottiefiles/lottie-player";
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
		if (address === "") {
			alert("Please provide Wallet Address!");
			return;
		}
		setData([]);
		setIsLoading(true);
		setIsInHome(false);

		try {
			const response = await fetch(`/api/get-nfts?wallet=${address}`);
			if (!response.ok) {
				alert("Something went wrong!");
				setIsLoading(false);
				setIsInHome(true);
				return;
			}
			const data = await response.json();
			if (data.data.totalCount == 0) {
				setIsInHome(true);
				setIsLoading(false);
				alert("Wallet has no NFTs");
			}
			setData(data.data.ownedNfts);
			console.log(data);
			setIsLoading(false);
			return;
		} catch (err) {
			alert("There was an error fetching NFTs!");
			return;
		}
		// setIsLoading(false);
	};
	//
	return (
		<wholepage
			className={`container m-auto flex  min-h-screen flex-col px-10 text-center md:px-20 ${
				data !== [] ? "justify-evenly" : "justify-between"
			} `}
		>
			<Head>
				<title>NFT Land</title>
				<meta
					name="NFT Land"
					content="A simple web-app for Eplore NFT"
				/>
				<link rel="icon" href="/favicon.ico" />
				<script
					src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
					defer
				></script>
			</Head>
			{/* HEADER */}
			<header className="mt-12">
				<h1 className="text-center text-6xl font-extrabold text-amber-400 drop-shadow-xl ">
					<a href="./">NFT Land </a>
				</h1>
				<form className="mt-5 flex flex-col">
					<input
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						type="text"
						placeholder="Paste Wallet Address Here"
						className="w-full self-center rounded-sm pl-2 shadow-lg  lg:w-96"
					/>
					<button
						onClick={fetchNFTs}
						className=" my-5 w-auto self-center rounded-lg bg-amber-400 px-5 py-1 font-semibold text-gray-800 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] duration-200  ease-in-out hover:bg-teal-300"
					>
						Find NFTs !
					</button>
				</form>
			</header>
			{/* BODY */}
			<main>
				<cards className="mt-5 grid  justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 ">
					{data.map((nft) => (
						<NFTCard key={Math.random()} data={nft}></NFTCard>
					))}
				</cards>
				<lottie-player
					src="https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json"
					background="transparent"
					speed="1"
					// style="width: 300px; height: 300px;"
					loop
					autoplay
				></lottie-player>
				{/* <Player
					autoplay
					loop
					src={movingCubes}
					style={{ height: "300px", width: "300px" }}
				></Player> */}
				{/* {isInHome && (
					<Lottie
						id="crypto-tower"
						className="h-80 w-auto -translate-x-3 opacity-80 drop-shadow-[0_40px_60px_rgba(0,0,0,0.60)]"
						path="https://assets3.lottiefiles.com/packages/lf20_2omr5gpu.json"
						// animationData=""
						loop={true}
					></Lottie>
				)}
				{isLoading && (
					<Lottie
						id="loading-cubes"
						className="h-80 w-auto opacity-80"
						animationData={movingCubes}
						loop={true}
					></Lottie>
				)} */}
			</main>

			{/* FOOTER */}
			<footer className="mt-8 mb-5 text-gray-900">
				Made by{" "}
				<a
					className=" font-semibold text-blue-900"
					href="https://github.com/hoomantalakian"
					target="_blank"
					rel="noreferrer"
				>
					Hooman Talakian
				</a>
			</footer>
		</wholepage>
	);
}
