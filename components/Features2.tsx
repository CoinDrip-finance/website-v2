import { MagicCard, MagicContainer } from "./shared/Card";

export default function Features2() {
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

      <MagicContainer className={"mt-14 sm:mt-24 grid sm:gap-4 gap-8 grid-cols-1 sm:grid-cols-4"}>
        <MagicCard className="flex w-full cursor-pointer flex-col overflow-hidden p-10 shadow-2xl bg-gradient-to-bl from-[#010D0C] to-[#027B72]">
          <div className="z-10">
            <img src="/features/start_streaming.svg" className="h-12 w-auto" />
            <h3 className="text-2xl my-6">Start streaming</h3>
            <p className="text-neutral-400">
              With a simple, one-time deposit, you can handle vesting, payroll, airdrops, grants and many other things
              in a decentralized way.
            </p>
          </div>
          <div className="pointer-events-none absolute inset-[2px] rounded-2xl bg-gradient-to-b to-[#013C38] via-black from-black" />
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col overflow-hidden p-10 shadow-2xl bg-gradient-to-tr from-[#010D0C] to-[#027B72]">
          <div className="z-10">
            <img src="/features/nft.svg" className="h-12 w-auto" />
            <h3 className="text-2xl my-6">NFTs</h3>
            <p className="text-neutral-400">
              Each stream recipient is minted an NFT giving him full access to the stream. This makes CoinDrip highly
              composable with other DeFi protocols.
            </p>
          </div>
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col overflow-hidden p-10 shadow-2xl bg-gradient-to-bl from-[#010D0C] to-[#027B72]">
          <div className="z-10">
            <img src="/features/manage.svg" className="h-12 w-auto" />
            <h3 className="text-2xl my-6">Manage streams</h3>
            <p className="text-neutral-400">
              You can see and manage all of your incoming or created streams, check the status and quickly get an
              overview
            </p>
          </div>
        </MagicCard>
        <MagicCard className="flex w-full cursor-pointer flex-col overflow-hidden p-10 shadow-2xl bg-gradient-to-tr from-[#010D0C] to-[#027B72]">
          <div className="z-10">
            <img src="/features/claim.svg" className="h-12 w-auto" />
            <h3 className="text-2xl my-6">Real-time claim</h3>
            <p className="text-neutral-400">
              Payments shouldn&apos;t be static. With CoinDrip your tokens unlock each second and you can withdraw them
              whenever you want.
            </p>
          </div>
        </MagicCard>
      </MagicContainer>
    </div>
  );
}
