import json
import csv

with open("journal.csv", "w") as f:
    write = csv.writer(f)
    row = ["journal_id", "score"]
    write.writerow(row)

data = [json.loads(line) for line in open("journals_0.jsonl", "r")]
for line in data:
    if "id" in line and "contentRating" in line:
        journalinfo = []
        id = ""
        id = line["id"]
        if id == "":
            continue
        
        snip = ""
        sjr = ""
        for i in line["contentRating"]:
            if i["author"] == "snip":
                snip = i["ratingValue"]
            if i["author"] == "sjr":
                sjr = i["ratingValue"]
        if snip == "" or sjr == "":
            continue
        
        #we need the sum of snip and sjr score for each journal
        score = float(snip)+float(sjr)
        journalinfo.append(id)
        journalinfo.append(score)

        with open("journal.csv", "a+") as w:
            write = csv.writer(w)
            write.writerow(journalinfo)

