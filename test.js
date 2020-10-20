async function runCode(){
    console.log(1);
    await new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(2);
            resolve();
        }, 3000);
    });
    console.log(3);
}

runCode();