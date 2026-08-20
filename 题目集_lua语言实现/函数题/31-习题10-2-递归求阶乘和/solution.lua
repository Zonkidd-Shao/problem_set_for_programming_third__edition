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

local function fact(n) if n<=1 then return 1 end return n*fact(n-1) end; local n=next_number(); local s=0; for i=1,n do s=s+fact(i) end; print(s)
