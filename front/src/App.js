import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// // Containers

 const TheLayout = React.lazy(() => import('./containers/TheLayout'));



// Pages
const Acceuill = React.lazy(() => import('./Acceuill'));

const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const LoginSuperAdmin = React.lazy(()=> import('./views/pages/SuperAdmin/LoginSuperAdmin'));
const ResetPassword = React.lazy(()=> import('./views/pages/login/ResetPassword'));
const ForgetPassword = React.lazy(()=> import('./views/pages/login/ForgetPassword'));
const AjoutAdministrateur = React.lazy(()=> import('./views/pages/SuperAdmin/AjoutAdministrateur'));

const HomeSuper= React.lazy(()=> import('./views/pages/SuperAdmin/HomeSuper'));

// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            <Route exact path="/" name="Acceuill Page" render={props => <Acceuill {...props}/>} />
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/ResetPassword" name="ResetPassword" render={props => <ResetPassword {...props}/>} />
              <Route exact path="/ForgetPassword" name="ForgetPassword" render={props => <ForgetPassword {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/sa-ahmed-moutia" name="LoginSuperAdmin" render={props => <LoginSuperAdmin {...props}/>} />
              <Route exact path="/HomeSuper" name="HomeSuper" render={props => <HomeSuper {...props}/>} />

              <Route exact path="/AjoutAdministrateur" name="AjoutAdministrateur" render={props => <AjoutAdministrateur {...props}/>} />
              {/* <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}


              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
     

              
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
