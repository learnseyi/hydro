// export default ProcessedSchedule;
import React,{useState,useEffect} from 'react';
import {Button,Card,Container,Table} from 'react-bootstrap';
import {ProcessNew} from './ProceesNew'
import {Processed} from '../Functions/Processed';
import './ProcessedSchedule.css'


const ProcessedSchedule = ({resolvedPromise})=>{
   const [pre,setPre] = useState([])
   const [cur,setCur] = useState([])
   const [update,setUpdate] = useState([])
//    const [heading,setHeading] = useState([])


   //calling the save function to write updated schedule to a new file
const handleSave = ()=>{
    const head = update.length ? Object.values(update[0]) : null
  Processed(update.slice(0))
console.log(head);

}

   
//sorting resolved promises into current and previous schedules
const getInfo = (resolvedPromise)=>{
    setTimeout(()=>{
        if(resolvedPromise.length){
            setCur(resolvedPromise[0])
            setPre(resolvedPromise[1])
             }
    },1000)
       
}
   
    getInfo(resolvedPromise)
    useEffect(()=>{
        ProcessNew(pre.value,cur.value)
        .then(data => setUpdate(data?.slice(0)))
        .catch(error=>console.log(error));
    },[pre,cur])

// pre.value ? Object.keys(pre.value[1]
    return(
        <Container className="pt-5"fluid>
            <Card className="display-container">
        <Table striped bordered hover size="sm" >
            <thead>
                <tr className="bg-primary text-white text-center">
                    {update?.length ? Object.values(update[1]).map((label,i)=>{
                       
                        return <th key={i}>{label}</th>
                    }): null}
                </tr>
            </thead>
            <tbody className='table-body'>
                
                    {update ? update.slice(2).map((info,i)=>{
                          return <tr key={i}className='text-center'>
                               {Object.keys(info).map((key,j)=><td key={j}>{info[key]}</td>)}
                                </tr>
                    }): null}
            </tbody>
        </Table>
        </Card>
        <div className="d-flex justify-content-center">
        <Button className="mr-3 px-5" onClick={handleSave} variant="primary" >Download</Button>
            <Button className="ml-3 px-5"onClick={()=>window.location.reload()} variant="primary">Reset</Button>
        </div>
        </Container>
    )
}

export default ProcessedSchedule;