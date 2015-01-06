%% ====================================================================
%% RECORDS
%% ====================================================================

% Records provide a method for associating a name with a particular element in a
% tuple.
% Record definitions can be included in Erlang source code files or put in files
% with the extension `.hrl`, which are then included by Erlang source code
% files.
-record(todo, {
  status = reminder,  % Default value
  who = joe,
  text
}).

% We have to read the record definitions into the shell before we can define a
% record. We use the shell function `rr` (short for read records) to do this.
rr("records.hrl").  % [todo]

% Creating and updating records:
X = #todo{}.
% #todo{status = reminder, who = joe, text = undefined}
X1 = #todo{status = urgent, text = "Fix errata in book"}.
% #todo{status = urgent, who = joe, text = "Fix errata in book"}
X2 = X1#todo{status = done}.
% #todo{status = done,who = joe,text = "Fix errata in book"}
