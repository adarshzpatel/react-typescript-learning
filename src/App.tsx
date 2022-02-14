import { List } from "./components/generics/List";
import { RandomNumber } from "./components/RandomNumber";
import { Text } from "./components/polymorphic/Text";
function App() {
  return (
    <div className="App">
      <Text as='h1' size="lg">Heading</Text>
      <Text as='p' size="sm">Paragraph</Text>
      <Text as='label' size="md">Label</Text>
    </div>
  );
}

export default App;
