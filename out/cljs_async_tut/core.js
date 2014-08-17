// Compiled by ClojureScript 0.0-2311
goog.provide('cljs_async_tut.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs_async_tut.core.wiki_search_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
cljs_async_tut.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,((function (out){
return (function (e){return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);
return out;
});
cljs_async_tut.core.jsonp = (function jsonp(uri){var out = cljs.core.async.chan.call(null);var req = (new goog.net.Jsonp((new goog.Uri(uri))));req.send(null,((function (out,req){
return (function (res){return cljs.core.async.put_BANG_.call(null,out,res);
});})(out,req))
);
return out;
});
cljs_async_tut.core.query_url = (function query_url(q){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_async_tut.core.wiki_search_url)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q));
});
cljs_async_tut.core.user_query = (function user_query(){return goog.dom.getElement("query").value;
});
cljs_async_tut.core.render_query = (function render_query(results){return ("<ul>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4276__auto__ = (function iter__11295(s__11296){return (new cljs.core.LazySeq(null,(function (){var s__11296__$1 = s__11296;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11296__$1);if(temp__4126__auto__)
{var s__11296__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11296__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11296__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11298 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11297 = (0);while(true){
if((i__11297 < size__4275__auto__))
{var result = cljs.core._nth.call(null,c__4274__auto__,i__11297);cljs.core.chunk_append.call(null,b__11298,("<li>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)+"</li>"));
{
var G__11299 = (i__11297 + (1));
i__11297 = G__11299;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11298),iter__11295.call(null,cljs.core.chunk_rest.call(null,s__11296__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11298),null);
}
} else
{var result = cljs.core.first.call(null,s__11296__$2);return cljs.core.cons.call(null,("<li>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)+"</li>"),iter__11295.call(null,cljs.core.rest.call(null,s__11296__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4276__auto__.call(null,results);
})()))+"</ul>");
});
cljs_async_tut.core.init = (function init(){var clicks = cljs_async_tut.core.listen.call(null,goog.dom.getElement("search"),"click");var results_view = goog.dom.getElement("results");var c__6139__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto__,clicks,results_view){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto__,clicks,results_view){
return (function (state_11359){var state_val_11360 = (state_11359[(1)]);if((state_val_11360 === (8)))
{var inst_11347 = (state_11359[(2)]);var inst_11348 = cljs.core.nth.call(null,inst_11347,(0),null);var inst_11349 = cljs.core.nth.call(null,inst_11347,(1),null);var inst_11350 = cljs_async_tut.core.render_query.call(null,inst_11349);var inst_11351 = results_view.innerHTML = inst_11350;var state_11359__$1 = (function (){var statearr_11361 = state_11359;(statearr_11361[(7)] = inst_11351);
(statearr_11361[(8)] = inst_11348);
return statearr_11361;
})();var statearr_11362_11376 = state_11359__$1;(statearr_11362_11376[(2)] = null);
(statearr_11362_11376[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11360 === (7)))
{var inst_11341 = (state_11359[(2)]);var inst_11343 = cljs_async_tut.core.user_query.call(null);var inst_11344 = cljs_async_tut.core.query_url.call(null,inst_11343);var inst_11345 = cljs_async_tut.core.jsonp.call(null,inst_11344);var state_11359__$1 = (function (){var statearr_11363 = state_11359;(statearr_11363[(9)] = inst_11341);
return statearr_11363;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11359__$1,(8),inst_11345);
} else
{if((state_val_11360 === (6)))
{var inst_11355 = (state_11359[(2)]);var state_11359__$1 = state_11359;var statearr_11364_11377 = state_11359__$1;(statearr_11364_11377[(2)] = inst_11355);
(statearr_11364_11377[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11360 === (5)))
{var state_11359__$1 = state_11359;var statearr_11365_11378 = state_11359__$1;(statearr_11365_11378[(2)] = null);
(statearr_11365_11378[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11360 === (4)))
{var state_11359__$1 = state_11359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11359__$1,(7),clicks);
} else
{if((state_val_11360 === (3)))
{var inst_11357 = (state_11359[(2)]);var state_11359__$1 = state_11359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11359__$1,inst_11357);
} else
{if((state_val_11360 === (2)))
{var state_11359__$1 = state_11359;var statearr_11366_11379 = state_11359__$1;(statearr_11366_11379[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11360 === (1)))
{var state_11359__$1 = state_11359;var statearr_11368_11380 = state_11359__$1;(statearr_11368_11380[(2)] = null);
(statearr_11368_11380[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__6139__auto__,clicks,results_view))
;return ((function (switch__6124__auto__,c__6139__auto__,clicks,results_view){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_11372 = [null,null,null,null,null,null,null,null,null,null];(statearr_11372[(0)] = state_machine__6125__auto__);
(statearr_11372[(1)] = (1));
return statearr_11372;
});
var state_machine__6125__auto____1 = (function (state_11359){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_11359);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e11373){if((e11373 instanceof Object))
{var ex__6128__auto__ = e11373;var statearr_11374_11381 = state_11359;(statearr_11374_11381[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11359);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11373;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11382 = state_11359;
state_11359 = G__11382;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_11359){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_11359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto__,clicks,results_view))
})();var state__6141__auto__ = (function (){var statearr_11375 = f__6140__auto__.call(null);(statearr_11375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto__);
return statearr_11375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto__,clicks,results_view))
);
return c__6139__auto__;
});
cljs_async_tut.core.init.call(null);

//# sourceMappingURL=core.js.map