%% ====================================================================
%% EXCEPTIONS
%% ====================================================================

% Exceptions are raised by the system when internal errors are encountered or
% explicitly in code by calling `throw(Exception)`, `exit(Exception)` or
% `erlang:error(Exception)`.
generate_exception(1) -> a;
generate_exception(2) -> throw(a);
generate_exception(3) -> exit(a);
generate_exception(4) -> {'EXIT', a};
generate_exception(5) -> erlang:error(a).

% Erlang has two methods of catching an exception. One is to enclose the call to
% the function, which raised the exception within a `try...catch` expression.
catcher(N) ->
  try generate_exception(N) of
    Val -> {N, normal, Val}
  catch
    throw:X -> {N, caught, thrown, X};
    exit:X -> {N, caught, exited, X};
    error:X -> {N, caught, error, X}
  end.

% The other is to enclose the call in a `catch` expression. When you catch an
% exception, it is converted into a tuple that describes the error.
catcher(N) -> catch generate_exception(N).
