const workerpool=require("workerpool");

function thing()
{
    var count=0;
    for (var x=0;x<500000000000000;x++)
    {
        count++;
    }

    console.log("done1");
}

function thing2()
{

    var count=0;
    for (var x=0;x<5000000000000;x++)
    {
        count++;
    }

    console.log("done3");
}

workerpool.worker({
    thing,
    thing2
});