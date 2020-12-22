import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { PhoneList } from '../PhoneList';
import { PhoneDetails } from '../PhoneDetails';
import { NotFound } from '../../components';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PhoneList} />
      <Route exact path="/phone/:phoneId/details" component={PhoneDetails} />
      <Route path="/404" component={NotFound} />
      <Redirect exact from="*" to="/404" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
