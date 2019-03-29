class Cipher{
	constructor(){
		let newMessage = [];
		let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		let numeric      = ['0','1','2','3','4','5','6','7','8','9'];
		let numericAlpha = ['o','i','l','e','a','s','g','z','b','j'];
		let key = 1; //Gera uma chave randomica entre 1 e 10 (Considera a quantidade de números)
		let encrypt = '';
		// let key = Math.floor((Math.random() * 10) + 1); //Gera uma chave randomica entre 1 e 10 (Considera a quantidade de números)
	}

	encrypt(){
		let spaces = /\s/g; //Representa todos os espacos
		newMessage = message.replace(spaces, '').split(''); //Tirando espaços e separando em letras
	
		// newMessage = ""

		/*
			1 - Adiantar uma casa (mbebdpodsfup32 | ibsszqpuufs2618)
			2 - Trocar por números
			3 - Adicionar sufixo
		*/

		newMessage.forEach(char => {
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
		})
	}

}

export default Cipher;