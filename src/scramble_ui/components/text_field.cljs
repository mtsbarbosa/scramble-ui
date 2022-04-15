(ns scramble-ui.components.text-field)

(defn render [label-text id name]
      [:div {:class "text-field-wrapper"}
       [:label {:for id
                :class "text-field--label"} label-text]
       [:input {:type "text"
                :id id
                :name name
                }]])