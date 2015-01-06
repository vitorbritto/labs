%% ====================================================================
%% FUNS
%% ====================================================================

% Funs are "anonymous" functions. They are called this way because they have no
% name. However they can be assigned to variables.
Double = fun(X) -> 2*X end. % `Double` points to an anonymous function with handle: #Fun<erl_eval.6.17052888>
Double(2).  % 4

% Functions accept funs as their arguments and can return funs.
Mult = fun(Times) -> ( fun(X) -> X * Times end ) end.
Triple = Mult(3).
Triple(5).  % 15
