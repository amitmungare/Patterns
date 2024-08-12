import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./Place";
import { PLACES } from "./places";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">

          <Accordion.Item id="exp" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We got cool features
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>best</p>
                <p>come enjoy with us</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item id="time" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              time
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>on time</p>
                <p>never miss, on time</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          
        </Accordion>
      </section>

      <section>
        <SearchableList items={PLACES} itemKeyFn={(item)=> item.id}>
          {(item)=> <Place item={item}/>}
        </SearchableList>
        <SearchableList items={["item1", "item2"]}  itemKeyFn={(item)=> item}>
          {(item)=> item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
