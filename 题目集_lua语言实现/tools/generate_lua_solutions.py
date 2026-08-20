from pathlib import Path
import shutil
import textwrap

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "Lua实现"


def lua(body: str) -> str:
    return "-- Lua 5.3+\n" + textwrap.dedent(body).strip() + "\n"


def tokens() -> str:
    return """
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
    """


P = {}
P[1] = lua('''
    print("Programming in C is fun!")
''')
P[2] = lua('''
    for row = 4, 1, -1 do
        print(string.rep("* ", row))
    end
''')
P[3] = lua('''
    print("fahr = 150, celsius = 65")
''')
P[4] = lua('''
    print("height = 45.00")
''')
P[5] = lua(tokens() + '''
    local f = next_number()
    local c = math.floor(5 * (f - 32) / 9)
    print(string.format("Celsius = %d", c))
''')
P[6] = lua(tokens() + '''
    local a, b = next_number(), next_number()
    print(string.format("%d + %d = %d", a, b, a + b))
    print(string.format("%d - %d = %d", a, b, a - b))
    print(string.format("%d * %d = %d", a, b, a * b))
    if b == 0 then print("ERROR") else print(string.format("%d / %d = %d", a, b, math.modf(a / b))) end
''')
P[7] = lua(tokens() + '''
    local x = next_number()
    local result = x == 0 and 0 or 1 / x
    print(string.format("f(%.1f) = %.1f", x, result))
''')
P[8] = lua(tokens() + '''
    local x = next_number()
    local result = x >= 0 and math.sqrt(x) or x
    print(string.format("f(%.2f) = %.2f", x, result))
''')
P[9] = lua(tokens() + '''
    local lower, upper = next_number(), next_number()
    print("fahr celsius")
    for f = lower, upper, 2 do
        print(string.format("%d%6.1f", f, 5 * (f - 32) / 9))
    end
''')
P[10] = lua(tokens() + '''
    local n, sum = next_number(), 0
    for i = 1, n do sum = sum + 1 / i end
    print(string.format("sum = %.6f", sum))
''')
P[11] = lua(tokens() + '''
    local n, sum = next_number(), 0
    for i = 1, n do sum = sum + 1 / (2 * i - 1) end
    print(string.format("sum = %.6f", sum))
''')
P[12] = lua(tokens() + '''
    local n, sum = next_number(), 0
    for i = 1, n do sum = sum + (i % 2 == 1 and 1 or -1) / (2 * i - 1) end
    print(string.format("sum = %.3f", sum))
''')
P[13] = lua(tokens() + '''
    local n = next_number()
    for i = 0, n do print(string.format("pow(3,%d) = %d", i, 3 ^ i)) end
''')
P[14] = lua(tokens() + '''
    local m, n = next_number(), next_number()
    local result = 1
    for i = 1, m do result = result * (n - m + i) / i end
    print(string.format("result = %g", result))
''')
P[15] = lua(tokens() + '''
    local sum = 0
    for i = 1, 4 do sum = sum + next_number() end
    print(string.format("Sum = %g; Average = %.1f", sum, sum / 4))
''')
P[16] = lua(tokens() + '''
    local kwh = next_number()
    local cost
    if kwh <= 50 then cost = kwh * 0.53
    elseif kwh <= 200 then cost = 50 * 0.53 + (kwh - 50) * 0.58
    else cost = 50 * 0.53 + 150 * 0.58 + (kwh - 200) * 0.63 end
    if kwh < 0 then print("Invalid Value!") else print(string.format("cost = %.2f", cost)) end
''')
P[17] = lua(tokens() + '''
    local m, n = next_number(), next_number()
    local sum = 0
    for i = m, n do sum = sum + i * i + 1 / i end
    print(string.format("sum = %.6f", sum))
''')
P[18] = lua(tokens() + '''
    local n, sum = next_number(), 0
    for i = 1, n do sum = sum + (i % 2 == 1 and 1 or -1) / i end
    print(string.format("%.3f", sum))
''')
P[19] = lua(tokens() + '''
    local n, sum = next_number(), 0
    for i = 1, n do sum = sum + math.sqrt(i) end
    print(string.format("sum = %.2f", sum))
''')
P[20] = lua(tokens() + '''
    local n, term, sum = next_number(), 1, 0
    for i = 1, n do term = term * i; sum = sum + term end
    print(sum)
''')
P[21] = lua(tokens() + '''
    local n = next_number()
    print(string.format("sign(%d) = %d", n, n > 0 and 1 or (n < 0 and -1 or 0)))
''')
P[22] = lua(tokens() + '''
    local n, sum, pass = next_number(), 0, 0
    for i = 1, n do local score = next_number(); sum = sum + score; if score >= 60 then pass = pass + 1 end end
    print(string.format("average = %.1f", sum / n))
    print(string.format("count = %d", pass))
''')
P[23] = lua('''
    local data = io.read("*a"):gsub("\r\n", "\n")
    local letter, blank, digit, other = 0, 0, 0, 0
    for c in data:gmatch(".") do
        if c:match("%a") then letter = letter + 1
        elseif c == " " or c == "\n" then blank = blank + 1
        elseif c:match("%d") then digit = digit + 1
        else other = other + 1 end
    end
    if data:sub(-1) == "\n" then blank = blank - 1 end
    print(string.format("letter = %d, blank = %d, digit = %d, other = %d", letter, blank, digit, other))
''')
P[24] = lua(tokens() + '''
    local m, n = next_number(), next_number()
    if m > n then m, n = n, m end
    local found = false
    for year = m, n do
        if year % 400 == 0 or (year % 4 == 0 and year % 100 ~= 0) then print(year); found = true end
    end
    if not found then print("None") end
''')
P[25] = lua(tokens() + '''
    local score = next_number()
    local grade = score >= 90 and "A" or (score >= 80 and "B" or (score >= 70 and "C" or (score >= 60 and "D" or "E")))
    print(grade)
''')
P[26] = lua(tokens() + '''
    local names = {[1]="apple", [2]="pear", [3]="orange", [4]="grape", [5]="banana"}
    local prices = {[1]=3.00, [2]=2.50, [3]=4.10, [4]=10.20, [5]=5.00}
    print("[1] apple"); print("[2] pear"); print("[3] orange"); print("[4] grape"); print("[5] banana"); print("[0] exit")
    while true do local q = next_number(); if not q or q == 0 then break end; if names[q] then print(string.format("price = %.2f", prices[q])) end end
''')
P[27] = lua(tokens() + '''
    local a, b, c = next_number(), next_number(), next_number()
    local x = {a, b, c}; table.sort(x)
    print(string.format("%g->%g->%g", x[1], x[2], x[3]))
''')
P[28] = lua(tokens() + '''
    local speed, limit = next_number(), next_number()
    if speed <= limit then print("OK") else
        local percent = math.floor((speed - limit) / limit * 100 + 0.5)
        if percent <= 10 then print(string.format("Exceed %d%%. Ticket 200", percent)) else print(string.format("Exceed %d%%. License Revoked", percent)) end
    end
''')
P[29] = lua(tokens() + '''
    local distance, wait = next_number(), next_number()
    local fare = 10
    if distance > 3 then fare = fare + math.ceil((distance - 3) * 2) end
    fare = fare + math.floor(wait / 5) * 2
    print(fare)
''')
P[30] = lua(tokens() + '''
    local n, counts = next_number(), {0, 0, 0, 0, 0}
    for i = 1, n do local s = next_number(); local index = s >= 90 and 1 or (s >= 80 and 2 or (s >= 70 and 3 or (s >= 60 and 4 or 5))); counts[index] = counts[index] + 1 end
    print(table.concat(counts, " "))
''')
P[31] = lua(tokens() + '''
    local x1,y1,x2,y2,x3,y3 = next_number(),next_number(),next_number(),next_number(),next_number(),next_number()
    local a = math.sqrt((x1-x2)^2+(y1-y2)^2); local b = math.sqrt((x1-x3)^2+(y1-y3)^2); local c = math.sqrt((x2-x3)^2+(y2-y3)^2)
    if a+b<=c or a+c<=b or b+c<=a then print("Impossible") else local s=(a+b+c)/2; print(string.format("L = %.2f, A = %.2f", a+b+c, math.sqrt(s*(s-a)*(s-b)*(s-c)))) end
''')
P[32] = lua(tokens() + '''
    local x, eps = next_number(), next_number() or 1e-6
    local sum, term, i = 0, 1, 0
    repeat i=i+1; term=term*x/i; sum=sum+((i%2==1) and term or -term) until math.abs(term)<eps
    print(string.format("sum = %.6f", sum))
''')
P[33] = lua(tokens() + '''
    local secret = next_number()
    while true do local guess=next_number(); if not guess then break elseif guess==secret then print("Bingo"); print("Game Over"); break elseif guess>secret then print("Too big") else print("Too small") end end
''')
P[34] = lua(tokens() + '''
    local n, sum, fact = next_number(), 1, 1
    for i=1,n do fact=fact*i; sum=sum+1/fact end
    print(string.format("%.8f", sum))
''')
P[35] = lua(tokens() + '''
    local n, mn = next_number(), math.huge
    for i=1,n do local v=next_number(); if v<mn then mn=v end end
    print(string.format("min = %g", mn))
''')
P[36] = lua(tokens() + '''
    local m,n=next_number(),next_number(); local count,sum=0,0
    local function prime(x) if x<2 then return false end; for i=2,math.floor(math.sqrt(x)) do if x%i==0 then return false end end; return true end
    for x=m,n do if prime(x) then count=count+1; sum=sum+x end end
    print(count, sum)
''')
P[37] = lua('''
    local sum = 0
    for value in io.read("*a"):gmatch("%-?%d+") do local n=tonumber(value); if n<0 then break elseif n%2~=0 then sum=sum+n end end
    print(sum)
''')
P[38] = lua(tokens() + '''
    local x, sum, term = next_number(), 1, 1
    for i=1,1000 do term=term*x/i; sum=sum+term; if math.abs(term)<0.0001 then break end end
    print(string.format("%.4f", sum))
''')
P[39] = lua(tokens() + '''
    local n, a, b, sum = next_number(), 2, 1, 0
    for i=1,n do sum=sum+a/b; a,b=a+b,a end
    print(string.format("%.2f", sum))
''')
P[40] = lua(tokens() + '''
    local a,n=next_number(),next_number(); local term=0; for i=1,n do term=term*10+a end
    local sum=0; for i=1,n do sum=sum+term; term=math.floor(term/10) end
    print(string.format("s = %d", sum))
''')
P[41] = lua(tokens() + '''
    local total=next_number(); local count=0
    for a=0,math.floor(total/5) do for b=0,math.floor((total-5*a)/2) do local c=total-5*a-2*b; if c>=0 then print(string.format("fen5:%d, fen2:%d, fen1:%d, total:%d",a,b,c,a+b+c)); count=count+1 end end end
    print("count = "..count)
''')
P[42] = lua(tokens() + '''
    local n=next_number(); local first=10^(n-1); local last=10^n-1
    for x=first,last do local t=x,sum=0; while t>0 do local d=t%10; sum=sum+d^n; t=math.floor(t/10) end; if sum==x then print(x) end end
''')
P[43] = lua(tokens() + '''
    local a,b=next_number(),next_number(); local x,y=a,b; while y~=0 do x,y=y,x%y end; print(x, a/x*b)
''')
P[44] = lua(tokens() + '''
    local h,n=next_number(),next_number(); local distance=0; local rebound=h/2
    if n>0 then distance=h; for i=2,n do distance=distance+2*rebound; rebound=rebound/2 end end
    print(string.format("%.1f %.1f",distance,rebound))
''')
P[45] = lua(tokens() + '''
    local n=next_number(); local mid=(n+1)/2
    for i=1,n do local width=n-2*math.abs(mid-i); print(string.rep(" ", math.floor((n-width)/2)*2)..string.rep("* ",width)) end
''')
P[46] = lua(tokens() + '''
    local n=next_number(); local peaches=1; for day=n-1,1,-1 do peaches=(peaches+1)*2 end; print(peaches)
''')
P[47] = lua(tokens() + '''
    local target=next_number(); local a,b,month=1,1,1; while a<target do a,b=b,a+b; month=month+1 end; print(month)
''')
P[48] = lua('''
    local expression=io.read("*l") or ""; expression=expression:gsub("=+$", "")
    local number, result, operator = "", nil, nil
    local function apply(value)
        value=tonumber(value); if not value then return false end
        if not result then result=value elseif operator=="+" then result=result+value elseif operator=="-" then result=result-value elseif operator=="*" then result=result*value elseif operator=="/" then if value==0 then return false end; result=result/value else return false end
        return true
    end
    local ok=true
    for c in expression:gmatch(".") do if c:match("[%d]") then number=number..c elseif c:match("[%+%-%*/]") then ok=apply(number); number=""; operator=c; if not ok then break end else ok=false; break end end
    if ok then ok=apply(number) end
    if ok then print(math.modf(result)) else print("ERROR") end
''')
P[49] = lua('''
    local line=io.read("*l") or ""; local count=0; for word in line:gmatch("%S+") do count=count+1 end; print(count)
''')
P[50] = lua(tokens() + '''
    local n=next_number(); local best, index=-math.huge,0; for i=1,n do local x=next_number(); if x>best then best,index=x,i-1 end end; print(best,index)
''')
P[51] = lua(tokens() + '''
    local n=next_number(); local a={}; for i=1,n do a[i]=next_number() end; local out={}; for i=n,1,-1 do out[#out+1]=a[i] end; print(table.concat(out," "))
''')
P[52] = lua(tokens() + '''
    local n=next_number(); local a={}; for i=1,n do a[i]=next_number() end; local m=next_number(); local b={}; for i=1,m do b[i]=next_number() end
    local seen,out={},{}; for _,x in ipairs(a) do seen[x]=(seen[x] or 0)+1 end; for _,x in ipairs(b) do seen[x]=(seen[x] or 0)+2 end
    for _,x in ipairs(a) do if seen[x]==1 then out[#out+1]=x; seen[x]=0 end end; for _,x in ipairs(b) do if seen[x]==2 then out[#out+1]=x; seen[x]=0 end end; print(table.concat(out," "))
''')
P[53] = lua(tokens() + '''
    local n=next_number(); local sum=0; for i=1,n do for j=1,n do local x=next_number(); if i<n and j<n and i+j~=n+1 then sum=sum+x end end end; print(sum)
''')
P[54] = lua(tokens() + '''
    local m,n=next_number(),next_number(); local a={}; for i=1,n do a[i]={}; for j=1,n do a[i][j]=next_number() end end; m=m%n
    for i=1,n do local row={}; for j=1,n do row[j]=a[i][(j-m-1+n)%n+1] end; for j=1,n do io.write(row[j]," ") end; print() end
''')
P[55] = lua('''
    local y,m,d=(io.read("*l") or ""):match("(%d+)/(%d+)/(%d+)"); y,m,d=tonumber(y),tonumber(m),tonumber(d); local days={31,28,31,30,31,30,31,31,30,31,30,31}; if y%400==0 or (y%4==0 and y%100~=0) then days[2]=29 end; local sum=d; for i=1,m-1 do sum=sum+days[i] end; print(sum)
''')
P[56] = lua('''
    local c=io.read(1); io.read(1); local line=io.read("*l") or ""; local index=-1; for i=1,#line do if line:sub(i,i)==c then index=i-1 end end; if index>=0 then print("index = "..index) else print("Not Found") end
''')
P[57] = lua('''
    local line=io.read("*l") or ""; local out={}; for i=#line,1,-1 do out[#out+1]=line:sub(i,i) end; print(table.concat(out))
''')
P[58] = lua(tokens() + '''
    local n=next_number(); local a={}; for i=1,n do a[i]=next_number() end; table.sort(a,function(x,y)return x>y end); print(table.concat(a," "))
''')
P[59] = lua(tokens() + '''
    local n=next_number(); local counts={0,0,0,0,0,0,0,0,0,0}; for i=1,n do local x=next_number(); if x==0 then counts[1]=counts[1]+1 else while x>0 do counts[x%10+1]=counts[x%10+1]+1; x=math.floor(x/10) end end end; local mx=0; for _,v in ipairs(counts) do if v>mx then mx=v end end; local out={}; for d,v in ipairs(counts) do if v==mx then out[#out+1]=d-1 end end; print(mx..": "..table.concat(out," "))
''')
P[60] = lua(tokens() + '''
    local t=next_number(); local out={}; for case=1,t do local n=next_number(); local yes=true; for i=1,n do for j=1,n do local x=next_number(); if i>j and x~=0 then yes=false end end end; out[#out+1]=yes and "YES" or "NO" end; print(table.concat(out,"\n"))
''')
P[61] = lua(tokens() + '''
    local m,n=next_number(),next_number(); for i=1,m do local s=0; for j=1,n do s=s+next_number() end; print(s) end
''')
P[62] = lua(tokens() + '''
    local n=next_number(); local a={}; for i=1,n do a[i]={}; for j=1,n do a[i][j]=next_number() end end; local found=false; for i=1,n do local mx=math.max(table.unpack(a[i])); for j=1,n do if a[i][j]==mx then local mn=true; for k=1,n do if a[k][j]<mx then mn=false end end; if mn then print(i-1,j-1); found=true end end end end; if not found then print("NONE") end
''')
P[63] = lua('''
    local s=io.read("*a") or ""; local count=0; for c in s:gmatch("[A-Z]") do if not c:match("[AEIOU]") then count=count+1 end end; print(count)
''')
P[64] = lua('''
    local s=io.read("*l") or ""; print((s:gsub("%u",function(c)return string.char(155-c:byte()) end)))
''')
P[65] = lua('''
    local s=io.read("*l") or ""; local sign=1; local first=s:find("[%x]"); if first and s:sub(1,first-1):find("%-") then sign=-1 end; local digits=s:sub(first or 1):match("^[%x]+") or "0"; print(sign*tonumber(digits,16))
''')
P[66] = lua('''
    local words={}; for w in (io.read("*a") or ""):gmatch("%S+") do words[#words+1]=w end; table.sort(words); print("After sorted:"); for _,w in ipairs(words) do print(w) end
''')
P[67] = lua(tokens() + '''
    local n=next_number(); local sum,mx,mn=0,-math.huge,math.huge; for i=1,n do local x=next_number(); sum=sum+x; mx=math.max(mx,x); mn=math.min(mn,x) end; print(string.format("average = %.2f",sum/n)); print(string.format("max = %.2f",mx)); print(string.format("min = %.2f",mn))
''')
P[68] = lua('''
    local h,m,s=(io.read("*l") or ""):match("(%d+):(%d+):(%d+)"); h,m,s=tonumber(h),tonumber(m),tonumber(s); local n=tonumber(io.read("*l")) or 0; local total=(h*3600+m*60+s+n)%(24*3600); print(string.format("%02d:%02d:%02d",math.floor(total/3600),math.floor(total/60)%60,total%60))
''')
P[69] = lua(tokens() + '''
    local x1,y1,x2,y2=next_number(),next_number(),next_number(),next_number(); local x,y=x1+x2,y1+y2; if math.abs(x)<0.05 then x=0 end; if math.abs(y)<0.05 then y=0 end; print(string.format("(%.1f, %.1f)",x,y))
''')
P[70] = lua('''
    local n=tonumber(io.read("*l")); local books={}; for i=1,n do local name=io.read("*l") or ""; local price=tonumber(io.read("*l")); books[#books+1]={name=name,price=price} end; table.sort(books,function(a,b)return a.price>b.price end); print(string.format("%.2f, %s",books[1].price,books[1].name)); print(string.format("%.2f, %s",books[#books].price,books[#books].name))
''')
P[71] = lua('''
    local n=tonumber(io.read("*l")); local people={}; for i=1,n do local name,birth,phone=(io.read("*l") or ""):match("(%S+)%s+(%S+)%s+(.+)"); people[#people+1]={name=name,birth=birth,phone=phone} end; table.sort(people,function(a,b)return a.birth<b.birth end); for _,p in ipairs(people) do print(p.name,p.birth,p.phone) end
''')

F = {}
F[1] = lua(tokens() + '''
    local m,n=next_number(),next_number(); local s=0; for i=m,n do s=s+i end; print("sum = "..s)
''')
F[2] = lua(tokens() + '''
    local a,b=next_number(),next_number(); print("max = "..math.max(a,b))
''')
F[3] = lua(tokens() + '''
    local n=next_number(); for i=1,n do io.write(string.rep(" ",n-i),string.rep(i.." ",i),"\n") end
''')
F[4] = lua(tokens() + '''
    local x=next_number(); print(string.format("sign(%d) = %d",x,x>0 and 1 or (x<0 and -1 or 0)))
''')
F[5] = lua(tokens() + '''
    local n=next_number(); local a={}; local s=0; for i=1,n do a[i]=next_number(); if a[i]%2~=0 then s=s+a[i] end end; local odd={}; for _,x in ipairs(a) do if x%2~=0 then odd[#odd+1]=x end end; print("Sum of ( "..table.concat(odd," ").." ) = "..s)
''')
F[6] = lua(tokens() + '''
    local x1,y1,x2,y2=next_number(),next_number(),next_number(),next_number(); print(string.format("dist = %.2f",math.sqrt((x1-x2)^2+(y1-y2)^2)))
''')
F[7] = lua(tokens() + '''
    local m,n=next_number(),next_number(); local function prime(p) if p<2 then return false end; for i=2,math.sqrt(p) do if p%i==0 then return false end end; return true end; local list,s={}; s=0; for p=m,n do if prime(p) then list[#list+1]=p; s=s+p end end; print("Sum of ( "..table.concat(list," ").." ) = "..s)
''')
F[8] = lua(tokens() + '''
    local number,digit=next_number(),next_number(); local s=tostring(math.abs(number)); local count=0; for c in s:gmatch(".") do if tonumber(c)==digit then count=count+1 end end; if digit==0 and math.abs(number)==0 then count=1 end; print(string.format("Number of digit %d in %d: %d",digit,number,count))
''')
F[9] = lua(tokens() + '''
    local function narcissistic(x) local s=tostring(x); local n=#s; local sum=0; for c in s:gmatch(".") do sum=sum+tonumber(c)^n end; return sum==x end; local m,n=next_number(),next_number(); if narcissistic(m) then print(m.." is a narcissistic number") end; for x=m+1,n-1 do if narcissistic(x) then print(x) end end; if narcissistic(n) then print(n.." is a narcissistic number") end
''')
F[10] = lua(tokens() + '''
    local e,x=next_number(),next_number(); local sum,term=1,1; for i=1,10000 do term=-term*x*x/((2*i-1)*(2*i)); sum=sum+term; if math.abs(term)<e then break end end; print(string.format("cos(%.2f) = %.6f",x,sum))
''')
F[11] = lua('''
    local s=io.read("*a") or ""; local letter,blank,digit,other=0,0,0,0; for c in s:gmatch(".") do if c:match("%a") then letter=letter+1 elseif c==" " or c=="\n" then blank=blank+1 elseif c:match("%d") then digit=digit+1 else other=other+1 end end; if s:sub(-1)=="\n" then blank=blank-1 end; print(string.format("letter = %d, blank = %d, digit = %d, other = %d",letter,blank,digit,other))
''')
F[12] = lua(tokens() + '''
    local a,n=next_number(),next_number(); local term,sum=0,0; for i=1,n do term=term*10+a; sum=sum+term end; print(string.format("fn(%d, %d) = %d",a,n,term)); print("s = "..sum)
''')
F[13] = lua(tokens() + '''
    local m,n=next_number(),next_number(); local found=false; for x=m,n do local sum=0; for d=1,math.floor(x/2) do if x%d==0 then sum=sum+d end end; if sum==x then local f={}; for d=1,x/2 do if x%d==0 then f[#f+1]=d end end; print(x.." = "..table.concat(f," + ")); found=true end end; if not found then print("No perfect number") end
''')
F[14] = lua(tokens() + '''
    local m,n,t=next_number(),next_number(),next_number(); local function fib(k) local a,b=0,1; for i=1,k do a,b=b,a+b end; return a end; print(string.format("fib(%d) = %d",t,fib(t))); local out={}; for i=0,30 do local x=fib(i); if x>=m and x<=n then out[#out+1]=x end end; print(#out>0 and table.concat(out," ") or "No Fibonacci number")
''')
F[15] = lua(tokens() + '''
    local m,n=next_number(),next_number(); local function prime(x) if x<2 then return false end; for i=2,math.sqrt(x) do if x%i==0 then return false end end; return true end; if prime(m) then print(m.." is a prime number") end; if m<6 then m=6 end; if m%2~=0 then m=m+1 end; local out={}; for x=m,n,2 do for p=3,x/2,2 do if prime(p) and prime(x-p) then out[#out+1]=string.format("%d=%d+%d",x,p,x-p); break end end end; print(table.concat(out,", "))
''')
F[16] = lua(tokens() + '''
    local n=next_number(); local sign=n<0 and -1 or 1; n=math.abs(n); local r=0; repeat r=r*10+n%10; n=math.floor(n/10) until n==0; print(sign*r)
''')
F[17] = lua(tokens() + '''
    local a,b=next_number(),next_number(); print(string.format("The sum is %.2f",a+b)); print(string.format("The diff is %.2f",a-b))
''')
F[18] = lua('''
    local s=io.read("*l") or ""; local k=math.floor(#s/2); print(s:sub(k+1)..s:sub(1,k))
''')
F[19] = lua(tokens() + '''
    local x=next_number(); local integer=math.floor(x); print("The integer part is "..integer); print("The fractional part is "..(x-integer))
''')
F[20] = lua(tokens() + '''
    local n=next_number(); local a={}; for i=1,n do a[i]=next_number() end; local x=next_number(); local index=-1; for i=1,n do if a[i]==x then index=i-1; break end end; if index>=0 then print("index = "..index) else print("Not found") end
''')
F[21] = lua(tokens() + '''
    local n,m=next_number(),next_number(); local a={}; for i=1,n do a[i]=next_number() end; m=m%n; local out={}; for i=n-m+1,n do out[#out+1]=a[i] end; for i=1,n-m do out[#out+1]=a[i] end; print(table.concat(out," "))
''')
F[22] = lua(tokens() + '''
    local n,m=next_number(),next_number(); local people={}; for i=1,n do people[i]=i end; local index=1; local out={}; while #people>0 do index=(index+m-2)%#people+1; out[#out+1]=table.remove(people,index) end; print(table.concat(out," "))
''')
F[23] = lua('''
    local lines={}; for line in io.lines() do lines[#lines+1]=line end; local source=lines[1] or ""; local start=tonumber(lines[2] or 1) or 1; local length=tonumber(lines[3] or #source) or #source; print(source:sub(start,start+length-1))
''')
F[24] = lua('''
    local c=io.read(1); io.read(1); local s=io.read("*l") or ""; print((s:gsub(c,"")))
''')
F[25] = lua('''
    local s=io.read("*l") or ""; print(s==s:reverse() and "Yes" or "No")
''')
F[26] = lua('''
    local s=io.read("*a") or ""; local letter,space,digit,other=0,0,0,0; for c in s:gmatch(".") do if c:match("%a") then letter=letter+1 elseif c==" " then space=space+1 elseif c:match("%d") then digit=digit+1 else other=other+1 end end; print(letter,space,digit,other)
''')
F[27] = lua(tokens() + '''
    local a,b,c,d=next_number(),next_number(),next_number(),next_number(); print(string.format("(%g%+gi) * (%g%+gi) = %g%+gi",a,b,c,d,a*c-b*d,a*d+b*c))
''')
F[28] = lua(tokens() + '''
    local n=next_number(); local counts={A=0,B=0,C=0,D=0,E=0}; for i=1,n do local s=next_number(); local g=s>=90 and "A" or (s>=80 and "B" or (s>=70 and "C" or (s>=60 and "D" or "E"))); counts[g]=counts[g]+1 end; print(counts.A,counts.B,counts.C,counts.D,counts.E)
''')
F[29] = lua(tokens() + '''
    local function sum(n) if n<=0 then return 0 end return n+sum(n-1) end; local n=next_number(); print(sum(n))
''')
F[30] = lua(tokens() + '''
    local n=next_number(); local count=0; for x=100,999 do local a=math.floor(x/100); local b=math.floor(x/10)%10; local c=x%10; if a+b+c==n then count=count+1 end end; print(count)
''')
F[31] = lua(tokens() + '''
    local function fact(n) if n<=1 then return 1 end return n*fact(n-1) end; local n=next_number(); local s=0; for i=1,n do s=s+fact(i) end; print(s)
''')
F[32] = lua(tokens() + '''
    local function power(x,n) if n==0 then return 1 end return x*power(x,n-1) end; local x,n=next_number(),next_number(); print(power(x,n))
''')
F[33] = lua(tokens() + '''
    local x, n=next_number(),next_number(); local function series(k) if k==0 then return 1 end return (-1)^k*x^k end; local s=0; for i=0,n do s=s+series(i) end; print(string.format("%.2f",s))
''')
F[34] = lua(tokens() + '''
    local function ack(m,n) if m==0 then return n+1 elseif n==0 then return ack(m-1,1) else return ack(m-1,ack(m,n-1)) end end; print(ack(next_number(),next_number()))
''')
F[35] = lua(tokens() + '''
    local function fib(n) if n<2 then return n end return fib(n-1)+fib(n-2) end; print(fib(next_number()))
''')
F[36] = lua(tokens() + '''
    local n=next_number(); local out={}; repeat out[#out+1]=n%2; n=math.floor(n/2) until n==0; for i=#out,1,-1 do io.write(out[i]) end; print()
''')
F[37] = lua('''
    local function print_reverse(n) if n>=10 then print_reverse(math.floor(n/10)) end io.write(n%10) end; local n=tonumber(io.read("*l")); if n<0 then io.write("-"); n=-n end; print_reverse(n); print()
''')
F[38] = lua(tokens() + '''
    local n=next_number(); local out={}; for i=1,n do out[i]=next_number() end; local start=next_number() or 1; local finish=next_number() or n; for i=start,finish do out[#out+1]=out[i] end; print(table.concat(out," "))
''')
F[39] = lua('''
    local name=io.read("*l") or ""; local days={Sunday=0,Monday=1,Tuesday=2,Wednesday=3,Thursday=4,Friday=5,Saturday=6}; print(days[name] or -1)
''')
F[40] = lua(tokens() + '''
    local n=next_number(); local maxlen=0; for i=1,n do maxlen=math.max(maxlen,#(next_value() or "")) end; print(maxlen)
''')
F[41] = lua('''
    local a=io.read("*l") or ""; local b=io.read("*l") or ""; print(a..b)
''')
F[42] = lua('''
    local s=io.read("*l") or ""; local start=tonumber(io.read("*l")) or 1; local length=tonumber(io.read("*l")) or (#s-start+1); print(s:sub(start,start+length-1))
''')
F[43] = lua('''
    local s=io.read("*l") or ""; local sub=io.read("*l") or ""; print(s:find(sub,1,true) or -1)
''')
F[44] = lua(tokens() + '''
    local n=next_number(); local out={}; for i=1,n do local x=next_number(); if x%2~=0 then out[#out+1]=x end end; print(table.concat(out," "))
''')
F[45] = lua(tokens() + '''
    local n=next_number(); local values={}; for i=1,n do values[i]=next_number() end; local x=next_number(); local out={}; for _,v in ipairs(values) do if v~=x then out[#out+1]=v end end; print(table.concat(out," "))
''')


def generate(category: str, table: dict[int, str]) -> int:
    source_dir = ROOT / category
    count = 0
    for source in sorted(source_dir.glob("*.md")):
        number = int(source.stem[:2])
        folder = OUT / category / source.stem
        folder.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, folder / "题目.md")
        (folder / "solution.lua").write_text(table[number], encoding="utf-8", newline="\n")
        count += 1
    return count


OUT.mkdir(exist_ok=True)
(OUT / "README.md").write_text(
    "# Lua 题目实现\n\n"
    "每道题位于独立目录，包含 `题目.md` 和可独立运行的 `solution.lua`。\n"
    "函数题的 Lua 文件提供了标准输入驱动，用于复现题目裁判程序的输入输出流程。\n",
    encoding="utf-8",
    newline="\n",
)
print(f"编程题: {generate('编程题', P)}")
print(f"函数题: {generate('函数题', F)}")
