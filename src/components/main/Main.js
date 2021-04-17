import React,{useState} from 'react';
import MainNav from './MainNav';
import FormSection from '../FormSection/FormSection'
import ProcessedSchedule from '../ProcessedSchedule/ProcessedSchedule';
import {processFile} from '../Functions/ProcessFile';

const Main = ()=>{
    const [files,setFiles] = useState([]);
    const [paymentPeriod,setPaymentPeriod] = useState('');
    const [alert,setAlert] =useState(false)
    

        const handleSubmit =(files,heading)=>{
            checkInput()
            files?.map((file,i)=>{
               return  processFile(file,heading)
            })
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
             file={files}
             paymentPeriod={paymentPeriod}
             />
        </React.Fragment>
       
    )
}

export default Main;