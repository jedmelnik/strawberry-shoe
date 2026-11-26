import { PageHero } from "@/components/PageHero";
import { images, policy } from "@/lib/site";
import { glue } from "@/lib/glue";

export const metadata = { title: "Policy" };

export default function PolicyPage() {
  return (
    <>
      <PageHero image={images.policyHero} lede="Our repair guarantee, and how returns and exchanges work." title="Policy" />
      <section className="section">
        <div className="site-wrap prose" data-reveal>
          <h2>Repairs</h2>
          <p>{glue(policy.repairs)}</p>
          <h2>Returns &amp; Exchanges</h2>
          <p>{glue(policy.returnsLede)}</p>
          <ol>
            {policy.returnsList.map((item) => (
              <li key={item}>{glue(item)}</li>
            ))}
          </ol>
          <h2>Shipping</h2>
          <p>{glue(policy.shipping)}</p>
        </div>
      </section>
    </>
  );
}
