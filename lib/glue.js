const NBSP = "\u00a0";
const NB_HYPHEN = "\u2011";

/* Bind the last words so a paragraph never ends on a line of one or two words.
   `limit` is the most characters the narrowest column can hold on a phone: a bound tail
   longer than that would overflow. Tails that are too long for phones still bind on wider screens. */
export function glue(text, limit = 30) {
  if (typeof text !== "string") return text;
  const words = text.split(" ");
  if (words.length < 5) return text;
  const bind = (list) => list.join(NBSP).replaceAll("-", NB_HYPHEN);
  const lastThree = words.slice(-3);
  if (lastThree.join(" ").length <= limit) return [...words.slice(0, -3), bind(lastThree)].join(" ");
  const lastTwo = words.slice(-2);
  const pair = lastTwo.join(" ").length <= limit ? bind(lastTwo) : lastTwo.join(" ");
  return (
    <>
      {words.slice(0, -3).join(" ")}{" "}
      <span className="keep-wide">
        {words.at(-3)} {pair}
      </span>
    </>
  );
}
