if("undefined"==typeof AddShoppersLoader){var AddShoppersLoader={rev:{"widget.js":"ebeca0b","widget.css":"1751e6a","wall.js":"9c1a834","wall.css":"ccb5178","raf.js":"4f88cde","raf.css":"b9e1df6"},lang:{de_DE:"?v=c5c124e",es_MX:"?v=b30d57f",el_GR:"?v=a5b1c86",fr_FR:"?v=b607353",nl_NL:"?v=5e83427",pt_BR:"?v=3efcfd9",no_NO:"?v=542ad36",ru_RU:"?v=e55b6a6",ro_RO:"?v=04863df",
sv_SE:"?v=e264d01",tr_TR:"?v=04ed7b3",cs_CZ:"?v=68d8244",it_IT:"?v=351638d"},load:function(b,c){var a=document.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.readyState?a.onreadystatechange=function(){if("loaded"==a.readyState||"complete"==a.readyState)a.onreadystatechange=null,c&&c.apply(AddShoppersLoader)}:(a.onload=function(){c&&c.apply(AddShoppersLoader)},a.onerror=function(){c&&c.apply(AddShoppersLoader)});a.src=b;document.getElementsByTagName("head")[0].appendChild(a)},
init:function(){var b="https:"==document.location.protocol,c=b?"https://d3rr3d0n31t48m.cloudfront.net":"http://cdn.shop.pe",a=(b?"https://":"http://")+"shop.pe/",d=(b?"https://":"http://")+"addshoppers.s3.amazonaws.com";this.load(c+"/widget/widget.js?v="+this.rev["widget.js"],function(){document.getElementById("AddShoppersWall")&&this.load(a+"/plugins/discovery_wall/wall.min.js?v="+this.rev["wall.js"]);document.getElementById("AddShoppersRefer")&&this.load(d+"/plugins/raf/build/raf.min.js?v="+this.rev["raf.js"])});
b=document.createElement("link");b.rel="stylesheet";b.type="text/css";b.href=c+"/widget/widget.css?v="+this.rev["widget.css"];document.getElementsByTagName("head")[0].appendChild(b)}};AddShoppersLoader.init()};
