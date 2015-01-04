%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% CASE AND IF EXPRESSIONS      %%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% `case` expressions.
% `filter` returns a list of all elements `X` in a list `L` for which `P(X)` is
% true.
filter(P, [H|T]) ->
  case P(H) of
    true -> [H|filter(P, T)];
    false -> filter(P, T)
  end;
filter(P, []) -> [].
filter(fun(X) -> X rem 2 == 0 end, [1, 2, 3, 4]). % [2, 4]

% `if` expressions.
max(X, Y) ->
  if
    X > Y -> X;
    X < Y -> Y;
    true -> nil;
  end.

% Warning: at least one of the guards in the `if` expression must evaluate to true;
% otherwise, an exception will be raised.
