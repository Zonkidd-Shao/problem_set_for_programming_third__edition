-- Lua 5.3+
local function print_reverse(n) if n>=10 then print_reverse(math.floor(n/10)) end io.write(n%10) end; local n=tonumber(io.read("*l")); if n<0 then io.write("-"); n=-n end; print_reverse(n); print()
