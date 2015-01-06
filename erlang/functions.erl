%% ====================================================================
%% FUNCTIONS
%% ====================================================================

% The function `area` consists of two clauses. The clauses are separated by a
% semicolon, and the final clause is terminated by dot-whitespace.
% Each clause has a head and a body; the head consists of a function name
% followed by a pattern (in parentheses), and the body consists of a sequence of
% expressions, which are evaluated if the pattern in the head is successfully
% matched against the calling arguments. The patterns are matched in the order
% they appear in the function definition.
area({rectangle, Width, Ht}) -> Width * Ht;
area({circle, R})            -> 3.14159 * R * R.
