import { PageHero } from "@/components/PageHero";
import { ClaimTicket } from "@/components/ClaimTicket";
import { ContactForm } from "@/components/ContactForm";
import { contact, directions, images } from "@/lib/site";
import { glue } from "@/lib/glue";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={images.contactHero}
        lede="Call, email, or stop by the backside of Strawberry Village."
        title="Contact Us"
      />

      <section className="section">
        <div className="site-wrap visit-grid">
          <div className="text-column" data-reveal>
            <h2>Contact</h2>
            <ul className="contact-methods">
              <li>
                <span>Call</span>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <span>Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span>Write</span>
                <p>
                  Strawberry Shoe &amp; Watch Repair
                  <br />
                  {contact.street}
                  <br />
                  {contact.city}
                </p>
              </li>
            </ul>
          </div>
          <div data-reveal>
            <ClaimTicket withAddress={false} />
          </div>
        </div>
      </section>

      <section className="section section-ruled">
        <div className="site-wrap">
          <div className="section-heading" data-reveal>
            <h2>Directions</h2>
            <p>{glue(contact.landmark)}</p>
          </div>
          <div className="directions-grid">
            {directions.map((route) => (
              <div className="route" data-reveal key={route.from}>
                <h3>{route.from}</h3>
                <ol>
                  {route.steps.map((step) => (
                    <li key={step}>{glue(step)}</li>
                  ))}
                </ol>
              </div>
            ))}
            <div className="map-frame" data-reveal>
              <iframe
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={contact.mapEmbed}
                title="Map to Strawberry Shoe & Watch Repair"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-ruled">
        <div className="site-wrap form-wrap">
          <div className="section-heading" data-reveal>
            <h2>Message</h2>
            <p>{glue("For directions, or information on any of our products or services, send us a note.")}</p>
          </div>
          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
