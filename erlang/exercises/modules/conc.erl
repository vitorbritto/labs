-module(conc).
-export([say_something/2, start_concurrency/2]).

say_something(_,0) ->
    io:format("Done! ~n");

say_something(Value, Times) ->
    io:format("~s ~n", [Value]),
    say_something(Value, Times-1).

start_concurrency(Value1, Value2) ->
    spawn(conc, say_something, [Value1, 3]),
    spawn(conc, say_something, [Value2, 3]).


