
let n=100;
for ( i = 1; i <n;i++ )
{
    if(i%3===0 && i%5 !== 0){
        document.write("Fizz ");
        continue;
    }else if(i%5===0 && i%3 !==0){
        document.write("Buzz ");
        continue;
    } if (i % 3===0 && i%5===0){
        document.write("FizzBuzz ");
        continue;
    }
    document.write(i + " ");
}