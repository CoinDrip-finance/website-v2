import { Tweet } from "react-tweet";

export default function Tweets() {
  return (
    <div className="section flex sm:space-x-8 mt-32 light flex-col sm:flex-row space-y-8 sm:space-y-0">
      <Tweet id="1616058581421285376" />

      <Tweet id="1616055049414656004" />

      <Tweet id="1616080255889842178" />
    </div>
  );
}
