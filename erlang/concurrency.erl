%% ====================================================================
%% CONCURRENCY
%% ====================================================================

% Erlang relies on the actor model for concurrency. All we need to write
% concurrent programs in erlang are three primitives: spawning processes,
% sending messages and receiving messages.

% To start a new process we use the `spawn` function, which takes a function
% as argument.

F = fun() -> 2 + 2 end. % #Fun<erl_eval.20.67289768>
spawn(F). % <0.44.0>

% `spawn` returns a pid (process identifier), you can use this pid to send
% messages to the process. To do message passing we use the `!` operator.
% For all of this to be useful we need to be able to receive messages. This is
% achieved with the `receive` mechanism:

-module(calculateGeometry).
-compile(export_all).
calculateArea() ->
    receive
      {rectangle, W, H} ->
        W * H;
      {circle, R} ->
        3.14 * R * R;
      _ ->
        io:format("We can only calculate area of rectangles or circles.")
    end.

% Compile the module and create a process that evaluates `calculateArea` in the shell
c(calculateGeometry).
CalculateArea = spawn(calculateGeometry, calculateArea, []).
CalculateArea ! {circle, 2}. % 12.56000000000000049738

% The shell is also a process, you can use `self` to get the current pid
self(). % <0.41.0>
