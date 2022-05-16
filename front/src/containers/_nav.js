import React from 'react'
import CIcon from '@coreui/icons-react'

 export const nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Accueil',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
    /*enseignantiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii*/
  /*enseignantiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii*/
  
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Accueil',
    //   to: '/dashboard',
    //   icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
    //   badge: {
    //     color: 'info',
    //     text: 'NEW',
    //   }
    // },
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'Liste des Reponses aux Activites',
    //   route: '/ListeRepActivites',
    //   icon: 'cil-list',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Liste des Reponses aux Activites',
    //       // icon: 'cilHighlighter',
    //       to: 'ListeRepActivites/ListeRepActivites',
    //     },
    //   ]
    // },
    
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'Groupes Enseignant',
    //   route: '/TGroupes',
    //   icon: 'cil-pencil',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'MesGroupes',
    //       to: '/MesGroupes/TGroupes',
    //     },
    //   ]
    // },
    
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'MesGroupesEnseignant',
    //   route: '/MesGroupesEnseignant',
    //   icon: 'cil-pencil',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'TMesGroupesEnseignant',
    //       to: '/MesGroupesEnseignant/TMesGroupesEnseignant',
    //     },
    //   ]
    // },
   
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'MesMatieresEnseignant',
    //   route: '/MesMatieresEnseignant',
    //   icon: 'cil-pencil',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'TMesMatieresEnseignant',
    //       to: '/MesMatieresEnseignant/TMesMatieresEnseignant',
    //     },
    //   ]
    // },
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'MesEtudiantsEnseignant',
    //   route: '/MesEtudiantsEnseignant',
    //   icon: 'cil-pencil',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'TMesEtudiantsEnseignant',
    //       to: '/MesEtudiantsEnseignant/TMesEtudiantsEnseignant',
    //     },
    //   ]
    // },
   
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'Mes Activites a rejeter',
    //   route: '/AjoutActivite',
    //   icon: 'cil-list',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Mes Activites',
    //       // icon: 'cilHighlighter',
    //       to: 'AjoutActivite/AjoutActivite',
    //     },
    //   ]
    // },
  
  /* copie de base pour tester DEBUT*/
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Mes Groupes',
    route: '/MesGroupes',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Tous les Groupes',
        // icon: 'cil-puzzle',
        to: '/MesGroupes/TGroupes',
      },
    
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Mes Groupes par Niveau',
      //   // icon: 'cil-puzzle',
      //   to: '/Groupes/MGroupesN',
      // },
      {
        _tag: 'CSidebarNavItem',
        name: 'Nouveau Groupe',
        // icon: 'cil-puzzle',
        to: '/MesGroupes/NGroupe',
      },
    ],
  },
   /* copie de base pour tester FIN */
    /* copie de Widgets pour tester DEBUT */
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'Mes Enseignants',
    //   route: '/MesEnseignants',
    //   icon: 'cil-list',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Mes Enseignants',
    //       // icon: 'cilHighlighter',
    //       to: 'MesEnseignants/MesEnseignants',
    //     },
    //   ]
    // },
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'Liste des Enseignants',
    //   route: '/MesEnseignantsOutAff',
    //   icon: 'cil-list',
    //         _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Liste des Enseignants ',
         
         
    //       to: '/MesEnseignantsOutAff',
    //     },
    //   ]
    // },
    {
      _tag: 'CSidebarNavItem',
      name: 'Mes Etudiants',
      to: '/MesEtudiantall/TEtudiantall',
      icon: 'cil-list',
      badge: {
        color: 'info'
      },},
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'Mes Etudiants',
    //   route: '/MesEtudiants',
    //   icon: 'cil-list',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Tous les Etudiants',
    //       // icon: 'cilEducation',
    //       to: '/MesEtudiants/TEtudiants',
    //     },
    //   ]
    // },
     
 
      {
        _tag: 'CSidebarNavItem',
        name: 'Ajout Enseignant',
        to: '/AjoutEnseignant',
        icon: 'cil-user-follow',
        // _children: [
        //   {
        //     _tag: 'CSidebarNavItem',
        //     name: 'Ajout Enseignant',
        //     to: '/AjoutEnseignant',
        //   },
        // ]
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ajout Etudiant',
        to:  '/AjoutEtudiant',
        icon: 'cil-user-follow',
        // _children: [
        //   {
        //     _tag: 'CSidebarNavItem',
        //     name: 'Ajout Etudiant',
        //     to: '/AjoutEtudiant',
        //   },
        // ]
      },
    // {
    //   _tag: 'CSidebarNavDropdown',
    //   name: 'Ajout Groupe',
    //   route: '/AjoutGroupe',
    //   icon: 'cil-calculator',
    //   _children: [
    //     {
    //       _tag: 'CSidebarNavItem',
    //       name: 'Ajout Groupe',
    //       icon: 'cil-calculator',
    //       to: 'AjoutGroupe/AjoutGroupe',
    //     },
    //   ]
    // },
    
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Etudiants',
  //   to: '/widgets',
  //   icon: 'cil-star',
  //   badge: {
  //     color: 'info'
  //   },
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Calendrier',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'info'
    },},
  {
    _tag: 'CSidebarNavItem',
    name: 'A Propos',
    to: '/widgets',
    icon: 'cil-star',
    badge: {
      color: 'info'
    },
  },
  
   /* copie de Widgets pour tester FIN */
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
    
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Base',
  //   route: '/base',
  //   icon: 'cil-puzzle',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Forms',
  //       to: '/base/forms',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Jumbotron',
  //       to: '/base/jumbotrons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Navs',
  //       to: '/base/navs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Navbars',
  //       to: '/base/navbars',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Progress',
  //       to: '/base/progress-bar',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Switches',
  //       to: '/base/switches',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tabs',
  //       to: '/base/tabs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },

  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Buttons',
  //   route: '/buttons',
  //   icon: 'cil-cursor',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Brand buttons',
  //       to: '/buttons/brand-buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Dropdowns',
  //       to: '/buttons/button-dropdowns',
  //     }
  //   ],
  // },
  // /*{
  //   _tag: 'CSidebarNavItem',
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: 'cil-chart-pie'
  // },*/
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Icons',
  //   route: '/icons',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Notifications',
  //   route: '/notifications',
  //   icon: 'cil-bell',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Toaster',
  //       to: '/notifications/toaster'
  //     }
  //   ]
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: 'cil-calculator',
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  
  // {
  //   _tag: 'CSidebarNavDivider'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Register',
  //       to: '/register',
  //     },
    
     
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Disabled',
  //   icon: 'cil-ban',
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Labels']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label danger',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label info',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-info'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // }
]
export const navEns =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Accueil',
    to: '/DashboardEnseignant',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  
  
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Liste des Reponses aux Activites',
  //   route: '/ListeRepActivites',
  //   icon: 'cil-list',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Liste des Reponses aux Activites',
  //       // icon: 'cilHighlighter',
  //       to: 'ListeRepActivites/ListeRepActivites',
  //     },
  //   ]
  // },
  
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Groupes Enseignant',
  //   route: '/TGroupes',
  //   icon: 'cil-pencil',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'MesGroupes',
  //       to: '/MesGroupes/TGroupes',
  //     },
  //   ]
  // },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Mes Groupes ',
    to: '/MesGroupesEnseignant/TMesGroupesEnseignant',
    icon: 'cil-pencil',
    // _children: [
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'TMesGroupesEnseignant',
    //     to: '/MesGroupesEnseignant/TMesGroupesEnseignant',
    //   },
    // ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Calendrier',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'info'
    },},
  {
    _tag: 'CSidebarNavItem',
    name: 'A Propos',
    to: '/widgets',
    icon: 'cil-star',
    badge: {
      color: 'info'
    },
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Liste des Enseignants',
  //   route: '/MesEnseignantsOutAff',
  //   icon: 'cil-list',
  //   //       _children: [
  //   //   {
  //   //     _tag: 'CSidebarNavItem',
  //   //     name: 'Liste des Enseignants ',
       
       
  //   //     to: '/MesEnseignantsOutAff',
  //   //   },
  //   // ]
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'MesMatieresEnseignant',
  //   route: '/MesMatieresEnseignant',
  //   icon: 'cil-pencil',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'TMesMatieresEnseignant',
  //       to: '/MesMatieresEnseignant/TMesMatieresEnseignant',
  //     },
  //   ]
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'MesEtudiantsEnseignant',
  //   route: '/MesEtudiantsEnseignant',
  //   icon: 'cil-pencil',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'TMesEtudiantsEnseignant',
  //       to: '/MesEtudiantsEnseignant/TMesEtudiantsEnseignant',
  //     },
  //   ]
  // },
 
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Ajout Activites',
  //   route: '/AjoutActivite',
  //   icon: 'cil-list',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Mes Activites',
  //       // icon: 'cilHighlighter',
  //       to: 'matiere/AjoutActivite',
  //     },
  //   ]
  // },
]
export const navEtd =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Accueil',
    to: '/DashboardEnseignant',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Mes Matieres',
    to: '/MesMatieresEtudiant/TMesMatieresEtudiant',
    icon: 'cil-pencil',

    // _children: [
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Mes Matieres',
    //     to: '/MesMatieresEtudiant/TMesMatieresEtudiant',
    //   },

        
      
      
    // ] 
  },
  {
    _tag: 'CSidebarNavItem',
     name: 'Mes enseignants',
     to: '/MesEnseignantsEtudEns/TMesEnseignantsEtudEns',
     icon: 'cil-cursor',
    //  _children: [
    //    {
    //      _tag: 'CSidebarNavItem',
    //      name: 'Liste des enseignants',
    //      to: '/MesEnseignantsEtudEns/TMesEnseignantsEtudEns',
    //  }]
    },
  {
    _tag: 'CSidebarNavItem',
     name: 'Mes Collégues',
     to: '/MesEtudiantsEtd/TMesEtudiantsEtd',
     icon: 'cil-cursor',
    //  _children: [
    //    {
    //      _tag: 'CSidebarNavItem',
    //      name: 'Liste des etudiants',
    //      to: '/MesEtudiantsEtd/TMesEtudiantsEtd',
    //  }]
  },


     
    //  {
    //   _tag: 'CSidebarNavDropdown',
    //    name: 'Mes ActivitéEtudiants',
    //    route: '/ActivitéEtudiants',
    //    icon: 'cil-cursor',
    //    _children: [
    //      {
    //        _tag: 'CSidebarNavItem',
    //        name: 'Liste ActivitéEtudiants',
    //        to: '/matiere/ActivitéEtudiants',
    //    }]},
     
        // {
      //   _tag: 'CSidebarNavDropdown',
      //   name: 'Mes Activites a rejeter',
      //   route: '/AjoutActivite',
      //   icon: 'cil-list',
      //   _children: [
      //     {
      //       _tag: 'CSidebarNavItem',
      //       name: 'Mes Activites',
      //       // icon: 'cilHighlighter',
      //       to: 'AjoutActivite/AjoutActivite',
      //     },
      //   ]
      // },
      // {
      //   _tag: 'CSidebarNavDropdown',
      //   name: 'Repondre aux Activites',
      //   route: '/AjoutActiviteEtd',
      //   icon: 'cil-list',
      //   _children: [
      //     {
      //       _tag: 'CSidebarNavItem',
      //       name: 'Repondre aux Activites',
      //       // icon: 'cilHighlighter',
      //       to: 'AjoutActiviteEtd/AjoutActiviteEtd',
      //     },
      //   ]
      // },
      // {
      //   _tag: 'CSidebarNavDropdown',
      //   name: 'Liste des Reponses aux Activites',
      //   route: '/ListeRepActivites',
      //   icon: 'cil-list',
      //   _children: [
      //     {
      //       _tag: 'CSidebarNavItem',
      //       name: 'Liste des Reponses aux Activites',
      //       // icon: 'cilHighlighter',
      //       to: 'ListeRepActivites/ListeRepActivites',
      //     },
      //   ]
      // },
      {
        _tag: 'CSidebarNavItem',
        name: 'Connexion',
        to: '/login',
        icon: 'cil-star',
        // _children: [
        //   {
        //     _tag: 'CSidebarNavItem',
        //     name: 'Login',
        //     to: '/login',
        //   },
         
        // ],
      },
  
]


