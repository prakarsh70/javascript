function palindrome (num)
{
var num,temp,a,b=0;
temp=num;
while(temp>0)
{
  a=temp%10;
  b=(10*b)+a;
  temp=parseInt(temp/10);
}
if(b===num)
{
  return 1;
}
else
{
  return 0;
}
}
var i,j,mul,ans=0;
for(i=999;i>99;i--)
{
  for(j=999;j>99;j--)
  {
    mul=i*j;
    if(palindrome(mul)===1 && mul>ans )
    {
      ans=mul;
    }
  }
}
console.log(ans);
