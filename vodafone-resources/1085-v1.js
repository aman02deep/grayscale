window._st=window._st||function(){_st.q.push(arguments)};window._st.q=window._st.q||window._stq||[];window._stq=window._st.q;
(function(){_stq.unshift(["setSiteId",1085]);var a=document.location;a.hostname.split(".");for(var b=[],a=a.pathname.split("/"),c=1;c<a.length;c++)""!==a[c]&&b.push(a[c]);0===b.length&&b.push("homepage");_stq.unshift(["setDefaultPageStructure",b.join("|")]);b="(.*.)?ziggo.nl (.*.)?ziggo.com (.*.)?ziggo.tv (.*.)?clubziggo.nl (.*.)?thuisbijdegroot.nl (.*.)?dekrachtvanziggo.nl (.*.)?ziggozakelijk.nl (.*.)?ziggosporttotaal.nl (.*.)?sport1.nl".split(" ");a=!1;for(c=0;c<b.length;c++)if(null!==document.domain.match(b[c])){a=
!0;break}a?_stq.unshift(["setEnvironment","prod"]):null!==document.domain.match("(.*.)?uat.upc.biz")?_stq.unshift(["setEnvironment","test"]):_stq.unshift(["setEnvironment","jit"]);_stq.unshift(["addInitCallback",function(){var a=_st.util.getUrlParam("_svDebugEnv");0<=["live","test","prod"].indexOf(a)&&(_st.settings.environmentOverride=a,_st.util.setCookie("_svDebugEnv",a))}]);try{-1!==document.location.href.indexOf("www.ziggo.nl/zakelijk/shop/")&&_stq.unshift(["setStructureFilter",function(){var a=
["shop|business|sales2|fixed"],b=_st.settings;return a=b.pageStructure&&0<b.pageStructure.length?a.concat(b.pageStructure):a.concat(b.defaultPageStructure)}])}catch(e){}})();
(function(){_st.settings={siteId:void 0,cookieDomain:"",dataCookieName:"_svs",dataCookieTtl:730,trackUrl:"t.svtrd.com",tagsUrl:"tdn.r42tag.com",dataUrl:"tdn.r42tag.com/data",forceHttps:!1,environment:"prod",environmentOverride:void 0,pageStructure:[],structurePrefix:[],defaultPageStructure:[],structureFilter:void 0,sharedPermissionKey:void 0,dcRate:void 0};_st.core={version:13,_tags:[],_deferredTags:[],_experiments:[],_tagsReady:!1,_tagsLoading:!1,_tagsExecuting:!1,_deferredQueue:[],_listeners:[],
_initializers:[],_sandboxCtx:{},init:function(a){for(var b=0;b<this._initializers.length;b++)this._initializers[b]();this._processQueue(a)},_processQueue:function(a){var b;for(a.push=function(a){_st.core._handleQueueCommand(a)};0<a.length;)b=a.shift(),this._handleQueueCommand(b)},_filterSelectionDependentTags:function(a,b){for(var c=[],e=_st.expressions,f=0;f<a.length;f++){var g=a[f];if(!g.loaded){var h=g[e._CONDITION_PROPERTY];if(h){var k=e._parseCondition(h.condition);c.push({tag:g,condition:k,
cacheSeconds:h.cacheSeconds})}}}return c},_handleQueueCommand:function(a){var b,c,e,f,g=_st.settings;b=_st.cookiepermission;var h=_st.data;c=_st.debug;e=_st.event;if(this._tagsLoading)this._deferredQueue.push(a);else switch(a[0]){case "addInitCallback":a[1]();break;case "setTagsUrl":g.tagsUrl=a[1];break;case "setAdsUrl":g.adsUrl=a[1];break;case "setTrackUrl":g.trackUrl=a[1];break;case "addTagsLoadedCallback":this.registerTagsReadyListener(a[1]);break;case "setDebug":c.enabled=a[1];break;case "setSiteId":g.siteId=
a[1];break;case "setEnvironment":g.environment=a[1];break;case "setCookieDomain":g.cookieDomain=a[1];break;case "setStructureFilter":g.structureFilter=a[1];break;case "setStructurePrefix":if(1<a.length)for(g.structurePrefix=[],b=1;b<a.length;b++)g.structurePrefix.push(a[b]);break;case "setPageStructure":if(1<a.length){c=[];for(b=1;b<a.length;b++)f=a[b].split("|"),c=c.concat(f);g.pageStructure=c}break;case "setDefaultPageStructure":if(1<a.length){c=[];for(b=1;b<a.length;b++)f=a[b].split("|"),c=c.concat(f);
g.defaultPageStructure=c}break;case "setDataCookieName":g.dataCookieName=a[1];break;case "setDataCookieTtl":g.dataCookieTtl=a[1];break;case "setSharedPermissionKey":g.sharedPermissionKey=a[1];break;case "setPermissionOverride":b._override=a[1];break;case "setPermissionCallback":b._callback=a[1];break;case "setTagProperty":case "addTagProperty":h.setProperty(a[1],a[2]);break;case "setLocalTagProperty":case "addLocalTagProperty":h.setLocalProperty(a[1],a[2]);break;case "addLocalArrayProperty":h.addLocalArrayProperty(a[1],
a[2]);break;case "setTagProperties":case "addTagProperties":e=a[1];for(f in e)e.hasOwnProperty(f)&&h.setProperty(f,e[f]);break;case "setLocalTagProperties":case "addLocalTagProperties":e=a[1];for(f in e)e.hasOwnProperty(f)&&h.setLocalProperty(f,e[f]);break;case "loadTags":if(2<=a.length){c=[];for(b=1;b<a.length;b++)if("string"===typeof a[b])c=c.concat(a[b].split("|"));else if("object"===typeof a[b])for(f in e=a[b],e)e.hasOwnProperty(f)&&h.setProperty(f,e[f]);g.pageStructure=c}this.loadTags();return!0;
case "resetTag":case "resetTags":this._tagsReady=!1;this._tags=[];this._experiments=[];g.pageStructure=[];h.resetProperties();h.setProperty("reset",1);e._listeners=[];e._backlog=[];break;case "publishEvent":e.publish(a[1],a[2],a[3]);break;case "setConversion":case "setConversionValue":case "addConversionProduct":case "setTransactionId":case "setEngagement":case "setEngagementType":case "setEngagementContent":case "addCustomProperty":case "trackPageview":case "trackInPageEvent":case "resetEventSettings":case "partnerSync":case "setForwardedIdentifier":_st.tracking.handleCommand(a);
break;default:c.log("Unhandled command in queue: "+a[0],c.warnLvl)}},loadTags:function(){var a=[],b,c,e,f;f=document;var g=_st.settings,h=_st.debug,k=g.sharedPermissionKey;this._tagsLoading=!0;b=this.getPageStructureString();a.push(["s",b]);k&&a.push(["scp",k]);k=_st.data._tagProperties;for(c in k)k.hasOwnProperty(c)&&a.push(["p",c+":"+k[c]]);a.push(["u",f.location]);a.push(["r",f.referrer]);a.push(["cb",(new Date).getTime()]);var m=this.getEnvironment();e="live"===m?_st.debug._url+"/external":(g.forceHttps?
"https://":"//")+g.tagsUrl;e+="/tags-"+g.siteId+"/"+m;for(c=0;c<a.length;c++)e=0===c?e+"?":e+"\x26",e+=a[c][0]+"\x3d"+encodeURIComponent(a[c][1]);2E3<e.length&&(e=e.substr(0,2E3));a=f.createElement("script");a.async=!0;a.type="text/javascript";a.src=e;f=f.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f);h.log("Tags loaded for environment '"+m+"' with path '"+b+"' and remote properties: {}",h.debugLvl,[k])},insertTags:function(a){this._tags=a.tags;this._experiments=a.experiments;_st.cookiepermission._sharedPermission=
a.cookiePerm;"undefined"!==typeof a.dataCollectionRate&&(_st.settings.dcRate=parseFloat(a.dataCollectionRate/100).toFixed(2));a=this._collectData();var b=this._filterSelectionDependentTags(this._tags,a);this._deferredTags=this._deferredTags.concat(b.reverse());0<this._deferredTags.length&&_st.expressions._requestData(this._deferredTags);this.executeTags(a);this._tagsReady=!0;var b=this._listeners,c;for(c in b)if(b.hasOwnProperty(c))b[c]();this._tagsLoading=!1;c=this._deferredQueue;this._deferredQueue=
[];for(b=0;b<c.length;b++)this._handleQueueCommand(c[b]);if(a)_st.exec.onload(function(){_st.core.sendDataCollections()})},executeTags:function(a){var b=_st.debug;if(this._tagsExecuting)b.log("Warning recursion detected on the executeTags function, call blocked",b.errorLvl);else{this._tagsExecuting=!0;for(var b=this._tags,c=0;c<b.length;c++){var e=b[c];e.loaded||e[_st.expressions._CONDITION_PROPERTY]||this._execTag(e,a)}this._tagsExecuting=!1}},_execTag:function(a,b){var c=_st.util,e=_st.debug,f=
_st.cookiepermission.getCookiePreferences(),g=function(a,b,c){_st.event.subscribe(b,c,a)},h=function(a){return function(){try{var c=arguments;(function(){this.matchedCategory=c[0];this.matchedEvent=c[1];this.data=c[2];eval(a.content+"\r\n")})();a.loaded=!0}catch(f){e.log("Can't execute tag "+a.id+": [Content: "+a.content+"]. Exception:"+f,e.errorLvl),a.error=f,b&&_st.core.sendErrorMessage(a)}}},k=function(a,b){var c=_st.core._sandboxCtx[a.id]={};c.tag=a;c.errorHandler=function(c,f,g,h,k){e.log("Can't execute tag "+
a.id+": [Content: "+a.content+"]. Error: "+c+" (url: "+f+", line: "+g+")",e.errorLvl);a.error={message:c+" (url: "+f+", line: "+g+")",error:k};b&&_st.core.sendErrorMessage(a);return!0};return function(){_st.util.sandboxEval("window.onerror \x3d window.parent._st.core._sandboxCtx["+a.id+"].errorHandler;\n"+a.content+";\nwindow.parent._st.core._sandboxCtx["+a.id+"].tag.loaded \x3d true;")}},m=function(a){return function(){try{c.globalEval(a.content+"\r\n"),a.loaded=!0}catch(f){e.log("Can't execute tag "+
a.id+": [Content: "+a.content+"]. Exception:"+f,e.errorLvl),a.error=f,b&&_st.core.sendErrorMessage(a)}}};if(this._hasPermission(f,a))if(this._matchesExperiment(a))if(this._checkMarker(a)){var l,n;"async"===a.exec?l=_st.exec.async:"onready"===a.exec?l=_st.exec.onready:"onload"===a.exec?l=_st.exec.onload:"delayed"===a.exec?l=_st.exec.delayed:"event"===a.exec?(l=g,n=h(a)):"sandbox"===a.exec&&(l=_st.exec.onready,n=k(a,b));"undefined"===typeof n&&(n=m(a));"undefined"!==typeof l?l(n,a.execValue,a.execValue2):
n()}else f="Tag "+a.id+" not loaded because user lacks marker '"+a.markerCondition+"'",e.log(f,e.debugLvl),a.debug=f;else f="Tag "+a.id+" not loaded because user is not in experiment group",e.log(f,e.debugLvl),a.debug=f;else f="Tag "+a.id+" not loaded because there is no permission",e.log(f,e.debugLvl),a.debug=f},getEnvironment:function(){var a=_st.settings;return a.environmentOverride?a.environmentOverride:a.environment},getPageStructureString:function(){var a=this.getPageStructure();return a?a.join("|"):
""},getPageStructure:function(){var a,b=_st.settings;a=b.pageStructure&&0<b.pageStructure.length?b.structurePrefix.concat(b.pageStructure):b.structurePrefix.concat(b.defaultPageStructure);b=b.structureFilter;"function"===typeof b&&(a=b(a));return a},pathEndsWith:function(a){var b=this.getPageStructure();return b[b.length-1]==a},registerInitializer:function(a){this._initializers.push(a)},registerTagsReadyListener:function(a){this._listeners.push(a)},isTagsReady:function(){return this._tagsReady},sendErrorMessage:function(a){var b=
encodeURIComponent,c=_st.settings,e=(c.forceHttps?"https://":"//")+c.trackUrl+"/tag-error",e=e+("?s\x3d"+b(document.location)+"\x26si\x3d"+c.siteId+"\x26ti\x3d"+a.id+"\x26tv\x3d"+a.version+"\x26dcr\x3d"+c.dcRate+"\x26err\x3d"+b(a.error||"")+"\x26sp\x3d"+b(this.getPageStructureString())+"\x26env\x3d"+this.getEnvironment());(new Image).src=e},sendDataCollections:function(){var a=_st.settings,b=(a.forceHttps?"https://":"//")+a.trackUrl+"/structure-collection",a={si:a.siteId,dcr:a.dcRate,env:this.getEnvironment(),
sp:this.getPageStructureString(),s:document.location,p:_st.data.getPropertyNames(),lp:_st.data.getLocalPropertyNames()};this._makePost(b,a)},_makePost:function(a,b){var c=document.getElementById("sv-iframe-id");c&&c.parentElement.removeChild(c);var c=_st.inject.iframe("about:blank",{id:"sv-iframe-id",name:"sv-iframe"}),e=document.createElement("form");e.action=a;e.method="POST";e.target=c.name;var f=function(a,b,c){var e=document.createElement("input");e.type="hidden";e.name=b;e.value=c;a.appendChild(e)},
g;for(g in b)if(b.hasOwnProperty(g))if(b[g]instanceof Array)for(var h=0;h<b[g].length;h++)f(e,g,b[g][h]);else f(e,g,b[g]);f=null;c.contentDocument?f=c.contentDocument:c.contentWindow&&(f=c.contentWindow.document);if(f&&f.body){f.body.appendChild(e);try{e.submit()}catch(k){_st.debug.log("Failure while sending data collection"+k,_st.debug.infoLvl)}}},_hasPermission:function(a,b){var c,e;if(!b.group)return!0;c=a[b.group];e="undefined"===typeof c&&!0===b.loadDefault;return c&&!b.groupReverse||e||"undefined"!==
typeof c&&!c&&b.groupReverse},_checkMarker:function(a){a=a.markerCondition;if(!a||"[]"===a)return!0;try{a=eval("("+a+")");for(var b=0;b<a.length;b++)for(var c=a[b],e=c.groupName,f=0;f<c.markers.length;f++)if(!_st.data.getMarker(e,c.markers[f]))return!1;return!0}catch(g){return!1}},_matchesExperiment:function(a){var b,c,e,f,g,h;b=a.experimentId;a=a.experimentGroupId;h=_st.data;if("undefined"===typeof b||"undefined"===typeof a)return!0;c=h.getUserData().e||{};if("undefined"===typeof c[b]){e=this._buildExpModel(b);
f=Math.random();for(g=0;g<e.length;g++)if(e[g].weight>=f){c[b]={group:e[g].id,sent:!1};_st.debug.log("Users enters experimentGroup "+g+" for experiment "+b,_st.debug.debugLvl);break}h.getUserData().e=c;h.saveUserData()}return c[b]&&c[b].group==a},_buildExpModel:function(a){var b,c,e,f,g=[],h;b=this._experiments;for(c=0;c<b.length;c++){var k=b[c].groups;if(b[c].id==a&&k){for(e=f=0;e<k.length;e++)f+=k[e].weight;for(e=h=0;e<k.length;e++)h+=k[e].weight/f,g.push({id:k[e].id,weight:h})}}return g},_collectData:function(){var a=
_st.settings.dcRate;return a?a>=100*Math.random():!1}};_st.util={version:8,_domExtr:void 0,randomUuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})},wrapInOnlyOnce:function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},globalEval:function(a){var b=window;(b.execScript||function(a){b.eval.call(b,a)})(a)},encodeJson:function(a){if("object"===typeof JSON&&JSON.stringify)return JSON.stringify(a);
var b=typeof a;if("object"!=b||null===a)return"string"==b&&(a='"'+a+'"'),String(a);var c,e,f=[],g=a&&a.constructor==Array;for(c in a)e=a[c],b=typeof e,"string"==b?e='"'+e+'"':"object"==b&&null!==e&&(e=_st.util.encodeJson(e)),f.push((g?"":'"'+c+'":')+String(e));return(g?"[":"{")+String(f)+(g?"]":"}")},decodeJson:function(a){if("object"===typeof JSON&&JSON.parse)return JSON.parse(a);eval("var d\x3d"+a+";");return d},hasCookieSupport:function(){var a=document,b=navigator,c=b.cookieEnabled;if("undefined"===
typeof c||"Microsoft Internet Explorer"===b.appName&&c)a.cookie="_svcktest\x3dtrue",c=-1!=a.cookie.indexOf("_svcktest");return c},getCookie:function(a){var b=document.cookie.split(";");a+="\x3d";for(var c=0;c<b.length;c++){for(var e=b[c];" "==e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(a))return b=e.substring(a.length,e.length),window.opera&&(b=decodeURIComponent(b)),b}},setCookie:function(a,b,c,e){var f=document;if(c){var g=new Date;g.setTime(g.getTime()+864E5*c);c="; expires\x3d"+g.toGMTString()}else c=
"";e=e?e:_st.settings.cookieDomain;""===e&&(e=f.domain,e.match("([0-9]+.)+")||(g=e.lastIndexOf("."),0<g&&(g=e.lastIndexOf(".",g-1),e=0<g?e.substring(g):"."+e)));window.opera&&(b=encodeURIComponent(b));f.cookie=a+"\x3d"+b+c+"; path\x3d/; domain\x3d"+e},eraseCookie:function(a,b){this.setCookie(a,"",-1,b)},getRefParam:function(a){return this._getParam(document.referrer,a)},getUrlParam:function(a){return this._getParam(window.location.href,a)},getElement:function(a,b){var c=this.getElements(a,b);return"undefined"!==
typeof c&&0<c.length?c[0]:void 0},getElements:function(a,b){var c=b||document;return"document"==a?[c]:"window"==a?[window]:"string"===typeof a?"undefined"!==typeof this._domExtr?this._domExtr(a):"undefined"!==typeof c.querySelectorAll?c.querySelectorAll(a):"undefined"!==typeof jQuery?jQuery(a):"#"===a.charAt(0)?[c.getElementById(a.substr(1))]:c.getElementsByTagName(a):[a]},removeDiacrites:function(a){var b={A:/[\300-\306]/g,a:/[\340-\346]/g,E:/[\310-\313]/g,e:/[\350-\353]/g,I:/[\314-\317]/g,i:/[\354-\357]/g,
O:/[\322-\330]/g,o:/[\362-\370]/g,U:/[\331-\334]/g,u:/[\371-\374]/g,N:/[\321]/g,n:/[\361]/g,C:/[\307]/g,c:/[\347]/g},c;for(c in b)b.hasOwnProperty(c)&&(a=a.replace(b[c],c));return a},onEvent:function(a,b,c){if(a)if(a.length)for(var e=0;e<a.length;e++)this.onEvent(a[e],b,c);else e=function(){c.apply(a,arguments)},a.addEventListener?a.addEventListener(b,e,!1):a.attachEvent&&a.attachEvent("on"+b,e);else _st.debug.log("Cannot bind "+b+" event to undefined element",_st.debug.errorLvl)},extend:function(a,
b){if(b)for(var c in b)"undefined"!==typeof b[c]&&(a[c]=b[c]);return a},sandboxEval:function(a,b){var c=document.createElement("iframe");(c.frameElement||c).style.cssText="display: none; width: 0; height: 0";/MSIE[ ]+6/.test(navigator.userAgent)?c.src="javascript:false":c.src="about:blank";document.body.appendChild(c);var e,f,g;g=c.contentWindow;try{e=g.document}catch(h){f=document.domain,c.src="javascript:var d\x3ddocument.open();d.domain\x3d'"+f+"';void(0);",e=g.document}c='\x3cbody onload\x3d"document._stInit(); '+
a.replace(/"/g,"\x26quot;")+'"\x3e\x3c/body\x3e';e.open()._stInit=function(){f&&(this.domain=f);g._st=_st.util.extend({},_st);g._st.inject=_st._injectConstructor(g,e)};e.write(c);e.close()},cachebuster:function(){return(new Date).getTime()},_getParam:function(a,b){if(!b)return"";b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c=RegExp("[\\?\x26]"+b+"\x3d([^\x26#]*)").exec(a);return null===c?"":c[1]}};_st.cookiepermission={version:2,_sharedPermission:void 0,_override:void 0,_callback:void 0,getCookiePreferences:function(){return"function"===
typeof this._override?this._override():_st.data.getUserData().c||{}},setCookiePreferences:function(a){var b=_st.data.getUserData();b.c=a;b.ct=(new Date).getTime();_st.data.saveUserData();"function"===typeof this._callback&&this._callback(a)},syncCookiePreferences:function(a){var b=_st.settings;if("undefined"!==typeof b.sharedPermissionKey){var c="//"+b.tagsUrl+"/perm/"+b.siteId+"/"+b.environment,c=c+("?ck\x3d"+b.sharedPermissionKey+"\x26cv\x3d"+_st.util.encodeJson(a));(new Image).src=c}},getPopupViewCount:function(){return _st.data.getUserData().v||
0},setPopupViewCount:function(a){_st.data.getUserData().v=a;_st.data.saveUserData()}};_st.counter={version:4,call:function(a){var b=_st.settings;a="//"+b.tagsUrl+"/stats?siteId\x3d"+b.siteId+"\x26counterId\x3d"+a+"\x26cb\x3d"+_st.util.cachebuster();_st.inject.pixel(a)}};_st.data={version:10,_tagProperties:{},_localTagProperties:{},_userData:{},init:function(){var a,b,c,e,f,g,h;c=_st.util;f=_st.debug;if(h=c.getCookie(_st.settings.dataCookieName)){try{h=decodeURIComponent(h)}catch(k){f.log("Failed to URI decode user cookie: "+
h)}try{b=c.decodeJson(h)}catch(m){f.log("Unable to read user cookie with value: "+h),b={}}}else b={};if(b.m)for(g in c=b.m,h=(new Date).getTime(),c)if(c.hasOwnProperty(g))for(e in f=c[g],f)f.hasOwnProperty(e)&&f[e]<h&&(a=!0,delete f[e]);this._userData=b;a&&this.saveUserData()},getUserData:function(){return this._userData},saveUserData:function(){var a=_st.util,b=_st.settings,c=a.encodeJson(this._userData),c=encodeURIComponent(c);a.setCookie(b.dataCookieName,c,b.dataCookieTtl)},getMarker:function(a,
b){return((this._userData.m||{})[a]||{})[b]},getMarkers:function(a){var b=this._userData.m||{};return"undefined"===typeof a?b:b[a]},setMarker:function(a,b,c){var e=this._userData.m||{};e[a]=e[a]||{};e[a][b]=c;this._userData.m=e;this.saveUserData()},removeMarker:function(a,b){var c=this._userData.m||{};delete (c[a]||{})[b];this._userData.m=c;this.saveUserData()},resetMarkers:function(a){this._userData.m&&("undefined"===typeof a?this._userData.m={}:delete this._userData.m[a],this.saveUserData())},getProperty:function(a,
b){return this._localTagProperties.hasOwnProperty(a)?this._localTagProperties[a]:this._tagProperties.hasOwnProperty(a)?this._tagProperties[a]:"undefined"!==typeof b?b:""},setLocalProperty:function(a,b){this._localTagProperties[a]=b},addLocalArrayProperty:function(a,b){var c=this._localTagProperties[a];"undefined"===typeof c&&(c=[]);c.push(b);this._localTagProperties[a]=c},setProperty:function(a,b){this._tagProperties[a]=b},resetProperties:function(){this._tagProperties={};this._localTagProperties=
{}},resetRemoteProperties:function(){this._tagProperties={}},getPropertyNames:function(){return this._parseProps(this._tagProperties)},getLocalPropertyNames:function(){return this._parseProps(this._localTagProperties)},_parseProps:function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c);return b}};_st.expressions={_CONDITION_PROPERTY:"r42.conditions",init:function(){var a=_st.segmenting=_st.segmenting||{};a.data=a.data||{};a.listeners=a.listeners||[];a.listeners.push(function(){for(var a=
_st.core,b=a._deferredTags,c=b.length-1;0<=c;c--){var h=b[c];h.condition.evaluate()&&(a._execTag(h.tag,_st.settings.dcRate),b.splice(c,1))}});var b=function(a){this.args=a||[]};b.prototype.evaluate=function(){for(var a=this.args,b=0;b<a.length;b++)if(a[b].evaluate())return!0;return!1};b.prototype.facts=function(){for(var a=[],b=this.args,c=0;c<b.length;c++)a=a.concat(b[c].facts());return a};this.OR=b;var c=function(a){this.args=a||[]};c.prototype.evaluate=function(){for(var a=this.args,b=0;b<a.length;b++){var c=
a[b].evaluate();if("undefined"===typeof c||!1===c)return!1}return!0};c.prototype.facts=b.prototype.facts;this.AND=c;b=function(a){this.fact=a};b.prototype.evaluate=function(){if(a&&a.data){var b=a.data[this.fact];return"undefined"===typeof b?b:!1!==b}return!1};b.prototype.facts=function(){return[this.fact]};this.CONCRETE=b;b=function(a){this.value=a};b.prototype.evaluate=function(){var a=this.value.evaluate();return"undefined"===typeof a?a:!a};b.prototype.facts=function(){return this.value.facts()};
this.NOT=b},_requestData:function(a){function b(a,b){var c=_st.settings,h=_st.tracking.getUserIdentifier(),c="//"+c.dataUrl+"/segment/"+c.siteId+"/"+h+"/";"undefined"!==typeof b&&0!==b&&(c+="cached-"+b+"/");return c+=a.join()}a=function(a){for(var b={withCache:{},noCache:[]},c=0;c<a.length;c++){var h=a[c].condition,k=a[c].cacheSeconds||0;if(h)for(var h=h.facts(),m=0;m<h.length;m++){var l=h[m];0===k&&-1===b.noCache.indexOf(l)?(b.noCache.push(l),delete b.withCache[l]):-1<b.noCache.indexOf(l)||"undefined"!==
typeof b.withCache[l]&&k>=b.withCache[l].cacheSeconds||(b.withCache[l]={selectionName:l,cacheSeconds:k})}}return b}(a);for(var c in a.withCache)_st.inject.script(b([a.withCache[c].selectionName],a.withCache[c].cacheSeconds));0<a.noCache.length&&_st.inject.script(b(a.noCache,0))},_parseCondition:function(a){if("OR"==a.nodeType){for(var b=[],c=0;c<a.nodes.length;c++)b.push(this._parseCondition(a.nodes[c]));return new this.OR(b)}if("AND"==a.nodeType){b=[];for(c=0;c<a.nodes.length;c++)b.push(this._parseCondition(a.nodes[c]));
return new this.AND(b)}return"NOT"==a.nodeType?new this.NOT(this._parseCondition(a.node)):"CONCRETE"==a.nodeType?new this.CONCRETE(a.selectionName):null}};_st.core.registerInitializer(function(){_st.data.init();_st.expressions.init()});_st.debug={version:8,_url:"https://admin.relay42.com",_css:"#r42Sticky { background-color : #fff; bottom : 5px; position : fixed; width : 145px; font-family: Calibri, Arial, Helvetica, sans-serif; text-align: center; height : 52px; left : 0px; margin: 5px; cursor:pointer;  z-index: 99999;} #r42StickyBar { background-color : #33b062; color : white; font-size : 12px; font-weight:bold; padding:2px; }#r42StickyBar.r42Live { background-color : #f0ad4e; font-size : 14px; }#r42Status { border: 2px solid #66CD00; padding:4px 4px 0px 4px;}#r42Status.r42StatusError { border: 2px solid #EE3B3B; }",
logs:[],debugLvl:1,infoLvl:2,warnLvl:3,errorLvl:4,useConsole:!0,enabled:!1,enable:function(){this.window?this.window.drawWindow():_st.inject.script(this._url+"/external/tagmanagement/debugWindow?siteId\x3d"+_st.settings.siteId+"\x26environment\x3d"+_st.core.getEnvironment()+"\x26cb\x3d"+_st.util.cachebuster(),{callback:function(){_st.debug.window.drawWindow()}})},log:function(a,b,c){var e=window.console;this.logs.push({msg:a,args:c});e&&(this.enabled||"undefined"!==typeof b&&b>=this.warnLvl)&&this.useConsole&&
(e.debug?e.debug(a):e.log&&e.log(a))},init:function(){var a=_st.util,b=window,c=a.getCookie("_svDebugEnv");c&&(_st.settings.environmentOverride=c);(a.getCookie("_svDebug")||"live"===c)&&_st.core.registerTagsReadyListener(function(){_st.exec.onready(function(){_st.debug.drawSticky()})});a.getCookie("_svDebugLog")&&(this.enabled=!0);a=function(a){a.data.r42Ping?a.source.postMessage({r42Pong:!0,pageStructure:_st.core.getPageStructure()},"*"):a.data.r42DebugEnable&&_st.debug.enable()};try{b.addEventListener?
addEventListener("message",a,!1):b.attachEvent&&attachEvent("onmessage",a)}catch(e){}},drawSticky:function(){var a=document;if(null==a.getElementById("r42Sticky")){_st.inject.css(this._css);var b='\x3cdiv id\x3d"r42Sticky"\x3e'+this._stickyContent()+"\x3c/div\x3e";_st.inject.html(b);setInterval(function(){null!==document.getElementById("r42Sticky")&&(document.getElementById("r42Sticky").innerHTML=_st.debug._stickyContent())},3E3);a.getElementById("r42Sticky").onclick=function(){_st.debug.enable()}}},
_stickyContent:function(){for(var a=0,b=0,c=_st.core._tags,e=0;e<c.length;e++)!0===c[e].loaded?a++:c[e].error&&b++;c=_st.settings.environmentOverride;c='\x3cdiv id\x3d"r42StickyBar"'+("live"===c?' class\x3d"r42Live"':"")+'"\x3e'+("live"===c?"Live Mode":"Relay42 Status")+'\x3c/div\x3e\x3cdiv id\x3d"r42Status" ';return c=(0<b?c+('class\x3d"r42StatusError"\x3e'+b+(1==b?" Error":" Errors")):c+("\x3e"+a+" Scripts Loaded"))+"\x3c/div\x3e"}};_st.core.registerInitializer(function(){_st.debug.init()});_st.dom=
{version:4,_iSizzle:function(){var a=function(){},b=a.getText=function(a){var e,f="",g=0;if(e=a.nodeType)if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)f+=b(a)}else{if(3===e||4===e)return a.nodeValue}else for(;e=a[g];g++)f+=b(e);return f};return a}(),getValue:function(a,b){var c=_st.util.getElement(a,b);return c?c.value?c.value:this._iSizzle.getText(c):""}};_st.event={version:5,_listeners:[],_backlog:[],publish:function(a,b,c){_st.core.isTagsReady()?
this._processEvent(a,b,c):this._backlog.push({category:a,eventName:b,data:c})},subscribe:function(a,b,c){this._listeners.push({category:a,eventName:b,callback:c,fired:0,failed:0})},_processBacklog:function(){for(var a,b=this._backlog;0<b.length;)a=b.shift(),this._processEvent(a.category,a.eventName,a.data)},_processEvent:function(a,b,c){var e=this._listeners,f=_st.debug;f.log("Received event for category '"+a+"' with eventName '"+b+"' and data: {}",f.debugLvl,[c]);"/"!==a.charAt(a.length-1)&&(a+=
"/");for(var g=0;g<e.length;g++){var h=e[g],k=h.category;""!==k&&"/"!==k.charAt(k.length-1)&&(k+="/");k=a.substring(0,k.length)===k;if((b==h.eventName||""===h.eventName)&&k)try{h.fired++,h.callback(a,b,c)}catch(m){h.failed++,f.log("Error while executing listener for category "+a+" and event "+b+" ("+m+")",f.errorLvl)}}}};_st.core.registerTagsReadyListener(function(){_st.event._processBacklog()});_st.exec={version:3,async:function(a){setTimeout(a,1)},delayed:function(a,b){setTimeout(a,b)},onready:function(a){function b(){try{document.documentElement.doScroll("left")}catch(a){setTimeout(b,
10);return}c()}var c,e,f=window,g=document;if("complete"===g.readyState)_st.exec.async(a);else if(c=_st.util.wrapInOnlyOnce(a),g.addEventListener)e=function(){g.removeEventListener("DOMContentLoaded",e,!1);c()},g.addEventListener("DOMContentLoaded",e,!1),f.addEventListener("load",c,!1);else if(g.attachEvent){e=function(){"complete"===g.readyState&&(g.detachEvent("onreadystatechange",e),c())};g.attachEvent("onreadystatechange",e);f.attachEvent("onload",c);a=!1;try{a=null==f.frameElement}catch(h){}g.documentElement.doScroll&&
a&&b()}},onload:function(a){"undefined"==typeof document.readyState?setTimeout(a,2E3):"complete"==document.readyState?a():_st.exec._attachOnload(a)},_attachOnload:function(a){var b=window;if(b.addEventListener)b.addEventListener("load",a,!1);else if(b.attachEvent)b.attachEvent("onload",a);else{var c=b.onload;b.onload=function(){a();"undefined"!==typeof c&&c()}}}};_st._injectConstructor=function(a,b){return{version:6,_docWrite:{captured:!1,original:b.write,target:"body",buffer:[],refCount:0},script:function(a,
e){e=_st.util.extend({callback:void 0,docWrite:!1,selector:"body",id:void 0,attributes:void 0},e);var f,g,h,k;f=b.getElementsByTagName("head")[0];g=b.createElement("script");g.type="text/javascript";e&&(g.id=e.id);if(k=e.attributes)for(h in k)k.hasOwnProperty(h)&&g.setAttribute(h,k[h]);var m="function"===typeof e.callback;e.docWrite?(this._captureDocWrite(e.selector),this._attachOnLoaded(g,function(){_st.inject._flushDocWrite();m&&e.callback()})):m&&this._attachOnLoaded(g,e.callback);g.src=a;f.appendChild(g);
return g},style:function(a,e){e=_st.util.extend({id:void 0,attributes:void 0},e);var f,g,h;f=b.createElement("link");f.rel="stylesheet";e.id&&(f.id=e.id);if(h=e.attributes)for(g in h)h.hasOwnProperty(g)&&f.setAttribute(g,h[g]);f.href=a;b.getElementsByTagName("head")[0].appendChild(f);return f},css:function(a){var e=b.createElement("style");e.type="text/css";e.styleSheet?e.styleSheet.cssText=a:e.appendChild(b.createTextNode(a));b.getElementsByTagName("head")[0].appendChild(e);return e},html:function(a,
e){e=_st.util.extend({selector:"body"},e);var f=_st.util.getElement(e.selector,b);if(f){var g=b.createElement("div");for(g.innerHTML=a;0<g.childNodes.length;)f.appendChild(g.removeChild(g.childNodes[0]))}return f},pixel:function(a,e){e=_st.util.extend({callback:void 0},e);var f=b.createElement("img");"function"===typeof e.callback&&this._attachOnLoaded(f,e.callback);f.src=a;return f},iframe:function(a,e){e=_st.util.extend({id:void 0,name:void 0,attributes:void 0},e);var f,g,h;f=b.createElement("iframe");
f.style.display="none";f.style.width="1px";f.style.height="1px";e.id&&(f.id=e.id);e.name&&(f.name=e.name);if(h=e.attributes)for(g in h)h.hasOwnProperty(g)&&f.setAttribute(g,h[g]);a&&f.setAttribute("src",a);g=b.getElementsByTagName("body");if(1>g.length)_st.exec.onready(function(){b.getElementsByTagName("body")[0].appendChild(f)});else g[0].appendChild(f);return f},_flushDocWrite:function(){var a=this._docWrite.buffer.join("\n");this._docWrite.buffer=[];var e=this._docWrite.target;this._docWrite.target=
"body";this.html(a,{selector:e});this._docWrite.refCount--;1>this._docWrite.refCount&&(b.write=this._docWrite.original);this.html(a,{selector:e})},_captureDocWrite:function(a){this._docWrite.refCount++;"undefined"!==typeof a&&""!==a&&(this._docWrite.target=a);this._docWrite.captured||(this._docWrite.captured=!0,b.write=function(a){_st.inject._docWrite.buffer.push(a)})},_attachOnLoaded:function(a,b){if(a.addEventListener)a.addEventListener("load",b,!1);else if(a.readyState){var f=_st.util.wrapInOnlyOnce(b);
a.onreadystatechange=function(){"loaded"!=this.readyState&&"complete"!=this.readyState||f()}}}}};_st.inject=_st._injectConstructor(window,document);_st.tracking={version:12,_lastEventCookieName:"_svlet",_idCookieName:"_svtri",_idCookieTtl:730,_sessionCookieTtl:120,_engagement:!1,_engagementType:"",_engagementContent:"",_conversion:!1,_conversionValue:0,_conversionProducts:[],_transactionId:"",_customProperties:{},_forwardedIdentifier:void 0,_siteIdOverride:void 0,handleCommand:function(a){var b;switch(a[0]){case "setConversion":case "setConversionValue":case "setTransactionId":case "setEngagement":case "setEngagementType":case "setEngagementContent":case "setForwardedIdentifier":b=
"_"+a[0].substr(3,1).toLowerCase()+a[0].substr(4);this[b]=encodeURIComponent(a[1]);break;case "addConversionProduct":this._conversionProducts.push(encodeURIComponent(a[1]));break;case "addCustomProperty":b=a[1].replace(/[^a-zA-Z0-9\-_]+/g,"");this._customProperties[b]=a[2];break;case "trackPageview":a=this._determineTrackId();this.sendData(a,!0);break;case "trackInPageEvent":a=this._determineTrackId();this.sendData(a,!1);break;case "resetEventSettings":this._engagement=!1;this._engagementContent=
this._engagementType="";this._conversion=!1;this._conversionValue=0;this._conversionProducts=[];this._transactionId="";this._customProperties={};break;case "partnerSync":this.syncPartner(a[1])}},sendData:function(a,b){var c,e=[],f=encodeURIComponent,g=(new Date).getTime(),h=this._lastEventCookieName;this._conversion&&e.push(["c","true"]);""!==this._transactionId&&e.push(["ti",this._transactionId]);0<this._conversionValue&&e.push(["cv",this._conversionValue]);for(c=0;c<this._conversionProducts.length;c++)e.push(["cp",
this._conversionProducts[c]]);this._engagement&&e.push(["e","true"]);""!==this._engagementType&&e.push(["et",this._engagementType]);""!==this._engagementContent&&e.push(["ec",this._engagementContent]);var k=this._customProperties;for(c in k)k.hasOwnProperty(c)&&e.push(["cup",c+"%3A"+f(k[c])]);b&&(c=_st.util.getCookie(h),e.push(["u",f(document.location)]),e.push(["s",f(document.referrer)]),e.push(["p","true"]),e.push(["pn","undefined"===typeof c||parseInt(c,10)+6E4*this._sessionCookieTtl<g]));this._sendRequest(e);
_st.util.setCookie(h,g,void 0)},sendPageview:function(a){var b=[],c=_st.util,e=encodeURIComponent,f=(new Date).getTime(),g=this._lastEventCookieName,h=c.getCookie(g);b.push(["u",e(a||document.location)]);b.push(["s",e(document.referrer)]);b.push(["p","true"]);b.push(["pn","undefined"===typeof h||parseInt(h,10)+6E4*this._sessionCookieTtl<f]);this._sendRequest(b);c.setCookie(g,f,void 0)},sendEngagement:function(){var a=[],b=arguments,c=encodeURIComponent;a.push(["e","true"]);b[0]&&a.push(["et",c(b[0])]);
b[1]&&("object"===typeof b[1]?this._handleCustomProps(a,b[1],c):(a.push(["ec",c(b[1])]),this._handleCustomProps(a,b[2],c)));this._sendRequest(a)},sendExternalFact:function(){var a=[],b=arguments,c=encodeURIComponent;a.push(["f","true"]);b[0]&&a.push(["ft",c(b[0])]);b[1]&&a.push(["fttl",c(b[1])]);b[2]&&"object"===typeof b[2]&&this._handleCustomProps(a,b[2],c);b[3]&&a.push(["ffi",c(b[3])]);this._sendRequest(a)},sendConversion:function(){var a,b=[],c=arguments,e=encodeURIComponent;b.push(["c","true"]);
0<c[0]&&b.push(["cv",c[0]]);c[1]&&b.push(["ti",e(c[1])]);if(c[2]){var f="function"===typeof c[2].push?c[2]:[c[2]];for(a=0;a<f.length;a++)b.push(["cp",e(f[a])])}c[3]&&this._handleCustomProps(b,c[3],e);this._sendRequest(b)},syncPartner:function(a,b){var c=this._determineTrackId();this._handleSyncWithTrackId(c,a,b)},storeMapping:function(a,b,c,e){var f=_st.settings;if(e||this._partnerNeedsSync(a))e=this._determineTrackId(),b="//"+f.trackUrl+"/syncResponse?ca_site\x3d"+(this._siteIdOverride||f.siteId)+
"\x26ca_partner\x3d"+a+"\x26ca_cookie\x3d"+e+"\x26ca_read\x3dpid\x26pid\x3d"+encodeURIComponent(b)+"\x26cb\x3d"+(new Date).getTime(),"undefined"!==typeof c&&(b+="\x26ca_merge\x3d"+c),(new Image).src=b,this._updatePartnerSyncTime(a)},getTransactionId:function(){return this._transactionId},getConversionValue:function(){return this._conversionValue},getConversionProducts:function(){return this._conversionProducts},getUserIdentifier:function(){return this._determineTrackId()},resetUserIdentifier:function(){_st.util.eraseCookie(this._idCookieName);
_st.data._userData.p={};_st.data.saveUserData()},sendConfirmationPixel:function(){},_handleCustomProps:function(a,b,c){if(b)for(var e in b)b.hasOwnProperty(e)&&a.push(["cup",e+"%3A"+c(b[e])])},_sendRequest:function(a){var b=_st.data.getUserData();if("undefined"!==typeof b.e){for(var c in b.e){var e=b.e[c];"undefined"===typeof e||"undefined"===typeof e.sent||"undefined"===typeof c||"undefined"==typeof e.group||e.sent||(a.push(["exp",c+";"+e.group]),b.e[c].sent=!0)}_st.data.saveUserData()}b="";for(c=
0;c<a.length;c++)b+="\x26"+a[c][0]+"\x3d"+a[c][1];this._loadPixel("t",b)},_handleOptOut:function(a,b){var c=_st.data.getUserData();c.o=c.o||{};c.o.r=a||!1;c.o.a=b||!1;_st.data.saveUserData();this._loadPixel("t","\x26up\x3dtrue\x26upr\x3d"+c.o.r+"\x26upa\x3d"+c.o.a)},_handleSyncWithTrackId:function(a,b,c){if(c||this._partnerNeedsSync(b))a="\x26partnerId\x3d"+b,"https:"===document.location.protocol&&(a+="\x26secure\x3dtrue"),this._loadPixel("s",a),this._updatePartnerSyncTime(b)},_partnerNeedsSync:function(a){var b=
_st.data.getUserData().p||{},c=(new Date).getTime()-1209600;return!b[a]||b[a]<c},_updatePartnerSyncTime:function(a){var b=_st.data.getUserData(),c=b.p||{};c[a]=(new Date).getTime();b.p=c;_st.data.saveUserData()},_determineTrackId:function(){var a,b=_st.util,c=this._idCookieName,e=this._idCookieTtl;this._forwardedIdentifier?(a=this._forwardedIdentifier,b.setCookie(c,a,e)):a=b.getCookie(c);a||(a=b.randomUuid(),b.setCookie(c,a,e));return a},_loadPixel:function(a,b){var c=_st.settings,c="//"+c.trackUrl+
"/"+a+"-"+(this._siteIdOverride||c.siteId)+"?i\x3d"+this._determineTrackId()+b+"\x26cb\x3d"+(new Date).getTime();2E3<c.length&&(c=c.substr(0,2E3));(new Image).src=c}};window._stTracker={insertTags:function(a){_st.core.insertTags(a)},insertScript:function(a){_st.inject.script(a)},insertScriptCallback:function(a,b){_st.inject.script(a,{callback:b})},insertScriptDocWrite:function(a,b){_st.inject.script(a,{docWrite:!0,callback:b})},insertHtml:function(a,b){_st.inject.html(a,{selector:b})},callImagePixel:function(a){_st.inject.pixel(a)},
debug:function(a){_st.debug.log(a)},isDebug:function(){return _st.settings.debug},getProperty:function(a){return _st.data.getProperty(a)},getExtracted:function(a){return _st.dom.getValue(a)},getConversionValue:function(){return _st.tracking._conversionValue},getConversionProducts:function(){return _st.tracking._conversionProducts},getTransactionId:function(){return _st.tracking._transactionId},getEngagementType:function(){return _st.tracking._engagementType},getEngagementContent:function(){return _st.tracking._engagementContent},
getEnvironment:function(){return _st.settings.environment},getPageStructure:function(){return _st.core.getPageStructure()},pathEndsWith:function(a){return _st.core.pathEndsWith(a)},executeOnload:function(a){_st.exec.onload(a)},setMarker:function(a,b,c){"undefined"===typeof c?_st.data.setMarker("default",a,b):_st.data.setMarker(a,b,c)},resetMarkers:function(a){_st.data.resetMarkers(a)},removeMarker:function(a,b){"undefined"===typeof b?_st.data.removeMarker("default",a):_st.data.removeMarker(a,b)},
getMarkers:function(a){return _st.data.getMarkers(a)},getMarker:function(a,b){return"undefined"===typeof b?_st.data.getMarker("default",a):_st.data.getMarker(a,b)},getUserData:function(){return _st.data.getUserData()},getUserIdentifier:function(){return _st.tracking.getUserIdentifier()},wrapInOnlyOnce:function(a){_st.util.wrapInOnlyOnce(a)},getCookiePreferences:function(){return _st.cookiepermission.getCookiePreferences()},setCookiePreferences:function(a){_st.cookiepermission.setCookiePreferences(a);
_st.core.executeTags()},setPopupViewCount:function(a){_st.cookiepermission.setPopupViewCount(a)},getPopupViewCount:function(){return _st.cookiepermission.getPopupViewCount()},callCounter:function(a){_st.counter.call(a)}}})();_st.core.init(_stq);