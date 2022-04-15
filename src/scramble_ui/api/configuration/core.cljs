(ns scramble-ui.api.configuration.core
      (:require-macros [cljs.core.async.macros :refer [go]])
      (:require   [cljs-http.client :as http]
                  [cljs.core.async :refer [<!]]
                  [scramble-ui.translations :as i18n]))

(def uri "http://localhost:8890")
(def scramble-resource "/scramble")

(defn scramble-resource-uri
      []
      (str uri scramble-resource))

(defn scramble-post!
      [str-1 str-2]
      (go (let [response (<! (http/post (scramble-resource-uri) {:json-params {:str-1 str-1
                                                                               :str-2 str-2}}))
                body (:body response)
                message (:message body)
                status (:status response)
                result-resp (get body :result nil)
                result-text (cond result-resp (i18n/t "scrambled")
                                  :else       (i18n/t "not-scrambled"))
                messages (cond message [message]
                               :else [])
                result (cond (nil? result-resp) []
                             :else [result-text])]
               (cond (= status 0) {:error true}
                     :else {:messages messages, :result result}))))