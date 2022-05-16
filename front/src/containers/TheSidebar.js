import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,CImg
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
// sidebar nav config
import logos from './log.png.PNG'
import {navEtd , navEns , nav}from './_nav'


const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.nav.sidebarShow)
  const USER_ROLE = localStorage.getItem('USER_ROLE')

  return (
    <CSidebar
    style={{backgroundColor:"#201c78"}}
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
     <CSidebarBrand className="d-md-down-none" to="/">
       <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          src={logos}
          height={25}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={25}
        />
   
      
         <h5>EDU'COM</h5>
      
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={USER_ROLE  === 'Etudiant' ? navEtd : USER_ROLE  === 'Enseignant' ? navEns : nav} 
      components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)




// import { Menu } from "antd";
// import {
//   UserOutlined,
//   SoundOutlined,
//   SketchOutlined,
//   RedditOutlined,
//   ShoppingCartOutlined,
//   BellOutlined,
//   SkinOutlined,
//   CoffeeOutlined,
//   CreditCardOutlined,
//   EditOutlined,
//   StarOutlined,
// } from "@ant-design/icons";

// import {
//   Switch,
//   Route,
//   useRouteMatch,
//   useParams,
//   Link,
// } from "react-router-dom";

// const { SubMenu } = Menu;

// function TheSidebar() {
//   let { path, url } = useRouteMatch();
//   const UserRole = localStorage.getItem('USER_ROLE');

//   return (
//     <Menu theme="dark" mode="inline" style={{ height: "100%", borderRight: 0 }}>

//       {UserRole === "Administration" && (
//         <Menu.Item key="1" style={{}} icon={<UserOutlined />} >
//           <Link to={`${url}/agent`}>Agent</Link>
//         </Menu.Item>
//       )}

//       {UserRole === "Enseignant" && (
//         <Menu.Item key="1" style={{}} icon={<BellOutlined />} >
//           <Link to={`${url}/commande`}>commande</Link>
//         </Menu.Item>
//  )}
//       {UserRole === "Etudiant" && (
//         <Menu.Item key="3" style={{}} icon={<RedditOutlined />} >
//           <Link to={`${url}/annonces`}>Annonce</Link>
//         </Menu.Item>
//       )}
     


//     </Menu>
//   );
// }

// export default TheSidebar;

