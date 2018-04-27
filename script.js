var n = 6
n = parseInt(n);
if ((n%2==0)&&(n!=2)) 
     console.log("False");
else if (n==2)
     console.log("True");
else{ 
     k = Math.round(Math.sqrt(n));
     flag = false;
        for (i=2; i<k+1; i++)
        if (n%i==0)
        {
          console.log("False");
          flag = true;
          break;
         }
            
     if (flag == false)
       console.log("True");
}
