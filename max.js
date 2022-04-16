var math=Math
d=0.00
group=[-2.2,-1,0,1.1,2];
d=group[0]
for(n in group){
	if(group[n]>d){
		d=group[n];
	}	
}
console.log(d)
