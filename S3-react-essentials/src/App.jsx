import Header from "./components/Header/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./Data";
import { CoreConcept } from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept, index) => 
              <CoreConcept key={index} {...concept} />
            )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          {Object.keys(EXAMPLES).map((concept, index) => (
                       <TabButton
                       key={index}
                       isActive={selectedTopic===concept}  
                       onClick={() => handleSelect(concept)}>
                         {concept}
                       </TabButton>
            ))}
          </menu>
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
        </section>
      </main>
    </div>
  );
}

export default App;
