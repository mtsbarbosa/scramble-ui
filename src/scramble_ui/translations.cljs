(ns scramble-ui.translations)

(def default-lang
  :en)

(def i18n
  {:en {"main-page-title" "Scramble",
        "main-page-form-button" "Scramble?",
        "main-page-form-str-1" "Text 1 ",
        "main-page-form-str-2" "Text 2 ",
        "scrambled" "They are scrambled!",
        "not-scrambled" "They are NOT scrambled!"
        "fatal" "Something wrong happened, please retry later"
        }})

(defn t
      ([lang key]
        (get-in i18n [lang key]))
      ([key]
       (t default-lang key)))