import csv
import pandas as pd
import numpy as np

#change the format of journal-to-journal file format to the matrix(journals in the column is cited by those in the row and entries in the matrix are #citation):
#     j1, j2, j3...
#j1   x   x   x ...
#j2   x   x   x ...
#j3   x   x   x ..
# .
# .
# .
df = pd.read_csv('0306journal_to_journal.csv')
(colnum,rownum) = (df.shape)

unicol1 = df["journal_id"].unique()
unicol2 = df["cite_journal_id"].unique()

print("unicol1",len(unicol1))
print("unicol2",len(unicol2))
unicol = max(len(unicol1),len(unicol2))
print("max",unicol)
if len(unicol1) == unicol:
    header = unicol1
else:
    header = unicol2
# print(len(header))
index = {}
for i in range(len(header)):
    key = header[i]
    index[key] = i
  
zero_matrix = np.zeros([unicol,unicol], dtype=int)

for i in range(colnum):
    journal = df.iat[i,0]
    journal_cite = df.iat[i,1]
    num = df.iat[i,2]
    if journal in index:
        row = index[journal]
        column = index[journal_cite]
        zero_matrix[row][column] = int(num)


header = header.tolist()
header.insert(0,"header")
with open("0306journal_matrix.csv", "a+") as f:
    write = csv.writer(f)
    write.writerow(header)
    for i in range(len(zero_matrix)):
        row = zero_matrix[i].tolist()
        row.insert(0, header[i+1])
        write.writerow(row)
