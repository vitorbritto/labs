%% ====================================================================
%% LISTS
%% ====================================================================

% Write on file
{ok, S} = file:open("files/example.txt", write).
io:format(S, "~s~n", ["Hello World!"]).
io:format(S, "~s~n", ["Here I go again!"]).
file:close(S).

% Read File line by line
{ok, F} = file.open("files/example.txt", read).
io:get_line(F, '').
file:close(F).


% Unbind variables
f(S,F).
