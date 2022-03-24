  

  function account(){
   return `<h1>Create Account</h1>
            <div id = "box">
           <div>First Name</div>
           <div>
               <input type = "text" id = "first_name"></input>
           </div>

           <div>Last Name</div>
           <div>
               <input type = "text" id = "last_name"></input>
           </div>

           <div>Email</div>
           <div>
              <input type = "text" id = "email"></input>
           </div>

           <div>Password</div>
           <div>
              <input type = "password" id = "password"></input>
           </div>

           <div id = "create">Create</div>

           <div>
              <a href = "index.html" id = "last">Return to Home Page</a>
           </div> 
           </div>`
  }

  export default account