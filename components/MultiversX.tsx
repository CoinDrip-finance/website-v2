export default function MultiversX() {
  return (
    <div className="section mt-20">
      <div className="text-5xl flex-shrink-0">
        <div className="bg-gradient-to-br from-primary via-[#B6F7F2] to-white bg-clip-text text-center">
          Powered by the <span className="text-transparent">Multiversx</span>
          <br />
          blockchain
        </div>
      </div>
      <p className="text-center text-lg text-neutral-400 mt-4 mb-8 sm:mb-16">
        CoinDrip is compatible with EGLD or any ESDT like USDC.
      </p>

      <div className="flex items-center sm:space-x-16 flex-col sm:flex-row space-y-7 sm:space-y-0">
        <div className="flex-1 mt-8 sm:mt-0">
          <div className="text-sm text-primary mb-3">Scalable</div>
          <div className="text-3xl mb-3">Adaptive state sharding</div>
          <p className="text-neutral-400">
            Adaptive State Sharding brings a 1000x improvement in throughput compared to previous blockchain iterations
            by enabling parallel transaction processing.
          </p>
        </div>
        <img
          src="/multiversx/powered_by.png"
          alt="Powered by MultiversX"
          className="w-full sm:w-1/3 flex-1 order-first sm:order-none"
        />
        <div className="flex-1">
          <div className="text-sm text-primary mb-3">Scalable</div>
          <div className="text-3xl mb-3">Adaptive state sharding</div>
          <p className="text-neutral-400">
            Adaptive State Sharding brings a 1000x improvement in throughput compared to previous blockchain iterations
            by enabling parallel transaction processing.
          </p>
        </div>
      </div>
    </div>
  );
}
