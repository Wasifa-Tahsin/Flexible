import Footer from "./components/Footer"
import Header from "./components/Header"
import Tabs from "./components/Tabs"


import Portfolio from "./components/ui/Portfolio"
import ForgetPasswordPage from "./pages/ForgetPasswordPage"
import Login from "./pages/Login"
import UserProfile from "./views/UserProfile"





function App() {


  return (
    <>
    
     
     <Header></Header>
     <Tabs></Tabs>
   <Portfolio></Portfolio>
   <Footer></Footer>
   <UserProfile></UserProfile>
   <Login></Login>
   <ForgetPasswordPage></ForgetPasswordPage>
      
    </>
  )
}

export default App
