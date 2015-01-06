%% ====================================================================
%% PATTERN MATCHING
%% ====================================================================

% In most languages, `=` denotes an assignment statement. In Erlang, however,
% `=` denotes a pattern matching operation. `Lhs = Rhs` really means this:
% evaluate the right side (Rhs), and then match the result against the pattern
% on the left side (Lhs).


Rectangle = {rectangle, 10, 5}.             % → {rectangle, 10, 5}.
Circle = {circle, 2.4}.                     % → {circle,2.40000}
{rectangle, Width, Ht} = Rectangle.         % → {rectangle,10,5}
{circle, R} = Circle.                       % → {circle,2.40000}

Width.                                      % → 10
R.                                          % → 5
Ht.                                         % → 40000
