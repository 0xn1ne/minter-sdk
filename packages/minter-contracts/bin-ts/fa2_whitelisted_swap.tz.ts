export type Fa2WhitelistedSwapCodeType = { __type: 'Fa2WhitelistedSwapCodeType'; code: object; };
export default { __type: 'Fa2WhitelistedSwapCodeType', code: JSON.parse(`[{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"unit","annots":["%confirm_admin"]},{"prim":"address","annots":["%set_admin"]}],"annots":["%admin"]},{"prim":"or","args":[{"prim":"or","args":[{"prim":"nat","annots":["%accept"]},{"prim":"nat","annots":["%cancel"]}]},{"prim":"pair","args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address","annots":["%fa2_address"]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%amount"]}]}],"annots":["%tokens"]}]}],"annots":["%assets_offered"]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address","annots":["%fa2_address"]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%amount"]}]}],"annots":["%tokens"]}]}],"annots":["%assets_requested"]}],"annots":["%start"]}],"annots":["%swap"]}]},{"prim":"big_map","args":[{"prim":"address"},{"prim":"unit"}],"annots":["%update_allowed"]}]}]},{"prim":"storage","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address","annots":["%admin"]},{"prim":"option","args":[{"prim":"address"}],"annots":["%pending_admin"]}],"annots":["%admin"]},{"prim":"pair","args":[{"prim":"nat","annots":["%next_swap_id"]},{"prim":"big_map","args":[{"prim":"nat"},{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address","annots":["%fa2_address"]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%amount"]}]}],"annots":["%tokens"]}]}],"annots":["%assets_offered"]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address","annots":["%fa2_address"]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%amount"]}]}],"annots":["%tokens"]}]}],"annots":["%assets_requested"]}],"annots":["%swap_offer"]},{"prim":"address","annots":["%seller"]}]}],"annots":["%swaps"]}],"annots":["%swap"]}]},{"prim":"big_map","args":[{"prim":"address"},{"prim":"unit"}],"annots":["%whitelist"]}]}]},{"prim":"code","args":[[{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"option","args":[{"prim":"address"}]}]},{"prim":"unit"},[{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"NEQ"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"NOT_AN_ADMIN"}]},{"prim":"FAILWITH"}],[{"prim":"UNIT"}]]}]]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"AMOUNT"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"XTZ_TRANSFER"}]},{"prim":"FAILWITH"}]]},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"address"}]},{"prim":"string"}]},{"prim":"lambda","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]},{"prim":"operation"}]},[{"prim":"UNPAIR"},{"prim":"UNPAIR"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"address"},{"prim":"string"}]}]},{"prim":"pair","args":[{"prim":"address"},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]},{"prim":"operation"},[{"prim":"UNPAIR"},{"prim":"UNPAIR","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CONTRACT","args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address","annots":["%from_"]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address","annots":["%to_"]},{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%amount"]}]}]}],"annots":["%txs"]}]}]}],"annots":["%transfer"]},{"prim":"IF_NONE","args":[[{"prim":"FAILWITH"}],[{"prim":"SWAP"},{"prim":"DROP"}]]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"MAP","args":[[{"prim":"DUP","args":[{"int":"4"}]},{"prim":"PAIR"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"NIL","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CONS"},{"prim":"TRANSFER_TOKENS"}]]},{"prim":"SWAP"},{"prim":"APPLY"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"UNPAIR"},{"prim":"IF_LEFT","args":[[{"prim":"IF_LEFT","args":[[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"IF_LEFT","args":[[{"prim":"DROP"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"CDR"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"NO_PENDING_ADMIN"}]},{"prim":"FAILWITH"}],[{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"NONE","args":[{"prim":"address"}]},{"prim":"SENDER"},{"prim":"PAIR"}],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"NOT_A_PENDING_ADMIN"}]},{"prim":"FAILWITH"}]]}]]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}],[{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DROP"},{"prim":"SOME"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]},{"prim":"UNPAIR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"}],[{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP"},{"prim":"DUP"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"IF_LEFT","args":[[{"prim":"SWAP"},{"prim":"DROP"},{"prim":"IF_LEFT","args":[[{"prim":"DROP"},{"prim":"UNIT"}],[{"prim":"DROP"},{"prim":"UNIT"}]]}],[{"prim":"DUP"},{"prim":"CAR"},{"prim":"ITER","args":[[{"prim":"DUP","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"SWAP_OFFERED_FA2_NOT_WHITELISTED"}]},{"prim":"FAILWITH"}],[{"prim":"DROP"}]]}]]},{"prim":"CDR"},{"prim":"ITER","args":[[{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"SWAP_REQUESTED_FA2_NOT_WHITELISTED"}]},{"prim":"FAILWITH"}],[{"prim":"DROP"}]]}]]},{"prim":"DROP"},{"prim":"UNIT"}]]},{"prim":"DROP"},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"IF_LEFT","args":[[{"prim":"IF_LEFT","args":[[{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"SWAP_NOT_EXIST"}]},{"prim":"FAILWITH"}],[]]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"MAP","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"SWAP_OFFERED_FA2_INVALID"}]},{"prim":"SENDER"},{"prim":"SELF_ADDRESS"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"SWAP"},{"prim":"EXEC"}]]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"MAP","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"SWAP_REQUESTED_FA2_INVALID"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"CDR"},{"prim":"SENDER"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"8"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"SWAP"},{"prim":"EXEC"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DROP"},{"prim":"SWAP"},{"prim":"ITER","args":[[{"prim":"CONS"}]]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"NONE","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]}]},{"prim":"address"}]}]},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"}],[{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"CDR"},{"prim":"SWAP"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"SWAP_NOT_EXIST"}]},{"prim":"FAILWITH"}],[]]},{"prim":"SENDER"},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"NOT_SWAP_SELLER"}]},{"prim":"FAILWITH"}]]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"MAP","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"SWAP_OFFERED_FA2_INVALID"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"SELF_ADDRESS"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"SWAP"},{"prim":"EXEC"}]]},{"prim":"SWAP"},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DROP"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"NONE","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]}]},{"prim":"address"}]}]},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"}]]}],[{"prim":"SENDER"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"1"}]},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"CAR"},{"prim":"ADD"},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"CDR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"MAP","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"SWAP_OFFERED_FA2_INVALID"}]},{"prim":"SELF_ADDRESS"},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"6"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"SWAP"},{"prim":"EXEC"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP"},{"prim":"PAIR"}]]},{"prim":"UNPAIR"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"}]]}],[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DROP"},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}]]}]`) } as Fa2WhitelistedSwapCodeType;
