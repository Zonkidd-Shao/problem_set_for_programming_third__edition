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

local names = {[1]="apple", [2]="pear", [3]="orange", [4]="grape", [5]="banana"}
local prices = {[1]=3.00, [2]=2.50, [3]=4.10, [4]=10.20, [5]=5.00}
print("[1] apple"); print("[2] pear"); print("[3] orange"); print("[4] grape"); print("[5] banana"); print("[0] exit")
while true do local q = next_number(); if not q or q == 0 then break end; if names[q] then print(string.format("price = %.2f", prices[q])) end end
