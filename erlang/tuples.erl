%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% TUPLES                     %%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Tuples are similar to structs in C.
Point = {point, 10, 45}.

% If we want to extract some values from a tuple, we use the pattern matching
% operator `=`.
{point, X, Y} = Point.  % X = 10, Y = 45

% We can use `_` as a placeholder for variables that we’re not interested in.
% The symbol `_` is called an anonymous variable. Unlike regular variables,
% several occurrences of _ in the same pattern don’t have to bind to the same
% value.
Person = {person, {name, {first, joe}, {last, armstrong}}, {footsize, 42}}.
{_, {_, {_, Who}, _}, _} = Person.  % Who = joe
