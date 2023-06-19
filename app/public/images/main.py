import os
names = ["George Schunk", "Emma Colarte Delgado", "Aarav Motivala", "Chitvan Singh", "Jayden Liu", "Lila Cohen", "Kevin Sun", "Akshat Alok", "Ronit Kapur", "Tobin Wilson", "Natalie Zhang", "Ishaan Gupta", "Sebastian Saenz", "Camille Stephant", "Taite Kirkpatrick", "William Trinh", "Shaun Jones", "Jay Pallepati", "Charlie Doherty", "Ella Zhang", "Devang Doshi", "Abhiram Chavali", "Aileen Wu", "Andrew Xu", "Arman Syed", "Chetan Yenigalla", "Parsa Khairollahi", "Dean Mrkva", "Frederick Bao", "Rajveer Nadkar", "Orion Wang", "Gia Mendonca", "Hanming Sun", "Neil Jiang"]
filenames = os.listdir(path = "./")
names2 = names.copy()
for n in names:
    for f in filenames:
        if n in f:
            os.rename(f, (n[0] + n[n.rfind(" ")+1:]).lower()+".png")
