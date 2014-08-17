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
cljs_async_tut.core.render_query = (function render_query(results){return ("<ul>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4276__auto__ = (function iter__11387(s__11388){return (new cljs.core.LazySeq(null,(function (){var s__11388__$1 = s__11388;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11388__$1);if(temp__4126__auto__)
{var s__11388__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11388__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__11388__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__11390 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__11389 = (0);while(true){
if((i__11389 < size__4275__auto__))
{var result = cljs.core._nth.call(null,c__4274__auto__,i__11389);cljs.core.chunk_append.call(null,b__11390,("<li>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)+"</li>"));
{
var G__11391 = (i__11389 + (1));
i__11389 = G__11391;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11390),iter__11387.call(null,cljs.core.chunk_rest.call(null,s__11388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11390),null);
}
} else
{var result = cljs.core.first.call(null,s__11388__$2);return cljs.core.cons.call(null,("<li>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)+"</li>"),iter__11387.call(null,cljs.core.rest.call(null,s__11388__$2)));
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
return (function (state_11451){var state_val_11452 = (state_11451[(1)]);if((state_val_11452 === (8)))
{var inst_11439 = (state_11451[(2)]);var inst_11440 = cljs.core.nth.call(null,inst_11439,(0),null);var inst_11441 = cljs.core.nth.call(null,inst_11439,(1),null);var inst_11442 = cljs_async_tut.core.render_query.call(null,inst_11441);var inst_11443 = results_view.innerHTML = inst_11442;var state_11451__$1 = (function (){var statearr_11453 = state_11451;(statearr_11453[(7)] = inst_11443);
(statearr_11453[(8)] = inst_11440);
return statearr_11453;
})();var statearr_11454_11468 = state_11451__$1;(statearr_11454_11468[(2)] = null);
(statearr_11454_11468[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11452 === (7)))
{var inst_11433 = (state_11451[(2)]);var inst_11435 = cljs_async_tut.core.user_query.call(null);var inst_11436 = cljs_async_tut.core.query_url.call(null,inst_11435);var inst_11437 = cljs_async_tut.core.jsonp.call(null,inst_11436);var state_11451__$1 = (function (){var statearr_11455 = state_11451;(statearr_11455[(9)] = inst_11433);
return statearr_11455;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11451__$1,(8),inst_11437);
} else
{if((state_val_11452 === (6)))
{var inst_11447 = (state_11451[(2)]);var state_11451__$1 = state_11451;var statearr_11456_11469 = state_11451__$1;(statearr_11456_11469[(2)] = inst_11447);
(statearr_11456_11469[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11452 === (5)))
{var state_11451__$1 = state_11451;var statearr_11457_11470 = state_11451__$1;(statearr_11457_11470[(2)] = null);
(statearr_11457_11470[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11452 === (4)))
{var state_11451__$1 = state_11451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11451__$1,(7),clicks);
} else
{if((state_val_11452 === (3)))
{var inst_11449 = (state_11451[(2)]);var state_11451__$1 = state_11451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11451__$1,inst_11449);
} else
{if((state_val_11452 === (2)))
{var state_11451__$1 = state_11451;var statearr_11458_11471 = state_11451__$1;(statearr_11458_11471[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11452 === (1)))
{var state_11451__$1 = state_11451;var statearr_11460_11472 = state_11451__$1;(statearr_11460_11472[(2)] = null);
(statearr_11460_11472[(1)] = (2));
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
var state_machine__6125__auto____0 = (function (){var statearr_11464 = [null,null,null,null,null,null,null,null,null,null];(statearr_11464[(0)] = state_machine__6125__auto__);
(statearr_11464[(1)] = (1));
return statearr_11464;
});
var state_machine__6125__auto____1 = (function (state_11451){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_11451);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e11465){if((e11465 instanceof Object))
{var ex__6128__auto__ = e11465;var statearr_11466_11473 = state_11451;(statearr_11466_11473[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11451);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11465;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11474 = state_11451;
state_11451 = G__11474;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_11451){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_11451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto__,clicks,results_view))
})();var state__6141__auto__ = (function (){var statearr_11467 = f__6140__auto__.call(null);(statearr_11467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto__);
return statearr_11467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto__,clicks,results_view))
);
return c__6139__auto__;
});
cljs_async_tut.core.init.call(null);

//# sourceMappingURL=core.js.map