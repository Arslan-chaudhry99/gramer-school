import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [ledgerDataVal, setledgerDataVal] = useState([])
    const [schoolData, setschoolData] = useState([])
    const [candiFees, setcandiFees] = useState([])
    const [User, setfirst] = useState()
    //  getting ledger data from data base
    const ftechLedger = async () => {
        try {
            const res = await fetch("/getledger", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const Data = await res.json()
            setledgerDataVal(Data)
            if ((await res).status === 400) {
                return window.location.reload()
            }


        } catch (error) {
            return alert("Please try again later.")
        }
    }
    //  getting  school details from data base
    const fetchSchoolAbout = async () => {
        try {
            const res = await fetch("/getschool", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const Data = await res.json()
            setschoolData(Data)

        } catch (error) {
            return alert("Please try again later.")
        }
    }
    // fee data
    const candidatesFee = async () => {
        try {
            const res = await fetch("/getCandidateData", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            if ((await res).status === 200) {
                const Data = await res.json()
                setcandiFees(Data)

            }
            if ((await res).status === 501) {
                return alert("Unable to fetch Data.Please check your internet connection.and try again")
            }




        } catch (error) {
            return alert("Please try again later.")
        }
    }
    return (<>
        <AppContext.Provider value={{ ftechLedger, ledgerDataVal, fetchSchoolAbout, schoolData, candidatesFee, candiFees }} >
            {children}
        </AppContext.Provider>
    </>
    )
}
export { AppProvider, AppContext }