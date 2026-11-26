import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";
import { images, spenco, spencoComingSoon, spencoIntro } from "@/lib/site";
import { glue } from "@/lib/glue";

export const metadata = { title: "Spenco Insoles" };

export default function SpencoPage() {
  return (
    <>
      <PageHero image={images.spencoHero} lede={spencoIntro} title="Spenco Insoles" />
      <section className="section">
        <div className="site-wrap">
          <ProductGrid items={spenco} />
          <p className="board-note">{glue(spencoComingSoon)}</p>
        </div>
      </section>
    </>
  );
}
