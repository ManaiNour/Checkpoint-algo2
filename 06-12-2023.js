var a=[3,1,7,9]
var b=[2,4,1,9,3]
var som=0


for (let i=0; i<a.length; i++) {
    var test=false 
    for (let j=0; j<b.length; j++){
        if (a[i]==b[j])
        {
            test=true
        }
    }
    if (test==false){
        som=som+a[i]
    }
}

for (let i=0; i<b.length; i++) {
    var test=false 
    for (let j=0; j<a.length; j++){
        if (a[j]==b[i])
        {
            test=true
        }
    }
    if (test==false){
        som=som+b[i]
    }
}

console.log(som)
