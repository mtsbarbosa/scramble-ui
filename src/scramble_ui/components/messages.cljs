(ns scramble-ui.components.messages)

(def message-types
  {:error "message-error"
   :info  "message-info"})

(defn render
      ([id-prefix messages classes]
        [:div {:class "messages"}
         (map-indexed (fn [idx message]
                        (let [attrs {:class classes
                                     :id (str id-prefix idx)}]
                             ^{:key (:id attrs)}
                              [:div attrs
                               message])) messages)])
      ([id-prefix messages]
        (render id-prefix messages (:error message-types))))