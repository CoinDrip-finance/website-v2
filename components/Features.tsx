import { BanknotesIcon, BoltIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline';

export default function Features() {
  return (
    <div className="section my-40">
      <div className="flex justify-between space-x-64">
        <div className="text-5xl flex-shrink-0 ">
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
            As a web3 company or DAO, we just made payment easier and more fair for you. With a simple, one-time
            deposit, CoinDrip will start to stream the ESDT toward the recipient every second.
          </p>
        </div>
      </div>

      <div className="mt-24 flex space-x-9">
        <div className="flex-1">
          <div className="w-full rounded-2xl bg-gradient-to-bl from-[#010D0C] to-[#027B72] p-[2px]">
            <div className="flex flex-col items-start h-full w-full bg-gradient-to-b to-[#013C38] via-black from-black rounded-2xl p-11 space-y-7">
              <BoltIcon className="h-12" />
              <h3 className="text-2xl">Start streaming</h3>
              <p className="text-neutral-400 text-lg">
                With a simple, one-time deposit, you can pay salaries, do ESDT vesting, and many other things in a
                descentralized way.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full rounded-2xl bg-gradient-to-bl from-[#010D0C] to-[#027B72] p-[2px]">
            <div className="flex flex-col items-start h-full w-full bg-black rounded-2xl p-11 space-y-7">
              <DocumentChartBarIcon className="h-12" />
              <h3 className="text-2xl">Manage your streams</h3>
              <p className="text-neutral-400 text-lg">
                You can see and manage all of your incoming or created streams, check the status and quickly get an
                overview
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full rounded-2xl bg-gradient-to-bl from-[#010D0C] to-[#027B72] p-[2px]">
            <div className="flex flex-col items-start h-full w-full bg-black rounded-2xl p-11 space-y-7">
              <BanknotesIcon className="h-12" />
              <h3 className="text-2xl">Real-time claim</h3>
              <p className="text-neutral-400 text-lg">
                Payments shouldn&apos;t be static. With CoinDrip your tokens unlock each second and you can withdraw
                them whenever you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
