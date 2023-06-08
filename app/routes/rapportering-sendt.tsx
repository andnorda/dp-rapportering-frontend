import { Heading } from "@navikt/ds-react";
import { RemixLink } from "~/components/RemixLink";
import { ArrowLeftIcon } from "@navikt/aksel-icons";

import styles from "./rapportering.module.css";

export default function RapporteringSendt() {
  return (
    <div id="dp-rapportering-frontend">
      <div className={styles.rapporteringHeader}>
        <div className={styles.rapporteringHeaderInnhold}>
          <Heading level="1" size="xlarge">
            Dagpengerapportering
          </Heading>
        </div>
      </div>
      <main className={styles.rapporteringKontainer}>
        <Heading level="2" size="small">
          Du har sendt inn rapporteringen til NAV.
        </Heading>
        <br />
        <RemixLink to="" as="Button" variant="primary" icon={<ArrowLeftIcon fontSize="1.5rem" />}>
          Gå til Mine side
        </RemixLink>
      </main>
    </div>
  );
}
