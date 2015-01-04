%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% MODULES - SHOPPING         %%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Buy = [{oranges,4},{newspaper,1},{apples,10},{pears,6},{milk,3}]

-module(shop).
-export([cost/1]).

cost(oranges)       -> 5;
cost(newspapper)    -> 8;
cost(apples)        -> 2;
cost(pears)         -> 9;
cost(milk)          -> 7.

-export([total/1]).

total([{What, N}|T]) -> shop:cost(What) * N + total(T);
total([])            -> 0.




%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% OUTPUT EXAMPLES            %%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% → c(shop).
% → {ok, shop}
% → shop:cost(apples).
% → 2
% → shop:cost(oranges).
% → 5
% → shop:total([]).
% → 0
% → shop:total([{milk,3}]).
% → 21
% → shop:total([{pears,6},{milk,3}]).
% → 75
% → shop:total(Buy).
% → 123
