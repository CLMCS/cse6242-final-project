import sqlite3
from sqlite3 import Error
import csv
from decimal import *


class project():
    def create_connection(self, path):
        connection = None
        try:
            connection = sqlite3.connect(path)
            connection.text_factory = str
        except Error as e:
            print("Error occurred: " + str(e))
    
        return connection

    def execute_query(self, connection, query):
        cursor = connection.cursor()
        try:
            if query == "":
                return "Query Blank"
            else:
                cursor.execute(query)
                connection.commit()
                return "Query executed successfully"
        except Error as e:
            return "Error occurred: " + str(e)



    ############### CREAT TABLE ###########################
    ######################################################################
    def create_author(self,connection):
        author_sql = '''
        CREATE TABLE author (
            id TEXT,
            name TEXT,
            affiliation_id TEXT
            );
        '''        
        return self.execute_query(connection, author_sql)

    def create_author_score(self,connection):
        author_score_sql = '''
        CREATE TABLE author_score (
            id TEXT,
            score DECIMAL(10),
            field TEXT
            );
        '''        
        return self.execute_query(connection, author_score_sql)

    def create_author_publication(self,connection):
        author_publication_sql = '''
        CREATE TABLE author_publication (
            person_id TEXT,
            DOI TEXT
            );
        '''        
        return self.execute_query(connection, author_publication_sql)

    def create_articles(self,connection):
        articles_sql = '''
        CREATE TABLE ariticles (
            DOI TEXT,
            title TEXT,
            citatiion_num INTEGER
            );
        '''        
        return self.execute_query(connection, articles_sql)

    def create_affiliation(self,connection):
        affiliation_sql = '''
        CREATE TABLE affiliation (
            affiliation_id TEXT,
            affiliation_name TEXT,
            country TEXT
            );
        '''        
        return self.execute_query(connection, affiliation_sql)

    ############### INSERT DATA ###########################
    ######################################################################
    def insert_author(self,connection,path):
        with open(path, 'r', encoding='utf8', newline='') as file:
            reader = csv.reader(file)
            for row in reader:
                connection.execute('INSERT INTO author VALUES (?,?,?);',(row[0], row[1], row[2]))
        
        sql = "SELECT COUNT(*) FROM author;"
        cursor = connection.execute(sql)
        return cursor.fetchall()[0][0]

    def insert_author_score(self,connection,path):
        with open(path, 'r', encoding='utf8', newline='') as file:
            reader = csv.reader(file)
            for row in reader:
                connection.execute('INSERT INTO author_score VALUES (?,?,?);',(row[0], row[1], row[2]))
        
        sql = "SELECT COUNT(*) FROM author_score;"
        cursor = connection.execute(sql)
        return cursor.fetchall()[0][0]

    def insert_author_publication(self,connection,path):
        with open(path, 'r', encoding='utf8', newline='') as file:
            reader = csv.reader(file)
            for row in reader:
                connection.execute('INSERT INTO author_publication VALUES (?,?);',(row[0], row[1]))
        
        sql = "SELECT COUNT(*) FROM author_publication;"
        cursor = connection.execute(sql)
        return cursor.fetchall()[0][0]

    def insert_articles(self,connection,path):
        with open(path, 'r', encoding='utf8', newline='') as file:
            reader = csv.reader(file)
            for row in reader:
                connection.execute('INSERT INTO ariticles VALUES (?,?,?);',(row[0], row[1], row[2]))
        
        sql = "SELECT COUNT(*) FROM ariticles;"
        cursor = connection.execute(sql)
        return cursor.fetchall()[0][0]

    def insert_affiliation(self,connection,path):
        with open(path, 'r', encoding='utf8', newline='') as file:
            reader = csv.reader(file)
            for row in reader:
                connection.execute('INSERT INTO affiliation VALUES (?,?,?);',(row[0], row[1], row[2]))
        
        sql = "SELECT COUNT(*) FROM affiliation;"
        cursor = connection.execute(sql)
        return cursor.fetchall()[0][0]


    ##########################Create Views#########################################
    def org_score(self,connection):
        org_score_sql = '''
        CREATE VIEW org_score(
            field,
            country,
            affiliation_id,
            affiliation_name,
            score
            ) AS
            SELECT field, country, c.affiliation_id, affiliation_name, sum(score) AS score
            FROM
            (author_score a INNER JOIN author c ON a.id=c.id) INNER JOIN affiliation b ON c.affiliation_id=b.affiliation_id
			GROUP BY field, country, c.affiliation_id, affiliation_name;
        '''
        return self.execute_query(connection, org_score_sql)


    def country_score(self,connection):
        country_score_sql = '''
        CREATE VIEW country_score(
            field,
            country,
            score
            ) AS
            SELECT field, country, sum(score) AS score
            from org_score
            GROUP BY field, country;
        '''
        return self.execute_query(connection, country_score_sql)

    ###################################################################
    ###################################################################

if __name__ == "__main__":
    db = project()
    try:
        conn = db.create_connection("6242project.db")
    except:
        print("Database Creation Error")
    try:
        conn.execute("DROP TABLE IF EXISTS author;")
        conn.execute("DROP TABLE IF EXISTS author_score;")
        conn.execute("DROP TABLE IF EXISTS author_publication;")
        conn.execute("DROP VIEW IF EXISTS articles;")
        conn.execute("DROP TABLE IF EXISTS affiliation;")
    except:
        print("Error in Table Drops")
    try:
        print('\033[32m' + "create author: " + '\033[m' + str(db.create_author(conn)))
    except:
        print("Error in create author")
    try:
        print('\033[32m' + "create author_score: " + '\033[m' + str(db.create_author_score(conn)))
    except:
        print("Error in create author_score")
    try:
        print('\033[32m' + "create author_publication: " + '\033[m' + str(db.create_author_publication(conn)))
    except:
        print("Error in create author_publication")
    try:
        print('\033[32m' + "create articles: " + '\033[m' + str(db.create_articles(conn)))
    except:
        print("Error in create articles")
    try:
        print('\033[32m' + "create affiliation: " + '\033[m' + str(db.create_affiliation(conn)))
    except:
        print("Error in create affiliation")
    try:
        print('\033[32m' + "insert author: " + '\033[m' + str(db.insert_author(conn, "data/author.csv")))
    except:
        print("Error in insert author")
    try:
        print('\033[32m' + "insert author_score: " + '\033[m' + str(db.insert_author_score(conn, "data/author_score.csv")))
    except:
        print("Error in insert author_score")
    try:
        print('\033[32m' + "insert author_publication: " + '\033[m' + str(db.insert_author_publication(conn, "data/author_publication.csv")))
    except:
        print("Error in insert author_publication")
    try:
        print('\033[32m' + "insert articles: " + '\033[m' + str(db.insert_articles(conn, "data/articles.csv")))
    except:
        print("Error in insert articles")
    try:
        print('\033[32m' + "insert affiliation: " + '\033[m' + str(db.insert_affiliation(conn, "data/affiliation.csv")))
    except:
        print("Error in insert affiliation")
    try:
        print('\033[32m' + "create org_score view: " + '\033[m' + str(db.org_score(conn)))
    except:
        print("Error in create org_score view")
    try:
        print('\033[32m' + "create country_score view: " + '\033[m' + str(db.country_score(conn)))
    except:
        print("Error in create country_score view")
    
    conn.close()


    



    
    