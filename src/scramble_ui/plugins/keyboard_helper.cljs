(ns scramble-ui.plugins.keyboard-helper)

(defn on-return-key-enter
      [evt exec-fn]
      (let [return-key-code 13
            current-key-code (.-keyCode evt)
            is-return? (= return-key-code current-key-code)]
           (if is-return? (exec-fn))))