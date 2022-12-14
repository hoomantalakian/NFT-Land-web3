import React from "react";

function Header({ address, setAddress, fetchNFTs }) {
	return (
		<header className="mt-10">
			{/* logotype */}
			<h1 className="text-center text-6xl font-extrabold text-amber-400 drop-shadow-xl ">
				<a href="./">NFT Land </a>
			</h1>
			{/* find NFT's form */}
			<form className="mt-5 flex flex-col">
				<input
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					type="text"
					placeholder="Paste Wallet Address Here"
					className="w-10/12 self-center rounded-sm pl-2 shadow-lg  sm:w-[25rem] "
				/>
				{/* for test */}
				<p className="mt-2">for test: 0x3f516a35564c309a4baa12183db70df8e95a763d</p>
				<button
					onClick={fetchNFTs}
					className=" my-5 w-auto self-center rounded-lg bg-amber-400 px-5 py-1 font-semibold text-gray-800 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] duration-200  ease-in-out hover:bg-teal-300"
				>
					Find NFTs !
				</button>
			</form>
		</header>
	);
}

export default Header;
