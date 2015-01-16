-module(maths).
-export([add/2, factorial/1, factorial/2, area/3, area/1]).


add(X, Y) ->
    X + Y.

% Factorial Function - Tail Recursion
factorial(N) when N > 0 ->
    N * factorial(N - 1);
factorial(0) ->
    1.

% Factorial Function susing Accumulators
factorial(N, TotalFactorial) when N > 0 ->
    factorial(N -1, N * TotalFactorial);
factorial(0, TotalFactorial) ->
    TotalFactorial.

area(Type, N, M) ->
    case Type of
        square -> N * N;
        circle -> math:pi() * N * N;
        triangle -> 0.5 * N * M
    end.

area({square, N}) ->
    N * N;
area({circle, R}) ->
    math:pi() * R * R;
area({triangle, B, H}) ->
    0.5 * B * H;
area(_) ->
    {error, invalidObject}.
