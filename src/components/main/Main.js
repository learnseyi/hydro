import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch,useHistory,useLocation} from 'react-router-dom';
import MainNav from './MainNav';
import FormSection from '../FormSection/FormSection'
import ProcessedSchedule from '../ProcessedSchedule/ProcessedSchedule';
import {processFile} from '../Functions/ProcessFile';
import RedirectPage from './RedirectPage';
import Spinner from './Spinner';

const Main = ()=>{
    const [files,setFiles] = useState([]);
    const [paymentPeriod,setPaymentPeriod] = useState('');
    const [alert,setAlert] =useState(false)
    const [resolvedPromise,setResolvedPromise] = useState([]);
    const [loading,setLoading] = useState(false)
    let history = useHistory()
    let location = useLocation()
    
    

        const handleSubmit =(files,heading)=>{
            const tempHolding = []
            checkInput()
            if(!loading){
                files?.map((file,i)=>{
                     tempHolding.push(processFile(file,heading)) 
                })
               
            Promise.allSettled(tempHolding).then(res => setResolvedPromise(res))  
        }
    }
        const checkInput = ()=>{
            if(files?.length < 2 || paymentPeriod === ' '){
                setAlert(true)
            }else{
                setLoading(true)
            }
           
            
        }

    useEffect(()=>{
        if(loading){
            setTimeout(()=>{
                setLoading(false)
            },1500)
        }
    })
    return(
        <React.Fragment>
            <Router>
             <MainNav/>
             <Switch>
            <Route exact path='/'><FormSection 
             alert={alert}
             setAlert={setAlert}
             files={files} 
             setFiles={setFiles}
             paymentPeriod={paymentPeriod}
             setPaymentPeriod={setPaymentPeriod}
             handleSubmit={handleSubmit}
           
             />
             <ProcessedSchedule resolvedPromise={resolvedPromise}/>
             </Route>
            <Route path='/upload'>
             <ProcessedSchedule resolvedPromise={resolvedPromise}/>
             </Route>
             {/* <Route exact path='/upload' render={({props}) =>
             <ProcessedSchedule resolvedPromise={{...props,resolvedPromise}}/>}
             /> */}
             </Switch>
             </Router>
        </React.Fragment>
       
    )
}

export default Main;