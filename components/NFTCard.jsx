/* eslint-disable @next/next/no-img-element */
import React from "react";
// --------------------------
function NFTCard({ data }) {
	return (
		<div className="m-auto flex  max-w-[60%] flex-col rounded-lg border border-gray-300 p-3  sm:m-0 sm:max-w-lg ">
			<img

				className={data?.media[0]?.gateway ? 'overflow-hidden': 'object-contain' }
				src={
					data?.media[0]?.gateway ||
					"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
				}
				alt={data?.description}
			/>
			<div className="mt-2 rounded-md bg-teal-50 px-2">
				{data.title ? (
					<p className="font-semibold">{data.title}</p>
				) : (
					<i>&lt; no title &gt;</i>
				)}
			</div>
			<contact className="mt-2 flex table-fixed flex-row justify-center">
				<contactadress className=" truncate rounded-l-md bg-teal-200 px-2 py-1">
					{data.contract.address}
				</contactadress>
				<button
					className="w-auto rounded-r-md bg-teal-500 px-2 py-1 hover:mix-blend-hard-light"
					onClick={() =>
						navigator.clipboard.writeText(data.contract.address)
					}
				>
					<p className="font-medium">Copy</p>
				</button>
			</contact>
		</div>
	);
}

export default NFTCard;
