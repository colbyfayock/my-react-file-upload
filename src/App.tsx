import { Route } from 'wouter';

import Home from '@/pages/index';
import Contact from '@/pages/contact';

const App = () => (
  <>
    <Route path="/" component={Home} />
    <Route path="/contact" component={Contact} />
  </>
);

export default App;
