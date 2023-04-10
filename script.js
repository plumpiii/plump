var a=Array();
a[0]="meow";
a[1]="john";
a[2]="julie";
a[3]="Jim";
a[4]="LISA";
a[5]="jimin";

for( var i=0; i<a.length; i++){
    if(a[i].charAt(0)==='J'||  a[i].charAt(0)==='j'){
        console.log("GOODBYE "+a[i])
    }
    else{
        console.log("hello "+a[i])
    }
}