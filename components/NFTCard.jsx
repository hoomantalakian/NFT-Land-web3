/* eslint-disable @next/next/no-img-element */
import React from "react";

function NFTCard({ data }) {
	return (
		<div className="flex flex-col p-5 border rounded-lg">
			<img
				src={data?.media[0]?.gateway}
				alt={data?.description || "There is no alt text"}
			/>
			<div className="mt-2">{data.title || <p>No Name!</p>}</div>
			<div className="mt-2">{data.contract.address}</div>
			<div className="mt-2">{data.tokenID}</div>
		</div>
	);
}

export default NFTCard;
