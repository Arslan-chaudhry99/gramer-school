import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
           const [ledgerDataVal, setledgerDataVal] = useState([])
           //  getting data from data base
           const ftechLedger = async () => {

                      try {
                                 const res = await fetch("/getledger", {
                                            method: "GET",
                                            headers: {
                                                       Accept: "application/json",
                                                       "Content-Type": "application/json"
                                            }
                                 })
                                 const Data = await res.json()
                                 setledgerDataVal(Data)


                      } catch (error) {
                                 return alert("Please try again later.")
                      }
           }


           return (<>
                      <AppContext.Provider value={{ ftechLedger, ledgerDataVal }} >
                                 {children}
                      </AppContext.Provider>
           </>
           )
}
export { AppProvider, AppContext }