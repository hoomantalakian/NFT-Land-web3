/* eslint-disable @next/next/no-img-element */
import React from "react";
// --------------------------
//  https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg
function NFTCard({ data }) {
	console.log(data?.media[0]?.gateway);
	return (
		<div className="flex flex-col p-3 border rounded-lg">
			<img
				src={
					data?.media[0]?.gateway ||
					"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
				}
				alt={data?.description}
			/>
			<div className="mt-2 bg-teal-50 rounded-md px-2">
				{data.title ? (
					<p className="font-semibold">{data.title}</p>
				) : (
					<i>&lt; no title &gt;</i>
				)}
			</div>
			<contractAdressBar className="flex flex-row mt-2 table-fixed">
				<contractAdress className="  bg-teal-200 rounded-l-md px-2 py-1 overflow-hidden ">
					{data.contract.address}
				</contractAdress>
				<button
					className="bg-teal-500 w-auto px-2 py-1 rounded-r-md hover:mix-blend-hard-light "
					onClick={() =>
						navigator.clipboard.writeText(data.contract.address)
					}
				>
					Copy
				</button>
			</contractAdressBar>
			{/* <div className="mt-2  bg-teal-500 rounded-md px-2">
				TokenID : {data.tokenId}
			</div> */}
		</div>
	);
}

export default NFTCard;
