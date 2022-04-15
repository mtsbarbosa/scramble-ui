goog.provide('scramble_ui.api.configuration.core');
scramble_ui.api.configuration.core.uri = "http://localhost:8890";
scramble_ui.api.configuration.core.scramble_resource = "/scramble";
scramble_ui.api.configuration.core.scramble_resource_uri = (function scramble_ui$api$configuration$core$scramble_resource_uri(){
return [scramble_ui.api.configuration.core.uri,scramble_ui.api.configuration.core.scramble_resource].join('');
});
scramble_ui.api.configuration.core.scramble_post_BANG_ = (function scramble_ui$api$configuration$core$scramble_post_BANG_(str_1,str_2){
var c__11235__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11236__auto__ = (function (){var switch__11150__auto__ = (function (state_15545){
var state_val_15546 = (state_15545[(1)]);
if((state_val_15546 === (7))){
var state_15545__$1 = state_15545;
var statearr_15547_15588 = state_15545__$1;
(statearr_15547_15588[(2)] = null);

(statearr_15547_15588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (20))){
var inst_15526 = (state_15545[(2)]);
var state_15545__$1 = state_15545;
var statearr_15548_15589 = state_15545__$1;
(statearr_15548_15589[(2)] = inst_15526);

(statearr_15548_15589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (1))){
var inst_15480 = scramble_ui.api.configuration.core.scramble_resource_uri();
var inst_15481 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_15482 = [new cljs.core.Keyword(null,"str-1","str-1",1459610112),new cljs.core.Keyword(null,"str-2","str-2",-654189831)];
var inst_15483 = [str_1,str_2];
var inst_15484 = cljs.core.PersistentHashMap.fromArrays(inst_15482,inst_15483);
var inst_15485 = [inst_15484];
var inst_15486 = cljs.core.PersistentHashMap.fromArrays(inst_15481,inst_15485);
var inst_15487 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_15480,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_15486], 0));
var state_15545__$1 = state_15545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15545__$1,(2),inst_15487);
} else {
if((state_val_15546 === (24))){
var inst_15515 = (state_15545[(7)]);
var inst_15528 = (state_15545[(8)]);
var inst_15536 = [new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_15537 = [inst_15515,inst_15528];
var inst_15538 = cljs.core.PersistentHashMap.fromArrays(inst_15536,inst_15537);
var state_15545__$1 = state_15545;
var statearr_15549_15590 = state_15545__$1;
(statearr_15549_15590[(2)] = inst_15538);

(statearr_15549_15590[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (4))){
var state_15545__$1 = state_15545;
var statearr_15550_15591 = state_15545__$1;
(statearr_15550_15591[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (15))){
var inst_15518 = cljs.core.PersistentVector.EMPTY;
var state_15545__$1 = state_15545;
var statearr_15552_15592 = state_15545__$1;
(statearr_15552_15592[(2)] = inst_15518);

(statearr_15552_15592[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (21))){
var inst_15531 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_15532 = [true];
var inst_15533 = cljs.core.PersistentHashMap.fromArrays(inst_15531,inst_15532);
var state_15545__$1 = state_15545;
var statearr_15553_15593 = state_15545__$1;
(statearr_15553_15593[(2)] = inst_15533);

(statearr_15553_15593[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (13))){
var state_15545__$1 = state_15545;
var statearr_15554_15594 = state_15545__$1;
(statearr_15554_15594[(2)] = null);

(statearr_15554_15594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (22))){
var state_15545__$1 = state_15545;
var statearr_15555_15595 = state_15545__$1;
(statearr_15555_15595[(1)] = (24));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (6))){
var inst_15498 = scramble_ui.translations.t.cljs$core$IFn$_invoke$arity$1("not-scrambled");
var state_15545__$1 = state_15545;
var statearr_15557_15596 = state_15545__$1;
(statearr_15557_15596[(2)] = inst_15498);

(statearr_15557_15596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (25))){
var state_15545__$1 = state_15545;
var statearr_15558_15597 = state_15545__$1;
(statearr_15558_15597[(2)] = null);

(statearr_15558_15597[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (17))){
var inst_15492 = (state_15545[(9)]);
var inst_15528 = (state_15545[(2)]);
var inst_15529 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15492,(0));
var state_15545__$1 = (function (){var statearr_15559 = state_15545;
(statearr_15559[(8)] = inst_15528);

return statearr_15559;
})();
if(inst_15529){
var statearr_15560_15598 = state_15545__$1;
(statearr_15560_15598[(1)] = (21));

} else {
var statearr_15561_15599 = state_15545__$1;
(statearr_15561_15599[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (3))){
var inst_15495 = scramble_ui.translations.t.cljs$core$IFn$_invoke$arity$1("scrambled");
var state_15545__$1 = state_15545;
var statearr_15562_15600 = state_15545__$1;
(statearr_15562_15600[(2)] = inst_15495);

(statearr_15562_15600[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (12))){
var inst_15510 = cljs.core.PersistentVector.EMPTY;
var state_15545__$1 = state_15545;
var statearr_15563_15601 = state_15545__$1;
(statearr_15563_15601[(2)] = inst_15510);

(statearr_15563_15601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (2))){
var inst_15493 = (state_15545[(10)]);
var inst_15489 = (state_15545[(2)]);
var inst_15490 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_15489);
var inst_15491 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_15490);
var inst_15492 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_15489);
var inst_15493__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_15490,new cljs.core.Keyword(null,"result","result",1415092211),null);
var state_15545__$1 = (function (){var statearr_15564 = state_15545;
(statearr_15564[(11)] = inst_15491);

(statearr_15564[(10)] = inst_15493__$1);

(statearr_15564[(9)] = inst_15492);

return statearr_15564;
})();
if(cljs.core.truth_(inst_15493__$1)){
var statearr_15565_15602 = state_15545__$1;
(statearr_15565_15602[(1)] = (3));

} else {
var statearr_15566_15603 = state_15545__$1;
(statearr_15566_15603[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (23))){
var inst_15543 = (state_15545[(2)]);
var state_15545__$1 = state_15545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15545__$1,inst_15543);
} else {
if((state_val_15546 === (19))){
var state_15545__$1 = state_15545;
var statearr_15567_15604 = state_15545__$1;
(statearr_15567_15604[(2)] = null);

(statearr_15567_15604[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (11))){
var inst_15493 = (state_15545[(10)]);
var inst_15515 = (state_15545[(2)]);
var inst_15516 = (inst_15493 == null);
var state_15545__$1 = (function (){var statearr_15568 = state_15545;
(statearr_15568[(7)] = inst_15515);

return statearr_15568;
})();
if(cljs.core.truth_(inst_15516)){
var statearr_15569_15605 = state_15545__$1;
(statearr_15569_15605[(1)] = (15));

} else {
var statearr_15570_15606 = state_15545__$1;
(statearr_15570_15606[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (9))){
var inst_15491 = (state_15545[(11)]);
var inst_15505 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15506 = [inst_15491];
var inst_15507 = (new cljs.core.PersistentVector(null,1,(5),inst_15505,inst_15506,null));
var state_15545__$1 = state_15545;
var statearr_15571_15607 = state_15545__$1;
(statearr_15571_15607[(2)] = inst_15507);

(statearr_15571_15607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (5))){
var inst_15491 = (state_15545[(11)]);
var inst_15503 = (state_15545[(2)]);
var state_15545__$1 = (function (){var statearr_15572 = state_15545;
(statearr_15572[(12)] = inst_15503);

return statearr_15572;
})();
if(cljs.core.truth_(inst_15491)){
var statearr_15573_15608 = state_15545__$1;
(statearr_15573_15608[(1)] = (9));

} else {
var statearr_15574_15609 = state_15545__$1;
(statearr_15574_15609[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (14))){
var inst_15513 = (state_15545[(2)]);
var state_15545__$1 = state_15545;
var statearr_15575_15610 = state_15545__$1;
(statearr_15575_15610[(2)] = inst_15513);

(statearr_15575_15610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (26))){
var inst_15541 = (state_15545[(2)]);
var state_15545__$1 = state_15545;
var statearr_15576_15611 = state_15545__$1;
(statearr_15576_15611[(2)] = inst_15541);

(statearr_15576_15611[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (16))){
var state_15545__$1 = state_15545;
var statearr_15577_15612 = state_15545__$1;
(statearr_15577_15612[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (10))){
var state_15545__$1 = state_15545;
var statearr_15579_15615 = state_15545__$1;
(statearr_15579_15615[(1)] = (12));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (18))){
var inst_15503 = (state_15545[(12)]);
var inst_15521 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15522 = [inst_15503];
var inst_15523 = (new cljs.core.PersistentVector(null,1,(5),inst_15521,inst_15522,null));
var state_15545__$1 = state_15545;
var statearr_15581_15616 = state_15545__$1;
(statearr_15581_15616[(2)] = inst_15523);

(statearr_15581_15616[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15546 === (8))){
var inst_15501 = (state_15545[(2)]);
var state_15545__$1 = state_15545;
var statearr_15582_15617 = state_15545__$1;
(statearr_15582_15617[(2)] = inst_15501);

(statearr_15582_15617[(1)] = (5));


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
}
}
}
}
}
}
});
return (function() {
var scramble_ui$api$configuration$core$scramble_post_BANG__$_state_machine__11151__auto__ = null;
var scramble_ui$api$configuration$core$scramble_post_BANG__$_state_machine__11151__auto____0 = (function (){
var statearr_15583 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15583[(0)] = scramble_ui$api$configuration$core$scramble_post_BANG__$_state_machine__11151__auto__);

(statearr_15583[(1)] = (1));

return statearr_15583;
});
var scramble_ui$api$configuration$core$scramble_post_BANG__$_state_machine__11151__auto____1 = (function (state_15545){
while(true){
var ret_value__11152__auto__ = (function (){try{while(true){
var result__11153__auto__ = switch__11150__auto__(state_15545);
if(cljs.core.keyword_identical_QMARK_(result__11153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11153__auto__;
}
break;
}
}catch (e15584){var ex__11154__auto__ = e15584;
var statearr_15585_15618 = state_15545;
(statearr_15585_15618[(2)] = ex__11154__auto__);


if(cljs.core.seq((state_15545[(4)]))){
var statearr_15586_15619 = state_15545;
(statearr_15586_15619[(1)] = cljs.core.first((state_15545[(4)])));

} else {
throw ex__11154__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15620 = state_15545;
state_15545 = G__15620;
continue;
} else {
return ret_value__11152__auto__;
}
break;
}
});
scramble_ui$api$configuration$core$scramble_post_BANG__$_state_machine__11151__auto__ = function(state_15545){
switch(arguments.length){
case 0:
return scramble_ui$api$configuration$core$scramble_post_BANG__$_state_machine__11151__auto____0.call(this);
case 1:
return scramble_ui$api$configuration$core$scramble_post_BANG__$_state_machine__11151__auto____1.call(this,state_15545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scramble_ui$api$configuration$core$scramble_post_BANG__$_state_machine__11151__auto__.cljs$core$IFn$_invoke$arity$0 = scramble_ui$api$configuration$core$scramble_post_BANG__$_state_machine__11151__auto____0;
scramble_ui$api$configuration$core$scramble_post_BANG__$_state_machine__11151__auto__.cljs$core$IFn$_invoke$arity$1 = scramble_ui$api$configuration$core$scramble_post_BANG__$_state_machine__11151__auto____1;
return scramble_ui$api$configuration$core$scramble_post_BANG__$_state_machine__11151__auto__;
})()
})();
var state__11237__auto__ = (function (){var statearr_15587 = f__11236__auto__();
(statearr_15587[(6)] = c__11235__auto__);

return statearr_15587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11237__auto__);
}));

return c__11235__auto__;
});

//# sourceMappingURL=scramble_ui.api.configuration.core.js.map
