(function(a){a.fn.wheel=function(d){return this[d?"bind":"trigger"]("wheel",d)};a.event.special.wheel={setup:function(){a.event.add(this,c,b,{})},teardown:function(){a.event.remove(this,c,b)}};var c=!a.browser.mozilla?"mousewheel":"DOMMouseScroll"+(a.browser.version<"1.9"?" mousemove":"");function b(d){switch(d.type){case"mousemove":return a.extend(d.data,{clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY});case"DOMMouseScroll":a.extend(d,d.data);d.delta=-d.originalEvent.detail/3;break;case"mousewheel":d.delta=d.originalEvent.wheelDelta/120;if(a.browser.opera){d.delta*=-1}break}d.type="wheel";return a.event.handle.call(this,d,d.delta)}})(jQuery);