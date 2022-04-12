import {useState,useEffect } from 'react'
import {Card,Box, Grid, Button, Typography,Table,TableCell,TableRow,TextareaAutosize, TextField, Divider} from "@mui/material"
import './ad.css'
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';

 export default function Ad(){
    var [s,sets]=useState([])
    var [stat,setstat]=useState([])
    var [pr,setpr]=useState([])
    var [p,setp]=useState(0)
    var [t,sett]=useState(0)
    var [f,setf]=useState(0)
  
    useEffect( async ()=>{
              getdata()

    },[])
var er= async (e)=>{
   var d=parseInt(e.target.value)
   setf(d)}
var setdata=async () =>{
    setp(0)
   

    
     var d=[...s,parseFloat(f)]
     
     var sum=0
    var  mode=0
   
     if(d.length % 2===0){
            var r=d
            var n=r.length
            var median=(r[n/2]+r[n/2-1])/2

     }else{
         var median=d[(d.length-1)/2]
     }
     if(d.length==1){
         median=d[0]
     }
     var dic={}

     for (var i=0;i<d.length;i++){
         sum=sum+d[i]
         if(dic[d[i]]==null || dic[d[i]]==undefined){
             dic[d]=1     
     }else{
        dic[d]=dic[d]+1}
    if(mode>dic[d]){
    
    }else{
        mode=dic[d]
    }
    
     }
    var standard=0
    
    var  mean=sum/d.length
     for (var i=0;i<d.length;i++){
       standard=standard+(d[i]-mean)**2
       
    }
    standard=Math.sqrt(standard/d.length)

    setpr([...pr,{t:f,data:[{m:mean,data:"Mean"},{m:median,data:"Median"},{m:mean,data:"StdDev"},{m:mean,data:"Mode"}]}])
    
  



 sets(d)
 setp(1)
 sett(f)



}
 var getdata= async ()=>{
     setp(0)
     if(pr.length!==0){
         setpr([])
     }
    var data=await fetch("https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=50",{method:"GET",
})

    
     var d=await data.json()
    
     var sum=0
    var  mode=0
   
     if(d.length % 2===0){
            var r=d
            var n=r.length
            var median=(r[n/2]+r[n/2-1])/2

     }else{
         var median=d[(d.length-1)/2]
     }
     if(d.length==1){
         median=d[0]
     }
     var dic={}

     for (var i=0;i<d.length;i++){
         sum=sum+d[i]
         if(dic[d[i]]==null || dic[d[i]]==undefined){
             dic[d]=1     
     }else{
        dic[d]=dic[d]+1}
    if(mode>dic[d]){
    
    }else{
        mode=dic[d]
    }
    
     }
    var standard=0
    
    var  mean=sum/d.length
     for (var i=0;i<d.length;i++){
       standard=standard+(d[i]-mean)**2
       
    }
    standard=Math.sqrt(standard/d.length)


     


    setstat([{m:mean,data:"Mean"},{m:median,data:"Median"},{m:mean,data:"StdDev"},{m:mean,data:"Mode"}])

  



 sets(d)
 setp(1)
 }
     return(
      <Box  sx={{display:"flex",position:"relative",flexDirection:"column",alignItems:"center",zIndex:0,justifyContent:"center",overflowX:"hidden",minHeight:"100vh",gap:"50px"}}>
          <Box sx={{position:"absolute",top:"0px",backgroundColor:"green",width:"100vw",height:"150px",zIndex:0}}></Box>
          <Card    sx={{width:"1000px",minHeight:"400px",paddingTop:"100px",position:"relative",top:"20px",zIndex:1,display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"20px",justifyContent:"center",overflowY:"hidden",'&:hover': {zIndex:0},alignItems:p===0?"center":"start" }} >
      
   
         
          
         {p===0 ? (<CircularProgress />): (<Card sx={{width:"400px",height:"250px",border:"2px solid gray",textAlign:"center"}}>

             <Typography> DATA-{s[0]}0.json</Typography>

                <Box sx={{margin:"10px"}}>
                <Table >
             {stat.map((x)=>(
                 <TableRow>
                <TableCell key={x.data}>{x.data}</TableCell>
                    <TableCell key={x.m}>{x.m}</TableCell>
                 </TableRow>
             ))}
          </Table>
      

          </Box>
       

      </Card>)
 }

 {pr.map(({t,data})=>{

 if(pr.length>0){



return (<Card sx={{width:"400px",textAlign:"center",height:"250px",border:"2px solid gray",display:pr.length===0?"none":"block"}}>
{data.length===0?<Typography> New Data Set </Typography>:(<Typography> Data Set After Adding {t}</Typography>)}

 <Box sx={{margin:"10px"}}>
 

 <Table>
     {data.map((x)=>(  
  <TableRow>

 <TableCell key={x.data}>{x.data}</TableCell>
     <TableCell key={x.m}>{x.m}</TableCell>
  </TableRow>
))}
</Table>
 

</Box>


</Card>)
}

 })}
 
 <Tooltip title="fetch new dataset">
     <Button  disabled={p==0?true:false} onClick={getdata} sx={{position:"absolute",top:"0px",left:"0px"}} variant="contained">FETCH NEW DATA SET</Button>
</Tooltip>
               
          </Card>
           


  <Box  sx={{display:"flex",flexDirection:"row"}}>
  <TextField onChange={er} placeholder="enter number" type="number">
    
  </TextField>
  <Tooltip title="add number to current dataset">
  <Button  disabled={p==0?true:false} onClick={setdata} variant="contained">ADD NUMBER</Button>
</Tooltip>
</Box>
      </Box>
     )
 }