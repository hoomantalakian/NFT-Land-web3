import React, { useState } from "react";

function useFetchNFTs(address) {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isInHome, setIsInHome] = useState(true);

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
				alert("Something went wrong! Check your Input or Connection");
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
	return { fetchNFTs, data, isInHome, isLoading };
}

export default useFetchNFTs;
