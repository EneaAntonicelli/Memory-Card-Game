(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"RedBarrel",image:"./images/redbarrel.png",occupation:"Pyro",location:"Ireland"},{id:2,name:"GoldBeard",image:"./images/goldbeard.png",occupation:"Blacksmith",location:"Sweden"},{id:3,name:"Dagger",image:"./images/dagger.png",occupation:"First line melee warrior",location:"Gallapagos"},{id:4,name:"Dragon",image:"./images/dragon.png",occupation:"Burning villages",location:"Azeroth"},{id:5,name:"BlueMinion",image:"./images/blueminion.png",occupation:"Smasher",location:"The cloud Isles"},{id:6,name:"Cannon",image:"./images/cannon.png",occupation:"Second line long range warrior",location:"England"},{id:7,name:"Bombardier",image:"./images/bombardier.png",occupation:"Bombardier",location:"Norway"},{id:8,name:"DragonRider",image:"./images/dragonrider.png",occupation:"Third line aerial company",location:"Skandinavia"},{id:9,name:"ArmoredKnight",image:"./images/armoredknight.png",occupation:"Slasher",location:"Mines of Moria"},{id:10,name:"FireDragon",image:"./images/firedragon.png",occupation:"Guard dragon",location:"Mordor"},{id:11,name:"Hammer",image:"./images/hammer.png",occupation:"Pirate",location:"The Seven Seas"},{id:12,name:"Gnome",image:"./images/gnome.png",occupation:"Thief",location:"Land of Ur"},{id:13,name:"Goblin",image:"./images/goblin.png",occupation:"Gold horder",location:"The Underworld"},{id:14,name:"HelmetHorn",image:"./images/helmethorn.png",occupation:"Raider",location:"The Eigth Tower"},{id:15,name:"RedBeard",image:"./images/redbeard.png",occupation:"Drunk",location:"The Lonely Tavern"},{id:16,name:"Skelly",image:"./images/skelly.png",occupation:"Ordinance Specialist",location:"The Battlefield of the Dead"},{id:17,name:"TheKing",image:"./images/theking.png",occupation:"King",location:"The Kingdom"},{id:18,name:"Rocktroll",image:"./images/rocktroll.png",occupation:"Eating",location:"The Mountain Caverns"}]},,,function(e,a,n){e.exports=n(28)},,,,,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(2),i=n.n(o),c=(n(14),n(3)),l=n(4),s=n(7),m=n(5),g=n(8),d=(n(16),function(e){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center bg-primary"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"YOU LOST."),r.a.createElement("p",{className:"lead"},"I am not sure about your skill level but... Here is your score:",r.a.createElement("span",null,e.loserScore)),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.playAgain()}},"Play Again?")))}),u=(n(18),function(e){return r.a.createElement("div",{className:"img-container",onClick:function(){return e.clickCard(e.id)}},r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:e.name,src:e.image})))}),p=(n(20),function(e){return r.a.createElement("div",{className:"wrapper"},e.children)}),h=(n(22),function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://salty-mountain-26362.herokuapp.com/"},"Portfolio")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://github.com/EneaAntonicelli"},"GitHub"))),r.a.createElement("h5",{className:"score"},"Score: ",e.score),r.a.createElement("h5",{className:"highScore"},"High Score: ",e.highScore)))}),v=(n(24),function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"text-muted"},"\xa9 Enea Antonicelli")))}),f=n(6),b=(n(26),function(e){function a(){var e,n;Object(c.a)(this,a);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={cards:f,score:0,cardArray:[],highScore:0,message:"",gameover:!1,loserScore:0},n.playAgain=function(){n.setState({score:0,message:"",cardArray:[],gameover:!1,loserScore:0})},n.clickCard=function(e){n.setState({cards:n.shuffle(n.state.cards)}),-1===n.state.cardArray.indexOf(e)?(n.state.cardArray.push(e),n.state.cardArray.length>5&&(n.state.cardArray.shift(),console.log("card array over 5: "+n.state.cardArray)),n.setState({cardArray:n.state.cardArray,message:"And another. - DJ Khaled",score:n.state.score+1,loserScore:n.state.score+1,gameover:!1}),n.state.score>=n.state.highScore&&n.setState({highScore:n.state.score+1}),console.log("card array: "+n.state.cardArray)):(n.setState({loserScore:n.state.loserScore,score:0,cardArray:[],message:"It's over. leave.",gameover:!0}),n.state.score>n.state.highScore&&n.setState({highScore:n.state.score}))},n.shuffle=function(e){var a,n,t;for(t=e.length-1;t>0;t--)a=Math.floor(Math.random()*(t+1)),n=e[t],e[t]=e[a],e[a]=n;return e},n.renderContent=function(){return!1===n.state.gameover?n.state.cards.map(function(e){return r.a.createElement(u,{id:e.id,key:e.id,clickCard:n.clickCard,name:e.name,image:e.image})}):r.a.createElement(d,{playAgain:n.playAgain,loserScore:n.state.loserScore})},n}return Object(g.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(h,{score:this.state.score,highScore:this.state.highScore}),this.renderContent(),r.a.createElement(v,null))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.70493010.chunk.js.map