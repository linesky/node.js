var math=Math
group=[-2.2,-1,0,1.1,2];
integer=[];
notinteger=[];

for(n in group){
	if(math.floor(group[n])==group[n]){
		integer=integer+[group[n]];
	}else{
		notinteger=notinteger+[group[n]]
	}
		
}
console.log(integer);
console.log(notinteger);
