(ns scramble-ui.core
  (:require
      [reagent.dom :as d]
      [scramble-ui.pages.home-page :as home-page]))

;; -------------------------
;; Routes
(defn mount-root []
  (d/render [home-page/render] (.getElementById js/document "app")))

;; -------------------------
;; Initialize app
(defn ^:export init! []
  (mount-root))
