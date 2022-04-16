group=[-2,-1,0,1,2];
negative=[];
positive=[];

for(n in group){
	if(group[n]<0){
		negative=negative+[group[n]];
	}else{
		positive=positive+[group[n]]
	}
		
}
console.log(positive);
console.log(negative);
