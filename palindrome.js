function palindrome (num)
{
temp=num;
while(temp>0)
{
  a=temp%10;
  b=(10*b)+a;
  temp=parseInt(temp/10);
}
if(temp===num)
{
  return 1;
}
else
{
  return 0;
}
}
var num,num1,temp,a,b=0,i,j,mul;
for(i=999;i>99;i--)
{
  for(j=999;j>99;j--)
  {
    mul=i*j;
    if(palindrome(mul)===1)
    {
      console.log(mul);
    }
  }
}