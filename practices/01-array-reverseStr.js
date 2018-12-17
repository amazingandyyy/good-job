// "Hi My name is Andrei"
// "ierdnA si eman yM iH"

function reverse(str) {
	if(str.length < 2) return str;
	if(!str || typeof str !== 'string') return 'hmm bad!';

 const backwards = [];
	for(let i = str.length; i >= 0; i--){
		backwards.push(str[i]);
	}
	return backwards.join('');
}
const str = "Hi My name is Andrei";
console.log(reverse(str));