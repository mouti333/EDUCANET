import helpers from './helpers.js';
// window.addEventListener( 'load', () => {
//     document.getElementById( 'toggle-particpant' ).addEventListener( 'click', ( e ) => {
//         let participants = []
//       let username = document.getElementById('username-set') 
//       let mainParticipants = document.querySelector( '#main-participants' ); 
//       let usersParticipants =  document.querySelector( '#participants' );
//         if (username) {
//             do {
//                 particpants.push(username)
                
//                 console.log(username)
//             }
//             while (particpants.lenght == 50)
//         }
//     })
// });
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*',
window.addEventListener( 'load', () => {
    // document.getElementById('toggle-particpants').addEventListener('click',(e) =>{
    //  const userList = document.getElementById('users') ;
    //  userList.innerHTML='';
    //  const li = document.createElement('li');
    //  li.innerHTML = username
    //  userList.appendChild(li) 
    // })
 document.querySelector( '#toggle-particpants' ).addEventListener( 'click', ( e ) => {
        let chatElem = document.querySelector( '#chat-pane1' );
                let chatElem1 = document.querySelector( '#chat-pane' );

        let mainSecElem = document.querySelector( '#main-section1' );

        if ( 
        chatElem.classList.contains( 'chat-opened' ) ) {
                                    //chatElem1.setAttribute( 'hidden', true );

            chatElem.setAttribute( 'hidden', true );
            mainSecElem.classList.remove( 'col-md-9' );
            mainSecElem.classList.add( 'col-md-12' );
            chatElem.classList.remove( 'chat-opened' );
        }

        else {
            chatElem1.setAttribute( 'hidden', true );
            chatElem.attributes.removeNamedItem( 'hidden' );
            mainSecElem.classList.remove( 'col-md-12' );
            mainSecElem.classList.add( 'col-md-9' );
            chatElem.classList.add( 'chat-opened' );
        }

        //remove the 'New' badge on chat icon (if any) once chat is opened.
        setTimeout( () => {
            if ( document.querySelector( '#chat-pane1' ).classList.contains( 'chat-opened' ) ) {
                helpers.toggleChatNotificationBadge();
            }
        }, 300 );
    } );


    document.querySelector( '#toggle-chat-pane' ).addEventListener( 'click', ( e ) => {
        let chatElem = document.querySelector( '#chat-pane' );
        let chatElem1 = document.querySelector( '#chat-pane1' );

        let mainSecElem = document.querySelector( '#main-section' );

        if ( chatElem.classList.contains( 'chat-opened' ) ) {
         //   chatElem1.setAttribute( 'hidden', true );
                        chatElem.setAttribute( 'hidden', true );

            mainSecElem.classList.remove( 'col-md-9' );
            mainSecElem.classList.add( 'col-md-12' );
            chatElem.classList.remove( 'chat-opened' );
        }

        else {
                        chatElem1.setAttribute( 'hidden', true );

            chatElem.attributes.removeNamedItem( 'hidden' );
            mainSecElem.classList.remove( 'col-md-12' );
            mainSecElem.classList.add( 'col-md-9' );
            chatElem.classList.add( 'chat-opened' );
        }

        //remove the 'New' badge on chat icon (if any) once chat is opened.
        setTimeout( () => {
            if ( document.querySelector( '#chat-pane' ).classList.contains( 'chat-opened' ) ) {
                helpers.toggleChatNotificationBadge(); 
            }
        }, 300 );
    } );
    


    //When the video frame is clicked. This will enable picture-in-picture
    document.getElementById( 'local' ).addEventListener( 'click', () => {
        if ( !document.pictureInPictureElement ) {
            document.getElementById( 'local' ).requestPictureInPicture()
                .catch( error => {
                    // Video failed to enter Picture-in-Picture mode.
                    console.error( error );
                } );
        }

        else {
            document.exitPictureInPicture()
                .catch( error => {
                    // Video failed to leave Picture-in-Picture mode.
                    console.error( error );
                } );
        }
    } );


    document.getElementById( 'create-room' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();
        axios.get('http://localhost:8000/User/getOne/60b225f988939f4038e10ea1').then((res=>{
           let yourName = res.data.data.nom + ' ' + res.data.data.prenom
            let roomName = document.querySelector( '#room-name' ).value;
            let debut = 0;
            let duree = 0 ;
            let url = "";    
        if ( roomName && yourName ) {
          
            //remove error message, if any
            document.querySelector( '#err-msg' ).innerHTML = "";

            //save the user's name in sessionStorage
            sessionStorage.setItem( 'username', yourName );
          
var deb= new Date()
var roomLink = `${ location.origin }?room=${ roomName.trim().replace( ' ', '_' ) }_${ helpers.generateRandomString() }`;
const data={nomReunion:roomName,dateDebutReunion:deb,dateFinReunion :debut, dureeReunion : duree , url : roomLink}


axios.post('http://localhost:8000/Reunion/addReunion/60b1706cfacb45244cb08aaf/60b17116facb45244cb08ab0/60b225f988939f4038e10ea1/', data, {
   headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
        }

      }).then(res => {
        console.log(res);
                  console.log('dataaaaaaaaaaaa',data);

      }).catch(err => {
        console.log(err.response);
      });


            //create room link
            
            //show message with link to room
            document.querySelector( '#room-created' ).innerHTML = `Reunion créée. Cliquer <a href='${ roomLink }'>Ici</a>. 
            `;

            //empty the values
            document.querySelector( '#room-name' ).value = '';
        }

        else {
            document.querySelector( '#err-msg' ).innerHTML = "All fields are required";
        }
        }))       
    } );
        
        document.getElementById('endCall').addEventListener ('click',(e) => {
        e.preventDefault();
        
      alert('Vous voulez quitter la réunion !?')  
        // window.location = '/'; 

        // get Reunion creer variable dateDebu = dateDebutReunion
        axios.get('http://localhost:8000/Reunion/getOne/609274acb692031554902c16/609275f02339ab2578e8e976/60ce7792b368a5463cd7a801').then((res=>{
           console.log(res.data.data.dateDebutReunion);
            let dateDeb= new Date(res.data.data.dateDebutReunion) ;
            console.log(dateDeb)
            console.log(dateDeb.getTime())
            console.log(dateDeb.getHours()-1);
            console.log(dateDeb.getMinutes());
             var now = new Date()
             console.log(now.getHours());
             var duree =(( now.getTime() - dateDeb.getTime())/60000).toFixed(2);
             console.log(duree);
           //  duree = Date.now().getHours()

            axios.put('http://localhost:8000/Reunion/updateOne/60b225f988939f4038e10ea1/60ce7792b368a5463cd7a801',{
             dateFinReunion : new Date(),
            enCours : 'false',
            dureeReunion : duree            

                }).then(res => {
                    }).catch(err => {
                console.log(err.response);  
        });
              
        }))
    //   axios.put('http://localhost:8000/Reunion/updateSortie/60928548a25f2346246505b1/60ce7792b368a5463cd7a801');   
    })
    document.getElementById( 'enter-room' ).addEventListener( 'click', ( e ) => {
  
        e.preventDefault();
   
        
        axios.get('http://localhost:8000/User/getOne/60928548a25f2346246505b1').then((res=>{
        // axios.put('http://localhost:8000/Reunion/updateEntree/60928548a25f2346246505b1/60ce7792b368a5463cd7a801');

            let name = res.data.data.nom + ' ' + res.data.data.prenom;
                    //remove error message, if any
            document.querySelector( '#err-msg-username' ).innerHTML = "";

            //save the user's name in sessionStorage
            sessionStorage.setItem( 'username', name );
                     axios.post('http://localhost:8000/Etudiant/AddEtuToList/60928548a25f2346246505b1/60ce7792b368a5463cd7a801');

             location.reload();
        }))
         
                    
    } );

     document.getElementById('toggle-particpants').addEventListener ('click',(e) => {
            e.preventDefault();
            let Listes = document.querySelector( '#liste' );
            let Liste = document.querySelector( '#listes' );
          
            axios.get('http://localhost:8000/Reunion/getAllListes/60ce7792b368a5463cd7a801').then((res=>{
                  let participants='';
                    console.log(res.data.data[0]);
                    for (let i=0 ; i<res.data.data.length ; i++){
                    if(res.data.data[i].Connecter == true){
                    //console.log(res.data.data[i].Etudiant.nom);
                    participants = (participants + res.data.data[i].Etudiant.nom + ' ' + res.data.data[i].Etudiant.prenom) + '<br/>'
                    //  console.log(participants)
                    console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
                    console.log(participants);
                    document.getElementById('liste').innerHTML=participants;
                    }
                }

            }))
        });

    // document.getElementById('alert').addEventListener('click',()=>{
    //     if (document.getElementById('no').clicked ==true) 
    //         console.log('aaaaaaaaaaa')
    //         axios.put('http://localhost:8000/Reunion/updateOne/60a173bd7669e219ecc30eb8',{
    //             NombreDeReponse : NombreDeReponse + 1 
    //         })
    //     }
    // })

    document.addEventListener( 'click', ( e ) => {
        if ( e.target && e.target.classList.contains( 'expand-remote-video' ) ) {
            helpers.maximiseStream( e );
        }

        else if ( e.target && e.target.classList.contains( 'mute-remote-mic' ) ) {
            helpers.singleStreamToggleMute( e );
        }
    } );


    document.getElementById( 'closeModal' ).addEventListener( 'click', () => {
        helpers.toggleModal( 'recording-options-modal', false );
    } );
    
} );

