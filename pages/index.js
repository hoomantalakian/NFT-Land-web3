import Head from "next/head";
import { useState } from "react";
import Script from "next/script";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";
//-----------------------------------------
export default function Home({
	scriptAddress,
	cryptoTowerAddress,
	loadingCubesAddress,
}) {
	// states
	const [address, setAddress] = useState("");
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isInHome, setIsInHome] = useState(true);
	// fetch data handler
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
				alert("Something went wrong! maybe your Wallet Address is Invalid!");
				setIsLoading(false);
				setIsInHome(true);
				return;
			}
			const data = await response.json();
			if (data.data.totalCount == 0) {
				setIsInHome(true);
				setIsLoading(false);
				alert("This Wallet has no NFTs");
			}
			setData(data.data.ownedNfts);
			setIsLoading(false);
			return;
		} catch (err) {
			alert("There was an error fetching NFTs!");
			return;
		}
	};
	// -------------------------------------------
	return (
		<wholepage
			className={`container m-auto flex  min-h-screen flex-col px-6 text-center sm:px-10 md:px-20 ${
				data !== [] ? "justify-evenly" : "justify-between"
			} `}
		>
			<Script src={scriptAddress} />
			<Head>
				<title>NFT Land</title>
				<meta
					name="NFT Land"
					content="A simple web-app for Eplore NFT"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header {...{ address, setAddress, fetchNFTs }} />
			<Main
				{...{
					data,
					isInHome,
					isLoading,
					scriptAddress,
					cryptoTowerAddress,
					loadingCubesAddress,
				}}
			/>
			<Footer />
		</wholepage>
	);
}
//  ------------------------------------------
export function getStaticProps() {
	// async/await is not implemented yet!
	const scriptAddress =
		"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
	const cryptoTowerAddress =
		"https://assets3.lottiefiles.com/packages/lf20_2omr5gpu.json";
	const loadingCubesAddress =
		"https://assets4.lottiefiles.com/private_files/lf30_c52paxfj.json";

	return {
		props: {
			scriptAddress,
			cryptoTowerAddress,
			loadingCubesAddress,
		},
	};
}
