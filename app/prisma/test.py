# Importing module
import mysql.connector
 
# Creating connection object
mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "root123",
    database="springstuffs"
)

mycursor = mydb.cursor()
 
# Printing the connection object
print(mydb)