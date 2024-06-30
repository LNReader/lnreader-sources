var e=this&&this.__awaiter||function(e,t,a,l){return new(a||(a=Promise))((function(n,r){function i(e){try{o(l.next(e))}catch(e){r(e)}}function u(e){try{o(l.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,u)}o((l=l.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,l,n,r,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function u(u){return function(o){return function(u){if(a)throw new TypeError("Generator is already executing.");for(;r&&(r=0,u[0]&&(i=0)),i;)try{if(a=1,l&&(n=2&u[0]?l.return:u[0]?l.throw||((n=l.return)&&n.call(l),0):l.next)&&!(n=n.call(l,u[1])).done)return n;switch(l=0,n&&(u=[2&u[0],n.value]),u[0]){case 0:case 1:n=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,l=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!n||u[1]>n[0]&&u[1]<n[3])){i.label=u[1];break}if(6===u[0]&&i.label<n[1]){i.label=n[1],n=u;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(u);break}n[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],l=0}finally{a=n=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,o])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var l=require("cheerio"),n=require("@libs/fetch"),r=require("@libs/filterInputs"),i=a(require("dayjs")),u=function(){function a(){this.id="scribblehub",this.name="ScribbleHub",this.icon="src/en/scribblehub/icon.png",this.site="https://www.scribblehub.com/",this.version="1.0.0",this.filters={sort:{label:"Sort Results By",value:"ratings",options:[{label:"Chapters",value:"chapters"},{label:"Chapters per week",value:"frequency"},{label:"Date Added",value:"dateadded"},{label:"Favorites",value:"favorites"},{label:"Last Updated",value:"lastchdate"},{label:"Number of Ratings",value:"numofrate"},{label:"Pages",value:"pages"},{label:"Pageviews",value:"pageviews"},{label:"Ratings",value:"ratings"},{label:"Readers",value:"readers"},{label:"Reviews",value:"reviews"},{label:"Total Words",value:"totalwords"}],type:r.FilterTypes.Picker},order:{label:"Order by",value:"desc",options:[{label:"Descending",value:"desc"},{label:"Ascending",value:"asc"}],type:r.FilterTypes.Picker},storyStatus:{label:"Story Status (Translation)",value:"",options:[{label:"All",value:"all"},{label:"Completed",value:"completed"},{label:"Ongoing",value:"ongoing"},{label:"Hiatus",value:"hiatus"}],type:r.FilterTypes.Picker},genres:{label:"Genres",value:{include:[],exclude:[]},options:[{label:"Action",value:"9"},{label:"Adult",value:"902"},{label:"Adventure",value:"8"},{label:"Boys Love",value:"891"},{label:"Comedy",value:"7"},{label:"Drama",value:"903"},{label:"Ecchi",value:"904"},{label:"Fanfiction",value:"38"},{label:"Fantasy",value:"19"},{label:"Gender Bender",value:"905"},{label:"Girls Love",value:"892"},{label:"Harem",value:"1015"},{label:"Historical",value:"21"},{label:"Horror",value:"22"},{label:"Isekai",value:"37"},{label:"Josei",value:"906"},{label:"LitRPG",value:"1180"},{label:"Martial Arts",value:"907"},{label:"Mature",value:"20"},{label:"Mecha",value:"908"},{label:"Mystery",value:"909"},{label:"Psychological",value:"910"},{label:"Romance",value:"6"},{label:"School Life",value:"911"},{label:"Sci-fi",value:"912"},{label:"Seinen",value:"913"},{label:"Slice of Life",value:"914"},{label:"Smut",value:"915"},{label:"Sports",value:"916"},{label:"Supernatural",value:"5"},{label:"Tragedy",value:"901"}],type:r.FilterTypes.ExcludableCheckboxGroup},genre_operator:{value:"and",label:"Genre And/Or",options:[{label:"OR",value:"or"},{label:"AND",value:"and"}],type:r.FilterTypes.Picker},content_warning:{value:{include:[],exclude:[]},label:"Mature Content",options:[{label:"Gore",value:"48"},{label:"Sexual Content",value:"50"},{label:"Strong Language",value:"49"}],type:r.FilterTypes.ExcludableCheckboxGroup},content_warning_operator:{value:"and",label:"Mature Content And/Or",options:[{label:"OR",value:"or"},{label:"AND",value:"and"}],type:r.FilterTypes.Picker}}}return a.prototype.parseNovels=function(e){var t=this,a=[];return e(".search_main_box").each((function(l,n){var r=e(n).find(".search_title > a").text(),i=e(n).find(".search_img > img").attr("src"),u=e(n).find(".search_title > a").attr("href");if(u){var o={name:r,cover:i,path:u.replace(t.site,"")};a.push(o)}})),a},a.prototype.popularNovels=function(a,r){return e(this,arguments,void 0,(function(e,a){var r,i,u,o,s,c,v,d,p,h,b,f=a.showLatestNovels,g=a.filters;return t(this,(function(e){switch(e.label){case 0:return r="".concat(this.site),r+=f?"latest-series/":"series-finder/?sf=1",(null===(o=g.genres.value.include)||void 0===o?void 0:o.length)&&(r+="&gi="+g.genres.value.include.join(",")),(null===(s=g.genres.value.exclude)||void 0===s?void 0:s.length)&&(r+="&ge="+g.genres.value.exclude.join(",")),((null===(c=g.genres.value.include)||void 0===c?void 0:c.length)||(null===(v=g.genres.value.exclude)||void 0===v?void 0:v.length))&&(r+="&mgi="+g.genre_operator.value),(null===(d=g.content_warning.value.include)||void 0===d?void 0:d.length)&&(r+="&cti="+g.content_warning.value.include.join(",")),(null===(p=g.content_warning.value.exclude)||void 0===p?void 0:p.length)&&(r+="&cte="+g.content_warning.value.exclude.join(",")),((null===(h=g.content_warning.value.include)||void 0===h?void 0:h.length)||(null===(b=g.content_warning.value.exclude)||void 0===b?void 0:b.length))&&(r+="&mct"+g.content_warning_operator.value),r+="&sort="+g.sort.value,r+="&order="+g.order.value,[4,(0,n.fetchApi)(r).then((function(e){return e.text()}))];case 1:return i=e.sent(),u=(0,l.load)(i),[2,this.parseNovels(u)]}}))}))},a.prototype.parseNovel=function(a){return e(this,void 0,void 0,(function(){var e,r,u,o,s,c,v,d=this;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(this.site+a)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),r=(0,l.load)(e),(u={path:a,name:r(".fic_title").text()||"Untitled",cover:r(".fic_image > img").attr("src"),summary:r(".wi_fic_desc").text(),author:r(".auth_name_fic").text(),chapters:[]}).genres=r(".fic_genre").map((function(e,t){return r(t).text()})).toArray().join(","),u.status=r(".rnd_stats").next().text().includes("Ongoing")?"Ongoing":"Completed",(o=new FormData).append("action","wi_getreleases_pagination"),o.append("pagenum","-1"),o.append("mypostid",a.split("/")[1]),[4,(0,n.fetchApi)("".concat(this.site,"wp-admin/admin-ajax.php"),{method:"POST",body:o})];case 3:return[4,t.sent().text()];case 4:return s=t.sent(),r=(0,l.load)(s),c=[],v=function(e){var t;if(e.includes("ago")){var a=(0,i.default)(new Date),l=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",n=parseInt(l,10);return l?((e.includes("hours ago")||e.includes("hour ago"))&&a.subtract(n,"hours"),(e.includes("days ago")||e.includes("day ago"))&&a.subtract(n,"days"),(e.includes("months ago")||e.includes("month ago"))&&a.subtract(n,"months"),a.toISOString()):null}return null},r(".toc_w").each((function(e,t){var a=r(t).find(".toc_a").text(),l=r(t).find(".fic_date_pub").text(),n=r(t).find("a").attr("href");n&&c.push({name:a,releaseTime:v(l),path:n.replace(d.site,"")})})),u.chapters=c.reverse(),[2,u]}}))}))},a.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(this.site+a)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),r=(0,l.load)(e),[2,r("div.chp_raw").html()||""]}}))}))},a.prototype.searchNovels=function(a){return e(this,void 0,void 0,(function(){var e,r,i;return t(this,(function(t){switch(t.label){case 0:return e="".concat(this.site,"?s=").concat(a,"&post_type=fictionposts"),[4,(0,n.fetchApi)(e)];case 1:return[4,t.sent().text()];case 2:return r=t.sent(),i=(0,l.load)(r),[2,this.parseNovels(i)]}}))}))},a}();exports.default=new u;