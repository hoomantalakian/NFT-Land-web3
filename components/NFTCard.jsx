/* eslint-disable @next/next/no-img-element */
import React from "react";
// --------------------------

function NFTCard({ data }) {
	return (
		<div className="flex flex-col p-5 border rounded-lg">
			<img
				src={data?.media[0]?.gateway}
				alt={data?.description || "There is no alt text"}
			/>
			<div className="mt-2 bg-cyan-100">
				{data.title ? (
					<p className="font-semibold">{data.title}</p>
				) : (
					<i>&lt; no title &gt;</i>
				)}
			</div>
			<div className="mt-2  bg-cyan-300">{data.contract.address}</div>
			<div className="mt-2  bg-cyan-500">TokenID : {data.tokenId}</div>
		</div>
	);
}

export default NFTCard;
