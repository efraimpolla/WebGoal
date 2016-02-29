var agenda = [];

var qtd = '';
var numeros = '';

var corrente = null;
var prox = null;

//0123456789 
//1123456789 
//01254566
//1234
//11233s
var tamanho = 0;

var adicionaNaAgenda = function()
{
	var qtd = $("#qtd").val();
	var numeros = $("#numeros").val().trim();
	var vet = numeros.split(",");
	
	vet.sort();
	tamanho = vet[0].length;
	
	var raiz = vet[0];
	for (var i = 1; i < qtd; i++)
	{

		var raiz = vet[i-1];
		var temp = vet[i];
		
	    soma(raiz, temp);

	}
	
	alert("Quantidade usada: " + tamanho);
}
function soma (raiz,temp)
{
	for (var j = 0; j <= temp.length;j++)
		{
				if (temp[j] == raiz[j] )
					continue;
				else 
				{
					var restante = temp.length - j;
					tamanho  = tamanho + restante;
					break;
				}
		}
	
}