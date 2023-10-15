const APP_NAME = "Coindrip";
const faqs = [
  [
    {
      question: "What are ESDTs?",
      answer:
        "The MultiversX network natively supports the issuance of custom tokens, without the need for contracts such as ERC20, but addressing the same use-cases. And due to the native in-protocol support, transactions with custom tokens do not require the VM at all. In effect, this means that custom tokens are as fast and as scalable as the native EGLD token itself.",
    },
    {
      question: "How does token streaming works?",
      answer:
        "You define an amount of tokens to be distributed in a specific time period. During that period, tokens unlock each second and the recipient is able to claim them whenever he wants.",
    },
    {
      question: "Example",
      answer:
        "Let's say you want to send 2000 USDC to John from 1 Jan to 1 Feb. You'll create the stream with all these details. John's funds will start to unlock from 1 Jan, each second. For example, on 15 Jan John will be able to claim half of his funds.",
    },
  ],
  [
    {
      question: "How can I start streaming tokens?",
      answer: `You need to connect your wallet on ${APP_NAME}, click on the Create Stream button, fill in the recipient, amount of tokens and the duration, click the button and sign the transaction. That's it!`,
    },
    {
      question: "Where are the tokens held?",
      answer: "From the deposit until the recipient claims them, the token are locked inside our smart contract.",
    },
    {
      question: "Can I cancel a stream?",
      answer:
        "Yes, the sender and recipient can cancel a stream at any time if the stream was not marked as non-cancellable by the sender during creation. If the stream is canceled before the start time, all funds are returned to the sender. If you cancel the stream after the start time, but before the end time, the amount that was stream so far is transferred to the recipient and the remaining tokens come back to your wallet. If the stream is canceled after the end time, all funds are transferred to the recipient.",
    },
    {
      question: "Can I edit a stream?",
      answer:
        "No, streams are not editable. After it was created, you can only cancel it based on the above conditions.",
    },
  ],
  [
    {
      question: `What are the possible use-cases of ${APP_NAME}?`,
      answer:
        "The possibilities are endless but some of the use-cases we identified might be: recurring payments, token vesting, payroll, airdrops, grants or subscriptions.",
    },
    {
      question: `Is the ${APP_NAME} protocol decentralized?`,
      answer:
        "Yes, all the transactions are public on the blockchain, and anyone can come and interact directly with the smart contract or through another interface. Also, the entire code base is open-source for everyone to check or submit improvements.",
    },
    {
      question: "How does stream NFTs work?",
      answer:
        "Each stream recipient is minted an NFT when a stream is created. Whoever the owner of that NFT is, has full access to withdraw funds from that stream. Once that NFT is transferred or sold to another wallet, the new wallet has full access to the funds, including the stream but not claimed ones.",
    },
  ],
];

export default function Faq() {
  return (
    <div className="mt-32 section" id="faq">
      <div className="sm:text-5xl text-4xl text-center">Frequently asked questions</div>
      <p className="text-center text-lg text-neutral-400 mt-6">
        If you can&apos;t find what you&apos;re looking for, email or DM us and we&apos;ll get back to you.
      </p>

      <ul role="list" className="mx-auto mt-16 grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
        {faqs.map((column, columnIndex) => (
          <li key={columnIndex}>
            <ul role="list" className="flex flex-col gap-y-8">
              {column.map((faq, faqIndex) => (
                <li key={faqIndex}>
                  <h3 className="text-lg mb-2">{faq.question}</h3>
                  <p className="text-sm text-neutral-400">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
