import React from "react";
import NFTCard from "./NFTCard";

function Main({
	data,
	isInHome,
	isLoading,
	cryptoTowerAddress,
	loadingCubesAddress,
}) {
	return (
		<main>
			<cards className="mt-4 grid justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 ">
				{data.map((nft) => (
					<NFTCard key={Math.random()} data={nft}></NFTCard>
				))}
			</cards>

			{isInHome && (
				<div className="m-auto h-[18rem] w-[15rem] -translate-x-3 -translate-y-3 scale-110 drop-shadow-xl">
					<lottie-player
						id="crypto-tower"
						src={cryptoTowerAddress}
						speed="1"
						loop
						autoplay
					></lottie-player>
				</div>
			)}
			{isLoading && (
				<div className="m-auto h-[18rem] w-[18rem] -translate-y-5 opacity-80 drop-shadow-xl">
					<lottie-player
						id="loading-cubes"
						src={loadingCubesAddress}
						speed="1"
						loop
						autoplay
					></lottie-player>
				</div>
			)}
		</main>
	);
}

export default Main;
