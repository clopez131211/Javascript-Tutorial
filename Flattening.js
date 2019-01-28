let arrays = [[1, 2, 3], [4, 5], [6]];

fuction reduce(array, combine, start)
{
    let current = start; 
    for(let element of array)
    {
        current = combine(current, element);
    }
    return current;
}

