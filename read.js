var fs=require("fs")
function sorts(a,b){
	return a-b
}
group=[]
datta=fs.readFileSync("data.txt")
s=datta.toString().split(",")
for (n=0;n<s.length;n++){
	group.push(parseFloat(s[n]))
}
for (n=0;n<group.length;n++){
	console.log(group[n])
}
