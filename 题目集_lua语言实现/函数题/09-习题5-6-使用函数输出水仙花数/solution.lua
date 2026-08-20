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

local function narcissistic(x) local s=tostring(x); local n=#s; local sum=0; for c in s:gmatch(".") do sum=sum+tonumber(c)^n end; return sum==x end; local m,n=next_number(),next_number(); if narcissistic(m) then print(m.." is a narcissistic number") end; for x=m+1,n-1 do if narcissistic(x) then print(x) end end; if narcissistic(n) then print(n.." is a narcissistic number") end
