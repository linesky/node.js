var math=Math
group=[-2,-1,0,1,2];
pare=[];
notpare=[];

for(n in group){
	if(math.floor(group[n]/2)*2==group[n]){
		pare=pare+[group[n]];
	}else{
		notpare=notpare+[group[n]]
	}
		
}
console.log(pare);
console.log(notpare);
