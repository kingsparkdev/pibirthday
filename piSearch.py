import pandas as pd

file = open("pi.txt", "r")
file_name = '30pibirthday.xlsx'
digits = file.read()

df = pd.read_excel(file_name)
df['digit'] = ""
print(df)

digitArr = []
for row in df['생년월일']:
    search = row
    try:
        int(search)
    except:
        print("That was not a valid number.")
        continue
    output = digits.find('0'+str(search))
    print(output)
    digitArr.append(str(output))

df['digit'] = digitArr

with pd.ExcelWriter(file_name) as w:
    df.to_excel(w)
