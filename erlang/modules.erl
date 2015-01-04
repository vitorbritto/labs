%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% MODULES                    %%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Modules are the basic unit of code in Erlang.
% All the functions we write are stored in modules.
% Modules are stored in files with .erl extensions.
% Modules must be compiled before the code can be run.
% A compiled module has the extension .beam

% - Beam is short for Bogdan’s Erlang Abstract Machine;
% Bogumil (Bogdan) Hausman wrote an Erlang compiler in 1993
% and designed a new instruction set for Erlang.

-module(geometry).
-export([area/1]).

area({rectangle, Width, Ht}) -> Width * Ht;
area({circle, R})            -> 3.14159 * R * R.

c(geometry).

geometry:area({rectangle, 10, 5}).
geometry:area({circle, 1.4}).
