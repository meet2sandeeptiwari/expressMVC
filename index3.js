import express from 'express';
import data from './userData.json' with {type:'json'}
const app=express();

app.get("/user", (req, resp)=>{
    const userdata=data;
    resp.send(data);
});

app.get("/user/:id", (req, resp)=>{
    const id=req.params.id;
    console.log(id);
    const userdata=data;
    let filterdata=userdata.filter((user)=>user.id==id);
    resp.send(filterdata);
});

app.get("/username/:name", (req, resp)=>{
    const name=req.params.name;
    console.log(name);
    const userdata=data;
    let filterdata=userdata.filter((user)=>user.name==name);
    resp.send(filterdata);
});

app.listen(3200);