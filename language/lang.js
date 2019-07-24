import ko from "./lang_ko.json"
import en from "./lang_en.json"

//언어팩
let res = {
	ko : ko,
	en : en
};

//기본언어
let pack = "en";

//SEO 기본설정
let seo = [];
seo["ko"] = {
	title : "무비블록",
	htmlAttrs : {
		lang : "ko-KR"
	},
	meta : [
		{"charset" : "UTF-8"},
		{"description" : "창작자와 참여자가 함께 즐기는 영화 커뮤니티. 영화 감상은 물론, 큐레이션과 자막 번역으로 보상을 받을 수 있습니다."},
		{"og:locale" : "ko_KR"},
		{"og:type" : "website"},
		{"og:title" : "무비블록"},
		{"og:description" : "창작자와 참여자가 함께 즐기는 영화 커뮤니티. 영화 감상은 물론, 큐레이션과 자막 번역으로 보상을 받을 수 있습니다."},
		{"og:url" : "http://moviebloc.com/ko/"},
		{"og:site_name" : "MovieBloc"},
		{"og:image" : "movieblock_fb_image"},
		{"og:image:width" : "1200"},
		{"og:image:height" : "630"},
		{"twitter:card" : "summary_large_image"},
		{"twitter:description" : "창작자와 참여자가 함께 즐기는 영화 커뮤니티. 영화 감상은 물론, 큐레이션과 자막 번역으로 보상을 받을 수 있습니다."},
		{"twitter:title" : "무비블록"},
		{"twitter:site" : "@moviebloc"},
		{"twitter:image" : "twitter_image.jpg"},
		{"twitter:creator" : "@moviebloc"}
	],
	link : [
		{ rel : "icon" , type : "images/png" , sizes : "16x16" , href: "/images/meta/favicon-16x16.png" },
		{ rel : "icon" , type : "images/png" , sizes : "32x32" , href: "/images/meta/favicon-32x32.png" },
		{ rel : "apple-touch-icon" , sizes : "180x180" , href: "/images/meta/apple-touch-icon.png" },
		{ rel : "icon" , type : "images/png" , sizes : "192x192" , href: "/images/meta/android-chrome-192x192.png" },
		{ rel : "icon" , type : "images/png" , sizes : "512x512" , href: "/images/meta/android-chrome-512x512.png" }
	]
};
seo["en"] = {
	title : "Moviebloc",
	htmlAttrs : {
		lang : "en_US"
	},
	meta : [
		{"charset" : "UTF-8"},
		{"description" : "A community for movie creators and participants. Enjoy movies and get rewarded for your curation and subtitle translation!"},
		{"og:locale" : "en_US"},
		{"og:type" : "website"},
		{"og:title" : "MovieBloc"},
		{"og:description" : "A community for movie creators and participants. Enjoy movies and get rewarded for your curation and subtitle translation!"},
		{"og:url" : "http://moviebloc.com/"},
		{"og:site_name" : "MovieBloc"},
		{"og:image" : "movieblock_fb_image"},
		{"og:image:width" : "1200"},
		{"og:image:height" : "630"},
		{"twitter:card" : "summary_large_image"},
		{"twitter:description" : "A community for movie creators and participants. Enjoy movies and get rewarded for your curation and subtitle translation!"},
		{"twitter:title" : "무비블록"},
		{"twitter:site" : "@moviebloc"},
		{"twitter:image" : "twitter_image.jpg"},
		{"twitter:creator" : "@moviebloc"}
	],
	link : [
		{ rel : "icon" , type : "images/png" , sizes : "16x16" , href: "/images/meta/favicon-16x16.png" },
		{ rel : "icon" , type : "images/png" , sizes : "32x32" , href: "/images/meta/favicon-32x32.png" },
		{ rel : "apple-touch-icon" , sizes : "180x180" , href: "/images/meta/apple-touch-icon.png" },
		{ rel : "icon" , type : "images/png" , sizes : "192x192" , href: "/images/meta/android-chrome-192x192.png" },
		{ rel : "icon" , type : "images/png" , sizes : "512x512" , href: "/images/meta/android-chrome-512x512.png" }
	]
};

export { res , pack , seo };