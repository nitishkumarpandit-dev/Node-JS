const mybiodata={
    name:"nitish",
    age: 18,
    class: "btech",
    address: "saket",
}

// console.log(mybiodata.name);
// console.log(jsonConvert.age);

// const objdata= JSON.parse(jsonConvert);
// console.log(objdata);
// console.log(objdata.name);

const jsonConvert= JSON.stringify(mybiodata);

const fs = require('fs');

fs.writeFile('newfile.json', jsonConvert, ()=>{
    console.log("file created!");
})

fs.readFile("newfile.json","utf-8", (err, data)=>{
    console.log(data);
    const objdata= JSON.parse(data);
    console.log(objdata);
})


