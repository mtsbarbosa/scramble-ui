(ns scramble-ui.plugins.dom-helper)

(defn get-value-from-name
      [name]
      (-> name
          (js/document.getElementsByName)
          first
          .-value))