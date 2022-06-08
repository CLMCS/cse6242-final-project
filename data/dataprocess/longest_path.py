from functools import reduce
from tqdm import tqdm

#get the directed graph of paper-to-paper citation network
class Graph():
    def __init__(self, edges, n):
        self.graph = [[] for i in range(n)]
        for edge in edges:
            self.graph[edge[0]].append(edge[1])
            
class DAG():
    def topo_sort(self, v):
        global Stack, visited, adj
        visited[v] = True
        for i in adj[v]:   # exit condition: no child or all visited
            if (not visited[i]):
                self.topo_sort(i)
        Stack.append(v)

    def longest_path(self, s):
        global Stack, visited, adj, V
        dist = [float('-inf') for i in range(V)]
        for i in range(V):
            if (visited[i] == False):
                self.topo_sort(i)
        dist[s] = 0
        while (len(Stack) > 0):
            u = Stack[-1]
            del Stack[-1]
            if (dist[u] != float('-inf')):
                for i in adj[u]:
                    if dist[i] < dist[u] + 1:
                        dist[i] = dist[u] + 1
        return max(dist)            

class Solution():
    def __init__(self):
        self.hashmap_nodes_id = {}
    
    def process_edges(self, filename):
        # read edges 
        print("reading edges...")
        extract_id = lambda x: list(map(lambda y: y.split('.')[-1], x.strip().split(',')))
    
        with open(filename, 'r') as f:
            next(f)
            raw_edge_pairs = list(map(extract_id, f.readlines()))
            
        # have the node list
        print("having the node list")
        nodes_list = list(set(reduce(lambda x,y: x+y, tqdm(raw_edge_pairs))))
        
        print("creating the node id hashmap")
        # have the hashmap for nodes: { node: node_id }
        self.hashmap_nodes_id = {k: v for (v, k) in enumerate(nodes_list)}
        print("processing edges...")
        # process edges
        # rewrite  edges = [[self.hashmap_nodes_id[edge[0]], self.hashmap_nodes_id[edge[1]]] for edge in raw_edge_pairs]
        edges = []
        for edge in tqdm(raw_edge_pairs, desc="Processing edges"):
            edges.append([self.hashmap_nodes_id[edge[0]], self.hashmap_nodes_id[edge[1]]])
        print("edges processed")
        return edges
    
    def nodename_to_id(self, nodename):
        return self.hashmap_nodes_id[nodename]
    
    
#enter the paper-to-paper file for each subfield "./xxxxpaper_to_paper.csv"
inputfile = './1117paper_to_paper.csv'
#get the longest path for each node(paper) in such subfield
outputfile = './1117path.csv'


sol = Solution()       
edges = sol.process_edges(inputfile)
adj = Graph(edges, len(edges)).graph
with open(outputfile, 'w') as outfile:
    outfile.write('Source,LonestPath\n')
with open(outputfile, 'a') as outfile:
    with open(inputfile, 'r') as infile:
        next(infile)
        lines=infile.readlines()
        for line in tqdm(lines, desc="for each line"):
            V, Stack, visited = len(adj), [], [False for i in range(len(adj)+1)]
            source = line.split(',')[0].split('.')[-1]
            outfile.write(f"{line.split(',')[0]},{DAG().longest_path(sol.nodename_to_id(source))}\n")
print('calculation complete')