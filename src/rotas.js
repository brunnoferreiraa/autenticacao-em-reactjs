import React from 'react';
import { autenticacao } from './auth';

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

const rotasprivadas = ({ component: Component, ...rest}) => (
    <Route{...rest} render={props =>(

        autenticacao() ? (
            <Component{...props} />

        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.local
            }}} />
        )

    )} />
)


const Routes = () => (
<BrowserRouter>

<Switch>
<rotasprivadas exact path="/" component={() => <h1>Hello World</h1>} />
<rotasprivadas path="/app" component={() => <h1>Você esta autenticado</h1>} />
</Switch>
</BrowserRouter>
);

export default Routes;