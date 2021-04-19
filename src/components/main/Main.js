import React,{useState} from 'react';
import MainNav from './MainNav';
import FormSection from '../FormSection/FormSection'
import ProcessedSchedule from '../ProcessedSchedule/ProcessedSchedule';
import {processFile} from '../Functions/ProcessFile';

const Main = ()=>{
    const [files,setFiles] = useState([]);
    const [paymentPeriod,setPaymentPeriod] = useState('');
    const [alert,setAlert] =useState(false)
    const [resolvedPromise,setResolvedPromise] = useState([]);
    

        const handleSubmit =(files,heading)=>{
            const tempHolding = []
            checkInput()
            files?.map((file,i)=>{
                return tempHolding.push(processFile(file,heading))
               
            })
            Promise.allSettled(tempHolding).then(res => setResolvedPromise(res))  
        }
        const checkInput = ()=>{
            if(files?.length < 2 || paymentPeriod === ' '){
                setAlert(true)
            }
        }
    return(
        <React.Fragment>
             <MainNav/>
             <FormSection 
             alert={alert}
             setAlert={setAlert}
             files={files} 
             setFiles={setFiles}
             paymentPeriod={paymentPeriod}
             setPaymentPeriod={setPaymentPeriod}
             handleSubmit={handleSubmit}
             />
             <ProcessedSchedule 
             resolvedPromise={resolvedPromise}
             />
        </React.Fragment>
       
    )
}

export default Main;