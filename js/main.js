var characters = [];
var encounters = [];
var currentEncounter = [];
var savedEncounter = [];
$(document).ready(function(){
	
	$('.tabs').tabs();
	
	pullCharacters();
	pullEncounters();
	
	$('#characters').off().on('click',function(){
		pullCharacters();
	});
	
	$('.controlgroup').controlgroup();
	$('input[name="entityType"]').checkboxradio({
    	icon: false
    });
	
});

function charactersView() {
	$('#charactersTab').html('');
	for(i=0;i<characters.length;++i){
		var c = characters[i];
		$('#charactersTab').append(characterDiv.format(c.name,c.type,c.class,c.background,c.player,c.alignment,
			c.str,c.dex,c.con,c.int,c.wis,c.cha,c.level,
			calculateBonus(c.str),calculateBonus(c.dex),calculateBonus(c.con),calculateBonus(c.int),calculateBonus(c.wis),calculateBonus(c.cha),
			calculateBonus(c.dex),i,i)
		);
	}
	
	$( ".accordion" ).accordion({active: false,collapsible: true});
} 

function characterEdit(index) {
	var edit = false;
	if(index >= 0) {
		edit = true;
	}
}

function calculateBonus(baseStat) {
	return statBonuses[baseStat];
}

function pullCharacters() {
	$.ajax({
    	type: "GET" ,
    	url: "xml/characters.xml" ,
    	dataType: "xml" ,
    	success: function(xml) {
    		characters = [];
	    	$(xml).find('character').each(function(){
     			characters.push(new Character($(this)));  
    		}); 
    		charactersView();
    	}       
	});
}

function pullEncounters() {
	$.ajax({
    	type: "GET" ,
    	url: "xml/encounters.xml" ,
    	dataType: "xml" ,
    	success: function(xml) {
	    	$(xml).find('encounter').each(function(){
     			encounters.push(new Encounter($(this),characters));  
    		}); 
    	}       
	});
}

statBonuses={'1':'-5','2':'-4','3':'-4','4':'-3','5':'-3','6':'-2','7':'-2','8':'-1','9':'-1','10':'0','11':'0','12':'+1','13':'+1','14':'+2','15':'+2','16':'+3','17':'+3','18':'+4','19':'+4','20':'+5','21':'+5','22':'+6','23':'+6','24':'+7','25':'+7','26':'+8','27':'+8','28':'+9','29':'+9','30':'+10'};

characterDiv='<div class="character accordion">'+
				'<h3 class="name" data-id="{20}">{0}</h3>'+
				'<div class="characterInner" style="display:none;" data-id="{21}">'+
					'<div class="basic">'+
						'<div class="basicInner">Type<div>{1}</div></div>'+
						'<div class="basicInner">Class<div>{2} ({12})</div></div>'+
						'<div class="basicInner">Background<div>{3}</div></div>'+
						'<div class="basicInner">Player<div>{4}</div></div>'+
						'<div class="basicInner">Alignment<div>{5}</div></div>'+
					'</div>'+
					'<div class="stats">'+
						'<div class="statsInner">STR<div>{6} ({13})</div></div>'+
						'<div class="statsInner">DEX<div>{7} ({14})</div></div>'+
						'<div class="statsInner">CON<div>{8} ({15})</div></div>'+
						'<div class="statsInner">INT<div>{9} ({16})</div></div>'+
						'<div class="statsInner">WIS<div>{10} ({17})</div></div>'+
						'<div class="statsInner">CHA<div>{11} ({18})</div></div>'+
					'</div>'+
					'<div class="bonuses">'+
						'<div class="bonusesInner">Initiative<div>{19}</div></div>'+
					'</div>'+
				'</div>'+
			'</div>';

String.prototype.format = function() {
  a = this;
  for (k in arguments) {
    a = a.replace("{" + k + "}", arguments[k]);
  }
  return a;
};