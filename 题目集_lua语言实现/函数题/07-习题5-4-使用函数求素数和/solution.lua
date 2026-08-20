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

local m,n=next_number(),next_number(); local function prime(p) if p<2 then return false end; for i=2,math.sqrt(p) do if p%i==0 then return false end end; return true end; local list,s={}; s=0; for p=m,n do if prime(p) then list[#list+1]=p; s=s+p end end; print("Sum of ( "..table.concat(list," ").." ) = "..s)
