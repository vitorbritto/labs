%% ====================================================================
%% MODULES
%% ====================================================================

% Modules are the basic unit of code in Erlang. All the functions we write are
% stored in modules. Modules are stored in files with `.erl` extensions.
% Modules must be compiled before the code can be run. A compiled module has the
% extension `.beam`.
-module(geometry).
-export([area/1]). % the list of functions exported from the module.

% The function `area` consists of two clauses. The clauses are separated by a
% semicolon, and the final clause is terminated by dot-whitespace.
% Each clause has a head and a body; the head consists of a function name
% followed by a pattern (in parentheses), and the body consists of a sequence of
% expressions, which are evaluated if the pattern in the head is successfully
% matched against the calling arguments. The patterns are matched in the order
% they appear in the function definition.
area({rectangle, Width, Ht}) -> Width * Ht;
area({circle, R})            -> 3.14159 * R * R.

% Compile the code in the file geometry.erl.
c(geometry).  % {ok,geometry}

% We need to include the module name together with the function name in order to
% identify exactly which function we want to call.
geometry:area({rectangle, 10, 5}).  % 50
geometry:area({circle, 1.4}).  % 6.15752
