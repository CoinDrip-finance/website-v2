import Marquee from "@/components/shared/Marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Beniamin Mincu",
    username: "@beniaminmincu",
    body: "Payments are a core blockchain use-cases. As the ecosystem develops and new builders join, exciting new solutions are being built 💡🛠️. You can immediately start testing Coindrip’s custom real-time ESDT payments for recurring payments, subscriptions, and vesting.",
    img: "https://pbs.twimg.com/profile_images/1706785095258910720/pNHA_1P4_400x400.jpg",
    url: "https://twitter.com/beniaminmincu/status/1616058581421285376",
  },
  {
    name: "Lucian Mincu",
    username: "@lucianmincu",
    body: "Enhancing Web3 payments with custom ESDT streams. The Coindrip solution sets to transform token vesting, subscriptions, and recurring payments. A new protocol for Web3 payments, now live on the Devnet.",
    img: "https://pbs.twimg.com/profile_images/1713477075347120128/bijDqZqj_400x400.jpg",
    url: "https://twitter.com/lucianmincu/status/1616055049414656004",
  },
  {
    name: "Dan Voicu",
    username: "@iamdanvoicu",
    body: "Blockchains have been great at showing that things can be done differently, more efficiently and conveniently. Programmable Money Streaming on MultiversX via Coindrip. The MVP is live on the Devnet.",
    img: "https://pbs.twimg.com/profile_images/1716432222817804288/cpayq_6J_400x400.jpg",
    url: "https://twitter.com/iamdanvoicu/status/1616055756062605313",
  },
  {
    name: "Robert Sasu",
    username: "@SasuRobert",
    body: "Programmable money streaming makes any freelancer's job easier. But not only, project owners can control the flow in an easy way. Subscriptions and recurring payments, we like those as well. Everybody is using those on a general basis.",
    img: "https://pbs.twimg.com/profile_images/1723909179482796032/8CvdZs2n_400x400.jpg",
    url: "https://twitter.com/SasuRobert/status/1616080255889842178",
  },
  {
    name: "MultiversX",
    username: "@MultiversX",
    body: "MultiversX TVL saw a significant increase this month (+125%). A sign that the ecosystem is maturing rapidly and protocols like Coindrip are finding product-market fit at scale.",
    img: "https://pbs.twimg.com/profile_images/1590300532765237248/WCo4MZk3_400x400.jpg",
    url: "https://twitter.com/MultiversX/status/1688859276670840832",
  },
  {
    name: "ARC Stake",
    username: "@arcstake",
    body: "Coindrip aims to upgrade traditional payments, enabling recurring payments, token vesting and subscriptions, using the MultiversX Smart Contracts Framework. Now LIVE on the Devnet!",
    img: "https://pbs.twimg.com/profile_images/1535198967239155712/xmrbIU_x_400x400.jpg",
    url: "https://twitter.com/arcstake/status/1616138363295121408",
  },
  {
    name: "Longin",
    username: "@Longin_X",
    body: "OneDex has utilized the revolutionary payment streaming capabilities of CoinDrip from Day 1. Team and Advisor token allocations were easily set up in the protocol, negating the need for time intensive transactions on a monthly basis. A true game changer in the industry!",
    img: "https://pbs.twimg.com/profile_images/1719261382032367616/Hcwb9-u3_400x400.jpg",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
  url,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  url?: string;
}) => {
  if (url) {
    return (
      <a href={url} target="_blank">
        <figure
          className={cn(
            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
            "border-neutral-800 bg-neutral-950 hover:bg-neutral-900"
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <img className="rounded-full" width="32" height="32" alt="" src={img} />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
              <p className="text-xs font-medium dark:text-white/40">{username}</p>
            </div>
          </div>
          <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
      </a>
    );
  }
  return (
    <figure
      className={cn(
        "relative w-64 overflow-hidden rounded-xl border p-4",
        "border-neutral-800 bg-neutral-950 hover:bg-neutral-900"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <div className="relative flex  flex-col items-center justify-center gap-4 overflow-hidden pt-36 pb-8 sm:py-36">
      <Marquee pauseOnHover className="[--duration:40s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}
