-- Lua 5.3+
local data = io.read("*a")
local values = {}
for value in data:gmatch("%S+") do
    values[#values + 1] = value
end
local pos = 1
local function next_value()
    local value = values[pos]
    pos = pos + 1
    return value
end
local function next_number()
    return tonumber(next_value())
end

local m,n,t=next_number(),next_number(),next_number(); local function fib(k) local a,b=0,1; for i=1,k do a,b=b,a+b end; return a end; print(string.format("fib(%d) = %d",t,fib(t))); local out={}; for i=0,30 do local x=fib(i); if x>=m and x<=n then out[#out+1]=x end end; print(#out>0 and table.concat(out," ") or "No Fibonacci number")
