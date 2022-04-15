(ns scramble-ui.store.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [scramble-ui.api.configuration.core :as scramble-api]
            [cljs.core.async :refer [<!]]
            [scramble-ui.translations :as i18n]))

(defonce messages (r/atom []))
(defonce result (r/atom []))

(defonce mutations {
                    :mutation/messages  (fn [new-messages]
                                            (reset! messages new-messages))
                    :mutation/result    (fn [new-result]
                                            (reset! result new-result))
                    })

(defn commit
      "execute a store mutation change"
      [key & value]
      (apply (get mutations key) value))

(defonce actions {
                  :action/messages-update   (fn [messages]
                                             (commit :mutation/messages messages))
                  :action/result-update     (fn [result]
                                             (commit :mutation/result result))
                  :action/post-scramble     (fn [str-1 str-2 store-inst]
                                                (let [dispatch (:dispatch store-inst)]
                                                     (go
                                                      (let [resp      (<! (scramble-api/scramble-post! str-1 str-2))
                                                           error?     (:error resp)
                                                           messages   (cond error? [(i18n/t "fatal")]
                                                                            :else (get resp :messages []))
                                                           result     (get resp :result [])]
                                                          (dispatch :action/messages-update messages)
                                                          (dispatch :action/result-update result)))))
                  })

(defn dispatch
      "execute an action"
      [key & params]
      (apply (get actions key) params))

(defonce store-instance
         {:actions actions,
          :mutations mutations,
          :commit commit,
          :dispatch dispatch})