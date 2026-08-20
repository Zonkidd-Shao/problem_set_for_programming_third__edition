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

local m,n=next_number(),next_number(); local found=false; for x=m,n do local sum=0; for d=1,math.floor(x/2) do if x%d==0 then sum=sum+d end end; if sum==x then local f={}; for d=1,x/2 do if x%d==0 then f[#f+1]=d end end; print(x.." = "..table.concat(f," + ")); found=true end end; if not found then print("No perfect number") end
