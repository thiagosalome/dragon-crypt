class Cipher{
	
	constructor(password, index, suffix){
		this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		this.numeric      = ['0','1','2','3','4','5','6','7','8','9'];
		this.numericAlpha = ['o','i','l','e','a','s','g','z','b','j'];
		this.password = password;
		this.index = index;
		this.suffix = suffix;
	}

	encrypt(){
		let message = this.password;
		let matches = message.match(/\b(\w)/g);
		let newMessage = matches.join('');

		for (let i = 0; i < this.numericAlpha.length; i++) {
			let regex = new RegExp(this.numericAlpha[i], "g");
			newMessage = newMessage.replace(regex, this.numeric[i]);
		}

		let nextLetter = '';
		let indexLetter = '';
		for (let i = 0; i < this.suffix.length; i++) {
			indexLetter = this.alphabet.indexOf(this.suffix[i].toLowerCase())
			if(indexLetter !== -1){
				nextLetter += this.alphabet[indexLetter + 1] !== undefined ? this.alphabet[indexLetter + 1] : nextLetter += this.alphabet[0]
			}
			else{
				alert("O sufixo deve conter apenas letras do alfabeto.")
				return
			}
		}

		return newMessage.substr(0, (parseInt(this.index) + 1)) + nextLetter.toUpperCase() + newMessage.substr((parseInt(this.index) + 1), newMessage.length)
		
		/*
			1 - Quebrar em espaços
			2 - Pegar sempre a primeira letra
			3 - Substituir por números
			4 - Pegar o índice
			5 - Adiciona o sufixo mais um no índice 
		*/
	}

}

export default Cipher;