'use strict';var _createClass=function(){function a(b,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}(function(){function a(){return b(Math.round(99999999*Math.random()),10,62)}function b(d,f,h,j,k){var q,l='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',p=[],r='-'==(d+='').trim()[0],s=0;j||(j=l),k||(k=l),r&&(d=d.slice(1));for(var u=d.length;u--;)s+=j.indexOf(d[u])*Math.pow(f,d.length-u-1);for(;0!=s;p.unshift(k[q]))q=s%h,s=Math.floor(s/h);return s&&p.unshift(k[s]),(r?'-':'')+p.join('')}var c=function(){function d(f){var j=this;if(_classCallCheck(this,d),this.addr=f,this.groups=new Set,this.on=!1,this.waiting=!1,this.onOnlineChange=null,this.pinger=setInterval(function(){j.opened&&j.ws.send('')},2e4),this.user=b(Date.now(),10,62)+'-'+a(),this.ws=null,window.localStorage){var h=localStorage.getItem('online_user');h?this.user=h:localStorage.setItem('online_user',this.user)}f&&(this.on=!0,this.connet())}return _createClass(d,[{key:'enter',value:function enter(f){if('string'!=typeof f)throw'name is not a string:'+f;return this.groups.add(f),this.opened&&this.ws.send(JSON.stringify({_:'enter',g:f,u:this.user})),this}},{key:'leave',value:function leave(f){if('string'!=typeof f)throw'name is not a string:'+f;return this.opened&&this.groups.delete(f)&&this.ws.send(JSON.stringify({_:'leave',g:f})),this}},{key:'leaveAll',value:function leaveAll(){if(this.opened){var k=!0,l=!1,p=void 0;try{for(var h,q,f=this.groups[Symbol.iterator]();!(k=(h=f.next()).done);k=!0)q=h.value,this.leave(q)}catch(q){l=!0,p=q}finally{try{!k&&f.return&&f.return()}finally{if(l)throw p}}}return this}},{key:'_report',value:function _report(f){this.onOnlineChange&&this.onOnlineChange(f)}},{key:'connet',value:function connet(f){var j=this;if((this.waiting=!1,f&&(this.addr=f),!1!==this.on)&&!this.opened){var h=this.ws=new WebSocket(this.addr);return h.onmessage=function(k){if('connected'===k.data){var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var p,q,l=j.groups[Symbol.iterator]();!(_iteratorNormalCompletion2=(p=l.next()).done);_iteratorNormalCompletion2=!0)q=p.value,j.enter(q)}catch(s){_didIteratorError2=!0,_iteratorError2=s}finally{try{!_iteratorNormalCompletion2&&l.return&&l.return()}finally{if(_didIteratorError2)throw _iteratorError2}}return}var r=JSON.parse(k.data);switch(r._){case'ol':{r.c=parseInt(r.c,32),r.u=parseInt(r.u,32),j._report(r);break}}},h.onclose=function(){if(!j.waiting){var _iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var p,q,l=j.groups[Symbol.iterator]();!(_iteratorNormalCompletion3=(p=l.next()).done);_iteratorNormalCompletion3=!0)q=p.value,j._report({g:q,c:0,u:0})}catch(r){_didIteratorError3=!0,_iteratorError3=r}finally{try{!_iteratorNormalCompletion3&&l.return&&l.return()}finally{if(_didIteratorError3)throw _iteratorError3}}j.waiting=!0,setTimeout(function(){j.connet()},5e3)}},h.onerror=function(){h.onclose()},this}}},{key:'close',value:function close(){this.on=!1,this.ws.close(),clearInterval(this.pinger)}},{key:'opened',get:function get(){return this.ws&&1===this.ws.readyState}}]),d}();window.Online=c})();