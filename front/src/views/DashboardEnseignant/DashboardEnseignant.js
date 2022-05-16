
// // import React, { Component } from 'react';
// // import {
// //   CButton,
// //   CCard,
// //   CCardBody,
// //   CCardHeader,
// //   CCol,
// //   CContainer,
// //   CJumbotron,
// //   CRow,
// //   CEmbed,
// //   CEmbedItem,

// //   CSubheader,
// //   CForm,
// //   CFormGroup,
// //   CLabel,
// //   CHeaderNavLink,
// //   CHeaderNavItem,
// //   CTextarea,
// //   CInputFile,
// // } from '@coreui/react'
// // import { DocsLink } from 'src/reusable'
// // import axios from 'axios'

// // class DashboardEnseignantEnseignant extends Component {
// //     state = {
// //         personnes:[],
// //         DateDeCreation:"",
// //         Contenu:"",
// //         Files:null,
// //     };
// //     componentDidMount(){
// //         this.getusers();
// //     }
  
// //     getusers(){
// //       axios.get("http://localhost:8000/PublicationAdministratif/getAll").then((res=>{
// //           this.setState({personnes:res.data.data})
// //           console.log('personnes',this.state.personnes)
// //       }))

// //   }
// //     // deleteUser=(userId)=>{
// //     //     axios.delete('http://localhost:5000/users/DelUser/')
// //     //     console.log('userid ',userId)
// //     //    this.getusers();
// //     // }
// //     // UpdateUser(id) {
// //     //     localStorage.setItem("idPerson", id);
// //     //     console.log("idPerson ", localStorage.getItem("idPerson"));
// //     //     window.location.href = "/update";
// //     //   }
// //       render() {

// //   return (
// //     <>
// //     {this.state.personnes.map((item,index)=>(
// //       <CRow>
// //         <CCol>
          
// //           <CCard>

// //             <CCardHeader>
// //           <h1>Publication Administratives </h1>
// //             </CCardHeader>
// //             <CCardBody>
// //               <CJumbotron fluid>
// //                 <CContainer fluid>
// //                 <tbody>
  
// //         <tr key={index}>
           
        
// //                                           <p>{item.Contenu}</p> 
// //                                           <p>{item.DateDeCreation}</p> 
// //                                           <p>{item.Files}</p> 
// // </tr>
    
  
   
// //   </tbody>
               

// //                 </CContainer>
// //               </CJumbotron>
// //             </CCardBody>
// //           </CCard>
// //         </CCol>
// //       </CRow>
// //        )   )  }
// //     </>
// //   )
// // }}

// // export default DashboardEnseignantEnseignant

// //  */
// import React, { useState,useEffect } from 'react';
// import axios from 'axios'
// import {
//   CBadge,
//   CCard,
//   CCardBody,
//   CCardFooter,
//   CCardHeader,
//   CCol,
//   CRow,
//   CCollapse,
//   CFade,
//   CSwitch,
//   CLink
// } from  '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'



// // const [activeIndex] = useState(1)
// const DashboardEnseignantEnseignant = ()=> {

//   const [collapsed, setCollapsed] = React.useState(true)
//   const [showCard, setShowCard] = React.useState(true)
//   const [personnes, setPersonnes] = React.useState([])
   
//     useEffect(()=>{
//       getusers()
//     },[])
 
//     const getusers=()=>{
//       axios.get("http://localhost:8000/PublicationAdministratif/getAll").then((res=>{
//         setPersonnes(res.data.data)
//     }))

//   }
 
    
   

//   return (
//     <>
//     <CRow style={{"flex-direction": "row"}}>
//     {
//       personnes.map((item,index)=>(
//           <CCol xs="8" sm="12" md="12" style={{"flex-direction": "row"}}>
//                  <CCard borderColor="info">
//                    <CCardHeader>
//                    <h4>Publication administrative</h4>            </CCardHeader>
//                    <CCardBody>
//                    <tbody>
        
//          <tr key={index}>
           
//           <p>{item.Contenu}</p> 
//                                     <img src={`http://localhost:8000/getfile/${item.photo}`} style={{"height":"300px", "width":"500px"}} download/>
//                                    <br/>
//                                    <br/>
//                                    <br/>
//                                     <h6>       Date: </h6> <p>{item.DateDeCreation}</p> 
  
//       </tr>
      
      
      
//       </tbody>
//                   </CCardBody>
//                 </CCard>
//               </CCol>
       
      
//               )   )  }
//               </CRow>
//               </>
//   )
// }

// export default DashboardEnseignant
import React, { Component } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CRow,
  CEmbed,
  CEmbedItem,
  CInput,
  CSubheader,
  CForm,
  CFormGroup,
  CLabel,
  CHeaderNavLink,
  CHeaderNavItem,
  CTextarea,
  CInputFile,
  CImg,
  CLink,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
 
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { DocsLink } from 'src/reusable'
import axios from 'axios'
const slides = [
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
]
// const [activeIndex] = useState(1)
class DashboardEnseignant extends Component {
    state = {
        personnes:[],
        DateDeCreation:"",
        Contenu:"",
        Files:null,
        long:""
        
    };
    
    componentDidMount(){
        this.getusers();
      
    }

    // envoyer()
    // {
    //   const fd1 = new FormData();
    //   fd1.append('Contenu',this.state.Contenu)
    //   // fd1.append('DateDeCreation',this.state.DateDeCreation)
    //   // fd1.append('Files',this.state.Files,this.state.Files.name)
    //   fd1.append('photo',this.state.photo,this.state.photo.name)
    
  
    
    
      
    //   axios.put(`http://localhost:8000/PublicationAdministratif/addPublicationAdministratif/${localStorage.getItem('idUser')}`,fd1)
           
        
    //     .then(res=>{
    //         console.log('dataaaaaaaaaaaaaaaaaaaaaa',res) 
    //         if(this.state.long != res.data.data.lenght){
    //       alert('Publication est ajouté')
    //             }
    //       //  window.location.href='/sidebar'
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    
    
    // }
    getusers(){
      axios.get(`http://localhost:8000/PublicationAdministratif/getAll/${localStorage.getItem('idAdmin')}`).then((res=>{
          this.setState({personnes:res.data.data})
          console.log('personnes',this.state.personnes)
          this.setState({long:res.data.data.length}) 
      }))

  }
    // deleteUser=(userId)=>{
    //     axios.delete('http://localhost:5000/users/DelUser/')
    //     console.log('userid ',userId)
    //    this.getusers();
    // }
    // UpdateUser(id) {
    //     localStorage.setItem("idPerson", id);
    //     console.log("idPerson ", localStorage.getItem("idPerson"));
    //     window.location.href = "/update";
    //   }
    
      render() {

  return (
    
    <>
        <CRow>
       
 
  
     <CCol xxxxs="0.000000000000000000000000000000000000000000000000000000000000001" xxxxl="0.000000000000000000000000000000000000000000000000000000000000001">
       <CCard>
         {/* <CCardHeader>
          EDUCOM
         </CCardHeader> */}
         <CCardBody>
           <CCarousel animate autoSlide={1800}>
             <CCarouselIndicators/>
             <CCarouselInner>
               <CCarouselItem>
               <CImg
            src={'avatars/photo1.jpg'}
   className="d-block w-100"
   alt="slide 1"
   style={{"height":"300px", "width":"200px"}}
 />
                 {/* <CCarouselCaption><h4>Slide 1</h4><p>Slide 1</p></CCarouselCaption> */}
               </CCarouselItem>
               <CCarouselItem>
             
          <CImg
    src={'avatars/photo2.jpg'}
   className="d-block w-100"
   alt="slide 2"
   style={{"height":"300px", "width":"200px"}}
 />
      
                 {/* <img className="d-block w-100" src={slides[1]} alt="slide 2"/> */}
                 {/* <CCarouselCaption><h4>Slide 2</h4><p>Slide 2</p></CCarouselCaption> */}
               </CCarouselItem>
               <CCarouselItem>
               <CImg
            src={'avatars/photo3.jpg'}
   className="d-block w-100"
   alt="slide 3"
   style={{"height":"300px", "width":"200px"}}
/>
                 {/* <img className="d-block w-100" src={slides[2]} alt="slide 3"/> */}
                 {/* <CCarouselCaption><h4>Slide 3</h4><p>Slide 3</p></CCarouselCaption> */}
               </CCarouselItem>
             </CCarouselInner>
             <CCarouselControl direction="prev"/>
             <CCarouselControl direction="next"/>
           </CCarousel>
         </CCardBody>
       </CCard>
     </CCol>
   </CRow>
  
     
        <br/>
        <br/>
 
    {this.state.personnes.map((item,index)=>(
      <CRow>
        <CCol>
          
          <CCard>

            <CCardHeader>
          <h4>Publication Administratives</h4>
          
            </CCardHeader>
            <CCardBody>
              <CJumbotron fluid>
                <CContainer fluid>
                <tbody>
  
        <tr key={index}>
 
                <h5>{item.Contenu}</h5> 
                <br/>

                <br/>
                                       {/* Date :   <p>{item.DateDeCreation}</p>  */}
                                          {/* <p>{item.Files}</p>  */}
                                  <img src={`http://localhost:8000/getfile/${item.photo}`} style={{"height":"250px", "width":"700px"}} download/>
                              
<br/>
<br/>
Date :   <p>{item.DateDeCreation}</p> 
</tr>
    
  
   
  </tbody>
               
 
                </CContainer>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
       )   )  }
    </>
  )
}}

export default DashboardEnseignant