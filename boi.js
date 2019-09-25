const workerpool=require("workerpool");

const thingWorkers=workerpool.pool("./things.js");

async function main()
{
    thingWorkers.exec("thing");
    thingWorkers.exec("thing2");
    console.log("done2");
    thingWorkers.terminate();
}

async function main2()
{
    var arrayofstuff=[];
    for (var x=0;x<10;x++)
    {
        arrayofstuff.push(thingWorkers.exec("thing3"));
    }

    Promise.all(arrayofstuff).then((res)=>{
        console.log(res);
        thingWorkers.terminate();
    });

    console.log("done2");
}

// main();
main2();