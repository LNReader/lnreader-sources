var e=this&&this.__awaiter||function(e,t,l,a){return new(l||(l=Promise))((function(r,i){function n(e){try{o(a.next(e))}catch(e){i(e)}}function u(e){try{o(a.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof l?t:new l((function(e){e(t)}))).then(n,u)}o((a=a.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var l,a,r,i,n={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(o){return function(u){if(l)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(n=0)),n;)try{if(l=1,a&&(r=2&u[0]?a.return:u[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,u[1])).done)return r;switch(a=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,a=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(!(r=n.trys,(r=r.length>0&&r[r.length-1])||6!==u[0]&&2!==u[0])){n=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){n.label=u[1];break}if(6===u[0]&&n.label<r[1]){n.label=r[1],r=u;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(u);break}r[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(e){u=[6,e],a=0}finally{l=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,o])}}},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("@libs/fetch"),r=require("@libs/filterInputs"),i=require("@libs/novelStatus"),n=require("cheerio"),u=l(require("dayjs")),o=new(function(){function l(e){this.parseDate=function(e){void 0===e&&(e="");var t={"января":1,"февраля":2,"марта":3,"апреля":4,"мая":5,"июня":6,"июля":7,"августа":8,"сентября":9,"октября":10,"ноября":11,"декабря":12};if(e.includes(".")){var l=e.split("."),a=l[0],r=l[1],i=l[2];if(a&&r&&i)return(0,u.default)(i+"-"+r+"-"+a).format("LL")}else if(e.includes(" ")){var n=e.split(" ");a=n[0],r=n[1];if(a&&t[r]){i=(new Date).getFullYear();return(0,u.default)(i+"-"+t[r]+"-"+a).format("LL")}}return e||null},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/ifreedom/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite,this.version="1.0.1",this.filters=e.filters}return l.prototype.popularNovels=function(l,r){return e(this,arguments,void 0,(function(e,l){var r,i,u,o,s,c=this,v=l.filters,b=l.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:return r=this.site+"/vse-knigi/?sort="+(b?"По дате обновления":(null===(s=null==v?void 0:v.sort)||void 0===s?void 0:s.value)||"По рейтингу"),Object.entries(v||{}).forEach((function(e){var t=e[0],l=e[1].value;l instanceof Array&&l.length&&(r+="&"+t+"[]="+l.join("&"+t+"[]="))})),r+="&bpage="+e,[4,(0,a.fetchApi)(r).then((function(e){return e.text()}))];case 1:return i=t.sent(),u=(0,n.load)(i),o=u("div.one-book-home > div.img-home a").map((function(e,t){var l,a;return{name:u(t).attr("title")||"",cover:u(t).find("img").attr("src"),path:(null===(a=null===(l=u(t).attr("href"))||void 0===l?void 0:l.replace)||void 0===a?void 0:a.call(l,c.site,""))||""}})).get().filter((function(e){return e.name&&e.path})),[2,o]}}))}))},l.prototype.parseNovel=function(l){return e(this,void 0,void 0,(function(){var e,r,u,o,s,c=this;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.site+l).then((function(e){return e.text()}))];case 1:return e=t.sent(),r=(0,n.load)(e),u={path:l,name:r(".entry-title").text(),cover:r(".img-ranobe > img").attr("src"),summary:r('meta[name="description"]').attr("content")},r("div.data-ranobe").each((function(){switch(r(this).find("b").text()){case"Автор":u.author=r(this).find("div.data-value").text().trim();break;case"Жанры":u.genres=r("div.data-value > a").map((function(e,t){var l;return null===(l=r(t).text())||void 0===l?void 0:l.trim()})).get().join(",");break;case"Статус книги":u.status=r("div.data-value").text().includes("активен")?i.NovelStatus.Ongoing:i.NovelStatus.Completed}})),"Не указан"==u.author&&delete u.author,o=[],s=r("div.li-ranobe").length,r("div.li-ranobe").each((function(e,t){var l=r(t).find("a").text(),a=r(t).find("a").attr("href");if(!r(t).find("label.buy-ranobe").length&&l&&a){var i=r(t).find("div.li-col2-ranobe").text().trim();o.push({name:l,path:a.replace(c.site,""),releaseTime:c.parseDate(i),chapterNumber:s-e})}})),u.chapters=o.reverse(),[2,u]}}))}))},l.prototype.parseChapter=function(l){return e(this,void 0,void 0,(function(){var e,r,i,n=this;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.site+l).then((function(e){return e.text()}))];case 1:return e=t.sent(),(r=(r=(null===(i=e.match(/<article id="([\s\S]*?)<\/article>/g))||void 0===i?void 0:i[0])||"").replace(/<script[^>]*>[\s\S]*?<\/script>/gim,"")).includes("<img")?[2,r.replace(/srcset="([^"]+)"/g,(function(e,t){if(!t)return e;var l=t.split(" ").filter((function(e){return e.startsWith("http")})).pop();return l?l.startsWith("http")?'src="'.concat(l,'"'):'src="'.concat(n.site).concat(l,'"'):e}))]:[2,r]}}))}))},l.prototype.searchNovels=function(l){return e(this,arguments,void 0,(function(e,l){var r,i,u,o,s=this;return void 0===l&&(l=1),t(this,(function(t){switch(t.label){case 0:return r=this.site+"/vse-knigi/?searchname="+e+"&bpage="+l,[4,(0,a.fetchApi)(r).then((function(e){return e.text()}))];case 1:return i=t.sent(),u=(0,n.load)(i),o=u("div.one-book-home > div.img-home a").map((function(e,t){var l,a;return{name:u(t).attr("title")||"",cover:u(t).find("img").attr("src"),path:(null===(a=null===(l=u(t).attr("href"))||void 0===l?void 0:l.replace)||void 0===a?void 0:a.call(l,s.site,""))||""}})).get().filter((function(e){return e.name&&e.path})),[2,o]}}))}))},l}())({id:"ifreedom",sourceSite:"https://ifreedom.su",sourceName:"Свободный Мир Ранобэ",filters:{sort:{type:r.FilterTypes.Picker,label:"Сортировка:",options:[{label:"По дате добавления",value:"По дате добавления"},{label:"По дате обновления",value:"По дате обновления"},{label:"По количеству глав",value:"По количеству глав"},{label:"По названию",value:"По названию"},{label:"По просмотрам",value:"По просмотрам"},{label:"По рейтингу",value:"По рейтингу"}],value:"По рейтингу"},status:{type:r.FilterTypes.CheckboxGroup,label:"Статус:",options:[{label:"Перевод активен",value:"Перевод активен"},{label:"Перевод приостановлен",value:"Перевод приостановлен"},{label:"Произведение завершено",value:"Произведение завершено"}],value:[]},lang:{type:r.FilterTypes.CheckboxGroup,label:"Язык:",options:[{label:"Английский",value:"Английский"},{label:"Китайский",value:"Китайский"},{label:"Корейский",value:"Корейский"},{label:"Японский",value:"Японский"}],value:[]},genre:{type:r.FilterTypes.CheckboxGroup,label:"Жанры:",options:[{label:"Боевик",value:"Боевик"},{label:"Боевые Искусства",value:"Боевые Искусства"},{label:"Вампиры",value:"Вампиры"},{label:"Виртуальный Мир",value:"Виртуальный Мир"},{label:"Гарем",value:"Гарем"},{label:"Героическое фэнтези",value:"Героическое фэнтези"},{label:"Детектив",value:"Детектив"},{label:"Дзёсэй",value:"Дзёсэй"},{label:"Драма",value:"Драма"},{label:"Игра",value:"Игра"},{label:"История",value:"История"},{label:"Киберпанк",value:"Киберпанк"},{label:"Комедия",value:"Комедия"},{label:"ЛитРПГ",value:"ЛитРПГ"},{label:"Меха",value:"Меха"},{label:"Милитари",value:"Милитари"},{label:"Мистика",value:"Мистика"},{label:"Научная Фантастика",value:"Научная Фантастика"},{label:"Повседневность",value:"Повседневность"},{label:"Постапокалипсис",value:"Постапокалипсис"},{label:"Приключения",value:"Приключения"},{label:"Психология",value:"Психология"},{label:"Романтика",value:"Романтика"},{label:"Сверхъестественное",value:"Сверхъестественное"},{label:"Сёдзё",value:"Сёдзё"},{label:"Сёнэн",value:"Сёнэн"},{label:"Сёнэн-ай",value:"Сёнэн-ай"},{label:"Спорт",value:"Спорт"},{label:"Сэйнэн",value:"Сэйнэн"},{label:"Сюаньхуа",value:"Сюаньхуа"},{label:"Трагедия",value:"Трагедия"},{label:"Триллер",value:"Триллер"},{label:"Ужасы",value:"Ужасы"},{label:"Фантастика",value:"Фантастика"},{label:"Фэнтези",value:"Фэнтези"},{label:"Школьная жизнь",value:"Школьная жизнь"},{label:"Экшн",value:"Экшн"},{label:"Эротика",value:"Эротика"},{label:"Этти",value:"Этти"},{label:"Яой",value:"Яой"},{label:"Adult",value:"Adult"},{label:"Mature",value:"Mature"},{label:"Xianxia",value:"Xianxia"},{label:"Xuanhuan",value:"Xuanhuan"}],value:[]}}});exports.default=o;