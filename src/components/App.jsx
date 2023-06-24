import * as React from 'react';
import Content from './Content';
import Headers from './Header';
import FormDiv from './FormDiv';
function App() {
  const [buttonValue, setButtonValue] = React.useState();

  const handleButtonValue = (value) => {
    setButtonValue(value);
    console.log(value)
  };
  return (
    <div>
      <Headers onButtonClicked={handleButtonValue} />

      <FormDiv Status={buttonValue} />
      <Content />
    </div>
  );
}
export default App;
