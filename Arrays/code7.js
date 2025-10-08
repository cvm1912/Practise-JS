//  write a program that print all the even number in an array 

let array = [1,2,3,4,5,6,7,8,9,10];
for(let i=1;i<array.length;i++)
{
    if(array[i]%2==0){
        console.log(array[i]);
    }
}