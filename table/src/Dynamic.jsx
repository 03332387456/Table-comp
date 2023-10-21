import React from 'react'
import { useState } from 'react'

function Dynamic() {

imop

    let fetchData = () => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            setgatdata(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      };

  return (
    <div>
           <table>
            
            </table> 
    </div>
  )
}

export default Dynamic
