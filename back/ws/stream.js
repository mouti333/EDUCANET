


const stream = ( socket ) => {
    socket.on( 'subscribe', ( data ) => {
        //subscribe/join a room
        socket.join( data.room );
        socket.join( data.socketId );
            socket.to( data.room ).emit( 'new user', { socketId: data.socketId } );

        //Inform other members in the room of new user's arrival
        // if ( socket.adapter.rooms[data.room] !=null ) {
        //     socket.to( data.room ).emit( 'new user', { socketId: data.socketId } );
        // }
    } );


    socket.on( 'newUserStart', ( data ) => {
        socket.to( data.to ).emit( 'newUserStart', { sender: data.sender } );
    } );


    socket.on( 'sdp', ( data ) => {
        socket.to( data.to ).emit( 'sdp', { description: data.description, sender: data.sender } );
    } );


    socket.on( 'ice candidates', ( data ) => {
        socket.to( data.to ).emit( 'ice candidates', { candidate: data.candidate, sender: data.sender } );
    } );


    socket.on( 'chat', ( data ) => {
        socket.to( data.room ).emit( 'chat', { sender: data.sender, msg: data.msg } );
    } );
    
// socket.on('updateUsersList', function (users) {
//     document.getElementById( 'toggle-particpant' ).addEventListener( 'click', ( e ) => {
//     let ul = document.createElement('ul');

//   users.forEach(function (user) {
//     let li = document.createElement('li');
//     li.innerHTML = user;
//     ul.appendChild(li);
//   });

//   let usersList = document.querySelector('#your-name');
//   usersList.innerHTML = "";
//   usersList.appendChild(ul);
// })
// })
  
}


module.exports = stream;
