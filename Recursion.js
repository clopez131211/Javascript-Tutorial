function isEven(x)
{
    if (x % 2 == 0 || x == 1)
    {
        return true;
    }
    else (x == 0 || x % 2 != 0)
    {
        return false;
    }

}

console.log(isEven(50));