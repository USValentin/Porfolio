import type { StaticImageData } from "next/image";
import type { CaseVisual } from "@/content/types";
import usershakerKit from "../../public/images/usershaker-kit.jpg";
import dromoCover from "../../public/images/dromo/cover.png";
import dromoSaison from "../../public/images/dromo/saison.png";
import dromoSeance from "../../public/images/dromo/seance.png";
import dromoRepos from "../../public/images/dromo/repos.png";
import dromoChangement from "../../public/images/dromo/changement.png";
import dromoLogos from "../../public/images/dromo/logos.png";
import dromoWireframes from "../../public/images/dromo/wireframes.png";
import dromoDirections from "../../public/images/dromo/directions.png";
import dromoMotionPoster from "../../public/images/dromo/motion-poster.jpg";

/** Static imports of the case study visuals: dimensions and blur placeholder come for free. */
export const caseVisuals: Record<CaseVisual, StaticImageData> = {
  "usershaker-kit": usershakerKit,
  "dromo-cover": dromoCover,
  "dromo-saison": dromoSaison,
  "dromo-seance": dromoSeance,
  "dromo-repos": dromoRepos,
  "dromo-changement": dromoChangement,
  "dromo-logos": dromoLogos,
  "dromo-wireframes": dromoWireframes,
  "dromo-directions": dromoDirections,
  "dromo-motion-poster": dromoMotionPoster,
};
