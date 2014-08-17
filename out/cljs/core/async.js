// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t8490 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8490 = (function (f,fn_handler,meta8491){
this.f = f;
this.fn_handler = fn_handler;
this.meta8491 = meta8491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8490.cljs$lang$type = true;
cljs.core.async.t8490.cljs$lang$ctorStr = "cljs.core.async/t8490";
cljs.core.async.t8490.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t8490");
});
cljs.core.async.t8490.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t8490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t8490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8492){var self__ = this;
var _8492__$1 = this;return self__.meta8491;
});
cljs.core.async.t8490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8492,meta8491__$1){var self__ = this;
var _8492__$1 = this;return (new cljs.core.async.t8490(self__.f,self__.fn_handler,meta8491__$1));
});
cljs.core.async.__GT_t8490 = (function __GT_t8490(f__$1,fn_handler__$1,meta8491){return (new cljs.core.async.t8490(f__$1,fn_handler__$1,meta8491));
});
}
return (new cljs.core.async.t8490(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__8494 = buff;if(G__8494)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__8494.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__8494.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8494);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__8494);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_8495 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_8495);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_8495,ret){
return (function (){return fn1.call(null,val_8495);
});})(val_8495,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3539__auto__ = ret;if(cljs.core.truth_(and__3539__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3539__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___8496 = n;var x_8497 = (0);while(true){
if((x_8497 < n__4407__auto___8496))
{(a[x_8497] = (0));
{
var G__8498 = (x_8497 + (1));
x_8497 = G__8498;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__8499 = (i + (1));
i = G__8499;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t8503 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8503 = (function (flag,alt_flag,meta8504){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta8504 = meta8504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8503.cljs$lang$type = true;
cljs.core.async.t8503.cljs$lang$ctorStr = "cljs.core.async/t8503";
cljs.core.async.t8503.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t8503");
});})(flag))
;
cljs.core.async.t8503.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t8503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t8503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8505){var self__ = this;
var _8505__$1 = this;return self__.meta8504;
});})(flag))
;
cljs.core.async.t8503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8505,meta8504__$1){var self__ = this;
var _8505__$1 = this;return (new cljs.core.async.t8503(self__.flag,self__.alt_flag,meta8504__$1));
});})(flag))
;
cljs.core.async.__GT_t8503 = ((function (flag){
return (function __GT_t8503(flag__$1,alt_flag__$1,meta8504){return (new cljs.core.async.t8503(flag__$1,alt_flag__$1,meta8504));
});})(flag))
;
}
return (new cljs.core.async.t8503(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t8509 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8509 = (function (cb,flag,alt_handler,meta8510){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta8510 = meta8510;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8509.cljs$lang$type = true;
cljs.core.async.t8509.cljs$lang$ctorStr = "cljs.core.async/t8509";
cljs.core.async.t8509.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t8509");
});
cljs.core.async.t8509.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t8509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t8509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8511){var self__ = this;
var _8511__$1 = this;return self__.meta8510;
});
cljs.core.async.t8509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8511,meta8510__$1){var self__ = this;
var _8511__$1 = this;return (new cljs.core.async.t8509(self__.cb,self__.flag,self__.alt_handler,meta8510__$1));
});
cljs.core.async.__GT_t8509 = (function __GT_t8509(cb__$1,flag__$1,alt_handler__$1,meta8510){return (new cljs.core.async.t8509(cb__$1,flag__$1,alt_handler__$1,meta8510));
});
}
return (new cljs.core.async.t8509(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8512_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8512_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3551__auto__ = wport;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__8513 = (i + (1));
i = G__8513;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3551__auto__ = ret;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3539__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3539__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3539__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__8514){var map__8516 = p__8514;var map__8516__$1 = ((cljs.core.seq_QMARK_.call(null,map__8516))?cljs.core.apply.call(null,cljs.core.hash_map,map__8516):map__8516);var opts = map__8516__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__8514 = null;if (arguments.length > 1) {
  p__8514 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__8514);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__8517){
var ports = cljs.core.first(arglist__8517);
var p__8514 = cljs.core.rest(arglist__8517);
return alts_BANG___delegate(ports,p__8514);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t8525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8525 = (function (ch,f,map_LT_,meta8526){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8526 = meta8526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8525.cljs$lang$type = true;
cljs.core.async.t8525.cljs$lang$ctorStr = "cljs.core.async/t8525";
cljs.core.async.t8525.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t8525");
});
cljs.core.async.t8525.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8525.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t8525.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8525.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t8528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8528 = (function (fn1,_,meta8526,ch,f,map_LT_,meta8529){
this.fn1 = fn1;
this._ = _;
this.meta8526 = meta8526;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta8529 = meta8529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8528.cljs$lang$type = true;
cljs.core.async.t8528.cljs$lang$ctorStr = "cljs.core.async/t8528";
cljs.core.async.t8528.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t8528");
});})(___$1))
;
cljs.core.async.t8528.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t8528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t8528.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t8528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__8518_SHARP_){return f1.call(null,(((p1__8518_SHARP_ == null))?null:self__.f.call(null,p1__8518_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t8528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8530){var self__ = this;
var _8530__$1 = this;return self__.meta8529;
});})(___$1))
;
cljs.core.async.t8528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8530,meta8529__$1){var self__ = this;
var _8530__$1 = this;return (new cljs.core.async.t8528(self__.fn1,self__._,self__.meta8526,self__.ch,self__.f,self__.map_LT_,meta8529__$1));
});})(___$1))
;
cljs.core.async.__GT_t8528 = ((function (___$1){
return (function __GT_t8528(fn1__$1,___$2,meta8526__$1,ch__$2,f__$2,map_LT___$2,meta8529){return (new cljs.core.async.t8528(fn1__$1,___$2,meta8526__$1,ch__$2,f__$2,map_LT___$2,meta8529));
});})(___$1))
;
}
return (new cljs.core.async.t8528(fn1,___$1,self__.meta8526,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3539__auto__ = ret;if(cljs.core.truth_(and__3539__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3539__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t8525.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8525.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8527){var self__ = this;
var _8527__$1 = this;return self__.meta8526;
});
cljs.core.async.t8525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8527,meta8526__$1){var self__ = this;
var _8527__$1 = this;return (new cljs.core.async.t8525(self__.ch,self__.f,self__.map_LT_,meta8526__$1));
});
cljs.core.async.__GT_t8525 = (function __GT_t8525(ch__$1,f__$1,map_LT___$1,meta8526){return (new cljs.core.async.t8525(ch__$1,f__$1,map_LT___$1,meta8526));
});
}
return (new cljs.core.async.t8525(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t8534 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8534 = (function (ch,f,map_GT_,meta8535){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta8535 = meta8535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8534.cljs$lang$type = true;
cljs.core.async.t8534.cljs$lang$ctorStr = "cljs.core.async/t8534";
cljs.core.async.t8534.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t8534");
});
cljs.core.async.t8534.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8534.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t8534.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8534.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8534.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8534.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8536){var self__ = this;
var _8536__$1 = this;return self__.meta8535;
});
cljs.core.async.t8534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8536,meta8535__$1){var self__ = this;
var _8536__$1 = this;return (new cljs.core.async.t8534(self__.ch,self__.f,self__.map_GT_,meta8535__$1));
});
cljs.core.async.__GT_t8534 = (function __GT_t8534(ch__$1,f__$1,map_GT___$1,meta8535){return (new cljs.core.async.t8534(ch__$1,f__$1,map_GT___$1,meta8535));
});
}
return (new cljs.core.async.t8534(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t8540 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t8540 = (function (ch,p,filter_GT_,meta8541){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta8541 = meta8541;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t8540.cljs$lang$type = true;
cljs.core.async.t8540.cljs$lang$ctorStr = "cljs.core.async/t8540";
cljs.core.async.t8540.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t8540");
});
cljs.core.async.t8540.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t8540.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t8540.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t8540.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t8540.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t8540.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t8540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8542){var self__ = this;
var _8542__$1 = this;return self__.meta8541;
});
cljs.core.async.t8540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8542,meta8541__$1){var self__ = this;
var _8542__$1 = this;return (new cljs.core.async.t8540(self__.ch,self__.p,self__.filter_GT_,meta8541__$1));
});
cljs.core.async.__GT_t8540 = (function __GT_t8540(ch__$1,p__$1,filter_GT___$1,meta8541){return (new cljs.core.async.t8540(ch__$1,p__$1,filter_GT___$1,meta8541));
});
}
return (new cljs.core.async.t8540(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6139__auto___8625 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto___8625,out){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto___8625,out){
return (function (state_8604){var state_val_8605 = (state_8604[(1)]);if((state_val_8605 === (7)))
{var inst_8600 = (state_8604[(2)]);var state_8604__$1 = state_8604;var statearr_8606_8626 = state_8604__$1;(statearr_8606_8626[(2)] = inst_8600);
(statearr_8606_8626[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8605 === (1)))
{var state_8604__$1 = state_8604;var statearr_8607_8627 = state_8604__$1;(statearr_8607_8627[(2)] = null);
(statearr_8607_8627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8605 === (4)))
{var inst_8586 = (state_8604[(7)]);var inst_8586__$1 = (state_8604[(2)]);var inst_8587 = (inst_8586__$1 == null);var state_8604__$1 = (function (){var statearr_8608 = state_8604;(statearr_8608[(7)] = inst_8586__$1);
return statearr_8608;
})();if(cljs.core.truth_(inst_8587))
{var statearr_8609_8628 = state_8604__$1;(statearr_8609_8628[(1)] = (5));
} else
{var statearr_8610_8629 = state_8604__$1;(statearr_8610_8629[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8605 === (6)))
{var inst_8586 = (state_8604[(7)]);var inst_8591 = p.call(null,inst_8586);var state_8604__$1 = state_8604;if(cljs.core.truth_(inst_8591))
{var statearr_8611_8630 = state_8604__$1;(statearr_8611_8630[(1)] = (8));
} else
{var statearr_8612_8631 = state_8604__$1;(statearr_8612_8631[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8605 === (3)))
{var inst_8602 = (state_8604[(2)]);var state_8604__$1 = state_8604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8604__$1,inst_8602);
} else
{if((state_val_8605 === (2)))
{var state_8604__$1 = state_8604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8604__$1,(4),ch);
} else
{if((state_val_8605 === (11)))
{var inst_8594 = (state_8604[(2)]);var state_8604__$1 = state_8604;var statearr_8613_8632 = state_8604__$1;(statearr_8613_8632[(2)] = inst_8594);
(statearr_8613_8632[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8605 === (9)))
{var state_8604__$1 = state_8604;var statearr_8614_8633 = state_8604__$1;(statearr_8614_8633[(2)] = null);
(statearr_8614_8633[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8605 === (5)))
{var inst_8589 = cljs.core.async.close_BANG_.call(null,out);var state_8604__$1 = state_8604;var statearr_8615_8634 = state_8604__$1;(statearr_8615_8634[(2)] = inst_8589);
(statearr_8615_8634[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8605 === (10)))
{var inst_8597 = (state_8604[(2)]);var state_8604__$1 = (function (){var statearr_8616 = state_8604;(statearr_8616[(8)] = inst_8597);
return statearr_8616;
})();var statearr_8617_8635 = state_8604__$1;(statearr_8617_8635[(2)] = null);
(statearr_8617_8635[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8605 === (8)))
{var inst_8586 = (state_8604[(7)]);var state_8604__$1 = state_8604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8604__$1,(11),out,inst_8586);
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
}
}
}
});})(c__6139__auto___8625,out))
;return ((function (switch__6124__auto__,c__6139__auto___8625,out){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_8621 = [null,null,null,null,null,null,null,null,null];(statearr_8621[(0)] = state_machine__6125__auto__);
(statearr_8621[(1)] = (1));
return statearr_8621;
});
var state_machine__6125__auto____1 = (function (state_8604){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_8604);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e8622){if((e8622 instanceof Object))
{var ex__6128__auto__ = e8622;var statearr_8623_8636 = state_8604;(statearr_8623_8636[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e8622;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8637 = state_8604;
state_8604 = G__8637;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_8604){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_8604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto___8625,out))
})();var state__6141__auto__ = (function (){var statearr_8624 = f__6140__auto__.call(null);(statearr_8624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto___8625);
return statearr_8624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto___8625,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6139__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto__){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto__){
return (function (state_8789){var state_val_8790 = (state_8789[(1)]);if((state_val_8790 === (7)))
{var inst_8785 = (state_8789[(2)]);var state_8789__$1 = state_8789;var statearr_8791_8828 = state_8789__$1;(statearr_8791_8828[(2)] = inst_8785);
(statearr_8791_8828[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (20)))
{var inst_8760 = (state_8789[(7)]);var inst_8771 = (state_8789[(2)]);var inst_8772 = cljs.core.next.call(null,inst_8760);var inst_8746 = inst_8772;var inst_8747 = null;var inst_8748 = (0);var inst_8749 = (0);var state_8789__$1 = (function (){var statearr_8792 = state_8789;(statearr_8792[(8)] = inst_8747);
(statearr_8792[(9)] = inst_8748);
(statearr_8792[(10)] = inst_8746);
(statearr_8792[(11)] = inst_8749);
(statearr_8792[(12)] = inst_8771);
return statearr_8792;
})();var statearr_8793_8829 = state_8789__$1;(statearr_8793_8829[(2)] = null);
(statearr_8793_8829[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (1)))
{var state_8789__$1 = state_8789;var statearr_8794_8830 = state_8789__$1;(statearr_8794_8830[(2)] = null);
(statearr_8794_8830[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (4)))
{var inst_8735 = (state_8789[(13)]);var inst_8735__$1 = (state_8789[(2)]);var inst_8736 = (inst_8735__$1 == null);var state_8789__$1 = (function (){var statearr_8798 = state_8789;(statearr_8798[(13)] = inst_8735__$1);
return statearr_8798;
})();if(cljs.core.truth_(inst_8736))
{var statearr_8799_8831 = state_8789__$1;(statearr_8799_8831[(1)] = (5));
} else
{var statearr_8800_8832 = state_8789__$1;(statearr_8800_8832[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (15)))
{var state_8789__$1 = state_8789;var statearr_8801_8833 = state_8789__$1;(statearr_8801_8833[(2)] = null);
(statearr_8801_8833[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (13)))
{var inst_8747 = (state_8789[(8)]);var inst_8748 = (state_8789[(9)]);var inst_8746 = (state_8789[(10)]);var inst_8749 = (state_8789[(11)]);var inst_8756 = (state_8789[(2)]);var inst_8757 = (inst_8749 + (1));var tmp8795 = inst_8747;var tmp8796 = inst_8748;var tmp8797 = inst_8746;var inst_8746__$1 = tmp8797;var inst_8747__$1 = tmp8795;var inst_8748__$1 = tmp8796;var inst_8749__$1 = inst_8757;var state_8789__$1 = (function (){var statearr_8802 = state_8789;(statearr_8802[(8)] = inst_8747__$1);
(statearr_8802[(9)] = inst_8748__$1);
(statearr_8802[(10)] = inst_8746__$1);
(statearr_8802[(14)] = inst_8756);
(statearr_8802[(11)] = inst_8749__$1);
return statearr_8802;
})();var statearr_8803_8834 = state_8789__$1;(statearr_8803_8834[(2)] = null);
(statearr_8803_8834[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (6)))
{var inst_8735 = (state_8789[(13)]);var inst_8740 = f.call(null,inst_8735);var inst_8745 = cljs.core.seq.call(null,inst_8740);var inst_8746 = inst_8745;var inst_8747 = null;var inst_8748 = (0);var inst_8749 = (0);var state_8789__$1 = (function (){var statearr_8804 = state_8789;(statearr_8804[(8)] = inst_8747);
(statearr_8804[(9)] = inst_8748);
(statearr_8804[(10)] = inst_8746);
(statearr_8804[(11)] = inst_8749);
return statearr_8804;
})();var statearr_8805_8835 = state_8789__$1;(statearr_8805_8835[(2)] = null);
(statearr_8805_8835[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (17)))
{var inst_8760 = (state_8789[(7)]);var inst_8764 = cljs.core.chunk_first.call(null,inst_8760);var inst_8765 = cljs.core.chunk_rest.call(null,inst_8760);var inst_8766 = cljs.core.count.call(null,inst_8764);var inst_8746 = inst_8765;var inst_8747 = inst_8764;var inst_8748 = inst_8766;var inst_8749 = (0);var state_8789__$1 = (function (){var statearr_8806 = state_8789;(statearr_8806[(8)] = inst_8747);
(statearr_8806[(9)] = inst_8748);
(statearr_8806[(10)] = inst_8746);
(statearr_8806[(11)] = inst_8749);
return statearr_8806;
})();var statearr_8807_8836 = state_8789__$1;(statearr_8807_8836[(2)] = null);
(statearr_8807_8836[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (3)))
{var inst_8787 = (state_8789[(2)]);var state_8789__$1 = state_8789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8789__$1,inst_8787);
} else
{if((state_val_8790 === (12)))
{var inst_8780 = (state_8789[(2)]);var state_8789__$1 = state_8789;var statearr_8808_8837 = state_8789__$1;(statearr_8808_8837[(2)] = inst_8780);
(statearr_8808_8837[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (2)))
{var state_8789__$1 = state_8789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8789__$1,(4),in$);
} else
{if((state_val_8790 === (19)))
{var inst_8775 = (state_8789[(2)]);var state_8789__$1 = state_8789;var statearr_8809_8838 = state_8789__$1;(statearr_8809_8838[(2)] = inst_8775);
(statearr_8809_8838[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (11)))
{var inst_8760 = (state_8789[(7)]);var inst_8746 = (state_8789[(10)]);var inst_8760__$1 = cljs.core.seq.call(null,inst_8746);var state_8789__$1 = (function (){var statearr_8810 = state_8789;(statearr_8810[(7)] = inst_8760__$1);
return statearr_8810;
})();if(inst_8760__$1)
{var statearr_8811_8839 = state_8789__$1;(statearr_8811_8839[(1)] = (14));
} else
{var statearr_8812_8840 = state_8789__$1;(statearr_8812_8840[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (9)))
{var inst_8782 = (state_8789[(2)]);var state_8789__$1 = (function (){var statearr_8813 = state_8789;(statearr_8813[(15)] = inst_8782);
return statearr_8813;
})();var statearr_8814_8841 = state_8789__$1;(statearr_8814_8841[(2)] = null);
(statearr_8814_8841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (5)))
{var inst_8738 = cljs.core.async.close_BANG_.call(null,out);var state_8789__$1 = state_8789;var statearr_8815_8842 = state_8789__$1;(statearr_8815_8842[(2)] = inst_8738);
(statearr_8815_8842[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (14)))
{var inst_8760 = (state_8789[(7)]);var inst_8762 = cljs.core.chunked_seq_QMARK_.call(null,inst_8760);var state_8789__$1 = state_8789;if(inst_8762)
{var statearr_8816_8843 = state_8789__$1;(statearr_8816_8843[(1)] = (17));
} else
{var statearr_8817_8844 = state_8789__$1;(statearr_8817_8844[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (16)))
{var inst_8778 = (state_8789[(2)]);var state_8789__$1 = state_8789;var statearr_8818_8845 = state_8789__$1;(statearr_8818_8845[(2)] = inst_8778);
(statearr_8818_8845[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8790 === (10)))
{var inst_8747 = (state_8789[(8)]);var inst_8749 = (state_8789[(11)]);var inst_8754 = cljs.core._nth.call(null,inst_8747,inst_8749);var state_8789__$1 = state_8789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8789__$1,(13),out,inst_8754);
} else
{if((state_val_8790 === (18)))
{var inst_8760 = (state_8789[(7)]);var inst_8769 = cljs.core.first.call(null,inst_8760);var state_8789__$1 = state_8789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8789__$1,(20),out,inst_8769);
} else
{if((state_val_8790 === (8)))
{var inst_8748 = (state_8789[(9)]);var inst_8749 = (state_8789[(11)]);var inst_8751 = (inst_8749 < inst_8748);var inst_8752 = inst_8751;var state_8789__$1 = state_8789;if(cljs.core.truth_(inst_8752))
{var statearr_8819_8846 = state_8789__$1;(statearr_8819_8846[(1)] = (10));
} else
{var statearr_8820_8847 = state_8789__$1;(statearr_8820_8847[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6139__auto__))
;return ((function (switch__6124__auto__,c__6139__auto__){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_8824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_8824[(0)] = state_machine__6125__auto__);
(statearr_8824[(1)] = (1));
return statearr_8824;
});
var state_machine__6125__auto____1 = (function (state_8789){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_8789);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e8825){if((e8825 instanceof Object))
{var ex__6128__auto__ = e8825;var statearr_8826_8848 = state_8789;(statearr_8826_8848[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8789);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e8825;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8849 = state_8789;
state_8789 = G__8849;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_8789){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_8789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto__))
})();var state__6141__auto__ = (function (){var statearr_8827 = f__6140__auto__.call(null);(statearr_8827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto__);
return statearr_8827;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto__))
);
return c__6139__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6139__auto___8930 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto___8930){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto___8930){
return (function (state_8909){var state_val_8910 = (state_8909[(1)]);if((state_val_8910 === (7)))
{var inst_8905 = (state_8909[(2)]);var state_8909__$1 = state_8909;var statearr_8911_8931 = state_8909__$1;(statearr_8911_8931[(2)] = inst_8905);
(statearr_8911_8931[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8910 === (1)))
{var state_8909__$1 = state_8909;var statearr_8912_8932 = state_8909__$1;(statearr_8912_8932[(2)] = null);
(statearr_8912_8932[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8910 === (4)))
{var inst_8892 = (state_8909[(7)]);var inst_8892__$1 = (state_8909[(2)]);var inst_8893 = (inst_8892__$1 == null);var state_8909__$1 = (function (){var statearr_8913 = state_8909;(statearr_8913[(7)] = inst_8892__$1);
return statearr_8913;
})();if(cljs.core.truth_(inst_8893))
{var statearr_8914_8933 = state_8909__$1;(statearr_8914_8933[(1)] = (5));
} else
{var statearr_8915_8934 = state_8909__$1;(statearr_8915_8934[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8910 === (6)))
{var inst_8892 = (state_8909[(7)]);var state_8909__$1 = state_8909;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8909__$1,(11),to,inst_8892);
} else
{if((state_val_8910 === (3)))
{var inst_8907 = (state_8909[(2)]);var state_8909__$1 = state_8909;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8909__$1,inst_8907);
} else
{if((state_val_8910 === (2)))
{var state_8909__$1 = state_8909;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8909__$1,(4),from);
} else
{if((state_val_8910 === (11)))
{var inst_8902 = (state_8909[(2)]);var state_8909__$1 = (function (){var statearr_8916 = state_8909;(statearr_8916[(8)] = inst_8902);
return statearr_8916;
})();var statearr_8917_8935 = state_8909__$1;(statearr_8917_8935[(2)] = null);
(statearr_8917_8935[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8910 === (9)))
{var state_8909__$1 = state_8909;var statearr_8918_8936 = state_8909__$1;(statearr_8918_8936[(2)] = null);
(statearr_8918_8936[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8910 === (5)))
{var state_8909__$1 = state_8909;if(cljs.core.truth_(close_QMARK_))
{var statearr_8919_8937 = state_8909__$1;(statearr_8919_8937[(1)] = (8));
} else
{var statearr_8920_8938 = state_8909__$1;(statearr_8920_8938[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8910 === (10)))
{var inst_8899 = (state_8909[(2)]);var state_8909__$1 = state_8909;var statearr_8921_8939 = state_8909__$1;(statearr_8921_8939[(2)] = inst_8899);
(statearr_8921_8939[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_8910 === (8)))
{var inst_8896 = cljs.core.async.close_BANG_.call(null,to);var state_8909__$1 = state_8909;var statearr_8922_8940 = state_8909__$1;(statearr_8922_8940[(2)] = inst_8896);
(statearr_8922_8940[(1)] = (10));
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
}
}
}
});})(c__6139__auto___8930))
;return ((function (switch__6124__auto__,c__6139__auto___8930){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_8926 = [null,null,null,null,null,null,null,null,null];(statearr_8926[(0)] = state_machine__6125__auto__);
(statearr_8926[(1)] = (1));
return statearr_8926;
});
var state_machine__6125__auto____1 = (function (state_8909){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_8909);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e8927){if((e8927 instanceof Object))
{var ex__6128__auto__ = e8927;var statearr_8928_8941 = state_8909;(statearr_8928_8941[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8909);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e8927;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__8942 = state_8909;
state_8909 = G__8942;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_8909){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_8909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto___8930))
})();var state__6141__auto__ = (function (){var statearr_8929 = f__6140__auto__.call(null);(statearr_8929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto___8930);
return statearr_8929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto___8930))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6139__auto___9029 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto___9029,tc,fc){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto___9029,tc,fc){
return (function (state_9007){var state_val_9008 = (state_9007[(1)]);if((state_val_9008 === (7)))
{var inst_9003 = (state_9007[(2)]);var state_9007__$1 = state_9007;var statearr_9009_9030 = state_9007__$1;(statearr_9009_9030[(2)] = inst_9003);
(statearr_9009_9030[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9008 === (1)))
{var state_9007__$1 = state_9007;var statearr_9010_9031 = state_9007__$1;(statearr_9010_9031[(2)] = null);
(statearr_9010_9031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9008 === (4)))
{var inst_8988 = (state_9007[(7)]);var inst_8988__$1 = (state_9007[(2)]);var inst_8989 = (inst_8988__$1 == null);var state_9007__$1 = (function (){var statearr_9011 = state_9007;(statearr_9011[(7)] = inst_8988__$1);
return statearr_9011;
})();if(cljs.core.truth_(inst_8989))
{var statearr_9012_9032 = state_9007__$1;(statearr_9012_9032[(1)] = (5));
} else
{var statearr_9013_9033 = state_9007__$1;(statearr_9013_9033[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9008 === (6)))
{var inst_8988 = (state_9007[(7)]);var inst_8994 = p.call(null,inst_8988);var state_9007__$1 = state_9007;if(cljs.core.truth_(inst_8994))
{var statearr_9014_9034 = state_9007__$1;(statearr_9014_9034[(1)] = (9));
} else
{var statearr_9015_9035 = state_9007__$1;(statearr_9015_9035[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9008 === (3)))
{var inst_9005 = (state_9007[(2)]);var state_9007__$1 = state_9007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9007__$1,inst_9005);
} else
{if((state_val_9008 === (2)))
{var state_9007__$1 = state_9007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9007__$1,(4),ch);
} else
{if((state_val_9008 === (11)))
{var inst_8988 = (state_9007[(7)]);var inst_8998 = (state_9007[(2)]);var state_9007__$1 = state_9007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9007__$1,(8),inst_8998,inst_8988);
} else
{if((state_val_9008 === (9)))
{var state_9007__$1 = state_9007;var statearr_9016_9036 = state_9007__$1;(statearr_9016_9036[(2)] = tc);
(statearr_9016_9036[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9008 === (5)))
{var inst_8991 = cljs.core.async.close_BANG_.call(null,tc);var inst_8992 = cljs.core.async.close_BANG_.call(null,fc);var state_9007__$1 = (function (){var statearr_9017 = state_9007;(statearr_9017[(8)] = inst_8991);
return statearr_9017;
})();var statearr_9018_9037 = state_9007__$1;(statearr_9018_9037[(2)] = inst_8992);
(statearr_9018_9037[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9008 === (10)))
{var state_9007__$1 = state_9007;var statearr_9019_9038 = state_9007__$1;(statearr_9019_9038[(2)] = fc);
(statearr_9019_9038[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9008 === (8)))
{var inst_9000 = (state_9007[(2)]);var state_9007__$1 = (function (){var statearr_9020 = state_9007;(statearr_9020[(9)] = inst_9000);
return statearr_9020;
})();var statearr_9021_9039 = state_9007__$1;(statearr_9021_9039[(2)] = null);
(statearr_9021_9039[(1)] = (2));
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
}
}
}
});})(c__6139__auto___9029,tc,fc))
;return ((function (switch__6124__auto__,c__6139__auto___9029,tc,fc){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_9025 = [null,null,null,null,null,null,null,null,null,null];(statearr_9025[(0)] = state_machine__6125__auto__);
(statearr_9025[(1)] = (1));
return statearr_9025;
});
var state_machine__6125__auto____1 = (function (state_9007){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_9007);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e9026){if((e9026 instanceof Object))
{var ex__6128__auto__ = e9026;var statearr_9027_9040 = state_9007;(statearr_9027_9040[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9007);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9026;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9041 = state_9007;
state_9007 = G__9041;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_9007){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_9007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto___9029,tc,fc))
})();var state__6141__auto__ = (function (){var statearr_9028 = f__6140__auto__.call(null);(statearr_9028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto___9029);
return statearr_9028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto___9029,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6139__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto__){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto__){
return (function (state_9088){var state_val_9089 = (state_9088[(1)]);if((state_val_9089 === (7)))
{var inst_9084 = (state_9088[(2)]);var state_9088__$1 = state_9088;var statearr_9090_9106 = state_9088__$1;(statearr_9090_9106[(2)] = inst_9084);
(statearr_9090_9106[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9089 === (6)))
{var inst_9077 = (state_9088[(7)]);var inst_9074 = (state_9088[(8)]);var inst_9081 = f.call(null,inst_9074,inst_9077);var inst_9074__$1 = inst_9081;var state_9088__$1 = (function (){var statearr_9091 = state_9088;(statearr_9091[(8)] = inst_9074__$1);
return statearr_9091;
})();var statearr_9092_9107 = state_9088__$1;(statearr_9092_9107[(2)] = null);
(statearr_9092_9107[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9089 === (5)))
{var inst_9074 = (state_9088[(8)]);var state_9088__$1 = state_9088;var statearr_9093_9108 = state_9088__$1;(statearr_9093_9108[(2)] = inst_9074);
(statearr_9093_9108[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9089 === (4)))
{var inst_9077 = (state_9088[(7)]);var inst_9077__$1 = (state_9088[(2)]);var inst_9078 = (inst_9077__$1 == null);var state_9088__$1 = (function (){var statearr_9094 = state_9088;(statearr_9094[(7)] = inst_9077__$1);
return statearr_9094;
})();if(cljs.core.truth_(inst_9078))
{var statearr_9095_9109 = state_9088__$1;(statearr_9095_9109[(1)] = (5));
} else
{var statearr_9096_9110 = state_9088__$1;(statearr_9096_9110[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9089 === (3)))
{var inst_9086 = (state_9088[(2)]);var state_9088__$1 = state_9088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9088__$1,inst_9086);
} else
{if((state_val_9089 === (2)))
{var state_9088__$1 = state_9088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9088__$1,(4),ch);
} else
{if((state_val_9089 === (1)))
{var inst_9074 = init;var state_9088__$1 = (function (){var statearr_9097 = state_9088;(statearr_9097[(8)] = inst_9074);
return statearr_9097;
})();var statearr_9098_9111 = state_9088__$1;(statearr_9098_9111[(2)] = null);
(statearr_9098_9111[(1)] = (2));
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
});})(c__6139__auto__))
;return ((function (switch__6124__auto__,c__6139__auto__){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_9102 = [null,null,null,null,null,null,null,null,null];(statearr_9102[(0)] = state_machine__6125__auto__);
(statearr_9102[(1)] = (1));
return statearr_9102;
});
var state_machine__6125__auto____1 = (function (state_9088){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_9088);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e9103){if((e9103 instanceof Object))
{var ex__6128__auto__ = e9103;var statearr_9104_9112 = state_9088;(statearr_9104_9112[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9088);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9103;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9113 = state_9088;
state_9088 = G__9113;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_9088){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_9088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto__))
})();var state__6141__auto__ = (function (){var statearr_9105 = f__6140__auto__.call(null);(statearr_9105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto__);
return statearr_9105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto__))
);
return c__6139__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6139__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto__){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto__){
return (function (state_9175){var state_val_9176 = (state_9175[(1)]);if((state_val_9176 === (7)))
{var inst_9156 = (state_9175[(7)]);var inst_9161 = (state_9175[(2)]);var inst_9162 = cljs.core.next.call(null,inst_9156);var inst_9156__$1 = inst_9162;var state_9175__$1 = (function (){var statearr_9177 = state_9175;(statearr_9177[(7)] = inst_9156__$1);
(statearr_9177[(8)] = inst_9161);
return statearr_9177;
})();var statearr_9178_9196 = state_9175__$1;(statearr_9178_9196[(2)] = null);
(statearr_9178_9196[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9176 === (1)))
{var inst_9155 = cljs.core.seq.call(null,coll);var inst_9156 = inst_9155;var state_9175__$1 = (function (){var statearr_9179 = state_9175;(statearr_9179[(7)] = inst_9156);
return statearr_9179;
})();var statearr_9180_9197 = state_9175__$1;(statearr_9180_9197[(2)] = null);
(statearr_9180_9197[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9176 === (4)))
{var inst_9156 = (state_9175[(7)]);var inst_9159 = cljs.core.first.call(null,inst_9156);var state_9175__$1 = state_9175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9175__$1,(7),ch,inst_9159);
} else
{if((state_val_9176 === (6)))
{var inst_9171 = (state_9175[(2)]);var state_9175__$1 = state_9175;var statearr_9181_9198 = state_9175__$1;(statearr_9181_9198[(2)] = inst_9171);
(statearr_9181_9198[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9176 === (3)))
{var inst_9173 = (state_9175[(2)]);var state_9175__$1 = state_9175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9175__$1,inst_9173);
} else
{if((state_val_9176 === (2)))
{var inst_9156 = (state_9175[(7)]);var state_9175__$1 = state_9175;if(cljs.core.truth_(inst_9156))
{var statearr_9182_9199 = state_9175__$1;(statearr_9182_9199[(1)] = (4));
} else
{var statearr_9183_9200 = state_9175__$1;(statearr_9183_9200[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9176 === (9)))
{var state_9175__$1 = state_9175;var statearr_9184_9201 = state_9175__$1;(statearr_9184_9201[(2)] = null);
(statearr_9184_9201[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9176 === (5)))
{var state_9175__$1 = state_9175;if(cljs.core.truth_(close_QMARK_))
{var statearr_9185_9202 = state_9175__$1;(statearr_9185_9202[(1)] = (8));
} else
{var statearr_9186_9203 = state_9175__$1;(statearr_9186_9203[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9176 === (10)))
{var inst_9169 = (state_9175[(2)]);var state_9175__$1 = state_9175;var statearr_9187_9204 = state_9175__$1;(statearr_9187_9204[(2)] = inst_9169);
(statearr_9187_9204[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9176 === (8)))
{var inst_9166 = cljs.core.async.close_BANG_.call(null,ch);var state_9175__$1 = state_9175;var statearr_9188_9205 = state_9175__$1;(statearr_9188_9205[(2)] = inst_9166);
(statearr_9188_9205[(1)] = (10));
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
}
}
});})(c__6139__auto__))
;return ((function (switch__6124__auto__,c__6139__auto__){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_9192 = [null,null,null,null,null,null,null,null,null];(statearr_9192[(0)] = state_machine__6125__auto__);
(statearr_9192[(1)] = (1));
return statearr_9192;
});
var state_machine__6125__auto____1 = (function (state_9175){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_9175);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e9193){if((e9193 instanceof Object))
{var ex__6128__auto__ = e9193;var statearr_9194_9206 = state_9175;(statearr_9194_9206[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9193;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9207 = state_9175;
state_9175 = G__9207;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_9175){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_9175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto__))
})();var state__6141__auto__ = (function (){var statearr_9195 = f__6140__auto__.call(null);(statearr_9195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto__);
return statearr_9195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto__))
);
return c__6139__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj9209 = {};return obj9209;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3539__auto__ = _;if(and__3539__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4178__auto__ = (((_ == null))?null:_);return (function (){var or__3551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj9211 = {};return obj9211;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t9426 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9426 = (function (cs,ch,mult,meta9427){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta9427 = meta9427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9426.cljs$lang$type = true;
cljs.core.async.t9426.cljs$lang$ctorStr = "cljs.core.async/t9426";
cljs.core.async.t9426.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9426");
});})(cs))
;
cljs.core.async.t9426.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t9426.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t9426.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t9426.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t9426.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9426.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t9426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9428){var self__ = this;
var _9428__$1 = this;return self__.meta9427;
});})(cs))
;
cljs.core.async.t9426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9428,meta9427__$1){var self__ = this;
var _9428__$1 = this;return (new cljs.core.async.t9426(self__.cs,self__.ch,self__.mult,meta9427__$1));
});})(cs))
;
cljs.core.async.__GT_t9426 = ((function (cs){
return (function __GT_t9426(cs__$1,ch__$1,mult__$1,meta9427){return (new cljs.core.async.t9426(cs__$1,ch__$1,mult__$1,meta9427));
});})(cs))
;
}
return (new cljs.core.async.t9426(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6139__auto___9640 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto___9640,cs,m,dchan,dctr,done){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto___9640,cs,m,dchan,dctr,done){
return (function (state_9558){var state_val_9559 = (state_9558[(1)]);if((state_val_9559 === (7)))
{var inst_9554 = (state_9558[(2)]);var state_9558__$1 = state_9558;var statearr_9560_9641 = state_9558__$1;(statearr_9560_9641[(2)] = inst_9554);
(statearr_9560_9641[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (20)))
{var inst_9460 = (state_9558[(7)]);var inst_9470 = cljs.core.first.call(null,inst_9460);var inst_9471 = cljs.core.nth.call(null,inst_9470,(0),null);var inst_9472 = cljs.core.nth.call(null,inst_9470,(1),null);var state_9558__$1 = (function (){var statearr_9561 = state_9558;(statearr_9561[(8)] = inst_9471);
return statearr_9561;
})();if(cljs.core.truth_(inst_9472))
{var statearr_9562_9642 = state_9558__$1;(statearr_9562_9642[(1)] = (22));
} else
{var statearr_9563_9643 = state_9558__$1;(statearr_9563_9643[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (27)))
{var inst_9502 = (state_9558[(9)]);var inst_9500 = (state_9558[(10)]);var inst_9507 = cljs.core._nth.call(null,inst_9500,inst_9502);var state_9558__$1 = (function (){var statearr_9564 = state_9558;(statearr_9564[(11)] = inst_9507);
return statearr_9564;
})();var statearr_9565_9644 = state_9558__$1;(statearr_9565_9644[(2)] = null);
(statearr_9565_9644[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (1)))
{var state_9558__$1 = state_9558;var statearr_9566_9645 = state_9558__$1;(statearr_9566_9645[(2)] = null);
(statearr_9566_9645[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (24)))
{var inst_9460 = (state_9558[(7)]);var inst_9477 = (state_9558[(2)]);var inst_9478 = cljs.core.next.call(null,inst_9460);var inst_9440 = inst_9478;var inst_9441 = null;var inst_9442 = (0);var inst_9443 = (0);var state_9558__$1 = (function (){var statearr_9567 = state_9558;(statearr_9567[(12)] = inst_9440);
(statearr_9567[(13)] = inst_9441);
(statearr_9567[(14)] = inst_9442);
(statearr_9567[(15)] = inst_9477);
(statearr_9567[(16)] = inst_9443);
return statearr_9567;
})();var statearr_9568_9646 = state_9558__$1;(statearr_9568_9646[(2)] = null);
(statearr_9568_9646[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (39)))
{var inst_9520 = (state_9558[(17)]);var inst_9538 = (state_9558[(2)]);var inst_9539 = cljs.core.next.call(null,inst_9520);var inst_9499 = inst_9539;var inst_9500 = null;var inst_9501 = (0);var inst_9502 = (0);var state_9558__$1 = (function (){var statearr_9572 = state_9558;(statearr_9572[(18)] = inst_9501);
(statearr_9572[(19)] = inst_9499);
(statearr_9572[(9)] = inst_9502);
(statearr_9572[(10)] = inst_9500);
(statearr_9572[(20)] = inst_9538);
return statearr_9572;
})();var statearr_9573_9647 = state_9558__$1;(statearr_9573_9647[(2)] = null);
(statearr_9573_9647[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (4)))
{var inst_9431 = (state_9558[(21)]);var inst_9431__$1 = (state_9558[(2)]);var inst_9432 = (inst_9431__$1 == null);var state_9558__$1 = (function (){var statearr_9574 = state_9558;(statearr_9574[(21)] = inst_9431__$1);
return statearr_9574;
})();if(cljs.core.truth_(inst_9432))
{var statearr_9575_9648 = state_9558__$1;(statearr_9575_9648[(1)] = (5));
} else
{var statearr_9576_9649 = state_9558__$1;(statearr_9576_9649[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (15)))
{var inst_9440 = (state_9558[(12)]);var inst_9441 = (state_9558[(13)]);var inst_9442 = (state_9558[(14)]);var inst_9443 = (state_9558[(16)]);var inst_9456 = (state_9558[(2)]);var inst_9457 = (inst_9443 + (1));var tmp9569 = inst_9440;var tmp9570 = inst_9441;var tmp9571 = inst_9442;var inst_9440__$1 = tmp9569;var inst_9441__$1 = tmp9570;var inst_9442__$1 = tmp9571;var inst_9443__$1 = inst_9457;var state_9558__$1 = (function (){var statearr_9577 = state_9558;(statearr_9577[(22)] = inst_9456);
(statearr_9577[(12)] = inst_9440__$1);
(statearr_9577[(13)] = inst_9441__$1);
(statearr_9577[(14)] = inst_9442__$1);
(statearr_9577[(16)] = inst_9443__$1);
return statearr_9577;
})();var statearr_9578_9650 = state_9558__$1;(statearr_9578_9650[(2)] = null);
(statearr_9578_9650[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (21)))
{var inst_9481 = (state_9558[(2)]);var state_9558__$1 = state_9558;var statearr_9579_9651 = state_9558__$1;(statearr_9579_9651[(2)] = inst_9481);
(statearr_9579_9651[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (31)))
{var inst_9507 = (state_9558[(11)]);var inst_9508 = (state_9558[(2)]);var inst_9509 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9510 = cljs.core.async.untap_STAR_.call(null,m,inst_9507);var state_9558__$1 = (function (){var statearr_9580 = state_9558;(statearr_9580[(23)] = inst_9509);
(statearr_9580[(24)] = inst_9508);
return statearr_9580;
})();var statearr_9581_9652 = state_9558__$1;(statearr_9581_9652[(2)] = inst_9510);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9558__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (32)))
{var inst_9431 = (state_9558[(21)]);var inst_9507 = (state_9558[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9558,(31),Object,null,(30));var inst_9514 = cljs.core.async.put_BANG_.call(null,inst_9507,inst_9431,done);var state_9558__$1 = state_9558;var statearr_9582_9653 = state_9558__$1;(statearr_9582_9653[(2)] = inst_9514);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9558__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (40)))
{var inst_9529 = (state_9558[(25)]);var inst_9530 = (state_9558[(2)]);var inst_9531 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_9532 = cljs.core.async.untap_STAR_.call(null,m,inst_9529);var state_9558__$1 = (function (){var statearr_9583 = state_9558;(statearr_9583[(26)] = inst_9530);
(statearr_9583[(27)] = inst_9531);
return statearr_9583;
})();var statearr_9584_9654 = state_9558__$1;(statearr_9584_9654[(2)] = inst_9532);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9558__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (33)))
{var inst_9520 = (state_9558[(17)]);var inst_9522 = cljs.core.chunked_seq_QMARK_.call(null,inst_9520);var state_9558__$1 = state_9558;if(inst_9522)
{var statearr_9585_9655 = state_9558__$1;(statearr_9585_9655[(1)] = (36));
} else
{var statearr_9586_9656 = state_9558__$1;(statearr_9586_9656[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (13)))
{var inst_9450 = (state_9558[(28)]);var inst_9453 = cljs.core.async.close_BANG_.call(null,inst_9450);var state_9558__$1 = state_9558;var statearr_9587_9657 = state_9558__$1;(statearr_9587_9657[(2)] = inst_9453);
(statearr_9587_9657[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (22)))
{var inst_9471 = (state_9558[(8)]);var inst_9474 = cljs.core.async.close_BANG_.call(null,inst_9471);var state_9558__$1 = state_9558;var statearr_9588_9658 = state_9558__$1;(statearr_9588_9658[(2)] = inst_9474);
(statearr_9588_9658[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (36)))
{var inst_9520 = (state_9558[(17)]);var inst_9524 = cljs.core.chunk_first.call(null,inst_9520);var inst_9525 = cljs.core.chunk_rest.call(null,inst_9520);var inst_9526 = cljs.core.count.call(null,inst_9524);var inst_9499 = inst_9525;var inst_9500 = inst_9524;var inst_9501 = inst_9526;var inst_9502 = (0);var state_9558__$1 = (function (){var statearr_9589 = state_9558;(statearr_9589[(18)] = inst_9501);
(statearr_9589[(19)] = inst_9499);
(statearr_9589[(9)] = inst_9502);
(statearr_9589[(10)] = inst_9500);
return statearr_9589;
})();var statearr_9590_9659 = state_9558__$1;(statearr_9590_9659[(2)] = null);
(statearr_9590_9659[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (41)))
{var inst_9431 = (state_9558[(21)]);var inst_9529 = (state_9558[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9558,(40),Object,null,(39));var inst_9536 = cljs.core.async.put_BANG_.call(null,inst_9529,inst_9431,done);var state_9558__$1 = state_9558;var statearr_9591_9660 = state_9558__$1;(statearr_9591_9660[(2)] = inst_9536);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9558__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (29)))
{var inst_9547 = (state_9558[(2)]);var state_9558__$1 = state_9558;var statearr_9592_9661 = state_9558__$1;(statearr_9592_9661[(2)] = inst_9547);
(statearr_9592_9661[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (6)))
{var inst_9490 = cljs.core.deref.call(null,cs);var inst_9491 = cljs.core.keys.call(null,inst_9490);var inst_9492 = cljs.core.count.call(null,inst_9491);var inst_9493 = cljs.core.reset_BANG_.call(null,dctr,inst_9492);var inst_9498 = cljs.core.seq.call(null,inst_9491);var inst_9499 = inst_9498;var inst_9500 = null;var inst_9501 = (0);var inst_9502 = (0);var state_9558__$1 = (function (){var statearr_9593 = state_9558;(statearr_9593[(18)] = inst_9501);
(statearr_9593[(19)] = inst_9499);
(statearr_9593[(9)] = inst_9502);
(statearr_9593[(10)] = inst_9500);
(statearr_9593[(29)] = inst_9493);
return statearr_9593;
})();var statearr_9594_9662 = state_9558__$1;(statearr_9594_9662[(2)] = null);
(statearr_9594_9662[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (28)))
{var inst_9499 = (state_9558[(19)]);var inst_9520 = (state_9558[(17)]);var inst_9520__$1 = cljs.core.seq.call(null,inst_9499);var state_9558__$1 = (function (){var statearr_9595 = state_9558;(statearr_9595[(17)] = inst_9520__$1);
return statearr_9595;
})();if(inst_9520__$1)
{var statearr_9596_9663 = state_9558__$1;(statearr_9596_9663[(1)] = (33));
} else
{var statearr_9597_9664 = state_9558__$1;(statearr_9597_9664[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (25)))
{var inst_9501 = (state_9558[(18)]);var inst_9502 = (state_9558[(9)]);var inst_9504 = (inst_9502 < inst_9501);var inst_9505 = inst_9504;var state_9558__$1 = state_9558;if(cljs.core.truth_(inst_9505))
{var statearr_9598_9665 = state_9558__$1;(statearr_9598_9665[(1)] = (27));
} else
{var statearr_9599_9666 = state_9558__$1;(statearr_9599_9666[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (34)))
{var state_9558__$1 = state_9558;var statearr_9600_9667 = state_9558__$1;(statearr_9600_9667[(2)] = null);
(statearr_9600_9667[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (17)))
{var state_9558__$1 = state_9558;var statearr_9601_9668 = state_9558__$1;(statearr_9601_9668[(2)] = null);
(statearr_9601_9668[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (3)))
{var inst_9556 = (state_9558[(2)]);var state_9558__$1 = state_9558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9558__$1,inst_9556);
} else
{if((state_val_9559 === (12)))
{var inst_9486 = (state_9558[(2)]);var state_9558__$1 = state_9558;var statearr_9602_9669 = state_9558__$1;(statearr_9602_9669[(2)] = inst_9486);
(statearr_9602_9669[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (2)))
{var state_9558__$1 = state_9558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9558__$1,(4),ch);
} else
{if((state_val_9559 === (23)))
{var state_9558__$1 = state_9558;var statearr_9603_9670 = state_9558__$1;(statearr_9603_9670[(2)] = null);
(statearr_9603_9670[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (35)))
{var inst_9545 = (state_9558[(2)]);var state_9558__$1 = state_9558;var statearr_9604_9671 = state_9558__$1;(statearr_9604_9671[(2)] = inst_9545);
(statearr_9604_9671[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (19)))
{var inst_9460 = (state_9558[(7)]);var inst_9464 = cljs.core.chunk_first.call(null,inst_9460);var inst_9465 = cljs.core.chunk_rest.call(null,inst_9460);var inst_9466 = cljs.core.count.call(null,inst_9464);var inst_9440 = inst_9465;var inst_9441 = inst_9464;var inst_9442 = inst_9466;var inst_9443 = (0);var state_9558__$1 = (function (){var statearr_9605 = state_9558;(statearr_9605[(12)] = inst_9440);
(statearr_9605[(13)] = inst_9441);
(statearr_9605[(14)] = inst_9442);
(statearr_9605[(16)] = inst_9443);
return statearr_9605;
})();var statearr_9606_9672 = state_9558__$1;(statearr_9606_9672[(2)] = null);
(statearr_9606_9672[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (11)))
{var inst_9440 = (state_9558[(12)]);var inst_9460 = (state_9558[(7)]);var inst_9460__$1 = cljs.core.seq.call(null,inst_9440);var state_9558__$1 = (function (){var statearr_9607 = state_9558;(statearr_9607[(7)] = inst_9460__$1);
return statearr_9607;
})();if(inst_9460__$1)
{var statearr_9608_9673 = state_9558__$1;(statearr_9608_9673[(1)] = (16));
} else
{var statearr_9609_9674 = state_9558__$1;(statearr_9609_9674[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (9)))
{var inst_9488 = (state_9558[(2)]);var state_9558__$1 = state_9558;var statearr_9610_9675 = state_9558__$1;(statearr_9610_9675[(2)] = inst_9488);
(statearr_9610_9675[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (5)))
{var inst_9438 = cljs.core.deref.call(null,cs);var inst_9439 = cljs.core.seq.call(null,inst_9438);var inst_9440 = inst_9439;var inst_9441 = null;var inst_9442 = (0);var inst_9443 = (0);var state_9558__$1 = (function (){var statearr_9611 = state_9558;(statearr_9611[(12)] = inst_9440);
(statearr_9611[(13)] = inst_9441);
(statearr_9611[(14)] = inst_9442);
(statearr_9611[(16)] = inst_9443);
return statearr_9611;
})();var statearr_9612_9676 = state_9558__$1;(statearr_9612_9676[(2)] = null);
(statearr_9612_9676[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (14)))
{var state_9558__$1 = state_9558;var statearr_9613_9677 = state_9558__$1;(statearr_9613_9677[(2)] = null);
(statearr_9613_9677[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (26)))
{var inst_9549 = (state_9558[(2)]);var state_9558__$1 = (function (){var statearr_9614 = state_9558;(statearr_9614[(30)] = inst_9549);
return statearr_9614;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9558__$1,(42),dchan);
} else
{if((state_val_9559 === (16)))
{var inst_9460 = (state_9558[(7)]);var inst_9462 = cljs.core.chunked_seq_QMARK_.call(null,inst_9460);var state_9558__$1 = state_9558;if(inst_9462)
{var statearr_9618_9678 = state_9558__$1;(statearr_9618_9678[(1)] = (19));
} else
{var statearr_9619_9679 = state_9558__$1;(statearr_9619_9679[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (38)))
{var inst_9542 = (state_9558[(2)]);var state_9558__$1 = state_9558;var statearr_9620_9680 = state_9558__$1;(statearr_9620_9680[(2)] = inst_9542);
(statearr_9620_9680[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (30)))
{var inst_9501 = (state_9558[(18)]);var inst_9499 = (state_9558[(19)]);var inst_9502 = (state_9558[(9)]);var inst_9500 = (state_9558[(10)]);var inst_9516 = (state_9558[(2)]);var inst_9517 = (inst_9502 + (1));var tmp9615 = inst_9501;var tmp9616 = inst_9499;var tmp9617 = inst_9500;var inst_9499__$1 = tmp9616;var inst_9500__$1 = tmp9617;var inst_9501__$1 = tmp9615;var inst_9502__$1 = inst_9517;var state_9558__$1 = (function (){var statearr_9621 = state_9558;(statearr_9621[(18)] = inst_9501__$1);
(statearr_9621[(19)] = inst_9499__$1);
(statearr_9621[(9)] = inst_9502__$1);
(statearr_9621[(31)] = inst_9516);
(statearr_9621[(10)] = inst_9500__$1);
return statearr_9621;
})();var statearr_9622_9681 = state_9558__$1;(statearr_9622_9681[(2)] = null);
(statearr_9622_9681[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (10)))
{var inst_9441 = (state_9558[(13)]);var inst_9443 = (state_9558[(16)]);var inst_9449 = cljs.core._nth.call(null,inst_9441,inst_9443);var inst_9450 = cljs.core.nth.call(null,inst_9449,(0),null);var inst_9451 = cljs.core.nth.call(null,inst_9449,(1),null);var state_9558__$1 = (function (){var statearr_9623 = state_9558;(statearr_9623[(28)] = inst_9450);
return statearr_9623;
})();if(cljs.core.truth_(inst_9451))
{var statearr_9624_9682 = state_9558__$1;(statearr_9624_9682[(1)] = (13));
} else
{var statearr_9625_9683 = state_9558__$1;(statearr_9625_9683[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (18)))
{var inst_9484 = (state_9558[(2)]);var state_9558__$1 = state_9558;var statearr_9626_9684 = state_9558__$1;(statearr_9626_9684[(2)] = inst_9484);
(statearr_9626_9684[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (42)))
{var inst_9551 = (state_9558[(2)]);var state_9558__$1 = (function (){var statearr_9627 = state_9558;(statearr_9627[(32)] = inst_9551);
return statearr_9627;
})();var statearr_9628_9685 = state_9558__$1;(statearr_9628_9685[(2)] = null);
(statearr_9628_9685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (37)))
{var inst_9520 = (state_9558[(17)]);var inst_9529 = cljs.core.first.call(null,inst_9520);var state_9558__$1 = (function (){var statearr_9629 = state_9558;(statearr_9629[(25)] = inst_9529);
return statearr_9629;
})();var statearr_9630_9686 = state_9558__$1;(statearr_9630_9686[(2)] = null);
(statearr_9630_9686[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9559 === (8)))
{var inst_9442 = (state_9558[(14)]);var inst_9443 = (state_9558[(16)]);var inst_9445 = (inst_9443 < inst_9442);var inst_9446 = inst_9445;var state_9558__$1 = state_9558;if(cljs.core.truth_(inst_9446))
{var statearr_9631_9687 = state_9558__$1;(statearr_9631_9687[(1)] = (10));
} else
{var statearr_9632_9688 = state_9558__$1;(statearr_9632_9688[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6139__auto___9640,cs,m,dchan,dctr,done))
;return ((function (switch__6124__auto__,c__6139__auto___9640,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_9636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9636[(0)] = state_machine__6125__auto__);
(statearr_9636[(1)] = (1));
return statearr_9636;
});
var state_machine__6125__auto____1 = (function (state_9558){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_9558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e9637){if((e9637 instanceof Object))
{var ex__6128__auto__ = e9637;var statearr_9638_9689 = state_9558;(statearr_9638_9689[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9637;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9690 = state_9558;
state_9558 = G__9690;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_9558){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_9558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto___9640,cs,m,dchan,dctr,done))
})();var state__6141__auto__ = (function (){var statearr_9639 = f__6140__auto__.call(null);(statearr_9639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto___9640);
return statearr_9639;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto___9640,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj9692 = {};return obj9692;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t9802 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9802 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9803){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta9803 = meta9803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9802.cljs$lang$type = true;
cljs.core.async.t9802.cljs$lang$ctorStr = "cljs.core.async/t9802";
cljs.core.async.t9802.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9802");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9802.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t9802.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9802.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9802.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9802.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9802.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9802.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t9802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9804){var self__ = this;
var _9804__$1 = this;return self__.meta9803;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t9802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9804,meta9803__$1){var self__ = this;
var _9804__$1 = this;return (new cljs.core.async.t9802(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9803__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t9802 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t9802(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9803){return (new cljs.core.async.t9802(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9803));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t9802(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6139__auto___9911 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto___9911,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto___9911,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9869){var state_val_9870 = (state_9869[(1)]);if((state_val_9870 === (7)))
{var inst_9818 = (state_9869[(7)]);var inst_9823 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9818);var state_9869__$1 = state_9869;var statearr_9871_9912 = state_9869__$1;(statearr_9871_9912[(2)] = inst_9823);
(statearr_9871_9912[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (20)))
{var inst_9833 = (state_9869[(8)]);var state_9869__$1 = state_9869;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9869__$1,(23),out,inst_9833);
} else
{if((state_val_9870 === (1)))
{var inst_9808 = (state_9869[(9)]);var inst_9808__$1 = calc_state.call(null);var inst_9809 = cljs.core.seq_QMARK_.call(null,inst_9808__$1);var state_9869__$1 = (function (){var statearr_9872 = state_9869;(statearr_9872[(9)] = inst_9808__$1);
return statearr_9872;
})();if(inst_9809)
{var statearr_9873_9913 = state_9869__$1;(statearr_9873_9913[(1)] = (2));
} else
{var statearr_9874_9914 = state_9869__$1;(statearr_9874_9914[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (4)))
{var inst_9808 = (state_9869[(9)]);var inst_9814 = (state_9869[(2)]);var inst_9815 = cljs.core.get.call(null,inst_9814,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_9816 = cljs.core.get.call(null,inst_9814,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_9817 = cljs.core.get.call(null,inst_9814,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_9818 = inst_9808;var state_9869__$1 = (function (){var statearr_9875 = state_9869;(statearr_9875[(10)] = inst_9817);
(statearr_9875[(11)] = inst_9815);
(statearr_9875[(7)] = inst_9818);
(statearr_9875[(12)] = inst_9816);
return statearr_9875;
})();var statearr_9876_9915 = state_9869__$1;(statearr_9876_9915[(2)] = null);
(statearr_9876_9915[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (15)))
{var state_9869__$1 = state_9869;var statearr_9877_9916 = state_9869__$1;(statearr_9877_9916[(2)] = null);
(statearr_9877_9916[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (21)))
{var state_9869__$1 = state_9869;var statearr_9878_9917 = state_9869__$1;(statearr_9878_9917[(2)] = null);
(statearr_9878_9917[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (13)))
{var inst_9865 = (state_9869[(2)]);var state_9869__$1 = state_9869;var statearr_9879_9918 = state_9869__$1;(statearr_9879_9918[(2)] = inst_9865);
(statearr_9879_9918[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (22)))
{var inst_9826 = (state_9869[(13)]);var inst_9862 = (state_9869[(2)]);var inst_9818 = inst_9826;var state_9869__$1 = (function (){var statearr_9880 = state_9869;(statearr_9880[(14)] = inst_9862);
(statearr_9880[(7)] = inst_9818);
return statearr_9880;
})();var statearr_9881_9919 = state_9869__$1;(statearr_9881_9919[(2)] = null);
(statearr_9881_9919[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (6)))
{var inst_9867 = (state_9869[(2)]);var state_9869__$1 = state_9869;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9869__$1,inst_9867);
} else
{if((state_val_9870 === (17)))
{var inst_9848 = (state_9869[(15)]);var state_9869__$1 = state_9869;var statearr_9882_9920 = state_9869__$1;(statearr_9882_9920[(2)] = inst_9848);
(statearr_9882_9920[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (3)))
{var inst_9808 = (state_9869[(9)]);var state_9869__$1 = state_9869;var statearr_9883_9921 = state_9869__$1;(statearr_9883_9921[(2)] = inst_9808);
(statearr_9883_9921[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (12)))
{var inst_9829 = (state_9869[(16)]);var inst_9834 = (state_9869[(17)]);var inst_9848 = (state_9869[(15)]);var inst_9848__$1 = inst_9829.call(null,inst_9834);var state_9869__$1 = (function (){var statearr_9884 = state_9869;(statearr_9884[(15)] = inst_9848__$1);
return statearr_9884;
})();if(cljs.core.truth_(inst_9848__$1))
{var statearr_9885_9922 = state_9869__$1;(statearr_9885_9922[(1)] = (17));
} else
{var statearr_9886_9923 = state_9869__$1;(statearr_9886_9923[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (2)))
{var inst_9808 = (state_9869[(9)]);var inst_9811 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9808);var state_9869__$1 = state_9869;var statearr_9887_9924 = state_9869__$1;(statearr_9887_9924[(2)] = inst_9811);
(statearr_9887_9924[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (23)))
{var inst_9859 = (state_9869[(2)]);var state_9869__$1 = state_9869;var statearr_9888_9925 = state_9869__$1;(statearr_9888_9925[(2)] = inst_9859);
(statearr_9888_9925[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (19)))
{var inst_9856 = (state_9869[(2)]);var state_9869__$1 = state_9869;if(cljs.core.truth_(inst_9856))
{var statearr_9889_9926 = state_9869__$1;(statearr_9889_9926[(1)] = (20));
} else
{var statearr_9890_9927 = state_9869__$1;(statearr_9890_9927[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (11)))
{var inst_9833 = (state_9869[(8)]);var inst_9839 = (inst_9833 == null);var state_9869__$1 = state_9869;if(cljs.core.truth_(inst_9839))
{var statearr_9891_9928 = state_9869__$1;(statearr_9891_9928[(1)] = (14));
} else
{var statearr_9892_9929 = state_9869__$1;(statearr_9892_9929[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (9)))
{var inst_9826 = (state_9869[(13)]);var inst_9826__$1 = (state_9869[(2)]);var inst_9827 = cljs.core.get.call(null,inst_9826__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_9828 = cljs.core.get.call(null,inst_9826__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_9829 = cljs.core.get.call(null,inst_9826__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_9869__$1 = (function (){var statearr_9893 = state_9869;(statearr_9893[(16)] = inst_9829);
(statearr_9893[(18)] = inst_9828);
(statearr_9893[(13)] = inst_9826__$1);
return statearr_9893;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_9869__$1,(10),inst_9827);
} else
{if((state_val_9870 === (5)))
{var inst_9818 = (state_9869[(7)]);var inst_9821 = cljs.core.seq_QMARK_.call(null,inst_9818);var state_9869__$1 = state_9869;if(inst_9821)
{var statearr_9894_9930 = state_9869__$1;(statearr_9894_9930[(1)] = (7));
} else
{var statearr_9895_9931 = state_9869__$1;(statearr_9895_9931[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (14)))
{var inst_9834 = (state_9869[(17)]);var inst_9841 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_9834);var state_9869__$1 = state_9869;var statearr_9896_9932 = state_9869__$1;(statearr_9896_9932[(2)] = inst_9841);
(statearr_9896_9932[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (16)))
{var inst_9844 = (state_9869[(2)]);var inst_9845 = calc_state.call(null);var inst_9818 = inst_9845;var state_9869__$1 = (function (){var statearr_9897 = state_9869;(statearr_9897[(19)] = inst_9844);
(statearr_9897[(7)] = inst_9818);
return statearr_9897;
})();var statearr_9898_9933 = state_9869__$1;(statearr_9898_9933[(2)] = null);
(statearr_9898_9933[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (10)))
{var inst_9834 = (state_9869[(17)]);var inst_9833 = (state_9869[(8)]);var inst_9832 = (state_9869[(2)]);var inst_9833__$1 = cljs.core.nth.call(null,inst_9832,(0),null);var inst_9834__$1 = cljs.core.nth.call(null,inst_9832,(1),null);var inst_9835 = (inst_9833__$1 == null);var inst_9836 = cljs.core._EQ_.call(null,inst_9834__$1,change);var inst_9837 = (inst_9835) || (inst_9836);var state_9869__$1 = (function (){var statearr_9899 = state_9869;(statearr_9899[(17)] = inst_9834__$1);
(statearr_9899[(8)] = inst_9833__$1);
return statearr_9899;
})();if(cljs.core.truth_(inst_9837))
{var statearr_9900_9934 = state_9869__$1;(statearr_9900_9934[(1)] = (11));
} else
{var statearr_9901_9935 = state_9869__$1;(statearr_9901_9935[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (18)))
{var inst_9829 = (state_9869[(16)]);var inst_9828 = (state_9869[(18)]);var inst_9834 = (state_9869[(17)]);var inst_9851 = cljs.core.empty_QMARK_.call(null,inst_9829);var inst_9852 = inst_9828.call(null,inst_9834);var inst_9853 = cljs.core.not.call(null,inst_9852);var inst_9854 = (inst_9851) && (inst_9853);var state_9869__$1 = state_9869;var statearr_9902_9936 = state_9869__$1;(statearr_9902_9936[(2)] = inst_9854);
(statearr_9902_9936[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9870 === (8)))
{var inst_9818 = (state_9869[(7)]);var state_9869__$1 = state_9869;var statearr_9903_9937 = state_9869__$1;(statearr_9903_9937[(2)] = inst_9818);
(statearr_9903_9937[(1)] = (9));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6139__auto___9911,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6124__auto__,c__6139__auto___9911,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_9907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9907[(0)] = state_machine__6125__auto__);
(statearr_9907[(1)] = (1));
return statearr_9907;
});
var state_machine__6125__auto____1 = (function (state_9869){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_9869);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e9908){if((e9908 instanceof Object))
{var ex__6128__auto__ = e9908;var statearr_9909_9938 = state_9869;(statearr_9909_9938[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9869);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9908;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9939 = state_9869;
state_9869 = G__9939;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_9869){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_9869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto___9911,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6141__auto__ = (function (){var statearr_9910 = f__6140__auto__.call(null);(statearr_9910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto___9911);
return statearr_9910;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto___9911,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj9941 = {};return obj9941;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3551__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3551__auto__,mults){
return (function (p1__9942_SHARP_){if(cljs.core.truth_(p1__9942_SHARP_.call(null,topic)))
{return p1__9942_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__9942_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10067 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10067 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10068){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10068 = meta10068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10067.cljs$lang$type = true;
cljs.core.async.t10067.cljs$lang$ctorStr = "cljs.core.async/t10067";
cljs.core.async.t10067.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t10067");
});})(mults,ensure_mult))
;
cljs.core.async.t10067.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10067.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10067.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10067.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10067.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10067.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10069){var self__ = this;
var _10069__$1 = this;return self__.meta10068;
});})(mults,ensure_mult))
;
cljs.core.async.t10067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10069,meta10068__$1){var self__ = this;
var _10069__$1 = this;return (new cljs.core.async.t10067(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10068__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10067 = ((function (mults,ensure_mult){
return (function __GT_t10067(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10068){return (new cljs.core.async.t10067(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10068));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10067(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6139__auto___10191 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto___10191,mults,ensure_mult,p){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto___10191,mults,ensure_mult,p){
return (function (state_10143){var state_val_10144 = (state_10143[(1)]);if((state_val_10144 === (7)))
{var inst_10139 = (state_10143[(2)]);var state_10143__$1 = state_10143;var statearr_10145_10192 = state_10143__$1;(statearr_10145_10192[(2)] = inst_10139);
(statearr_10145_10192[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (20)))
{var state_10143__$1 = state_10143;var statearr_10146_10193 = state_10143__$1;(statearr_10146_10193[(2)] = null);
(statearr_10146_10193[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (1)))
{var state_10143__$1 = state_10143;var statearr_10147_10194 = state_10143__$1;(statearr_10147_10194[(2)] = null);
(statearr_10147_10194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (24)))
{var inst_10122 = (state_10143[(7)]);var inst_10072 = (state_10143[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10143,(23),Object,null,(22));var inst_10129 = cljs.core.async.muxch_STAR_.call(null,inst_10122);var state_10143__$1 = state_10143;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10143__$1,(25),inst_10129,inst_10072);
} else
{if((state_val_10144 === (4)))
{var inst_10072 = (state_10143[(8)]);var inst_10072__$1 = (state_10143[(2)]);var inst_10073 = (inst_10072__$1 == null);var state_10143__$1 = (function (){var statearr_10148 = state_10143;(statearr_10148[(8)] = inst_10072__$1);
return statearr_10148;
})();if(cljs.core.truth_(inst_10073))
{var statearr_10149_10195 = state_10143__$1;(statearr_10149_10195[(1)] = (5));
} else
{var statearr_10150_10196 = state_10143__$1;(statearr_10150_10196[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (15)))
{var inst_10114 = (state_10143[(2)]);var state_10143__$1 = state_10143;var statearr_10151_10197 = state_10143__$1;(statearr_10151_10197[(2)] = inst_10114);
(statearr_10151_10197[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (21)))
{var inst_10136 = (state_10143[(2)]);var state_10143__$1 = (function (){var statearr_10152 = state_10143;(statearr_10152[(9)] = inst_10136);
return statearr_10152;
})();var statearr_10153_10198 = state_10143__$1;(statearr_10153_10198[(2)] = null);
(statearr_10153_10198[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (13)))
{var inst_10096 = (state_10143[(10)]);var inst_10098 = cljs.core.chunked_seq_QMARK_.call(null,inst_10096);var state_10143__$1 = state_10143;if(inst_10098)
{var statearr_10154_10199 = state_10143__$1;(statearr_10154_10199[(1)] = (16));
} else
{var statearr_10155_10200 = state_10143__$1;(statearr_10155_10200[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (22)))
{var inst_10133 = (state_10143[(2)]);var state_10143__$1 = state_10143;var statearr_10156_10201 = state_10143__$1;(statearr_10156_10201[(2)] = inst_10133);
(statearr_10156_10201[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (6)))
{var inst_10122 = (state_10143[(7)]);var inst_10120 = (state_10143[(11)]);var inst_10072 = (state_10143[(8)]);var inst_10120__$1 = topic_fn.call(null,inst_10072);var inst_10121 = cljs.core.deref.call(null,mults);var inst_10122__$1 = cljs.core.get.call(null,inst_10121,inst_10120__$1);var state_10143__$1 = (function (){var statearr_10157 = state_10143;(statearr_10157[(7)] = inst_10122__$1);
(statearr_10157[(11)] = inst_10120__$1);
return statearr_10157;
})();if(cljs.core.truth_(inst_10122__$1))
{var statearr_10158_10202 = state_10143__$1;(statearr_10158_10202[(1)] = (19));
} else
{var statearr_10159_10203 = state_10143__$1;(statearr_10159_10203[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (25)))
{var inst_10131 = (state_10143[(2)]);var state_10143__$1 = state_10143;var statearr_10160_10204 = state_10143__$1;(statearr_10160_10204[(2)] = inst_10131);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10143__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (17)))
{var inst_10096 = (state_10143[(10)]);var inst_10105 = cljs.core.first.call(null,inst_10096);var inst_10106 = cljs.core.async.muxch_STAR_.call(null,inst_10105);var inst_10107 = cljs.core.async.close_BANG_.call(null,inst_10106);var inst_10108 = cljs.core.next.call(null,inst_10096);var inst_10082 = inst_10108;var inst_10083 = null;var inst_10084 = (0);var inst_10085 = (0);var state_10143__$1 = (function (){var statearr_10161 = state_10143;(statearr_10161[(12)] = inst_10084);
(statearr_10161[(13)] = inst_10083);
(statearr_10161[(14)] = inst_10107);
(statearr_10161[(15)] = inst_10085);
(statearr_10161[(16)] = inst_10082);
return statearr_10161;
})();var statearr_10162_10205 = state_10143__$1;(statearr_10162_10205[(2)] = null);
(statearr_10162_10205[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (3)))
{var inst_10141 = (state_10143[(2)]);var state_10143__$1 = state_10143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10143__$1,inst_10141);
} else
{if((state_val_10144 === (12)))
{var inst_10116 = (state_10143[(2)]);var state_10143__$1 = state_10143;var statearr_10163_10206 = state_10143__$1;(statearr_10163_10206[(2)] = inst_10116);
(statearr_10163_10206[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (2)))
{var state_10143__$1 = state_10143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10143__$1,(4),ch);
} else
{if((state_val_10144 === (23)))
{var inst_10120 = (state_10143[(11)]);var inst_10124 = (state_10143[(2)]);var inst_10125 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10120);var state_10143__$1 = (function (){var statearr_10164 = state_10143;(statearr_10164[(17)] = inst_10124);
return statearr_10164;
})();var statearr_10165_10207 = state_10143__$1;(statearr_10165_10207[(2)] = inst_10125);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10143__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (19)))
{var state_10143__$1 = state_10143;var statearr_10166_10208 = state_10143__$1;(statearr_10166_10208[(2)] = null);
(statearr_10166_10208[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (11)))
{var inst_10096 = (state_10143[(10)]);var inst_10082 = (state_10143[(16)]);var inst_10096__$1 = cljs.core.seq.call(null,inst_10082);var state_10143__$1 = (function (){var statearr_10167 = state_10143;(statearr_10167[(10)] = inst_10096__$1);
return statearr_10167;
})();if(inst_10096__$1)
{var statearr_10168_10209 = state_10143__$1;(statearr_10168_10209[(1)] = (13));
} else
{var statearr_10169_10210 = state_10143__$1;(statearr_10169_10210[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (9)))
{var inst_10118 = (state_10143[(2)]);var state_10143__$1 = state_10143;var statearr_10170_10211 = state_10143__$1;(statearr_10170_10211[(2)] = inst_10118);
(statearr_10170_10211[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (5)))
{var inst_10079 = cljs.core.deref.call(null,mults);var inst_10080 = cljs.core.vals.call(null,inst_10079);var inst_10081 = cljs.core.seq.call(null,inst_10080);var inst_10082 = inst_10081;var inst_10083 = null;var inst_10084 = (0);var inst_10085 = (0);var state_10143__$1 = (function (){var statearr_10171 = state_10143;(statearr_10171[(12)] = inst_10084);
(statearr_10171[(13)] = inst_10083);
(statearr_10171[(15)] = inst_10085);
(statearr_10171[(16)] = inst_10082);
return statearr_10171;
})();var statearr_10172_10212 = state_10143__$1;(statearr_10172_10212[(2)] = null);
(statearr_10172_10212[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (14)))
{var state_10143__$1 = state_10143;var statearr_10176_10213 = state_10143__$1;(statearr_10176_10213[(2)] = null);
(statearr_10176_10213[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (16)))
{var inst_10096 = (state_10143[(10)]);var inst_10100 = cljs.core.chunk_first.call(null,inst_10096);var inst_10101 = cljs.core.chunk_rest.call(null,inst_10096);var inst_10102 = cljs.core.count.call(null,inst_10100);var inst_10082 = inst_10101;var inst_10083 = inst_10100;var inst_10084 = inst_10102;var inst_10085 = (0);var state_10143__$1 = (function (){var statearr_10177 = state_10143;(statearr_10177[(12)] = inst_10084);
(statearr_10177[(13)] = inst_10083);
(statearr_10177[(15)] = inst_10085);
(statearr_10177[(16)] = inst_10082);
return statearr_10177;
})();var statearr_10178_10214 = state_10143__$1;(statearr_10178_10214[(2)] = null);
(statearr_10178_10214[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (10)))
{var inst_10084 = (state_10143[(12)]);var inst_10083 = (state_10143[(13)]);var inst_10085 = (state_10143[(15)]);var inst_10082 = (state_10143[(16)]);var inst_10090 = cljs.core._nth.call(null,inst_10083,inst_10085);var inst_10091 = cljs.core.async.muxch_STAR_.call(null,inst_10090);var inst_10092 = cljs.core.async.close_BANG_.call(null,inst_10091);var inst_10093 = (inst_10085 + (1));var tmp10173 = inst_10084;var tmp10174 = inst_10083;var tmp10175 = inst_10082;var inst_10082__$1 = tmp10175;var inst_10083__$1 = tmp10174;var inst_10084__$1 = tmp10173;var inst_10085__$1 = inst_10093;var state_10143__$1 = (function (){var statearr_10179 = state_10143;(statearr_10179[(18)] = inst_10092);
(statearr_10179[(12)] = inst_10084__$1);
(statearr_10179[(13)] = inst_10083__$1);
(statearr_10179[(15)] = inst_10085__$1);
(statearr_10179[(16)] = inst_10082__$1);
return statearr_10179;
})();var statearr_10180_10215 = state_10143__$1;(statearr_10180_10215[(2)] = null);
(statearr_10180_10215[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (18)))
{var inst_10111 = (state_10143[(2)]);var state_10143__$1 = state_10143;var statearr_10181_10216 = state_10143__$1;(statearr_10181_10216[(2)] = inst_10111);
(statearr_10181_10216[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (8)))
{var inst_10084 = (state_10143[(12)]);var inst_10085 = (state_10143[(15)]);var inst_10087 = (inst_10085 < inst_10084);var inst_10088 = inst_10087;var state_10143__$1 = state_10143;if(cljs.core.truth_(inst_10088))
{var statearr_10182_10217 = state_10143__$1;(statearr_10182_10217[(1)] = (10));
} else
{var statearr_10183_10218 = state_10143__$1;(statearr_10183_10218[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6139__auto___10191,mults,ensure_mult,p))
;return ((function (switch__6124__auto__,c__6139__auto___10191,mults,ensure_mult,p){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_10187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10187[(0)] = state_machine__6125__auto__);
(statearr_10187[(1)] = (1));
return statearr_10187;
});
var state_machine__6125__auto____1 = (function (state_10143){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_10143);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e10188){if((e10188 instanceof Object))
{var ex__6128__auto__ = e10188;var statearr_10189_10219 = state_10143;(statearr_10189_10219[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10143);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10188;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10220 = state_10143;
state_10143 = G__10220;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_10143){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_10143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto___10191,mults,ensure_mult,p))
})();var state__6141__auto__ = (function (){var statearr_10190 = f__6140__auto__.call(null);(statearr_10190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto___10191);
return statearr_10190;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto___10191,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6139__auto___10357 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto___10357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto___10357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10327){var state_val_10328 = (state_10327[(1)]);if((state_val_10328 === (7)))
{var state_10327__$1 = state_10327;var statearr_10329_10358 = state_10327__$1;(statearr_10329_10358[(2)] = null);
(statearr_10329_10358[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10328 === (1)))
{var state_10327__$1 = state_10327;var statearr_10330_10359 = state_10327__$1;(statearr_10330_10359[(2)] = null);
(statearr_10330_10359[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10328 === (4)))
{var inst_10291 = (state_10327[(7)]);var inst_10293 = (inst_10291 < cnt);var state_10327__$1 = state_10327;if(cljs.core.truth_(inst_10293))
{var statearr_10331_10360 = state_10327__$1;(statearr_10331_10360[(1)] = (6));
} else
{var statearr_10332_10361 = state_10327__$1;(statearr_10332_10361[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10328 === (15)))
{var inst_10323 = (state_10327[(2)]);var state_10327__$1 = state_10327;var statearr_10333_10362 = state_10327__$1;(statearr_10333_10362[(2)] = inst_10323);
(statearr_10333_10362[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10328 === (13)))
{var inst_10316 = cljs.core.async.close_BANG_.call(null,out);var state_10327__$1 = state_10327;var statearr_10334_10363 = state_10327__$1;(statearr_10334_10363[(2)] = inst_10316);
(statearr_10334_10363[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10328 === (6)))
{var state_10327__$1 = state_10327;var statearr_10335_10364 = state_10327__$1;(statearr_10335_10364[(2)] = null);
(statearr_10335_10364[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10328 === (3)))
{var inst_10325 = (state_10327[(2)]);var state_10327__$1 = state_10327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10327__$1,inst_10325);
} else
{if((state_val_10328 === (12)))
{var inst_10313 = (state_10327[(8)]);var inst_10313__$1 = (state_10327[(2)]);var inst_10314 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10313__$1);var state_10327__$1 = (function (){var statearr_10336 = state_10327;(statearr_10336[(8)] = inst_10313__$1);
return statearr_10336;
})();if(cljs.core.truth_(inst_10314))
{var statearr_10337_10365 = state_10327__$1;(statearr_10337_10365[(1)] = (13));
} else
{var statearr_10338_10366 = state_10327__$1;(statearr_10338_10366[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10328 === (2)))
{var inst_10290 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_10291 = (0);var state_10327__$1 = (function (){var statearr_10339 = state_10327;(statearr_10339[(9)] = inst_10290);
(statearr_10339[(7)] = inst_10291);
return statearr_10339;
})();var statearr_10340_10367 = state_10327__$1;(statearr_10340_10367[(2)] = null);
(statearr_10340_10367[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10328 === (11)))
{var inst_10291 = (state_10327[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10327,(10),Object,null,(9));var inst_10300 = chs__$1.call(null,inst_10291);var inst_10301 = done.call(null,inst_10291);var inst_10302 = cljs.core.async.take_BANG_.call(null,inst_10300,inst_10301);var state_10327__$1 = state_10327;var statearr_10341_10368 = state_10327__$1;(statearr_10341_10368[(2)] = inst_10302);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10327__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10328 === (9)))
{var inst_10291 = (state_10327[(7)]);var inst_10304 = (state_10327[(2)]);var inst_10305 = (inst_10291 + (1));var inst_10291__$1 = inst_10305;var state_10327__$1 = (function (){var statearr_10342 = state_10327;(statearr_10342[(7)] = inst_10291__$1);
(statearr_10342[(10)] = inst_10304);
return statearr_10342;
})();var statearr_10343_10369 = state_10327__$1;(statearr_10343_10369[(2)] = null);
(statearr_10343_10369[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10328 === (5)))
{var inst_10311 = (state_10327[(2)]);var state_10327__$1 = (function (){var statearr_10344 = state_10327;(statearr_10344[(11)] = inst_10311);
return statearr_10344;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10327__$1,(12),dchan);
} else
{if((state_val_10328 === (14)))
{var inst_10313 = (state_10327[(8)]);var inst_10318 = cljs.core.apply.call(null,f,inst_10313);var state_10327__$1 = state_10327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10327__$1,(16),out,inst_10318);
} else
{if((state_val_10328 === (16)))
{var inst_10320 = (state_10327[(2)]);var state_10327__$1 = (function (){var statearr_10345 = state_10327;(statearr_10345[(12)] = inst_10320);
return statearr_10345;
})();var statearr_10346_10370 = state_10327__$1;(statearr_10346_10370[(2)] = null);
(statearr_10346_10370[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10328 === (10)))
{var inst_10295 = (state_10327[(2)]);var inst_10296 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_10327__$1 = (function (){var statearr_10347 = state_10327;(statearr_10347[(13)] = inst_10295);
return statearr_10347;
})();var statearr_10348_10371 = state_10327__$1;(statearr_10348_10371[(2)] = inst_10296);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10327__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10328 === (8)))
{var inst_10309 = (state_10327[(2)]);var state_10327__$1 = state_10327;var statearr_10349_10372 = state_10327__$1;(statearr_10349_10372[(2)] = inst_10309);
(statearr_10349_10372[(1)] = (5));
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
}
}
}
}
}
}
}
}
});})(c__6139__auto___10357,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6124__auto__,c__6139__auto___10357,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_10353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10353[(0)] = state_machine__6125__auto__);
(statearr_10353[(1)] = (1));
return statearr_10353;
});
var state_machine__6125__auto____1 = (function (state_10327){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_10327);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e10354){if((e10354 instanceof Object))
{var ex__6128__auto__ = e10354;var statearr_10355_10373 = state_10327;(statearr_10355_10373[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10327);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10354;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10374 = state_10327;
state_10327 = G__10374;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_10327){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_10327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto___10357,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6141__auto__ = (function (){var statearr_10356 = f__6140__auto__.call(null);(statearr_10356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto___10357);
return statearr_10356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto___10357,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6139__auto___10482 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto___10482,out){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto___10482,out){
return (function (state_10458){var state_val_10459 = (state_10458[(1)]);if((state_val_10459 === (7)))
{var inst_10438 = (state_10458[(7)]);var inst_10437 = (state_10458[(8)]);var inst_10437__$1 = (state_10458[(2)]);var inst_10438__$1 = cljs.core.nth.call(null,inst_10437__$1,(0),null);var inst_10439 = cljs.core.nth.call(null,inst_10437__$1,(1),null);var inst_10440 = (inst_10438__$1 == null);var state_10458__$1 = (function (){var statearr_10460 = state_10458;(statearr_10460[(9)] = inst_10439);
(statearr_10460[(7)] = inst_10438__$1);
(statearr_10460[(8)] = inst_10437__$1);
return statearr_10460;
})();if(cljs.core.truth_(inst_10440))
{var statearr_10461_10483 = state_10458__$1;(statearr_10461_10483[(1)] = (8));
} else
{var statearr_10462_10484 = state_10458__$1;(statearr_10462_10484[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10459 === (1)))
{var inst_10429 = cljs.core.vec.call(null,chs);var inst_10430 = inst_10429;var state_10458__$1 = (function (){var statearr_10463 = state_10458;(statearr_10463[(10)] = inst_10430);
return statearr_10463;
})();var statearr_10464_10485 = state_10458__$1;(statearr_10464_10485[(2)] = null);
(statearr_10464_10485[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10459 === (4)))
{var inst_10430 = (state_10458[(10)]);var state_10458__$1 = state_10458;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10458__$1,(7),inst_10430);
} else
{if((state_val_10459 === (6)))
{var inst_10454 = (state_10458[(2)]);var state_10458__$1 = state_10458;var statearr_10465_10486 = state_10458__$1;(statearr_10465_10486[(2)] = inst_10454);
(statearr_10465_10486[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10459 === (3)))
{var inst_10456 = (state_10458[(2)]);var state_10458__$1 = state_10458;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10458__$1,inst_10456);
} else
{if((state_val_10459 === (2)))
{var inst_10430 = (state_10458[(10)]);var inst_10432 = cljs.core.count.call(null,inst_10430);var inst_10433 = (inst_10432 > (0));var state_10458__$1 = state_10458;if(cljs.core.truth_(inst_10433))
{var statearr_10467_10487 = state_10458__$1;(statearr_10467_10487[(1)] = (4));
} else
{var statearr_10468_10488 = state_10458__$1;(statearr_10468_10488[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10459 === (11)))
{var inst_10430 = (state_10458[(10)]);var inst_10447 = (state_10458[(2)]);var tmp10466 = inst_10430;var inst_10430__$1 = tmp10466;var state_10458__$1 = (function (){var statearr_10469 = state_10458;(statearr_10469[(11)] = inst_10447);
(statearr_10469[(10)] = inst_10430__$1);
return statearr_10469;
})();var statearr_10470_10489 = state_10458__$1;(statearr_10470_10489[(2)] = null);
(statearr_10470_10489[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10459 === (9)))
{var inst_10438 = (state_10458[(7)]);var state_10458__$1 = state_10458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10458__$1,(11),out,inst_10438);
} else
{if((state_val_10459 === (5)))
{var inst_10452 = cljs.core.async.close_BANG_.call(null,out);var state_10458__$1 = state_10458;var statearr_10471_10490 = state_10458__$1;(statearr_10471_10490[(2)] = inst_10452);
(statearr_10471_10490[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10459 === (10)))
{var inst_10450 = (state_10458[(2)]);var state_10458__$1 = state_10458;var statearr_10472_10491 = state_10458__$1;(statearr_10472_10491[(2)] = inst_10450);
(statearr_10472_10491[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10459 === (8)))
{var inst_10439 = (state_10458[(9)]);var inst_10438 = (state_10458[(7)]);var inst_10437 = (state_10458[(8)]);var inst_10430 = (state_10458[(10)]);var inst_10442 = (function (){var c = inst_10439;var v = inst_10438;var vec__10435 = inst_10437;var cs = inst_10430;return ((function (c,v,vec__10435,cs,inst_10439,inst_10438,inst_10437,inst_10430,state_val_10459,c__6139__auto___10482,out){
return (function (p1__10375_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__10375_SHARP_);
});
;})(c,v,vec__10435,cs,inst_10439,inst_10438,inst_10437,inst_10430,state_val_10459,c__6139__auto___10482,out))
})();var inst_10443 = cljs.core.filterv.call(null,inst_10442,inst_10430);var inst_10430__$1 = inst_10443;var state_10458__$1 = (function (){var statearr_10473 = state_10458;(statearr_10473[(10)] = inst_10430__$1);
return statearr_10473;
})();var statearr_10474_10492 = state_10458__$1;(statearr_10474_10492[(2)] = null);
(statearr_10474_10492[(1)] = (2));
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
}
}
}
});})(c__6139__auto___10482,out))
;return ((function (switch__6124__auto__,c__6139__auto___10482,out){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_10478 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10478[(0)] = state_machine__6125__auto__);
(statearr_10478[(1)] = (1));
return statearr_10478;
});
var state_machine__6125__auto____1 = (function (state_10458){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_10458);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e10479){if((e10479 instanceof Object))
{var ex__6128__auto__ = e10479;var statearr_10480_10493 = state_10458;(statearr_10480_10493[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10458);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10479;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10494 = state_10458;
state_10458 = G__10494;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_10458){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_10458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto___10482,out))
})();var state__6141__auto__ = (function (){var statearr_10481 = f__6140__auto__.call(null);(statearr_10481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto___10482);
return statearr_10481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto___10482,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6139__auto___10587 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto___10587,out){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto___10587,out){
return (function (state_10564){var state_val_10565 = (state_10564[(1)]);if((state_val_10565 === (7)))
{var inst_10546 = (state_10564[(7)]);var inst_10546__$1 = (state_10564[(2)]);var inst_10547 = (inst_10546__$1 == null);var inst_10548 = cljs.core.not.call(null,inst_10547);var state_10564__$1 = (function (){var statearr_10566 = state_10564;(statearr_10566[(7)] = inst_10546__$1);
return statearr_10566;
})();if(inst_10548)
{var statearr_10567_10588 = state_10564__$1;(statearr_10567_10588[(1)] = (8));
} else
{var statearr_10568_10589 = state_10564__$1;(statearr_10568_10589[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10565 === (1)))
{var inst_10541 = (0);var state_10564__$1 = (function (){var statearr_10569 = state_10564;(statearr_10569[(8)] = inst_10541);
return statearr_10569;
})();var statearr_10570_10590 = state_10564__$1;(statearr_10570_10590[(2)] = null);
(statearr_10570_10590[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10565 === (4)))
{var state_10564__$1 = state_10564;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10564__$1,(7),ch);
} else
{if((state_val_10565 === (6)))
{var inst_10559 = (state_10564[(2)]);var state_10564__$1 = state_10564;var statearr_10571_10591 = state_10564__$1;(statearr_10571_10591[(2)] = inst_10559);
(statearr_10571_10591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10565 === (3)))
{var inst_10561 = (state_10564[(2)]);var inst_10562 = cljs.core.async.close_BANG_.call(null,out);var state_10564__$1 = (function (){var statearr_10572 = state_10564;(statearr_10572[(9)] = inst_10561);
return statearr_10572;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10564__$1,inst_10562);
} else
{if((state_val_10565 === (2)))
{var inst_10541 = (state_10564[(8)]);var inst_10543 = (inst_10541 < n);var state_10564__$1 = state_10564;if(cljs.core.truth_(inst_10543))
{var statearr_10573_10592 = state_10564__$1;(statearr_10573_10592[(1)] = (4));
} else
{var statearr_10574_10593 = state_10564__$1;(statearr_10574_10593[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10565 === (11)))
{var inst_10541 = (state_10564[(8)]);var inst_10551 = (state_10564[(2)]);var inst_10552 = (inst_10541 + (1));var inst_10541__$1 = inst_10552;var state_10564__$1 = (function (){var statearr_10575 = state_10564;(statearr_10575[(8)] = inst_10541__$1);
(statearr_10575[(10)] = inst_10551);
return statearr_10575;
})();var statearr_10576_10594 = state_10564__$1;(statearr_10576_10594[(2)] = null);
(statearr_10576_10594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10565 === (9)))
{var state_10564__$1 = state_10564;var statearr_10577_10595 = state_10564__$1;(statearr_10577_10595[(2)] = null);
(statearr_10577_10595[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10565 === (5)))
{var state_10564__$1 = state_10564;var statearr_10578_10596 = state_10564__$1;(statearr_10578_10596[(2)] = null);
(statearr_10578_10596[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10565 === (10)))
{var inst_10556 = (state_10564[(2)]);var state_10564__$1 = state_10564;var statearr_10579_10597 = state_10564__$1;(statearr_10579_10597[(2)] = inst_10556);
(statearr_10579_10597[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10565 === (8)))
{var inst_10546 = (state_10564[(7)]);var state_10564__$1 = state_10564;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10564__$1,(11),out,inst_10546);
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
}
}
}
});})(c__6139__auto___10587,out))
;return ((function (switch__6124__auto__,c__6139__auto___10587,out){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_10583 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10583[(0)] = state_machine__6125__auto__);
(statearr_10583[(1)] = (1));
return statearr_10583;
});
var state_machine__6125__auto____1 = (function (state_10564){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_10564);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e10584){if((e10584 instanceof Object))
{var ex__6128__auto__ = e10584;var statearr_10585_10598 = state_10564;(statearr_10585_10598[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10564);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10584;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10599 = state_10564;
state_10564 = G__10599;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_10564){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_10564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto___10587,out))
})();var state__6141__auto__ = (function (){var statearr_10586 = f__6140__auto__.call(null);(statearr_10586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto___10587);
return statearr_10586;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto___10587,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6139__auto___10696 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto___10696,out){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto___10696,out){
return (function (state_10671){var state_val_10672 = (state_10671[(1)]);if((state_val_10672 === (7)))
{var inst_10666 = (state_10671[(2)]);var state_10671__$1 = state_10671;var statearr_10673_10697 = state_10671__$1;(statearr_10673_10697[(2)] = inst_10666);
(statearr_10673_10697[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10672 === (1)))
{var inst_10648 = null;var state_10671__$1 = (function (){var statearr_10674 = state_10671;(statearr_10674[(7)] = inst_10648);
return statearr_10674;
})();var statearr_10675_10698 = state_10671__$1;(statearr_10675_10698[(2)] = null);
(statearr_10675_10698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10672 === (4)))
{var inst_10651 = (state_10671[(8)]);var inst_10651__$1 = (state_10671[(2)]);var inst_10652 = (inst_10651__$1 == null);var inst_10653 = cljs.core.not.call(null,inst_10652);var state_10671__$1 = (function (){var statearr_10676 = state_10671;(statearr_10676[(8)] = inst_10651__$1);
return statearr_10676;
})();if(inst_10653)
{var statearr_10677_10699 = state_10671__$1;(statearr_10677_10699[(1)] = (5));
} else
{var statearr_10678_10700 = state_10671__$1;(statearr_10678_10700[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10672 === (6)))
{var state_10671__$1 = state_10671;var statearr_10679_10701 = state_10671__$1;(statearr_10679_10701[(2)] = null);
(statearr_10679_10701[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10672 === (3)))
{var inst_10668 = (state_10671[(2)]);var inst_10669 = cljs.core.async.close_BANG_.call(null,out);var state_10671__$1 = (function (){var statearr_10680 = state_10671;(statearr_10680[(9)] = inst_10668);
return statearr_10680;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10671__$1,inst_10669);
} else
{if((state_val_10672 === (2)))
{var state_10671__$1 = state_10671;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10671__$1,(4),ch);
} else
{if((state_val_10672 === (11)))
{var inst_10651 = (state_10671[(8)]);var inst_10660 = (state_10671[(2)]);var inst_10648 = inst_10651;var state_10671__$1 = (function (){var statearr_10681 = state_10671;(statearr_10681[(10)] = inst_10660);
(statearr_10681[(7)] = inst_10648);
return statearr_10681;
})();var statearr_10682_10702 = state_10671__$1;(statearr_10682_10702[(2)] = null);
(statearr_10682_10702[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10672 === (9)))
{var inst_10651 = (state_10671[(8)]);var state_10671__$1 = state_10671;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10671__$1,(11),out,inst_10651);
} else
{if((state_val_10672 === (5)))
{var inst_10651 = (state_10671[(8)]);var inst_10648 = (state_10671[(7)]);var inst_10655 = cljs.core._EQ_.call(null,inst_10651,inst_10648);var state_10671__$1 = state_10671;if(inst_10655)
{var statearr_10684_10703 = state_10671__$1;(statearr_10684_10703[(1)] = (8));
} else
{var statearr_10685_10704 = state_10671__$1;(statearr_10685_10704[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10672 === (10)))
{var inst_10663 = (state_10671[(2)]);var state_10671__$1 = state_10671;var statearr_10686_10705 = state_10671__$1;(statearr_10686_10705[(2)] = inst_10663);
(statearr_10686_10705[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10672 === (8)))
{var inst_10648 = (state_10671[(7)]);var tmp10683 = inst_10648;var inst_10648__$1 = tmp10683;var state_10671__$1 = (function (){var statearr_10687 = state_10671;(statearr_10687[(7)] = inst_10648__$1);
return statearr_10687;
})();var statearr_10688_10706 = state_10671__$1;(statearr_10688_10706[(2)] = null);
(statearr_10688_10706[(1)] = (2));
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
}
}
}
});})(c__6139__auto___10696,out))
;return ((function (switch__6124__auto__,c__6139__auto___10696,out){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_10692 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10692[(0)] = state_machine__6125__auto__);
(statearr_10692[(1)] = (1));
return statearr_10692;
});
var state_machine__6125__auto____1 = (function (state_10671){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_10671);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e10693){if((e10693 instanceof Object))
{var ex__6128__auto__ = e10693;var statearr_10694_10707 = state_10671;(statearr_10694_10707[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10671);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10693;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10708 = state_10671;
state_10671 = G__10708;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_10671){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_10671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto___10696,out))
})();var state__6141__auto__ = (function (){var statearr_10695 = f__6140__auto__.call(null);(statearr_10695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto___10696);
return statearr_10695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto___10696,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6139__auto___10843 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto___10843,out){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto___10843,out){
return (function (state_10813){var state_val_10814 = (state_10813[(1)]);if((state_val_10814 === (7)))
{var inst_10809 = (state_10813[(2)]);var state_10813__$1 = state_10813;var statearr_10815_10844 = state_10813__$1;(statearr_10815_10844[(2)] = inst_10809);
(statearr_10815_10844[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10814 === (1)))
{var inst_10776 = (new Array(n));var inst_10777 = inst_10776;var inst_10778 = (0);var state_10813__$1 = (function (){var statearr_10816 = state_10813;(statearr_10816[(7)] = inst_10778);
(statearr_10816[(8)] = inst_10777);
return statearr_10816;
})();var statearr_10817_10845 = state_10813__$1;(statearr_10817_10845[(2)] = null);
(statearr_10817_10845[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10814 === (4)))
{var inst_10781 = (state_10813[(9)]);var inst_10781__$1 = (state_10813[(2)]);var inst_10782 = (inst_10781__$1 == null);var inst_10783 = cljs.core.not.call(null,inst_10782);var state_10813__$1 = (function (){var statearr_10818 = state_10813;(statearr_10818[(9)] = inst_10781__$1);
return statearr_10818;
})();if(inst_10783)
{var statearr_10819_10846 = state_10813__$1;(statearr_10819_10846[(1)] = (5));
} else
{var statearr_10820_10847 = state_10813__$1;(statearr_10820_10847[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10814 === (15)))
{var inst_10803 = (state_10813[(2)]);var state_10813__$1 = state_10813;var statearr_10821_10848 = state_10813__$1;(statearr_10821_10848[(2)] = inst_10803);
(statearr_10821_10848[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10814 === (13)))
{var state_10813__$1 = state_10813;var statearr_10822_10849 = state_10813__$1;(statearr_10822_10849[(2)] = null);
(statearr_10822_10849[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10814 === (6)))
{var inst_10778 = (state_10813[(7)]);var inst_10799 = (inst_10778 > (0));var state_10813__$1 = state_10813;if(cljs.core.truth_(inst_10799))
{var statearr_10823_10850 = state_10813__$1;(statearr_10823_10850[(1)] = (12));
} else
{var statearr_10824_10851 = state_10813__$1;(statearr_10824_10851[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10814 === (3)))
{var inst_10811 = (state_10813[(2)]);var state_10813__$1 = state_10813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10813__$1,inst_10811);
} else
{if((state_val_10814 === (12)))
{var inst_10777 = (state_10813[(8)]);var inst_10801 = cljs.core.vec.call(null,inst_10777);var state_10813__$1 = state_10813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10813__$1,(15),out,inst_10801);
} else
{if((state_val_10814 === (2)))
{var state_10813__$1 = state_10813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10813__$1,(4),ch);
} else
{if((state_val_10814 === (11)))
{var inst_10793 = (state_10813[(2)]);var inst_10794 = (new Array(n));var inst_10777 = inst_10794;var inst_10778 = (0);var state_10813__$1 = (function (){var statearr_10825 = state_10813;(statearr_10825[(10)] = inst_10793);
(statearr_10825[(7)] = inst_10778);
(statearr_10825[(8)] = inst_10777);
return statearr_10825;
})();var statearr_10826_10852 = state_10813__$1;(statearr_10826_10852[(2)] = null);
(statearr_10826_10852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10814 === (9)))
{var inst_10777 = (state_10813[(8)]);var inst_10791 = cljs.core.vec.call(null,inst_10777);var state_10813__$1 = state_10813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10813__$1,(11),out,inst_10791);
} else
{if((state_val_10814 === (5)))
{var inst_10781 = (state_10813[(9)]);var inst_10786 = (state_10813[(11)]);var inst_10778 = (state_10813[(7)]);var inst_10777 = (state_10813[(8)]);var inst_10785 = (inst_10777[inst_10778] = inst_10781);var inst_10786__$1 = (inst_10778 + (1));var inst_10787 = (inst_10786__$1 < n);var state_10813__$1 = (function (){var statearr_10827 = state_10813;(statearr_10827[(11)] = inst_10786__$1);
(statearr_10827[(12)] = inst_10785);
return statearr_10827;
})();if(cljs.core.truth_(inst_10787))
{var statearr_10828_10853 = state_10813__$1;(statearr_10828_10853[(1)] = (8));
} else
{var statearr_10829_10854 = state_10813__$1;(statearr_10829_10854[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10814 === (14)))
{var inst_10806 = (state_10813[(2)]);var inst_10807 = cljs.core.async.close_BANG_.call(null,out);var state_10813__$1 = (function (){var statearr_10831 = state_10813;(statearr_10831[(13)] = inst_10806);
return statearr_10831;
})();var statearr_10832_10855 = state_10813__$1;(statearr_10832_10855[(2)] = inst_10807);
(statearr_10832_10855[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10814 === (10)))
{var inst_10797 = (state_10813[(2)]);var state_10813__$1 = state_10813;var statearr_10833_10856 = state_10813__$1;(statearr_10833_10856[(2)] = inst_10797);
(statearr_10833_10856[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10814 === (8)))
{var inst_10786 = (state_10813[(11)]);var inst_10777 = (state_10813[(8)]);var tmp10830 = inst_10777;var inst_10777__$1 = tmp10830;var inst_10778 = inst_10786;var state_10813__$1 = (function (){var statearr_10834 = state_10813;(statearr_10834[(7)] = inst_10778);
(statearr_10834[(8)] = inst_10777__$1);
return statearr_10834;
})();var statearr_10835_10857 = state_10813__$1;(statearr_10835_10857[(2)] = null);
(statearr_10835_10857[(1)] = (2));
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
}
}
}
}
}
}
}
});})(c__6139__auto___10843,out))
;return ((function (switch__6124__auto__,c__6139__auto___10843,out){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_10839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10839[(0)] = state_machine__6125__auto__);
(statearr_10839[(1)] = (1));
return statearr_10839;
});
var state_machine__6125__auto____1 = (function (state_10813){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_10813);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e10840){if((e10840 instanceof Object))
{var ex__6128__auto__ = e10840;var statearr_10841_10858 = state_10813;(statearr_10841_10858[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10813);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10840;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10859 = state_10813;
state_10813 = G__10859;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_10813){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_10813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto___10843,out))
})();var state__6141__auto__ = (function (){var statearr_10842 = f__6140__auto__.call(null);(statearr_10842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto___10843);
return statearr_10842;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto___10843,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6139__auto___11002 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6139__auto___11002,out){
return (function (){var f__6140__auto__ = (function (){var switch__6124__auto__ = ((function (c__6139__auto___11002,out){
return (function (state_10972){var state_val_10973 = (state_10972[(1)]);if((state_val_10973 === (7)))
{var inst_10968 = (state_10972[(2)]);var state_10972__$1 = state_10972;var statearr_10974_11003 = state_10972__$1;(statearr_10974_11003[(2)] = inst_10968);
(statearr_10974_11003[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10973 === (1)))
{var inst_10931 = [];var inst_10932 = inst_10931;var inst_10933 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_10972__$1 = (function (){var statearr_10975 = state_10972;(statearr_10975[(7)] = inst_10932);
(statearr_10975[(8)] = inst_10933);
return statearr_10975;
})();var statearr_10976_11004 = state_10972__$1;(statearr_10976_11004[(2)] = null);
(statearr_10976_11004[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10973 === (4)))
{var inst_10936 = (state_10972[(9)]);var inst_10936__$1 = (state_10972[(2)]);var inst_10937 = (inst_10936__$1 == null);var inst_10938 = cljs.core.not.call(null,inst_10937);var state_10972__$1 = (function (){var statearr_10977 = state_10972;(statearr_10977[(9)] = inst_10936__$1);
return statearr_10977;
})();if(inst_10938)
{var statearr_10978_11005 = state_10972__$1;(statearr_10978_11005[(1)] = (5));
} else
{var statearr_10979_11006 = state_10972__$1;(statearr_10979_11006[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10973 === (15)))
{var inst_10962 = (state_10972[(2)]);var state_10972__$1 = state_10972;var statearr_10980_11007 = state_10972__$1;(statearr_10980_11007[(2)] = inst_10962);
(statearr_10980_11007[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10973 === (13)))
{var state_10972__$1 = state_10972;var statearr_10981_11008 = state_10972__$1;(statearr_10981_11008[(2)] = null);
(statearr_10981_11008[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10973 === (6)))
{var inst_10932 = (state_10972[(7)]);var inst_10957 = inst_10932.length;var inst_10958 = (inst_10957 > (0));var state_10972__$1 = state_10972;if(cljs.core.truth_(inst_10958))
{var statearr_10982_11009 = state_10972__$1;(statearr_10982_11009[(1)] = (12));
} else
{var statearr_10983_11010 = state_10972__$1;(statearr_10983_11010[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10973 === (3)))
{var inst_10970 = (state_10972[(2)]);var state_10972__$1 = state_10972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10972__$1,inst_10970);
} else
{if((state_val_10973 === (12)))
{var inst_10932 = (state_10972[(7)]);var inst_10960 = cljs.core.vec.call(null,inst_10932);var state_10972__$1 = state_10972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10972__$1,(15),out,inst_10960);
} else
{if((state_val_10973 === (2)))
{var state_10972__$1 = state_10972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10972__$1,(4),ch);
} else
{if((state_val_10973 === (11)))
{var inst_10940 = (state_10972[(10)]);var inst_10936 = (state_10972[(9)]);var inst_10950 = (state_10972[(2)]);var inst_10951 = [];var inst_10952 = inst_10951.push(inst_10936);var inst_10932 = inst_10951;var inst_10933 = inst_10940;var state_10972__$1 = (function (){var statearr_10984 = state_10972;(statearr_10984[(7)] = inst_10932);
(statearr_10984[(8)] = inst_10933);
(statearr_10984[(11)] = inst_10950);
(statearr_10984[(12)] = inst_10952);
return statearr_10984;
})();var statearr_10985_11011 = state_10972__$1;(statearr_10985_11011[(2)] = null);
(statearr_10985_11011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10973 === (9)))
{var inst_10932 = (state_10972[(7)]);var inst_10948 = cljs.core.vec.call(null,inst_10932);var state_10972__$1 = state_10972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10972__$1,(11),out,inst_10948);
} else
{if((state_val_10973 === (5)))
{var inst_10940 = (state_10972[(10)]);var inst_10936 = (state_10972[(9)]);var inst_10933 = (state_10972[(8)]);var inst_10940__$1 = f.call(null,inst_10936);var inst_10941 = cljs.core._EQ_.call(null,inst_10940__$1,inst_10933);var inst_10942 = cljs.core.keyword_identical_QMARK_.call(null,inst_10933,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_10943 = (inst_10941) || (inst_10942);var state_10972__$1 = (function (){var statearr_10986 = state_10972;(statearr_10986[(10)] = inst_10940__$1);
return statearr_10986;
})();if(cljs.core.truth_(inst_10943))
{var statearr_10987_11012 = state_10972__$1;(statearr_10987_11012[(1)] = (8));
} else
{var statearr_10988_11013 = state_10972__$1;(statearr_10988_11013[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10973 === (14)))
{var inst_10965 = (state_10972[(2)]);var inst_10966 = cljs.core.async.close_BANG_.call(null,out);var state_10972__$1 = (function (){var statearr_10990 = state_10972;(statearr_10990[(13)] = inst_10965);
return statearr_10990;
})();var statearr_10991_11014 = state_10972__$1;(statearr_10991_11014[(2)] = inst_10966);
(statearr_10991_11014[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10973 === (10)))
{var inst_10955 = (state_10972[(2)]);var state_10972__$1 = state_10972;var statearr_10992_11015 = state_10972__$1;(statearr_10992_11015[(2)] = inst_10955);
(statearr_10992_11015[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10973 === (8)))
{var inst_10940 = (state_10972[(10)]);var inst_10936 = (state_10972[(9)]);var inst_10932 = (state_10972[(7)]);var inst_10945 = inst_10932.push(inst_10936);var tmp10989 = inst_10932;var inst_10932__$1 = tmp10989;var inst_10933 = inst_10940;var state_10972__$1 = (function (){var statearr_10993 = state_10972;(statearr_10993[(7)] = inst_10932__$1);
(statearr_10993[(14)] = inst_10945);
(statearr_10993[(8)] = inst_10933);
return statearr_10993;
})();var statearr_10994_11016 = state_10972__$1;(statearr_10994_11016[(2)] = null);
(statearr_10994_11016[(1)] = (2));
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
}
}
}
}
}
}
}
});})(c__6139__auto___11002,out))
;return ((function (switch__6124__auto__,c__6139__auto___11002,out){
return (function() {
var state_machine__6125__auto__ = null;
var state_machine__6125__auto____0 = (function (){var statearr_10998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10998[(0)] = state_machine__6125__auto__);
(statearr_10998[(1)] = (1));
return statearr_10998;
});
var state_machine__6125__auto____1 = (function (state_10972){while(true){
var ret_value__6126__auto__ = (function (){try{while(true){
var result__6127__auto__ = switch__6124__auto__.call(null,state_10972);if(cljs.core.keyword_identical_QMARK_.call(null,result__6127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6127__auto__;
}
break;
}
}catch (e10999){if((e10999 instanceof Object))
{var ex__6128__auto__ = e10999;var statearr_11000_11017 = state_10972;(statearr_11000_11017[(5)] = ex__6128__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10972);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10999;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11018 = state_10972;
state_10972 = G__11018;
continue;
}
} else
{return ret_value__6126__auto__;
}
break;
}
});
state_machine__6125__auto__ = function(state_10972){
switch(arguments.length){
case 0:
return state_machine__6125__auto____0.call(this);
case 1:
return state_machine__6125__auto____1.call(this,state_10972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6125__auto____0;
state_machine__6125__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6125__auto____1;
return state_machine__6125__auto__;
})()
;})(switch__6124__auto__,c__6139__auto___11002,out))
})();var state__6141__auto__ = (function (){var statearr_11001 = f__6140__auto__.call(null);(statearr_11001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6139__auto___11002);
return statearr_11001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6141__auto__);
});})(c__6139__auto___11002,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map