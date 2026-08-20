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

local n=next_number(); local a={}; for i=1,n do a[i]=next_number() end; local m=next_number(); local b={}; for i=1,m do b[i]=next_number() end
local seen,out={},{}; for _,x in ipairs(a) do seen[x]=(seen[x] or 0)+1 end; for _,x in ipairs(b) do seen[x]=(seen[x] or 0)+2 end
for _,x in ipairs(a) do if seen[x]==1 then out[#out+1]=x; seen[x]=0 end end; for _,x in ipairs(b) do if seen[x]==2 then out[#out+1]=x; seen[x]=0 end end; print(table.concat(out," "))
