var start;
var end;
function range(start, end)
{
    const num =[];
    for(let i = start; i < end + 1; i++ )
    {
        num.push(i); 
    }
    return num;
}
{
    function sum(start, end)
    {
        const num =[];
        let sums = 0;
        for(let i = start; i < end + 1; i++ )
    {
        sums += i; 
    }
    return sums;
    }
}

console.log(range(1, 5));

console.log(sum(1, 10));