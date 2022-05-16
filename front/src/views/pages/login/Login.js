import React, { Component } from 'react'
import axios from "axios" ;
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import image from './aa.jpg'


 class Login extends Component {
  constructor(props) {
    super(props )
    this.state = {
  
        email: '',
        mdp: '',
       
}
}
login(event) {
    
axios.post("http://localhost:8000/User/authuser",{

email:this.state.email,
mdp:this.state.mdp

}).then((res) => {
  console.log('status',res.data.status)
if(res.data.status==='success'){
  if(res.data.data.user.__t==="Etudiant"){
    localStorage.setItem("USER_ROLE", res.data.data.user.__t);
    localStorage.setItem("idUseer",res.data.data.user._id)
    localStorage.setItem("idAdmin",res.data.data.user.idAdministration)

    localStorage.setItem("idGoupe",res.data.data.user.idGroupe)
    console.log('id groupeeeeeeeeeee',res.data.data.user.idGroupe);
    window.location.href="#/DashboardEnseignant"
  }else if (res.data.data.user.__t==="Enseignant"){
    localStorage.setItem("idAdmin",res.data.data.user.idAdministration)
    console.log("ffffffffffffffffffffffffff",res.data.data.user.idAdministration)
    localStorage.setItem("idUserr",res.data.data.user._id)
    localStorage.setItem("USER_ROLE", res.data.data.user.__t);
    console.log('USER_ROLE',localStorage.getItem('USER_ROLE'));
    console.log('type',res.data.data__t);
    window.location.href="#/DashboardEnseignant"

  }else if (res.data.data.user.__t==="Administration"){
    
    localStorage.setItem("idUser",res.data.data.user._id)
    localStorage.setItem("USER_ROLE", res.data.data.user.__t);
    console.log('USER_ROLE',localStorage.getItem('USER_ROLE'));
    console.log('type',res.data.data__t);

    window.location.href="#/dashboard"

  }

  else{
    
    this.setState({msg:"email or password in valid"})
  }
}
else{
alert('Verifier vos coordonnées')
}
  
  console.log(res);
})
}
// .then((res) =>{
//   if (res.data.err){
//     setErreurMsg(res.data.err)

//   }else{
//     localStorage.setItem("token",res.data.token);
//     userLogin(res.data.admin);
//   }
//   if (res.data.admin.role===ADMIN){
//     window.location.href="/";
//   }

// })
// .catch ((err)=>
// console.log (err)
// )
   


  render() {
  return (
    <div 
    style={{  
      backgroundImage: `url(${image})` , 
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
    className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Connexion</h1>
                    <p className="text-muted">Connecter à votre compte</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="email" autoComplete="email" 
                       onChange={event => this.setState({ email: event.target.value })}  />
                    </CInputGroup>
                  
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      
                      <CInput type="password" placeholder="Mot de pass" autoComplete="current-mdp" 
                       onChange={event => this.setState({ mdp: event.target.value })} />
                    </CInputGroup>
                    <CLink to ='/ForgetPassword'> <CRow>
                  
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Mot de pass oublier?</CButton>
                      </CCol>
                      </CRow>  </CLink>
               
                    {/* <CLink to="/dashboard"> */}
                    <CCol col="2" className="text-center mt-3">
              <CButton type="submit" id="" name="" value="Envoyer"   
               onClick={(event) => this.login(event)} shape="square" color="warning">
                <CIcon name="cil-lightbulb" />CONNEXION
              </CButton>
            </CCol>
                    {/* </CLink> */}
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                  <h3>! مرحبا</h3>
                  <h2>welcome !</h2>
                    <h3>Bienvenue !</h3>
                    <h3>bienvenidos !</h3>
            
                    <h3> herzlich willkommen !</h3>
                    <h3> ようこそ !</h3>
                    

                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Besoin d'aide!</CButton>
                   
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      
    </div>

  )
}
}
export default Login
