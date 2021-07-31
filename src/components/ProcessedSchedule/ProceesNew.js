

// const hasTotal = (label)=>{
//     return label.includes('Total')
// }

import { reject } from "q"

// const hasNumber = (myString)=>{
//     return /\d/.test(myString);
//   }
  
// const getContribution =(empList)=>{
// const contributionList = []
// empList?.slice(2).map(list =>{
//     if(hasNumber(Object.keys(list))){
//         contributionList.push({'name':list.Name,'contribution':[list.Total,list['Total-1']]})
//     }
    
// })
// return contributionList
// }


// const createnewWb = (pre,cur,contribution)=>{
//     const contrib = contribution(pre)
//     console.log('contrib is:',contrib)
//     pre?.forEach(emp =>{
//         contrib?.forEach(cont =>{
//             if(emp.Name === cont.name){
//                 console.log({"name":emp.Name,"contribution":cont.contribution})
//                 console.log(emp)
//             }
//         })
//     })
// }
// createnewWb(pre.value,getContribution)

// export const ProcessNew =(pre,cur)=>{
//     if(pre === 'undefined' || cur === 'undefined')  return
//      return new Promise((resolve,reject)=>{
//         const hasNumber = (myString)=>{
//             return /\d/.test(myString);
//           }
//         const getContribution =(empList)=>{
//             const contributionList = []
//             empList?.slice(2).map(list =>{
//                 if(hasNumber(Object.keys(list))){
//                     contributionList.push({'name':list.Name,'contribution':[list.Total,list['Total-1']]})
//                     console.log('name:',list.name)
//               }
//               return contributionList
//         })
//         resolve(contributionList)
//     }
//     getContribution(pre,cur)
//     reject('error')
//     })
// }
   


// creating promise to process file merge
// function accepts two files (current-scedule file and previous-schedule file template)

export const ProcessNew =(prev,cur)=>{
    
    if(prev === 'undefined' || cur === 'undefined')  reject('There was an error') // stop operation if either value is undefined
     return new Promise((resolve,reject)=>{
            //  function to check is employee name already exist in new file
    //    const isExist = (curFile,newFile)=>{
    //     //    if(!curFile || !newFile) return 
      
       
    //        return emp.Name === newFile ? true: false
     
    // }
    
    
    let list = [];
    if(cur && prev){list = [...cur]
        // console.log(list)
        list.forEach(emp=>{
            prev.forEach(prevEmp =>{
                if(emp.Name === prevEmp.Name){
                    emp['Employer_Account'] = prevEmp['Employer_Account']
                    emp['Employee Account'] = prevEmp['Employee Account']
                }
            })
        })
    } 
        // let empName;
        // extracting column headings in previous file
        // const keys = prev?.length ? Object.keys(prev[2]) : null ;
        //   const hasNumber = (myString)=>{
        //     return /\d/.test(myString);
        //   } 
         
// let newEmp = {}
        //   merge current scedule file and previous schedule template
            // cur?.forEach(curEmp =>{
            //     empName = curEmp.Name
            //     const isExist = list.findIndex(item =>{
            //         return item.Name === empName ? true : false;
            //     })
                // prev?.forEach(prevEmp =>{
                //     keys?.forEach(key =>{
                //     if(prevEmp.Name === curEmp.Name && isExist < 0 ){
                        
                //         newEmp[key] = curEmp[key] === null ? prevEmp[key] : curEmp[key]
                      
                //         console.log(isExist)
                        // list.push(newEmp)
                        // if(isExist < 0){
                        //     list.push(newEmp)
                        //     console.log('newEmp-1',list)
                        // }
                        // list.push(newEmp)
                    
                        // newEmp[key] = prevEmp[key]
                        // console.log('curEmp is',curEmp[key])
                        // prevEmp[key] =  curEmp[key] 
                        // console.log('newEmp',newEmp)
                        // console.log('current',curEmp[key],'previous Acc',prevEmp[key])
                        // update new array if current employee not in new arrray
                        // if(!isExist(list,empName)) list.push(newEmp)
                    // }else if(!curEmp[key] && hasNumber(key)) {curEmp[key] = curEmp['Total']}
                    
                    // })
                    // && key.includes('Account')    
             

                  
                // })
        // })
        // if(!isExist(list,empName)) list.push(newEmp)
        // console.log(list.findIndex(isExist(curEmp,empName)) )
     
       
        resolve(list)
    reject('error')
    })
}

   