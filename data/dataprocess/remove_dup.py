import pandas as pd
import csv

#When we merge the articles tables from all the subfields, it is likely that one paper is from different subfields and such full
#articles table would have duplicate entries. Then we should delete the duplicate ones.
list1 = list()
with open('articles_temp.csv','r') as read:
    reader = csv.reader(read)
    for i in reader:
        list1.append(i)
df = pd.DataFrame(list1)
df.drop_duplicates(subset=0,inplace=True)
df.to_csv('articles.csv', header=False, index=False)

#Do filtering similiarly for author publication table
list2 = list()
with open('author_publication_temp.csv','r') as read:
    reader = csv.reader(read)
    for i in reader:
        list2.append(i)
df = pd.DataFrame(list2)
df.drop_duplicates(subset=0,inplace=True)
df.to_csv('author_publication.csv', header=False, index=False)

#for one author, he/she has different name versions and affiliations but shareing the same person id in the springer database.
#So we plan to delete the duplicate entries according to the persin id and affiliation id columns. 
list3 = list()
with open('author_temp.csv','r') as read:
    reader = csv.reader(read)
    for i in reader:
        list3.append(i)
df = pd.DataFrame(list3)
df.drop_duplicates(subset=(0,2),inplace=True)
df.to_csv('author.csv', header=False, index=False)