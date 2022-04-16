function sorts(a,b){
	return a-b
}
var math=Math
group=[18,7,8,12,9,20];
group.sort(sorts);
for(n=0;n<group.length;n++){
	console.log(group[n]);
}
