import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <App />,
  <Hello name="Sofia" enthusiasmLevel={5}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
