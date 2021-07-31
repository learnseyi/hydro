import xlsx from 'xlsx';


export const Processed = (newsch)=>{
    const fileName = 'test.xlsx';
    const ws = xlsx.utils.json_to_sheet(newsch,{skipHeader:true})
    console.log(ws)
    const wb = xlsx.utils.book_new()
    xlsx.utils.book_append_sheet(wb, ws, 'test');
	 xlsx.writeFile(wb, fileName);
}