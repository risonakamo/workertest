const workerpool=require("workerpool");

const thingWorkers=workerpool.pool("./things.js");

async function main()
{
    thingWorkers.exec("thing");
    thingWorkers.exec("thing2");
    console.log("done2");
    thingWorkers.terminate();
}

main();