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

local n=next_number(); local a={}; for i=1,n do a[i]={}; for j=1,n do a[i][j]=next_number() end end; local found=false; for i=1,n do local mx=math.max(table.unpack(a[i])); for j=1,n do if a[i][j]==mx then local mn=true; for k=1,n do if a[k][j]<mx then mn=false end end; if mn then print(i-1,j-1); found=true end end end end; if not found then print("NONE") end
