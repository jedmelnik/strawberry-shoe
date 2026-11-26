import Image from "next/image";
import { glue } from "@/lib/glue";

export function ProductGrid({ items }) {
  return (
    <ul className="product-grid">
      {items.map((item) => (
        <li className="product" data-reveal key={item.name}>
          <div className="product-image">
            <Image
              alt={item.image.alt}
              fill
              sizes="(min-width: 1100px) 340px, (min-width: 601px) 45vw, 100vw"
              src={item.image.src}
            />
          </div>
          <h2>{item.name}</h2>
          {item.note ? <p>{glue(item.note, 21)}</p> : null}
          {item.details ? (
            <dl>
              {item.details.map(([term, text]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{glue(text, 21)}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
