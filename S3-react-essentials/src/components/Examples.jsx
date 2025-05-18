import { EXAMPLES } from "../Data";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function () {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(tabContent);
  }
  // Conditional Rendering and store JSX in variable -> leaner code
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        // ButtonsContainer="menu" // {Section} for custom component
        buttons={Object.keys(EXAMPLES).map((concept, index) => (
          <TabButton
            key={index}
            isActive={selectedTopic === concept}
            onClick={() => handleSelect(concept)}
          >
            {concept}
          </TabButton>
        ))}
      >
        {/* Conditional Rendering with truthy/falsy && or ternary */}
        <div id="tab-content">
          {tabContent}
          {/*{!selectedTopic && tabContent}
                    {selectedTopic ? (
                      <div>
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                          <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                      </div>
                    ) : null}*/}
        </div>
      </Tabs>
    </Section>
  );
}
