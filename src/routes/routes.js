import { Route } from 'react-router-dom';

const RouteWrapper = ({ component: Component, ...rest }) => (
    <Route render={props => (
        <Component {...rest} {...props} />
    )} />
)

export default RouteWrapper;