%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% LISTS                      %%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% We create a list by enclosing the list elements in square brackets and
% separating them with commas.
% The individual elements of a list can be of any type.
% The first element of a list is the head of the list. If you imagine removing the
% head from the list, what’s left is called the tail of the list.
ThingsToBuy = [{apples, 10}, {pears, 6}, {milk, 3}].

% If `T` is a list, then `[H|T]` is also a list, with head `H` and tail `T`.
% The vertical bar (`|`) separates the head of a list from its tail.
% `[]` is the empty list.
% We can extract elements from a list with a pattern matching operation. If we
% have a nonempty list `L`, then the expression `[X|Y] = L`, where `X` and `Y`
% are unbound variables, will extract the head of the list into `X` and the tail
% of the list into `Y`.
[FirstThing|OtherThingsToBuy] = ThingsToBuy.
% FirstThing = {apples, 10}
% OtherThingsToBuy = {pears, 6}, {milk, 3}
