import { Network, Alchemy } from "alchemy-sdk";

const alchemy = new Alchemy({
	apiKey: process.env.API_KEY,
	network: Network.ETH_MAINNET,
});

async function fetchNFTs(req, res) {
	try {
		if (req.method !== "GET")
			return res.status(400).json({
				message: "Invalid method",
			});
		const { wallet } = req.query;
		const results = await alchemy.nft.getNftsForOwner(wallet);
		res.json({ message: "Fetch successful!", data: results });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal Server Error!" });
	}
}
export default fetchNFTs;
