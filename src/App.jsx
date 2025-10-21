import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ForgetPasswordPage from "./pages/ForgetPasswordPage"
import Login from "./pages/Login"
import UserProfile from "./views/UserProfile"
import HomePage from "./pages/HomePage"
import SignUp from "./pages/SignUp"
import ApplyNowPage from "./pages/ApplyNowPage"





function App() {


  return (
    <>
    
<main>
    <Header></Header>
   <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/applyNow" element={<ApplyNowPage></ApplyNowPage>}></Route>
      <Route path="/userProfile" element={<UserProfile></UserProfile>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      <Route path="/forgotPassword" element={<ForgetPasswordPage></ForgetPasswordPage>}></Route>
    </Routes>
    <Footer></Footer>
</main>
 
     
   
    
  
   
 

   
      
    </>
  )
}

export default App
