import { PageHero } from "@/components/PageHero";
import { contact, images, services, servicesIntro } from "@/lib/site";
import { glue } from "@/lib/glue";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero image={images.servicesHero} lede={servicesIntro} title="Services" />
      <section className="section">
        <div className="site-wrap">
          <ol className="service-board">
            {services.map((service) => (
              <li data-reveal id={service.id} key={service.id}>
                <h2>{service.name}</h2>
                {service.body ? <p>{glue(service.body)}</p> : null}
              </li>
            ))}
          </ol>
          <p className="board-note">
            Questions about a repair?{" "}
            <span className="keep">
              Call us at <a href={contact.phoneHref}>{contact.phone}</a>.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
