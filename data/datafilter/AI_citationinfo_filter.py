import json
import csv

# write headers for 3 output files
with open("AIpaperInfo.csv", "w") as write_file:
    write = csv.writer(write_file)
    row = ["AIid", "doi", "cite_num", "ref_num"]
    write.writerow(row)

with open("citation.csv", "w") as write_file:
    write = csv.writer(write_file)
    row = ["doi", "cite_AIid"]
    write.writerow(row)

with open("reference.csv", "w") as write_file:
    write = csv.writer(write_file)
    row = ["doi", "ref_AIid"]
    write.writerow(row)

#get all the jsonl files names from the AI dataset
filename = []
for i in range(6000):
    if i < 10:
        path = "s2-corpus-00" + str(i)
    elif i >= 10 and i < 100:
        path = "s2-corpus-0" + str(i)
    else:
        path = "s2-corpus-" + str(i)
    filename.append(path)
# print(filename)

#open these files and do filtering
for file in filename:
    # with open(file, "r") as read_file:
    data = [json.loads(line) for line in open(file, "r")]
    AIpaper = []
    citation, reference = [], []  
    for line in data:
        if line["year"] and line["doi"]:
            #we only need papers which is published later than 1960
            if int(line["year"]) >= 1960:
                s2id = line["id"]
                doi = line["doi"]

                #get #citaion and #reference
                cite_num = len(line["inCitations"])
                refer_num = len(line["outCitations"])
                AIpaper.append([s2id, doi, cite_num, refer_num])

                #get all the AIid of reference papers and citation papers
                for j in line["inCitations"]:
                    cite_pair = [doi, j]
                    citation.append(cite_pair)

                for k in line["outCitations"]:
                    refer_pair = [doi, k]
                    reference.append(refer_pair)
    
    #write the file which includes all the filtered AI papers
    with open("AIpaperInfo.csv", "a+") as write_file:
        write = csv.writer(write_file)
        for row in AIpaper:
            write.writerow(row)

    with open("citation.csv", "a+") as write_file:
        write = csv.writer(write_file)
        for row in citation:
            write.writerow(row)
        
    with open("reference.csv", "a+") as write_file:
        write = csv.writer(write_file)
        for row in reference:
            write.writerow(row)