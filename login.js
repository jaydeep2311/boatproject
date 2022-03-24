

function login(){
    return `<h1 id = "h1">Log in</h1>
           <div id = "box">
           <div>Email</div>
           <div>
              <input type = "text" id = "email" ></input>
           </div>

           <div>Password</div>
           <div>
              <input type = "password" id = "password" ><a href "#">Forgot your password?</a></input>
           </div>

           <div id = "sign">Sign in</div>

           <div>
             <a href = "index.html">Back to Home Page</a>
             <a href = "account.html">Create account</a>
           </div>
           </div> `
}

export default login