export default function Features() {
  return (
    <div className="section mt-14 sm:my-40">
      <div className="flex sm:justify-between sm:space-x-64 flex-col sm:flex-row space-y-8 sm:space-y-0">
        <div className="sm:text-5xl text-4xl flex-shrink-0">
          <div className="bg-gradient-to-br from-primary via-[#B6F7F2] to-white bg-clip-text">
            Stream <span className="text-transparent">tokens</span>
            <br />
            every second
          </div>
        </div>
        <div>
          <p className="mb-8">
            We know how important is to get paid on time. With CoinDrip, on time means every second. As a user, you can
            see your tokens stream increase in real-time, and you can claim them whenever you want.
          </p>
          <p>
            As a web3 company or DAO, we just made payments easier and more fair for you. With a simple, one-time
            deposit, CoinDrip will start to stream the tokens toward the recipient every second.
          </p>
        </div>
      </div>

      <div className="mt-14 sm:mt-24 flex sm:space-x-9 flex-col sm:flex-row space-y-6 sm:space-y-0">
        <div className="w-full rounded-2xl bg-gradient-to-bl from-[#010D0C] to-[#027B72] p-[2px]">
          <div className="flex flex-col items-start h-full w-full bg-gradient-to-b to-[#013C38] via-black from-black rounded-2xl p-10 space-y-7">
            {/* <BanknotesIcon className="h-12" /> */}
            <img src="/features/start_streaming.svg" className="h-12 w-auto" />
            <h3 className="text-2xl">Start streaming</h3>
            <p className="text-neutral-400">
              With a simple, one-time deposit, you can handle vesting, payroll, airdrops, grants and many other things
              in a descentralized way.
            </p>
          </div>
        </div>

        <div className="w-full rounded-2xl bg-gradient-to-tr from-[#010D0C] to-[#027B72] p-[2px]">
          <div className="flex flex-col items-start h-full w-full bg-black rounded-2xl p-10 space-y-7">
            <img src="/features/nft.svg" className="h-12 w-auto" />
            <h3 className="text-2xl">NFTs</h3>
            <p className="text-neutral-400">
              Each stream recipient is minted an NFT giving him full access to the stream. This makes CoinDrip highly
              composable with other DeFi protocols.
            </p>
          </div>
        </div>

        <div className="w-full rounded-2xl bg-gradient-to-bl from-[#010D0C] to-[#027B72] p-[2px]">
          <div className="flex flex-col items-start h-full w-full bg-black rounded-2xl p-10 space-y-7">
            <img src="/features/manage.svg" className="h-12 w-auto" />
            <h3 className="text-2xl">Manage streams</h3>
            <p className="text-neutral-400">
              You can see and manage all of your incoming or created streams, check the status and quickly get an
              overview
            </p>
          </div>
        </div>

        <div className="w-full rounded-2xl bg-gradient-to-tr from-[#010D0C] to-[#027B72] p-[2px]">
          <div className="flex flex-col items-start h-full w-full bg-black rounded-2xl p-10 space-y-7">
            <img src="/features/claim.svg" className="h-12 w-auto" />
            <h3 className="text-2xl">Real-time claim</h3>
            <p className="text-neutral-400">
              Payments shouldn&apos;t be static. With CoinDrip your tokens unlock each second and you can withdraw them
              whenever you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
