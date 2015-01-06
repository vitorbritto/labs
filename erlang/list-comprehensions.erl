%% ====================================================================
%% LISTS COMPREHENSIONS
%% ====================================================================

% List comprehensions are expressions that create lists without having to use
% funs, maps, or filters.
% The notation `[F(X) || X <- L]` means "the list of `F(X)` where `X` is taken
% from the list `L`."
L = [1,2,3,4,5].
[2*X || X <- L].  % [2,4,6,8,10]
% A list comprehension can have generators and filters which select subset of the generated values.
EvenNumbers = [N || N <- [1, 2, 3, 4], N rem 2 == 0]. % [2, 4]
