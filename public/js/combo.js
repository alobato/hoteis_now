function mudaCidade() {
    var i;
    qualestado = document.frmBusca.estado.options[document.frmBusca.estado.selectedIndex].value;
    optCidade = document.frmBusca.cidade.options;
    
	if (qualestado != '-') {
		while (optCidade.length > 0)
		    optCidade[0] = null;

    
	    //optCidade[0] = new Option('Agora selecione aqui','');
		if (qualestado == 'ac') {
		    var cidades = new Array('Todas as Cidades','Rio Branco');
		    var valores = new Array('','rio-branco');
		}
		if (qualestado == 'al') {
		    var cidades = new Array('Todas as Cidades','Barra de Santo Antônio','Barra de São Miguel','Maceió','Maragogi','Praia do Francês');
		    var valores = new Array('','barra-de-santo-antonio','barra-de-sao-miguel','maceio','maragogi','praia-do-frances');
		}
		if (qualestado == 'am') {
		    var cidades = new Array('Todas as Cidades','Acajatuba','Careiro','Manaus');
		    var valores = new Array('','acajatuba','careiro','manaus');
	    }
		if (qualestado == 'ap') {
		    var cidades = new Array('Todas as Cidades','Borba','Macapá');
		    var valores = new Array('','borba','macapa');
		}
		if (qualestado == 'ba') {
		    var cidades = new Array('Todas as Cidades','Amargosa','Arembepe','Arraial da Ajuda','Barra','Barra Grande','Barreiras','Bom Jesus da Lapa','Cachoeira','Cairú','Camamu','Canavieiras','Caravelas','Chapada Diamantina','Costa do Sauípe','Cumuruxatiba','Eunápolis','Feira de Santana','Ibotirama','Ilha de Boipeba','Ilha de Itaparica','Ilhéus','Imbassaí','Itabuna','Itacaré','Mangue Seco','Mata de São João','Morro de São Paulo','Porto Seguro','Praia do Forte','Prado','Salvador','Santa Cruz Cabrália','Trancoso');
		    var valores = new Array('','amargosa','arembepe','arraial-da-ajuda','barra','barra-grande','barreiras','bom-jesus-da-lapa','cachoeira','cairu','camamu','canavieiras','caravelas','chapada-diamantina','costa-do-sauipe','cumuruxatiba','eunapolis','feira-de-santana','ibotirama','ilha-de-boipeba','ilha-de-itaparica','ilheus','imbassai','itabuna','itacare','mangue-seco','mata-de-sao-joao','morro-de-sao-paulo','porto-seguro','praia-do-forte','prado','salvador','santa-cruz-cabralia','trancoso');
        }
		if (qualestado == 'ce') {
		    var cidades = new Array('Todas as Cidades','Aquiraz','Aracati','Beberibe','Camocim','Canoa Quebrada','Caponga','Cascavel','Caucaia','Cumbuco','Fortaleza','Guaramiranga','Jericoacoara','Pacoti','Paracuru','Quixeceramobim');
            var valores = new Array('','aquiraz','aracati','beberibe','camocim','canoa-quebrada','caponga','cascavel','caucaia','cumbuco','fortaleza','guaramiranga','jericoacoara','pacoti','paracuru','quixeceramobim');
		}
		if (qualestado == 'df') {
		    var cidades = new Array('Todas as Cidades','Brasília','Luziânia','Sobradinho');
		    var valores = new Array('','brasilia','luziania','sobradinho');
		}
		if (qualestado == 'es') {
		    var cidades = new Array('Todas as Cidades','Alegre','Anchieta','Cachoeiro do Itapemirim','Conceição da Barra','Domingos Martins','Flores da Cunha','Guarapari','Iriri','Jacaraípe','Marataízes','Piúma','São Mateus','Serra','Vargem Alta','Vila Velha','Vitória');
		    var valores = new Array('','alegre','anchieta','cachoeiro-do-itapemirim','conceicao-da-barra','domingos-martins','flores-da-cunha','guarapari','iriri','jacaraipe','marataizes','piuma','sao-mateus','serra','vargem-alta','vila-velha','vitoria');
		}    
		if (qualestado == 'go') {
		    var cidades = new Array('Todas as Cidades','Alexânia','Alto Paraíso de Goiás','Anápolis','Caldas Novas','Catalão','Goiânia','Guapó','Lagoa Santa','Pirenópolis','Rio Quente','Rio Verde');
            var valores = new Array('','alexania','alto-paraiso-de-goias','anapolis','caldas-novas','catalao','goiania','guapo','lagoa-santa','pirenopolis','rio-quente','rio-verde');
		}
		if (qualestado == 'ma') {
		    var cidades = new Array('Todas as Cidades','Alcântara','Balsas','Barreirinhas','Imperatriz','São Luís');
            var valores = new Array('','alcantara','balsas','barreirinhas','imperatriz','sao-luis');
		}
		if (qualestado == 'mg') {
		    var cidades = new Array('Todas as Cidades','Aiuruoca','Alfenas','Alto Caparaó','Araguari','Araxá','Barbacena','Belo Horizonte','Betim','Boa Esperança','Caeté','Caldas','Cambuquira','Campanha','Campo Belo','Carandaí','Carrancas','Cataguases','Caxambu','Conceição do Ibitipoca','Congonhas','Conselheiro Lafaiete','Cordisburgo','Cruzília','Curvelo','Delfim Moreira','Delfinópolis','Diamantina','Divinópolis','Extrema','Gonçalves','Governador Valadares','Ibitipoca','Ipatinga','Itamonte','Itanhandu','Itatiaiuçu','Ituiutaba','Juiz de Fora','Lambari','Lavras','Lavras Novas','Marliéria','Monte Sião','Monte Verde','Montes Claros','Ouro Preto','Passa Quatro','Passos','Patos de Minas','Pirapora','Poços de Caldas','Ponte Nova','Pouso Alegre','Pouso Alto','Sabará','São João Del Rei','São Lourenço','São Tomé das Letras','Serra da Canastra','Serra do Cipó','Uberaba','Tiradentes','Uberlândia');
            var valores = new Array('','aiuruoca','alfenas','alto-caparao','araguari','araxa','barbacena','belo-horizonte','betim','boa-esperanca','caete','caldas','cambuquira','campanha','campo-belo','carandai','carrancas','cataguases','caxambu','conceicao-do-ibitipoca','congonhas','conselheiro-lafaiete','cordisburgo','cruzilia','curvelo','delfim-moreira','delfinopolis','diamantina','divinopolis','extrema','goncalves','governador-valadares','ibitipoca','ipatinga','itamonte','itanhandu','itatiaiucu','ituiutaba','juiz-de-fora','lambari','lavras','lavras-novas','marlieria','monte-siao','monte-verde','montes-claros','ouro-preto','passa-quatro','passos','patos-de-minas','pirapora','pocos-de-caldas','ponte-nova','pouso-alegre','pouso-alto','sabara','sao-joao-del-rei','sao-lourenco','sao-tome-das-letras','serra-da-canastra','serra-do-cipo','uberaba','tiradentes','uberlandia');
		}
		if (qualestado == 'ms') {
		    var cidades = new Array('Todas as Cidades','Aquidauana','Bodoquena','Bonito','Campo Grande','Corumbá','Coxim','Dourados','Naviraí','Pantanal de Miranda','Ponta Porã','Porto Murtinho');
            var valores = new Array('','aquidauana','bodoquena','bonito','campo-grande','corumba','coxim','dourados','navirai','pantanal-de-miranda','ponta-pora','porto-murtinho');
		}
		if (qualestado == 'mt') {
		    var cidades = new Array('Todas as Cidades','Alta Floresta','Barra do Garças','Cáceres','Chapada dos Guimarães','Cuiabá','Rondonópolis','Várzea Grande');
            var valores = new Array('','alta-floresta','barra-do-garcas','caceres','chapada-dos-guimaraes','cuiaba','rondonopolis','varzea-grande');
		}
		if (qualestado == 'pa') {
	    	var cidades = new Array('Todas as Cidades','Ajurutena','Algodoal','Altamira','Belém','Ilha de Marajó','Salinópolis');
    		var valores = new Array('','ajurutena','algodoal','altamira','belem','ilha-de-marajo','salinopolis');
		}
		if (qualestado == 'pb') {
		    var cidades = new Array('Todas as Cidades','Cabaceiras','Campina Grande','Conde','João Pessoa','Praia Bela');
    		var valores = new Array('','cabaceiras','campina-grande','conde','joao-pessoa','praia-bela');
		}
		if (qualestado == 'pe') {
		    var cidades = new Array('Todas as Cidades','Arcoverde','Cabo de Santo Agostinho','Cabo do Santo','Caruaru','Fernando de Noronha','Garanhuns','Gravatá','Igarassu','Ipojuca','Jaboatão dos Guararapes','Olinda','Porto de Galinhas','Recife');
            var valores = new Array('','arcoverde','cabo-de-santo-agostinho','cabo-do-santo','caruaru','fernando-de-noronha','garanhuns','gravata','igarassu','ipojuca','jaboatao-dos-guararapes','olinda','porto-de-galinhas','recife');
		}
		if (qualestado == 'pi') {
		    var cidades = new Array('Todas as Cidades','Parnaíba','Piripiri','São João do Piauí','Teresina');
            var valores = new Array('','parnaiba','piripiri','sao-joao-do-piaui','teresina');
		}
		if (qualestado == 'pr') {
		    var cidades = new Array('Todas as Cidades','Antonina','Apucarana','Arapongas','Balsa Nova','Bocaiúva do Sul','Caiobá','Campina Grande do Sul','Campo Mourão','Cascavel','Castro','Colombo','Cornélio Procópio','Curitiba','Foz do Iguaçu','Guarapuava','Guaraqueçaba','Guaratuba','Londrina','Maringá','Paranaguá','Ponta Grossa');
            var valores = new Array('','antonina','apucarana','arapongas','balsa-nova','bocaiuva-do-sul','caioba','campina-grande-do-sul','campo-mourao','cascavel','castro','colombo','cornelio-procopio','curitiba','foz-do-iguacu','guarapuava','guaraquecaba','guaratuba','londrina','maringa','paranagua','ponta-grossa');
		}
		if (qualestado == 'rj') {
		    var cidades = new Array('Todas as Cidades','Angra dos Reis','Araruama','Areal','Armação de Búzios','Arraial do Cabo','Barra do Piraí','Barra Mansa','Cabo Frio','Cachoeiras de Macacu','Campos dos Goitacazes','Casimiro de Abreu','Conservatória','Cantagalo','Duque de Caxias','Engenheiro Passos','Eng. Paulo de Frontin','Guapimirim','Ilha Grande','Itacuruçá','Itaguaí','Itatiaia','Macaé','Mangaratiba','Maricá','Mendes','Miguel Pereira','Niterói','Nova Friburgo','Paraíba do Sul','Paraty','Penedo','Petrópolis','Quissamã','Raposo','Resende','Rio das Ostras','Rio de Janeiro','São Pedro da Aldeia','Saquarema','Teresópolis','Três Rios','Valença','Vassouras','Visconde de Mauá');
		    var valores = new Array('','angra-dos-reis','araruama','areal','armacao-de-buzios','arraial-do-cabo','barra-do-pirai','barra-mansa','cabo-frio','cachoeiras-de-macacu','campos-dos-goitacazes','casimiro-de-abreu','conservatoria','cantagalo','duque-de-caxias','engenheiro-passos','eng.-paulo-de-frontin','guapimirim','ilha-grande','itacuruca','itaguai','itatiaia','macae','mangaratiba','marica','mendes','miguel-pereira','niteroi','nova-friburgo','paraiba-do-sul','paraty','penedo','petropolis','quissama','raposo','resende','rio-das-ostras','rio-de-janeiro','sao-pedro-da-aldeia','saquarema','teresopolis','tres-rios','valenca','vassouras','visconde-de-maua');
		}
		if (qualestado == 'rn') {
		    var cidades = new Array('Todas as Cidades','Baía Formosa','Mossoró','Natal','Praia da Pipa');
            var valores = new Array('','baia-formosa','mossoro','natal','praia-da-pipa');
		}
		if (qualestado == 'ro') {
		    var cidades = new Array('Todas as Cidades','Ariquemes','Colorado do Oeste','Ouro Preto do Oeste','Porto Velho','Vilhena');
            var valores = new Array('','ariquemes','colorado-do-oeste','ouro-preto-do-oeste','porto-velho','vilhena');
		}
		if (qualestado == 'rr') {
		    var cidades = new Array('Todas as Cidades','Boa Vista');
		    var valores = new Array('','boa-vista');
		}
		if (qualestado == 'rs') {
		    var cidades = new Array('Todas as Cidades','Antônio Prado','Bagé','Bento Gonçalves','Camaquã','Cambará do Sul','Canela','Canoas','Capão da Canoa','Cassino','Caxias do Sul','Erechim','Farroupilha','Flores da Cunha','Fredirico Westphalen','Garibaldi','Ijuí','Gramado','Gravataí','Maquiné','Nova Petrópolis','Nova Prata','Pelotas','Porto Alegre','Rio Grande','Santa Cruz do Sul','Santa Maria','Santana do Livramento','São José dos Ausentes','Vacaria');
		    var valores = new Array('','antonio-prado','bage','bento-goncalves','camaqua','cambara-do-sul','canela','canoas','capao-da-canoa','cassino','caxias-do-sul','erechim','farroupilha','flores-da-cunha','fredirico-westphalen','garibaldi','ijui','gramado','gravatai','maquine','nova-petropolis','nova-prata','pelotas','porto-alegre','rio-grande','santa-cruz-do-sul','santa-maria','santana-do-livramento','sao-jose-dos-ausentes','vacaria');
	    }
		if (qualestado == 'sc') {
		    var cidades = new Array('Todas as Cidades','Araranguá','Balneáreo Camboriú','Barra Velha','Blumenau','Bom Jardim da Serra','Bombinhas','Brusque','Chapecó','Criciúma','Florianópolis','Garopaba','Gravatal','Guarda do Embaú','Imbituba','Itajaí','Itapema','Joinville','Laguna','Palhoça','Penha','Piçarras','Piratuba','Pomerode','Praia do Rosa','Rio Negrinho','Santo Amaro da Imperatriz');
            var valores = new Array('','ararangua','balneareo-camboriu','barra-velha','blumenau','bom-jardim-da-serra','bombinhas','brusque','chapeco','criciuma','florianopolis','garopaba','gravatal','guarda-do-embau','imbituba','itajai','itapema','joinville','laguna','palhoca','penha','picarras','piratuba','pomerode','praia-do-rosa','rio-negrinho','santo-amaro-da-imperatriz');
		}
		if (qualestado == 'se') {
		    var cidades = new Array('Todas as Cidades','Aracaju','Estância');
            var valores = new Array('','aracaju','estancia');
		}
		if (qualestado == 'sp') {
		    var cidades = new Array('Todas as Cidades','Águas da Prata','Águas de Lindóia','Águas de Santa Bárbara','Águas de São Pedro','Alphaville','Altinópolis','Americana','Amparo','Analândia','Andradina','Aparecida','Araçatuba','Araçoiaba da Serra','Araraquara','Araras','Assis','Atibaia','Avaré','Bananal','Barra Bonita','Barretos','Batatais','Bauru','Bebedouro','Bertioga','Boituva','Botucatu','Bragança Paulista','Brotas','Cabreúva','Cachoeira Paulista','Campina do Monte Alegre','Campinas','Campos do Jordão','Cananéia','Capão Bonito','Caraguatatuba','Catanduva','Cunha','Diadema','Dourado','Embu','Franca','Guararema','Guaratinguetá','Guarujá','Guarulhos','Holambra','Ibirá','Ibitinga','Iguape','Ilha Comprida','Ilhabela','Iporanga','Itanhaém','Itu','Jaguariúna','Jarinú','Joanópolis','Limeira','Lins','Marília','Monte Alegre do Sul','Nazaré Paulista','Olímpia','Osasco','Ourinhos','Paraibuna','Peruíbe','Piedade','Pindamonhangaba','Piracaia','Piracicaba','Piraju','Praia Grande','Presidente Prudente','Ribeirão Preto','Santa Bárbara do Oeste','Santo Antônio do Pinhal','Santos','São Bernardo do Campo','São Caetano do Sul','São Carlos','São Francisco Xavier','São José do Barreiro','São José do Rio Preto','São José dos Campos','São Paulo','São Pedro','São Roque','São Sebastião','Serra Negra','Socorro','Sorocaba','Taubaté','Ubatuba');
            var valores = new Array('','aguas-da-prata','aguas-de-lindoia','aguas-de-santa-barbara','aguas-de-sao-pedro','alphaville','altinopolis','americana','amparo','analandia','andradina','aparecida','aracatuba','aracoiaba-da-serra','araraquara','araras','assis','atibaia','avare','bananal','barra-bonita','barretos','batatais','bauru','bebedouro','bertioga','boituva','botucatu','braganca-paulista','brotas','cabreuva','cachoeira-paulista','campina-do-monte-alegre','campinas','campos-do-jordao','cananeia','capao-bonito','caraguatatuba','catanduva','cunha','diadema','dourado','embu','franca','guararema','guaratingueta','guaruja','guarulhos','holambra','ibira','ibitinga','iguape','ilha-comprida','ilhabela','iporanga','itanhaem','itu','jaguariuna','jarinu','joanopolis','limeira','lins','marilia','monte-alegre-do-sul','nazare-paulista','olimpia','osasco','ourinhos','paraibuna','peruibe','piedade','pindamonhangaba','piracaia','piracicaba','piraju','praia-grande','presidente-prudente','ribeirao-preto','santa-barbara-do-oeste','santo-antonio-do-pinhal','santos','sao-bernardo-do-campo','sao-caetano-do-sul','sao-carlos','sao-francisco-xavier','sao-jose-do-barreiro','sao-jose-do-rio-preto','sao-jose-dos-campos','sao-paulo','sao-pedro','sao-roque','sao-sebastiao','serra-negra','socorro','sorocaba','taubate','ubatuba');
		}
		if (qualestado == 'to') {
		    var cidades = new Array('Todas as Cidades','Araguaína','Gurupi');
            var valores = new Array('','araguaina','gurupi');
		}
		if (qualestado == 'ar') {
    		var cidades = new Array('Todas as Cidades','Argentina');
    		var valores = new Array('','argentina');
		}
		if (qualestado == 'pt') {
		    var cidades = new Array('Todas as Cidades','Portugal');
    		var valores = new Array('','portugal');
		}
	
		for (i = 0; i < cidades.length; i++)
		    optCidade[optCidade.length] = new Option(cidades[i], valores[i]);
	}
	else {
	    while (optCidade.length > 0)
	        optCidade[0] = null;

	    optCidade[0] = new Option('Selecione primeiro o Estado','');
	}
}

function ok() {

    document.frmBusca.cidade.options[0].selected = true;
    document.frmBusca.cidade.options[0].selected = false;
    document.frmBusca.estado.options[0].selected = true;
    document.frmBusca.estado.options[0].selected = false;
    
    document.frmBusca.estado.options[1].selected = true;
    document.frmBusca.estado.options[0].selected = true;
}

var bclicado = false;

function formSubmit() {

	if (document.frmBusca.estado.value == "-"){
		alert("Selecione o Estado para pesquisa.");
		document.frmBusca.estado.focus();
		return;
	}
	if (document.frmBusca.cidade.value == "-"){
		alert("Selecione a Cidade para pesquisa.");
		document.frmBusca.cidade.focus();
		return;
	}
	if (bclicado == false){
		document.frmBusca.action="busca.aspx";
		document.frmBusca.submit();
		bclicado = true;
	}
	else {
		alert("Aguarde... Processo em andamento.");
	}
}