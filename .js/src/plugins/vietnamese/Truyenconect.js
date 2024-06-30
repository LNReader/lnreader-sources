var e=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function l(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((a=a.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("cheerio"),a=require("@libs/fetch"),r=require("@libs/filterInputs"),i=require("@libs/novelStatus"),o=function(){function o(){this.id="truyenconect",this.name="Truyen Conect",this.icon="src/vi/truyenconect/icon.png",this.site="https://truyenconect.com",this.version="1.0.0",this.filters={category:{label:"Lọc theo",value:"",type:r.FilterTypes.Picker,options:[{label:"",value:""},{label:"Thể loại",value:"the-loai"},{label:"Truyện dịch",value:"truyen-dich"},{label:"Truyện convert",value:"convert"}]},genre:{label:"Thể loại",value:"action",type:r.FilterTypes.Picker,options:[{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Chinese novel",value:"chinese-novel"},{label:"Chuyển Sinh",value:"chuyen-sinh"},{label:"English Novel",value:"english-novel"},{label:"Harem",value:"harem"},{label:"Ecchi",value:"ecchi"},{label:"Fantasy",value:"fantasy"},{label:"Drama",value:"drama"},{label:"Game",value:"game"},{label:"Tiên hiệp",value:"tien-hiep"},{label:"Kiếm Hiệp",value:"kiem-hiep"},{label:"Ngôn Tình",value:"ngon-tinh"},{label:"Isekai",value:"isekai"},{label:"Lịch Sử",value:"lich-su"},{label:"Web Novel",value:"web-novel"},{label:"Xuyên không",value:"xuyen-khong"},{label:"Trọng sinh",value:"trong-sinh"},{label:"Trinh thám",value:"trinh-tham"},{label:"Dị giới",value:"di-gioi"},{label:"Huyền ảo",value:"huyen-ao"},{label:"Sắc Hiệp",value:"sac-hiep"},{label:"Dị năng",value:"di-nang"},{label:"Linh dị",value:"linh-di"},{label:"Đô thị",value:"do-thi"},{label:"Comedy",value:"comedy"},{label:"School Life",value:"school-life"},{label:"Romance",value:"romance"},{label:"Martial-arts",value:"martial-arts"},{label:"Light Novel",value:"light-novel"},{label:"Huyền huyễn",value:"huyen-huyen"},{label:"Kỳ Huyễn",value:"ky-huyen"},{label:"Khoa Huyễn",value:"khoa-huyen"},{label:"Võng Du",value:"vong-du"},{label:"Đồng Nhân",value:"dong-nhan"}]}}}return o.prototype.sleep=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,new Promise((function(e){return setTimeout(e,n)}))]}))}))},o.prototype.parseNovels=function(e,t){var n=this,a=[];return e(t).each((function(t,r){var i=e(r).find("a").attr("href");i&&a.push({name:e(r).find("img").attr("alt")||"",path:i.replace(n.site,""),cover:e(r).find("img").attr("data-src")})})),a},o.prototype.popularNovels=function(r,i){return e(this,arguments,void 0,(function(e,r){var i,o,l,s,u=r.filters,c=r.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:return i=this.site,o=".c-page__content > .grid9.block .item-thumb.c-image-hover",c?o=".c-page__content .page-content-listing.item-big_thumbnail .item-thumb.c-image-hover":u.category.value&&(i+="/"+u.category.value,o='table.manga-shortcodes.manga-chapters-listing td[width="10%"]',"the-loai"===u.category.value&&(o=".item-thumb.hover-details.c-image-hover",i+="/"+u.genre.value),i+="?page="+e),[4,(0,a.fetchApi)(i).then((function(e){return e.text()}))];case 1:return l=t.sent(),s=(0,n.load)(l),[2,this.parseNovels(s,o)]}}))}))},o.prototype.parseChapters=function(e){var t=this,n=[];return e("option").each((function(a,r){var i,o,l=r.attribs.value;if(l){var s=null===(i=l.match(/\/(\d+)-/))||void 0===i?void 0:i[1];s&&(l=l.replace(s+"-","")+"-"+s);var u=null===(o=l.match(/chuong-(\d+)/))||void 0===o?void 0:o[1];n.push({path:l.replace(t.site,""),name:e(r).text().trim(),chapterNumber:Number(u)||void 0})}})),n.reverse()},o.prototype.parseVolumes=function(e){var t=[];return e("option").each((function(e,n){t.push({story:n.attribs["data-story"],navigation:n.attribs["data-navigation"],value:n.attribs.value})})),t},o.prototype.getVolumes=function(r){return e(this,void 0,void 0,(function(){var e,i,o,l,s;return t(this,(function(t){switch(t.label){case 0:if(!(e=null===(s=r.match(/-(\d+)$/))||void 0===s?void 0:s[1]))throw new Error("Không tìm thấy chương");return i=this.site+"/truyen/get-chap-selector?chap="+e,[4,(0,a.fetchApi)(i).then((function(e){return e.json()}))];case 1:return o=t.sent(),l={chapters:this.parseChapters((0,n.load)(o.chap_selector))},o.eps_selector&&(l.volumes=this.parseVolumes((0,n.load)(o.eps_selector))),[2,l]}}))}))},o.prototype.parseNovel=function(r){return e(this,void 0,void 0,(function(){var e,o,l,s,u,c;return t(this,(function(t){switch(t.label){case 0:return e=this.site+r,[4,(0,a.fetchApi)(e)];case 1:return[4,t.sent().text()];case 2:if(o=t.sent(),l=(0,n.load)(o),(s={name:l(".post-title > h1").text().trim(),path:r,chapters:[],totalPages:1}).cover=l(".summary_image > a > img").attr("data-src"),l(".post-content_item").each((function(){var e=l(this).find(".summary-heading > h5").text().trim(),t=l(this).find(".summary-content").html();if(t)switch(e){case"Thể loại":s.genres=l(t).children("a").map((function(e,t){return l(t).text()})).toArray().join(",");break;case"Tác giả":s.author=l(t).text().trim();break;case"Hoạ sĩ":s.artist=l(t).text().trim();break;case"Trạng thái":switch(t.trim()){case"Full":s.status=i.NovelStatus.Completed;break;case"Tạm ngưng":s.status=i.NovelStatus.OnHiatus;break;case"Đang tiến hành":s.status=i.NovelStatus.Ongoing;break;default:s.status=i.NovelStatus.Unknown}}})),l(".description-summary > div.summary__content > div").remove(),s.summary=l(".description-summary > div.summary__content").text().trim(),!(u=l("#init-links > a").first().attr("href")))throw new Error("Không tìm thấy truyện");return[4,this.sleep(1e3)];case 3:return t.sent(),[4,this.getVolumes(u)];case 4:return(c=t.sent()).volumes?(s.totalPages=c.volumes.length,s.chapters=c.chapters):(s.totalPages=1,s.chapters=c.chapters),[2,s]}}))}))},o.prototype.parsePage=function(r,i){return e(this,void 0,void 0,(function(){var e,o,l,s,u,c,h,v,p,m;return t(this,(function(t){switch(t.label){case 0:return e=this.site+r,[4,(0,a.fetchApi)(e)];case 1:return[4,t.sent().text()];case 2:if(o=t.sent(),l=(0,n.load)(o),!(s=l("#init-links > a").first().attr("href")))throw new Error("Không tìm thấy truyện");return[4,this.sleep(1e3)];case 3:return t.sent(),[4,this.getVolumes(s)];case 4:if(u=t.sent(),c=Number(i)-1,!u.volumes)throw new Error("Không tìm thấy truyện");if(c>=u.volumes.length)throw new Error("Không tìm thấy volume");return h=u.volumes[c],v="dataEpisodes=".concat(h.value,"&datastory=").concat(h.story,"&dataNavigation=").concat(encodeURIComponent(h.navigation)),p="".concat(this.site,"/truyen/getreadingchapAction?").concat(v),[4,this.sleep(1e3)];case 5:return t.sent(),[4,(0,a.fetchApi)(p).then((function(e){return e.json()}))];case 6:if((m=t.sent()).err)throw new Error(m.html);return[2,{chapters:this.parseChapters((0,n.load)(m.html))}]}}))}))},o.prototype.parseChapter=function(r){return e(this,void 0,void 0,(function(){var e,i;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.site+r)];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),i=(0,n.load)(e),[2,i(".reading-content").html()||""]}}))}))},o.prototype.searchNovels=function(r,i){return e(this,void 0,void 0,(function(){var e,o,l,s,u=this;return t(this,(function(t){switch(t.label){case 0:return e="".concat(this.site,"?key=").concat(r,"&page=").concat(i),[4,(0,a.fetchApi)(e)];case 1:return[4,t.sent().text()];case 2:return o=t.sent(),l=(0,n.load)(o),s=[],l(".tab-thumb.c-image-hover > a").each((function(e,t){var n=t.attribs.title,a=l(t).find("img").first().attr("src"),r=t.attribs.href;r&&s.push({name:n,path:r.replace(u.site,""),cover:a})})),[2,s]}}))}))},o}();exports.default=new o;