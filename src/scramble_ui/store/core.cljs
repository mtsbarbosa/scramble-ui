(ns scramble-ui.store.core
  (:require [reagent.core :as r]))

(defonce messages (r/atom []))
(defonce result (r/atom []))