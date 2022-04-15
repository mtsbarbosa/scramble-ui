(ns scramble-ui.pages.home-page
  (:require
       [scramble-ui.components.text-field :as comp.text-field]
       [scramble-ui.components.messages :as comp.messages]
       [scramble-ui.translations :as i18n]
       [scramble-ui.store.core :as store]
       [scramble-ui.plugins.keyboard-helper :as khelper]
       [scramble-ui.plugins.dom-helper :as dhelper]))

(defn render
      []
      (let [submit-form #(store/dispatch :action/post-scramble
                                         (dhelper/get-value-from-name "str-1")
                                         (dhelper/get-value-from-name "str-2")
                                         store/store-instance)]
           [:div [:h2 (i18n/t "main-page-title")]
            [:div {:class "form-wrapper"}
             [:form {:on-key-up #(khelper/on-return-key-enter % submit-form)}
              [comp.messages/render "scramble-form-error-message-"  @store/messages]
              [comp.messages/render "scramble-form-info-message-"   @store/result (:info comp.messages/message-types)]
              [comp.text-field/render (i18n/t "main-page-form-str-1") "text-1" "str-1"]
              [:br]
              [comp.text-field/render (i18n/t "main-page-form-str-2") "text-2" "str-2"]
              [:br]
              [:a {:class "submit-link" :target "_blank" :on-click submit-form} (i18n/t "main-page-form-button")]]]]))
