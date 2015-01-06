%% ====================================================================
%% GUARDS
%% ====================================================================

% Guards are constructs that we can use to increase the power of pattern
% matching. Using guards, we can perform simple tests and comparisons on the
% variables in a pattern.
% You can use guards in the heads of function definitions where they are
% introduced by the `when` keyword, or you can use them at any place in the
% language where an expression is allowed.
max(X, Y) when X > Y -> X;
max(X, Y) -> Y.

% A guard is a series of guard expressions, separated by commas (`,`).
% The guard `GuardExpr1, GuardExpr2, ..., GuardExprN` is true if all the guard
% expressions `GuardExpr1, GuardExpr2, ...` evaluate to true.
is_cat(A) when is_atom(A), A =:= cat -> true;
is_cat(A) -> false.
is_dog(A) when is_atom(A), A =:= dog -> true;
is_dog(A) -> false.

% A `guard sequence` is either a single guard or a series of guards, separated
%by semicolons (`;`). The guard sequence `G1; G2; ...; Gn` is true if at least
% one of the guards `G1, G2, ...` evaluates to true.
is_pet(A) when is_dog(A); is_cat(A) -> true;
is_pet(A) -> false.
