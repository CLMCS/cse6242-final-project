import json
import csv
import os.path

#get all the jsonl files from the springer articles datasets
filename = []
for i in range(0,933):
    path = "articles_" + str(i) + ".jsonl"
    filename.append(path)

for file in filename:
    print("processing: " + file)
    data = [json.loads(line) for line in open(file, "r")]

    for line in data:
        #it should include the attributes of "isPartOf", "author", "productId"...
        if "isPartOf" in line and "author" in line and "productId" in line and "about" in line and "datePublishedReg" in line:
            
            #filter articles published later than 1960
            if int(line["datePublishedReg"][0:4]) < 1960:
                pass
            else:
                paper_info = []
                paper_person = []
                field = []

                #search fields of research codes - the format of 4 numbers. e.g.0912
                #refer to https://vocabs.ardc.edu.au/repository/api/lda/anzsrc-for/resource?uri=http://purl.org/au-research/vocabulary/anzsrc-for/2008/
                for i in line["about"]:
                    if i["inDefinedTermSet"] == "http://purl.org/au-research/vocabulary/anzsrc-for/2008/" and len(i["id"]) == 59:
                        subfield = i["id"][-4:]
                        field.append(subfield)
                if len(field) == 0:
                    continue

                #search doi
                doi = ""
                for j in line["productId"]:
                    if j["name"] == "doi":
                        doi = j["value"][0]
                if doi == "":
                    continue

                #search journal id
                journal = ""
                if "id" in line["isPartOf"][0]:
                    journal = line["isPartOf"][0]["id"]
                if journal == "":
                    continue

                paper_info.append(doi)
                paper_info.append(line["name"])
                paper_info.append(journal)

                #search author info
                for n in line["author"]:
                    author = []
                    if "id" in n and "givenName" in n and "familyName" in n and "affiliation" in n:
                        name = name = n["givenName"] + " " + n["familyName"]
                        affiliation = n["affiliation"]["id"][30:]
                        if affiliation == "":
                            continue
                        author.append(doi)
                        author.append(n["id"])
                        author.append(name)
                        author.append(affiliation)
                        paper_person.append(author)
                if len(paper_person) == 0:
                    continue
                
                #write the tables of springer paper and author publication respectively for 157 fields
                for k in field:
                    if os.path.isfile(f"/Users/haotingchen/6242/project/rawdata/articles/output/springer_paper/{k}_paper.csv"):
                        with open(f"/Users/haotingchen/6242/project/rawdata/articles/output/springer_paper/{k}_paper.csv", "a+") as write_file:
                            write = csv.writer(write_file)
                            write.writerow(paper_info)
                    else:
                        with open(f"/Users/haotingchen/6242/project/rawdata/articles/output/springer_paper/{k}_paper.csv", "w") as write_file1:
                            write = csv.writer(write_file1)
                            row = ["doi", "paper_name", "journal_id"]
                            write.writerow(row)

                    if os.path.isfile(f"/Users/haotingchen/6242/project/rawdata/articles/output/springer_person/{k}_paper_person.csv"):
                        with open(f"/Users/haotingchen/6242/project/rawdata/articles/output/springer_person/{k}_paper_person.csv", "a+") as write_file2:
                            write2 = csv.writer(write_file2)
                            for row2 in paper_person:
                                write2.writerow(row2)
                    else:
                        with open(f"/Users/haotingchen/6242/project/rawdata/articles/output/springer_person/{k}_paper_person.csv", "w") as write_file3:
                            write2 = csv.writer(write_file3)
                            row2 = ["doi", "author_id", "author_name", "affiliation_id"]
                            write2.writerow(row2)

        else:
            continue



