class Cipher{
	
	constructor(password, index, suffix){
		let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		let numeric      = ['0','1','2','3','4','5','6','7','8','9'];
		let numericAlpha = ['o','i','l','e','a','s','g','z','b','j'];
		
		this.password = password;
		this.index = index;
		this.suffix = suffix;
	}

	encrypt(){
		let spaces = /\s/g; //Representa todos os espacos
		// newMessage = message.replace(spaces, '').split(''); //Tirando espaços e separando em letras
	
		console.log(this.password);
		console.log(this.index);
		console.log(this.suffix);
		/*
			1 - Quebrar em espaços
			2 - Pegar sempre a primeira letra
			3 - Substituir por números
			4 - Pegar o índice
			5 - Adiciona o sufixo mais um no índice 
		*/

		/*newMessage.forEach(char => {
			switch (typeof(newMessage[i])) {
				case "number":
					for (var k = 0; k < numeric.length; k++) {
						if(newMessage[i] == numeric[k]){
							if(numeric[k + key] == undefined){
								var total = k + key;
								var diferent = total - numeric.length;
								encrypt += numeric[diferent];
								k = numeric.length;
							}
							else{
								encrypt += numeric[k + key];
								k = numeric.length;
							}
						}						
					}
					break;
				case "string":
					for (var j = 0; j < alphabet.length; j++) {
						if(newMessage[i] == alphabet[j]){
							if(alphabet[j + key] == undefined){
								var total = j + key;
								var diferent = total - alphabet.length;
								encrypt += alphabet[diferent];
								j = alphabet.length;
							}
							else{
								encrypt += alphabet[j + key];
								j = alphabet.length;
							}
						}
					}
					break;
			
				default:
					break;
			}
		})*/

	}

}

export default Cipher;