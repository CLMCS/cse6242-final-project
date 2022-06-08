import pandas as pd
import numpy as np
import os 
import glob

jsonfiles = []
for file in glob.glob("*.jsonl"):
    jsonfiles.append(file)
print(len(jsonfiles))

import json
from tqdm import tqdm
num = 0
error = 0
for i in tqdm(range(len(jsonfiles)), desc = "Processing json files"):
    
    file = jsonfiles[i]
    num += 1
    #tqdm.write("Processing file: " + file)
    #tqdm.write("percentage of json lines: " + str((num)) + "/" + str(len(jsonfiles)))
    """
    Free up memory
    """
    if i % 1 == 0 and i != 0:   
        with open(f"output/output{i}.json", "w") as outfile:
            json.dump(new_json_lines, outfile)
        new_json_lines.clear()
        json_line.clear()
    else:
        new_json_lines = []
        json_line = []
    with open(file) as f:
        for line in f:
            json_line.append(json.loads(line))
        print(json_line)
        for line in json_line:
            try:
                """
                Below will check if the json dict in empty
                """
                
                
                """
                Before 1960 will be removed
                """
                
                if line['datePublishedReg'] < "1960-01-01":
                    continue

                """
                Author without ID will be removed
                """
                
                # the new json dict will be added to new_json_lines
                if not new_json_dict:
                    new_json_dict.clear()
                else:
                    new_json_dict = {}
                new_json_dict['name'] = line['name']
                new_json_dict['isPartOf'] = line['isPartOf'][0]["id"]
                #add author info
                if not author_list:
                    author_list.clear()
                else:
                    author_list = []
                for i in range(len(line['author'])) :
                    if not author_dict:
                        author_dict.clear()
                    else:
                        author_dict = {}
                    if "id" in line['author'][i]:
                        if "id"  in line["author"][i]["affiliation"]:
                            author_dict['affiliation'] = line['author'][i]["affiliation"]["id"]
                            author_dict['id'] = line['author'][i]['id']
                            author_dict["familyName"] = line['author'][i]["familyName"]
                            author_dict["givenName"] = line['author'][i]["givenName"]
                            author_dict["rank"] = str(i)
                            author_list.append(author_dict)
                # if no authors are found, then the product will be removed
                if not author_list:
                    continue
                new_json_dict['author'] = author_list
                #add doi 
                for i in range(len(line["productId"])) :
                    if line["productId"][i]["name"] == "doi":
                        new_json_dict['doi'] = line["productId"][i]["value"]
                #add about
                if not about_list:
                    about_list.clear()
                else:
                    about_list = []
                for i in range(len(line["about"])) :
                    if "inDefinedTermSet" in line["about"][i]:
                        if line["about"][i]["inDefinedTermSet"] == "http://purl.org/au-research/vocabulary/anzsrc-for/2008/":
                            about_list.append(line["about"][i]["id"])
                #if no about is found, then the product will be removed
                if not about_list:
                    continue
                new_json_dict['about'] = about_list
                # add datePublishedReg
                new_json_dict['datePublished'] = line['datePublishedReg']
                new_json_lines.append(new_json_dict)
            except:
                error += 1
print("error occured: " + str(error))      
with open(f"output/output{i}.json", "w") as outfile:
    json.dump(new_json_lines, outfile)                
