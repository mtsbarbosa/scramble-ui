goog.provide('scramble_ui.api.configuration.core');
scramble_ui.api.configuration.core.uri = "http://localhost:8890";
scramble_ui.api.configuration.core.scramble_resource = "/scramble";
scramble_ui.api.configuration.core.scramble_resource_uri = (function scramble_ui$api$configuration$core$scramble_resource_uri(){
return [scramble_ui.api.configuration.core.uri,scramble_ui.api.configuration.core.scramble_resource].join('');
});
scramble_ui.api.configuration.core.scramble_post = (function scramble_ui$api$configuration$core$scramble_post(str_1,str_2){
var c__11272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11273__auto__ = (function (){var switch__11160__auto__ = (function (state_14543){
var state_val_14544 = (state_14543[(1)]);
if((state_val_14544 === (7))){
var state_14543__$1 = state_14543;
var statearr_14545_14577 = state_14543__$1;
(statearr_14545_14577[(2)] = null);

(statearr_14545_14577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (20))){
var inst_14539 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14546_14578 = state_14543__$1;
(statearr_14546_14578[(2)] = inst_14539);

(statearr_14546_14578[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (1))){
var inst_14490 = scramble_ui.api.configuration.core.scramble_resource_uri();
var inst_14491 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_14492 = [new cljs.core.Keyword(null,"str-1","str-1",1459610112),new cljs.core.Keyword(null,"str-2","str-2",-654189831)];
var inst_14493 = [str_1,str_2];
var inst_14494 = cljs.core.PersistentHashMap.fromArrays(inst_14492,inst_14493);
var inst_14495 = [inst_14494];
var inst_14496 = cljs.core.PersistentHashMap.fromArrays(inst_14491,inst_14495);
var inst_14497 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_14490,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_14496], 0));
var state_14543__$1 = state_14543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14543__$1,(2),inst_14497);
} else {
if((state_val_14544 === (4))){
var state_14543__$1 = state_14543;
var statearr_14547_14579 = state_14543__$1;
(statearr_14547_14579[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (15))){
var inst_14529 = cljs.core.PersistentVector.EMPTY;
var inst_14530 = cljs.core.reset_BANG_(scramble_ui.store.core.result,inst_14529);
var state_14543__$1 = state_14543;
var statearr_14549_14580 = state_14543__$1;
(statearr_14549_14580[(2)] = inst_14530);

(statearr_14549_14580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (13))){
var state_14543__$1 = state_14543;
var statearr_14550_14581 = state_14543__$1;
(statearr_14550_14581[(2)] = null);

(statearr_14550_14581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (6))){
var inst_14507 = scramble_ui.translations.t.cljs$core$IFn$_invoke$arity$1("not-scrambled");
var state_14543__$1 = state_14543;
var statearr_14551_14582 = state_14543__$1;
(statearr_14551_14582[(2)] = inst_14507);

(statearr_14551_14582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (17))){
var inst_14541 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14543__$1,inst_14541);
} else {
if((state_val_14544 === (3))){
var inst_14504 = scramble_ui.translations.t.cljs$core$IFn$_invoke$arity$1("scrambled");
var state_14543__$1 = state_14543;
var statearr_14552_14583 = state_14543__$1;
(statearr_14552_14583[(2)] = inst_14504);

(statearr_14552_14583[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (12))){
var inst_14520 = cljs.core.PersistentVector.EMPTY;
var inst_14521 = cljs.core.reset_BANG_(scramble_ui.store.core.messages,inst_14520);
var state_14543__$1 = state_14543;
var statearr_14553_14584 = state_14543__$1;
(statearr_14553_14584[(2)] = inst_14521);

(statearr_14553_14584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (2))){
var inst_14502 = (state_14543[(7)]);
var inst_14499 = (state_14543[(2)]);
var inst_14500 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_14499);
var inst_14501 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_14500);
var inst_14502__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_14500,new cljs.core.Keyword(null,"result","result",1415092211),null);
var state_14543__$1 = (function (){var statearr_14554 = state_14543;
(statearr_14554[(7)] = inst_14502__$1);

(statearr_14554[(8)] = inst_14501);

return statearr_14554;
})();
if(cljs.core.truth_(inst_14502__$1)){
var statearr_14555_14585 = state_14543__$1;
(statearr_14555_14585[(1)] = (3));

} else {
var statearr_14556_14586 = state_14543__$1;
(statearr_14556_14586[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (19))){
var state_14543__$1 = state_14543;
var statearr_14557_14587 = state_14543__$1;
(statearr_14557_14587[(2)] = null);

(statearr_14557_14587[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (11))){
var inst_14502 = (state_14543[(7)]);
var inst_14526 = (state_14543[(2)]);
var inst_14527 = (inst_14502 == null);
var state_14543__$1 = (function (){var statearr_14558 = state_14543;
(statearr_14558[(9)] = inst_14526);

return statearr_14558;
})();
if(cljs.core.truth_(inst_14527)){
var statearr_14559_14588 = state_14543__$1;
(statearr_14559_14588[(1)] = (15));

} else {
var statearr_14560_14589 = state_14543__$1;
(statearr_14560_14589[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (9))){
var inst_14501 = (state_14543[(8)]);
var inst_14514 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14515 = [inst_14501];
var inst_14516 = (new cljs.core.PersistentVector(null,1,(5),inst_14514,inst_14515,null));
var inst_14517 = cljs.core.reset_BANG_(scramble_ui.store.core.messages,inst_14516);
var state_14543__$1 = state_14543;
var statearr_14561_14590 = state_14543__$1;
(statearr_14561_14590[(2)] = inst_14517);

(statearr_14561_14590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (5))){
var inst_14501 = (state_14543[(8)]);
var inst_14512 = (state_14543[(2)]);
var state_14543__$1 = (function (){var statearr_14562 = state_14543;
(statearr_14562[(10)] = inst_14512);

return statearr_14562;
})();
if(cljs.core.truth_(inst_14501)){
var statearr_14563_14591 = state_14543__$1;
(statearr_14563_14591[(1)] = (9));

} else {
var statearr_14564_14592 = state_14543__$1;
(statearr_14564_14592[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (14))){
var inst_14524 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14565_14593 = state_14543__$1;
(statearr_14565_14593[(2)] = inst_14524);

(statearr_14565_14593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (16))){
var state_14543__$1 = state_14543;
var statearr_14566_14594 = state_14543__$1;
(statearr_14566_14594[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (10))){
var state_14543__$1 = state_14543;
var statearr_14568_14595 = state_14543__$1;
(statearr_14568_14595[(1)] = (12));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (18))){
var inst_14512 = (state_14543[(10)]);
var inst_14533 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14534 = [inst_14512];
var inst_14535 = (new cljs.core.PersistentVector(null,1,(5),inst_14533,inst_14534,null));
var inst_14536 = cljs.core.reset_BANG_(scramble_ui.store.core.result,inst_14535);
var state_14543__$1 = state_14543;
var statearr_14570_14596 = state_14543__$1;
(statearr_14570_14596[(2)] = inst_14536);

(statearr_14570_14596[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14544 === (8))){
var inst_14510 = (state_14543[(2)]);
var state_14543__$1 = state_14543;
var statearr_14571_14597 = state_14543__$1;
(statearr_14571_14597[(2)] = inst_14510);

(statearr_14571_14597[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var scramble_ui$api$configuration$core$scramble_post_$_state_machine__11161__auto__ = null;
var scramble_ui$api$configuration$core$scramble_post_$_state_machine__11161__auto____0 = (function (){
var statearr_14572 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14572[(0)] = scramble_ui$api$configuration$core$scramble_post_$_state_machine__11161__auto__);

(statearr_14572[(1)] = (1));

return statearr_14572;
});
var scramble_ui$api$configuration$core$scramble_post_$_state_machine__11161__auto____1 = (function (state_14543){
while(true){
var ret_value__11162__auto__ = (function (){try{while(true){
var result__11163__auto__ = switch__11160__auto__(state_14543);
if(cljs.core.keyword_identical_QMARK_(result__11163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11163__auto__;
}
break;
}
}catch (e14573){var ex__11164__auto__ = e14573;
var statearr_14574_14599 = state_14543;
(statearr_14574_14599[(2)] = ex__11164__auto__);


if(cljs.core.seq((state_14543[(4)]))){
var statearr_14575_14600 = state_14543;
(statearr_14575_14600[(1)] = cljs.core.first((state_14543[(4)])));

} else {
throw ex__11164__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11162__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14601 = state_14543;
state_14543 = G__14601;
continue;
} else {
return ret_value__11162__auto__;
}
break;
}
});
scramble_ui$api$configuration$core$scramble_post_$_state_machine__11161__auto__ = function(state_14543){
switch(arguments.length){
case 0:
return scramble_ui$api$configuration$core$scramble_post_$_state_machine__11161__auto____0.call(this);
case 1:
return scramble_ui$api$configuration$core$scramble_post_$_state_machine__11161__auto____1.call(this,state_14543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scramble_ui$api$configuration$core$scramble_post_$_state_machine__11161__auto__.cljs$core$IFn$_invoke$arity$0 = scramble_ui$api$configuration$core$scramble_post_$_state_machine__11161__auto____0;
scramble_ui$api$configuration$core$scramble_post_$_state_machine__11161__auto__.cljs$core$IFn$_invoke$arity$1 = scramble_ui$api$configuration$core$scramble_post_$_state_machine__11161__auto____1;
return scramble_ui$api$configuration$core$scramble_post_$_state_machine__11161__auto__;
})()
})();
var state__11274__auto__ = (function (){var statearr_14576 = f__11273__auto__();
(statearr_14576[(6)] = c__11272__auto__);

return statearr_14576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11274__auto__);
}));

return c__11272__auto__;
});

//# sourceMappingURL=scramble_ui.api.configuration.core.js.map
