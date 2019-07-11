$(()=>{

    // var temp = [{
    //     name:'kimi0',
    //     age: 4
    // },{
    //     name:'kimi1',
    //     age: 4
    // },{
    //     name:'kimi2',
    //     age: 4
    // }];

    // for(let a=0;a<temp.length;++a){
    //     console.log(temp[a]);
    // }

    users = new ControllerCuentaV01("./db.txt");
    users.execute()
    // console.log(users);

})