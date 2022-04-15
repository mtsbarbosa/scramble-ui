goog.provide('scramble_ui.translations');
scramble_ui.translations.default_lang = new cljs.core.Keyword(null,"en","en",88457073);
scramble_ui.translations.i18n = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentArrayMap(null, 6, ["main-page-title","Scramble","main-page-form-button","Scramble?","main-page-form-str-1","Text 1 ","main-page-form-str-2","Text 2 ","scrambled","They are scrambled!","not-scrambled","They are NOT scrambled!"], null)], null);
scramble_ui.translations.t = (function scramble_ui$translations$t(var_args){
var G__13918 = arguments.length;
switch (G__13918) {
case 2:
return scramble_ui.translations.t.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return scramble_ui.translations.t.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(scramble_ui.translations.t.cljs$core$IFn$_invoke$arity$2 = (function (lang,key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scramble_ui.translations.i18n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,key], null));
}));

(scramble_ui.translations.t.cljs$core$IFn$_invoke$arity$1 = (function (key){
return scramble_ui.translations.t.cljs$core$IFn$_invoke$arity$2(scramble_ui.translations.default_lang,key);
}));

(scramble_ui.translations.t.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=scramble_ui.translations.js.map
