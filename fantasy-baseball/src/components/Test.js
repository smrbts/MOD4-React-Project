  //  CREATE A NEW USER
    fetch('http://localhost:6969/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userObj)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

    //token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6bnVsbCwiaWF0IjoxNTYwNzkxOTUxLCJleHAiOjE1NjA3OTU1NTF9.dvMig6n_n2GmwgYO1-HwowzoK7Kc3HAH1YJOQHVZC1c"
    //user: {
    //  id: user_id,
    //  username: "user"
    //}

  // AUTHENTICATE A USER (log in)
    fetch('http://localhost:6969/auth',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userObj)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
      //user: {
      //  id: user_id,
      //  username: "user"
      //}

  // PREFORM A FETCH REQUEST THAT REQUIRES AUTHORIZATION
  fetch(`http://localhost:6969/${insert_route}`,{
    method: 'POST', //OR PATCH / DELETE
    headers: {
      'content-type': 'application/json',
      'auth-token' : "TOKEN RECIEVED AT LOGIN" //<-MAKE SURE TO STORE THAT IN SESSION
    },
    body: JSON.stringify(userObj)
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
