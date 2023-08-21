(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",l="week",o="month",c="quarter",p="year",u="date",d="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},_=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,o),r=n-s<0,a=t.clone().add(i+(r?-1:1),o);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:p,w:l,d:a,D:u,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=h;var g=function(e){return e instanceof D},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var l=t.name;b[l]=t,s=l}return!i&&s&&(y=s),s||!i&&y},M=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},w=m;w.l=$,w.i=g,w.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var _=h.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(v);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return w},_.isValid=function(){return!(this.$d.toString()===d)},_.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return M(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<M(e)},_.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,c=!!w.u(t)||t,d=w.p(e),v=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},f=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,_=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case p:return c?v(1,0):v(31,11);case o:return c?v(1,_):v(0,_+1);case l:var b=this.$locale().weekStart||0,g=(h<b?h+7:h)-b;return v(c?m-g:m+(6-g),_);case a:case u:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var l,c=w.p(e),d="set"+(this.$u?"UTC":""),v=(l={},l[a]=d+"Date",l[u]=d+"Date",l[o]=d+"Month",l[p]=d+"FullYear",l[r]=d+"Hours",l[s]=d+"Minutes",l[i]=d+"Seconds",l[n]=d+"Milliseconds",l)[c],f=c===a?this.$D+(t-this.$W):t;if(c===o||c===p){var h=this.clone().set(u,1);h.$d[v](f),h.init(),this.$d=h.set(u,Math.min(this.$D,h.daysInMonth())).$d}else v&&this.$d[v](f);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[w.p(e)]()},_.add=function(n,c){var u,d=this;n=Number(n);var v=w.p(c),f=function(e){var t=M(d);return w.w(t.date(t.date()+Math.round(e*n)),d)};if(v===o)return this.set(o,this.$M+n);if(v===p)return this.set(p,this.$y+n);if(v===a)return f(1);if(v===l)return f(7);var h=(u={},u[s]=e,u[r]=t,u[i]=1e3,u)[v]||1,_=this.$d.getTime()+n*h;return w.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,a=this.$m,l=this.$M,o=n.weekdays,c=n.months,p=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},u=function(e){return w.s(r%12||12,e,"0")},v=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:w.s(l+1,2,"0"),MMM:p(n.monthsShort,l,c,3),MMMM:p(c,l),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:p(n.weekdaysMin,this.$W,o,2),ddd:p(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:w.s(r,2,"0"),h:u(1),hh:u(2),a:v(r,a,!0),A:v(r,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(e,t){return t||h[e]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,u,d){var v,f=w.p(u),h=M(n),_=(h.utcOffset()-this.utcOffset())*e,m=this-h,y=w.m(this,h);return y=(v={},v[p]=y/12,v[o]=y,v[c]=y/3,v[l]=(m-_)/6048e5,v[a]=(m-_)/864e5,v[r]=m/t,v[s]=m/e,v[i]=m/1e3,v)[f]||m,d?y:w.a(y)},_.daysInMonth=function(){return this.endOf(o).$D},_.$locale=function(){return b[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},_.clone=function(){return w.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},h}(),S=D.prototype;return M.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",o],["$y",p],["$D",u]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,D,M),e.$i=!0),M},M.locale=$,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=b[y],M.Ls=b,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}class i{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked="">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled="">\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="">\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class s{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}var r=n(484),a=n.n(r);const l=[{type:"taxi",iconSrc:"/img/icons/taxi.png"},{type:"bus",iconSrc:"/img/icons/bus.png"},{type:"train",iconSrc:"/img/icons/train.png"},{type:"ship",iconSrc:"/img/icons/ship.png"},{type:"drive",iconSrc:"/img/icons/drive.png"},{type:"flight",iconSrc:"/img/icons/flight.png"},{type:"check-in",iconSrc:"/img/icons/check-in.png"},{type:"sightseeing",iconSrc:"/img/icons/sightseeing.png"},{type:"restaurant",iconSrc:"/img/icons/restaurant.png"}],o="HH:mm",c="DD-MM-YYYYTHH:mm",p="DD/MM/YYYY HH:mm",u=e=>e[Math.floor(Math.random()*e.length)],d=(e,t)=>{const n=Math.ceil(Math.min(Math.abs(e),Math.abs(t))),i=Math.floor(Math.max(Math.abs(e),Math.abs(t))),s=Math.random()*(i-n+1)+n;return Math.floor(s)},v=(e,t)=>{const n=[];return()=>{let i=d(e,t);if(n.length>=t-e+1)return null;for(;n.includes(i);)i=d(e,t);return n.push(i),i}},f=(e,t=c)=>e?a()(e).format(t):"",h=e=>l.find((t=>t.type.toLowerCase()===e.toLowerCase())).iconSrc;class _{constructor({event:e,offers:t}){this.event=e,this.offers=t}getTemplate(){return function(e,t){const{basePrice:n,dateFrom:i,dateTo:s,destination:r,type:a,isFavorite:l}=e,p=t,u=e.offers,d=p.find((e=>e.type===a)),v=f(i,o),_=f(i,c),m=f(s,o),y=f(s,c),b=f(i,"MMM DD"),g=l?"event__favorite-btn--active":"";return`<li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="${f(i,"DD-MM-YYYY")}">${b}</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="${h(a)}" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${a} ${r}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${_}">${v}</time>\n          —\n          <time class="event__end-time" datetime="${y}">${m}</time>\n        </p>\n        <p class="event__duration">30M</p>\n      </div>\n      <p class="event__price">\n        €&nbsp;<span class="event__price-value">${n}</span>\n      </p>\n      ${function(e,t){return e.length?`<h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n    ${e.map((e=>{const n=t.offers.find((t=>t.id===e));return`<li class="event__offer">\n        <span class="event__offer-title">${n.title}</span>\n        +€&nbsp;\n        <span class="event__offer-price">${n.price}</span>\n    </li>`})).join("")}\n  </ul>`:""}(u,d)}\n      <button class="event__favorite-btn ${g}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>`}(this.event,this.offers)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const m={basePrice:0,dateFrom:new Date,dateTo:new Date,destination:"Amsterdam",isFavorite:!1,offers:[],type:"taxi",add:!0};class y{constructor({event:e=m,destinations:t,offers:n}){this.event=e,this.destinations=t,this.offers=n}getTemplate(){return function(e,t,n){const{basePrice:i,dateFrom:s,dateTo:r,destination:a,type:l,add:o}=e,c=t,u=n,d=e.offers,v=c.find((e=>e.name.toLowerCase()===a.toLowerCase())),_=u.find((e=>e.type.toLowerCase()===l.toLowerCase())).offers,m=f(s,p),y=f(r,p);return`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="${h(l)}" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n\n              <div class="event__type-item">\n                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked="">\n                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n              </div>\n\n              <div class="event__type-item">\n                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n              </div>\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${l}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${a}" list="destination-list-1">\n          <datalist id="destination-list-1">\n            <option value="Amsterdam"></option>\n            <option value="Geneva"></option>\n            <option value="Chamonix"></option>\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${m}">\n          —\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${y}">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            €\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n        </div>\n\n        ${o?'<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n    <button class="event__reset-btn" type="reset">Cancel</button>':'<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n    <button class="event__reset-btn" type="reset">Delete</button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>'}\n      </header>\n      <section class="event__details">\n      ${function(e,t){return e.length?`<section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n    <div class="event__available-offers">\n      ${e.map((e=>{const n=t.find((t=>t===e.id));return`<div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="${e.title}" type="checkbox" name="${e.title}" ${n?"checked":""}>\n        <label class="event__offer-label" for="${e.title}">\n          <span class="event__offer-title">${e.title}</span>\n          +€&nbsp;\n          <span class="event__offer-price">${e.price}</span>\n        </label>\n      </div>`})).join("")}\n    </div>\n  </section>`:""}(_,d)}\n      ${function(e){return e.pictures.length||e.description?`<section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      ${e.description?`<p class="event__destination-description">${e.description}</p>`:""}\n\n      ${e.pictures.length?`<div class="event__photos-container">\n        <div class="event__photos-tape">\n          ${e.pictures.map((e=>`<img class="event__photo" src="${e.src}" alt="${e.description}">`)).join("")}\n        </div>\n      </div>`:""}\n    </section>`:""}(v)}\n      </section>\n    </form>\n  </li>`}(this.event,this.destinations,this.offers)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const b=[{id:"1cfe416cq-10xa-ye10-8077-2fs9a01edcab",description:"Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, its renowned for its skiing.",name:"Chamonix",pictures:[{src:"img/photos/1.jpg",description:"text 1"},{src:"img/photos/2.jpg",description:"text 2"}]},{id:"2cfe416cq-10xa-ye10-8077-2fs9a01edcab",description:"Geneva, is a beautiful city, a true asian pearl, with crowded streets.",name:"Geneva",pictures:[{src:"img/photos/3.jpg",description:"text 3"},{src:"img/photos/4.jpg",description:"text 4"},{src:"img/photos/5.jpg",description:"text 5"}]},{id:"3cfe416cq-10xa-ye10-8077-2fs9a01edcab",description:"In rutrum ac purus sit amet tempus.",name:"Paris",pictures:[{src:"https://w.forfun.com/fetch/90/90ce93f8acc729abeb63e515e4869f3a.jpeg",description:"Paris buildings"}]},{id:"4cfe416cq-10xa-ye10-8077-2fs9a01edcab",description:"Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.",name:"Amsterdam",pictures:[]},{id:"5cfe416cq-10xa-ye10-8077-2fs9a01edcab",description:"Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.",name:"Balashikha",pictures:[{src:"https://sun9-79.userapi.com/impg/r6yxrBao6WYh41vwep1e204EPRzjJEnup-bz6Q/5zOypAJEDK8.jpg?size=480x320&quality=95&sign=e8b4680159e9a014ecf8b7d4b3a65b9f&type=album",description:"Balashikha buildings"}]}],g=["taxi","bus","train","ship","check-in","sightseeing","restaurant"],$=[{id:"1b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade1",price:20},{id:"2b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade2",price:120},{id:"3b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade3",price:90},{id:"4b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade4",price:70},{id:"5b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade5",price:30}],M=()=>{const e=v(0,$.length-1);return Array.from({length:d(0,$.length-1)},(()=>$[e()]))},w=Array.from({length:g.length},((e,t)=>({type:g[t],offers:M()}))),D=["2023-07-10T20:55:56.845Z","2023-07-10T21:55:56.845Z","2023-07-10T22:55:56.845Z","2023-07-10T23:55:56.845Z"],S=["2023-08-10T20:55:56.845Z","2023-08-10T21:55:56.845Z","2023-08-10T22:55:56.845Z","2023-08-10T23:55:56.845Z"],x=(()=>{let e=0;return function(){return e+=1,e}})();let T;const O=e=>{const t=w.find((t=>t.type===e)).offers;if(!t.length)return[];const n=v(0,t.length-1);return Array.from({length:d(0,t.length-1)},(()=>t[n()].id))},C=()=>({id:x(),basePrice:d(1e3,1e4),dateFrom:new Date(u(D)),dateTo:new Date(u(S)),destination:u(b).name,isFavorite:1===d(0,1),type:(T=u(w).type,T),offers:O(T)}),E=document.querySelector(".page-header"),Y=E.querySelector(".trip-main"),k=E.querySelector(".trip-controls__filters"),A=document.querySelector(".page-main").querySelector(".trip-events"),L=new class{events=Array.from({length:4},C);getEvents(){return this.events}},H=new class{getDestinations(){return b}},j=new class{getOffers(){return w}},F=new class{sortComponent=new i;eventsListComponent=new s;constructor({boardContainer:e,eventsModel:t,destinationsModel:n,offersModel:i}){this.boardContainer=e,this.eventsModel=t,this.destinationsModel=n,this.offersModel=i}init(){this.boardEvents=[...this.eventsModel.getEvents()],this.boardDestinations=[...this.destinationsModel.getDestinations()],this.boardOffers=[...this.offersModel.getOffers()],t(this.sortComponent,this.boardContainer),t(this.eventsListComponent,this.boardContainer),t(new y({event:this.boardEvents[0],destinations:this.boardDestinations,offers:this.boardOffers}),this.eventsListComponent.getElement());for(let e=1;e<this.boardEvents.length;e++)t(new _({event:this.boardEvents[e],offers:this.boardOffers}),this.eventsListComponent.getElement())}}({boardContainer:A,eventsModel:L,destinationsModel:H,offersModel:j});t(new class{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">\n        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n        <label class="trip-filters__filter-label" for="filter-future">Future</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n        <label class="trip-filters__filter-label" for="filter-present">Present</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n        <label class="trip-filters__filter-label" for="filter-past">Past</label>\n      </div>\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},k),t(new class{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>\n\n      <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: €&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},Y,"afterbegin"),F.init()})()})();
//# sourceMappingURL=bundle.88b7840e95e2f05840b4.js.map