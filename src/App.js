import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from "./store/uiSlice";

function App() {
  const dispatch = useDispatch();
  let isFirstRender = true;
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart);

  useEffect(()=>{

    if(isFirstRender){
      isFirstRender = false;
      return;
    }
    const sendRequest = async ()=>{
    
    dispatch(uiActions.showNotification({
       open: true,
       message:'Sending Request',
       type: 'warning'
    }))
      const res = await 
      fetch('https://flokx-680c2-default-rtdb.firebaseio.com/cartItems.json',{

      method: "PUT",
      body: JSON.stringify(cart)
      })
      const data = await res.join();
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sent Request to Firebase Database Successfully",
        type:"success"
      }))

    }
      sendRequest().catch(err =>{
        dispatch(uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type:"error"
        }))

      });
    }, [cart])

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
     {!isLoggedIn && <Auth />}

      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
