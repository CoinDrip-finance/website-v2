export default function Team() {
  return (
    <div className="mt-32 section">
      <div className="text-sm text-primary mb-3 text-center">Who we are</div>
      <div className="text-5xl text-center mb-10">Team</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-20">
        <div className="w-full rounded-2xl bg-gradient-to-bl to-[#1F1F1F] from-[#161616] p-[2px]">
          <div className="h-full w-full bg-gradient-to-tr from-[#060606] to-[#141414] rounded-2xl py-6 px-8">
            <img src="/team/alexandra.png" alt="Alexandra" className="h-52 mx-auto" />
            <div className="mt-4 mb-6 text-4xl">Alexandra Nadia Bălan</div>
            <div className="flex items-center justify-between">
              <div className="font-medium text-primary text-sm">Marketing specialist</div>
              <div className="flex items-center space-x-3">
                <a href="https://twitter.com/AlexandraNadia9" target="_blank">
                  <img src="/team/twitter.svg" />
                </a>
                <a href="https://www.linkedin.com/in/alexandra-nadia-balan-7705611b4/" target="_blank">
                  <img src="/team/linkedin.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-2xl bg-gradient-to-bl to-[#1F1F1F] from-[#161616] p-[2px]">
          <div className="h-full w-full bg-gradient-to-tr from-[#060606] to-[#141414] rounded-2xl py-6 px-8">
            <img src="/team/razvan.png" alt="Razvan" className="h-52 mx-auto" />
            <div className="mt-4 mb-6 text-4xl">
              Răzvan
              <br />
              Stătescu
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium text-primary text-sm">Software Engineer</div>
              <div className="flex items-center space-x-3">
                <a href="https://twitter.com/StatescuRazvan" target="_blank">
                  <img src="/team/twitter.svg" />
                </a>
                <a href="https://www.linkedin.com/in/razvanstatescu/" target="_blank">
                  <img src="/team/linkedin.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-2xl bg-gradient-to-bl to-[#1F1F1F] from-[#161616] p-[2px]">
          <div className="h-full w-full bg-gradient-to-tr from-[#060606] to-[#141414] rounded-2xl py-6 px-8">
            <img src="/team/valeriu.png" alt="Valeriu" className="h-52 mx-auto" />
            <div className="mt-4 mb-6 text-4xl">
              Moldovan
              <br />
              Valeriu
            </div>
            <div className="flex items-center justify-between">
              <div className="font-medium text-primary text-sm">UX specialist</div>
              <div className="flex items-center space-x-3">
                <a href="https://www.linkedin.com/in/valeriumoldovan/" target="_blank">
                  <img src="/team/linkedin.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
