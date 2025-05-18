import { CORE_CONCEPTS } from "../Data";
import { CoreConcept } from "./CoreConcept/CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <CoreConcept key={index} {...concept} />
        ))}
      </ul>
    </section>
  );
}