import React from 'react'

const Login = () => {
    const url = 'http://localhost:3001/auth/register'
    const data = {
        firstName: 'FakeName',
        lastName: 'FakeSurname',
        email: 'fake@gmail.com',
        password: '1234579',
        picturePath: '',
        friends: [],
        location: 'fakeLocation',
        occupation: 'fakeOccupation',
    }
    const onClickHandler =  () => {
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data),
        }).then(Response => console.log(Response)).catch(err => console.log(err));
    }
    
  return (
    <div>
        <button onClick={onClickHandler}> Click To activate </button>
    </div>
  )
}

export default Login