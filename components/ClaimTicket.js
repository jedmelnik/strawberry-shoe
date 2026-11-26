import { contact, hours } from "@/lib/site";
import { glue } from "@/lib/glue";

export function ClaimTicket({ withAddress = true }) {
  return (
    <div className="claim-ticket">
      <div className="claim-ticket-head">
        <span className="claim-ticket-no">No. 617</span>
        <span>Shop hours</span>
      </div>
      <dl>
        {hours.map((row) => (
          <div key={row.days}>
            <dt>{row.days}</dt>
            <dd>{row.time}</dd>
          </div>
        ))}
      </dl>
      {withAddress ? (
        <div className="claim-ticket-foot">
          <p>
            {contact.street}
            <br />
            {contact.city}
          </p>
          <p>{glue(contact.landmark)}</p>
        </div>
      ) : null}
    </div>
  );
}
