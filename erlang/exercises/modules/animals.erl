-module(animals).
-export([speak/1]).

speak(Animal) ->
    Talk = if
        (Animal == cat) -> miaow;
        (Animal == dog) -> roofroof;
        true -> no_animal
    end,
    io:format("~w says ~w ~n", [Animal, Talk]).
