import React,{useState,useEffect} from 'react';
import MainNav from './MainNav';
import FormSection from '../FormSection/FormSection'
import ProcessedSchedule from '../ProcessedSchedule/ProcessedSchedule';
import {processFile} from '../Functions/ProcessFile';
import Spinner from './Spinner';

const Main = ()=>{
    const [files,setFiles] = useState([]);
    const [paymentPeriod,setPaymentPeriod] = useState('');
    const [alert,setAlert] =useState(false)
    const [resolvedPromise,setResolvedPromise] = useState([]);
    const [loading,setLoading] = useState(false)
    const [style,setStyle] = useState('btn-container')

   
    
    

        const handleSubmit =(files,heading)=>{
            const tempHolding = []
            checkInput()
            if(!loading){
                files?.map((file,i)=>{
                    return tempHolding.push(processFile(file,heading)) 
                })
                setStyle('btn-container__show')
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
            
             <MainNav/>
            
            {loading ? <Spinner/> : <FormSection 
             alert={alert}
             setAlert={setAlert}
             files={files} 
             setFiles={setFiles}
             paymentPeriod={paymentPeriod}
             setPaymentPeriod={setPaymentPeriod}
             handleSubmit={handleSubmit}
           
             />}
             <ProcessedSchedule resolvedPromise={resolvedPromise} style={style}/>
        </React.Fragment>
       
    )
}

export default Main;