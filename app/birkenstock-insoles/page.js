import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";
import { birkenstock, birkenstockIntro, images } from "@/lib/site";

export const metadata = { title: "Birkenstock Insoles" };

export default function BirkenstockPage() {
  return (
    <>
      <PageHero image={images.birkenstockHero} lede={birkenstockIntro} title="Birkenstock Insoles" />
      <section className="section">
        <div className="site-wrap">
          <ProductGrid items={birkenstock} />
        </div>
      </section>
    </>
  );
}
