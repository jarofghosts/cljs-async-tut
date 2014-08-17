(defproject cljs-async-tut "0.1.0-SNAPSHOT"
  :description "following clojurescript async tutorial"
  :url "http://swannodette.github.io/2013/11/07/clojurescript-101/"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2311"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "cljs-async-tut"
              :source-paths ["src"]
              :compiler {
                :output-to "cljs_async_tut.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
