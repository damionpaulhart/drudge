var rss="http://www.drudgereportfeed.com/rss.xml",app=angular.module("druge",[]);app.controller("main",["$scope","$http","$sce",function(e,o,t){o.jsonp("http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q="+encodeURIComponent(rss)).success(function(o){e.stories=o.responseData.feed.entries,e.loadStory(o.responseData.feed.entries[0])}),e.loadStory=function(s){e.active=s,o.jsonp("http://localhost:3000/?callback=JSON_CALLBACK&url="+encodeURIComponent(e.active.link)).success(function(o){e.storyText=t.trustAsHtml(o.html)})}}]);