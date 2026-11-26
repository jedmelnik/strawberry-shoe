import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { images, products, productsIntro } from "@/lib/site";
import { glue } from "@/lib/glue";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero image={images.productsHero} lede={productsIntro} title="Products" />
      <section className="section">
        <div className="site-wrap">
          <ul className="service-board">
            {products.map((item) => (
              <li data-reveal key={item.name}>
                <h2>{item.name}</h2>
                {item.body ? <p>{glue(item.body)}</p> : null}
              </li>
            ))}
          </ul>
          <p className="board-note">
            Please also see our <Link href="/spenco-insoles">Spenco Insoles</Link> and{" "}
            <Link href="/birkenstock-insoles">Birkenstock Insoles</Link> pages.
          </p>
        </div>
      </section>
    </>
  );
}
