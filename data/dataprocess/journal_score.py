# Use AHP to compute the journal influence number based on the journal-to-journal matrix
from inspect import signature
import math
from tkinter import Y
import pandas as pd
import statistics
import random
import csv

# get the snip and sjr info for each journal
journal = pd.read_csv("journal_score.csv")
(rownum1,colnum1) = (journal.shape)
S = {}
for i in range(rownum1):
    S[journal.iat[i,0]] = journal.iat[i,1]

# read the matrix csv file
matrix = pd.read_csv('0101journal_matrix.csv')
(rownum2,colnum2) = (matrix.shape)
header = list(matrix.columns)

# compute the sum of citation numbers for each line
sum_cite = {}
for i in range(rownum2):
    sum = 0
    for j in range(1, colnum2):
        sum += matrix.iat[i,j]
    sum_cite[matrix.iat[i,0]] = sum

# sort those journals according to their citation numbers
sum_cite_sorted = sorted(sum_cite.items(), key=lambda x: x[1])

# compute the group number of journals in the matrix
group_num = math.ceil(math.sqrt(rownum2))

# compute the median of citation numbers for each line
median = {}
for i in range(rownum2):
    jou_id = matrix.iat[i,0]
    row_list = []
    for j in range(1, colnum2):
        row_list.append(matrix.iat[i,j])
    median[jou_id] = statistics.median(row_list)

# compute the value of Xi for each journal
Xi = {}
for i in range(len(sum_cite_sorted)):
    journal_id = sum_cite_sorted[i][0]
    group_num2 = (i // group_num) + 1
    Xi[journal_id] = group_num2

# compute the final influence number for each journal in this subfield
score = {}
for i in range(rownum2):
    print("processing ", i, " line" )
    y, z = 0, 0
    journal1 = matrix.iat[i,0]
    for j in range(1, colnum2):
        journal2 = header[j]
        if Xi[journal2] > Xi[journal1]:
            p1 = 0.5 * random.randint(1,10000) / 10000 / (math.exp(abs(Xi[journal1] - Xi[journal2]) / 2))
            theta = 0
            if matrix.iat[i,j] >= median[journal1]:
                theta = 1
            y += theta * p1 * Xi[journal2]
        
        if Xi[journal2] < Xi[journal1]:
            p2 = 0.5 * random.randint(1,10000) / 10000 / (math.exp(abs(Xi[journal1] - Xi[journal2]) / 2))
            theta = 0
            if matrix.iat[i,j] >= median[journal1]:
                theta = 1
            z += theta * p2 * Xi[journal2]
    
    score[journal1] = (0.485 * Xi[journal1] + 0.415 * y + 1 * z + S[journal1]) / 100

with open("0101journal_score.csv", "a+") as f:
    write = csv.writer(f)
    for i in score:
        row = [i, score[i]]
        write.writerow(row)
