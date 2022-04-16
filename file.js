var fs=require("fs")
function sorts(a,b){
	return a-b
}
group=[]
for (n=0;n<10;n++){
	group.push(Math.floor(Math.random()*50))
}
group.sort(sorts)
fs.writeFile("data.txt",group)
for (n=0;n<group.length;n++){
	console.log(group[n])
}
