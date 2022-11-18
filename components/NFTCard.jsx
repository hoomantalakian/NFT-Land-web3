/* eslint-disable @next/next/no-img-element */
import React from "react";
// --------------------------
function NFTCard({ data }) {
	return (
		<div className="flex flex-col p-3 border border-gray-300 rounded-lg">
			<img className="overflow-hidden"
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
			<contractaddressbar className="flex flex-row mt-2 table-fixed justify-center">
				<contractadress className="  bg-teal-200 rounded-l-md px-2 py-1 truncate">
					{data.contract.address}
				</contractadress>
				<button
					className="bg-teal-500 w-auto px-2 py-1 rounded-r-md hover:mix-blend-hard-light"
					onClick={() =>
						navigator.clipboard.writeText(data.contract.address)
					}
				>
					<p className="font-medium">Copy</p>
				</button>
			</contractaddressbar>
		</div>
	);
}

export default NFTCard;
