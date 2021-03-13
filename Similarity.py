import numpy as np
import sys
def cosine_sim(a, b):
    num= (np.dot(a.reshape(-1), b.reshape(-1)))
    den= np.sqrt(np.dot(a.reshape(-1),a.reshape(-1))) * np.sqrt(np.dot(b.reshape(-1),b.reshape(-1)))
    return (num/den)

embeddings_dictionary = dict()
glove_file = open('glove.6B.100d.txt', encoding="utf8")



for line in glove_file:
    records = line.split()
    word = records[0]
    vector_dimensions = np.asarray(records[1:], dtype='float32')
    embeddings_dictionary [word] = vector_dimensions
    
glove_file.close()



embeddings_matrix1 = np.zeros((25, 100))




sentence1= sys.argv[1]
sentence2= sys.argv[2]



i=0
for word in sentence1.split():
    embedding_vector = embeddings_dictionary.get(word)
    if embedding_vector is not None:
        embeddings_matrix1[i] = embedding_vector
        i+=1


embeddings_matrix2 = np.zeros((25, 100))
i=0
for word in sentence2.split():
    embedding_vector = embeddings_dictionary.get(word)
    if embedding_vector is not None:
        embeddings_matrix2[i] = embedding_vector
        i+=1




res= cosine_sim(embeddings_matrix1, embeddings_matrix2)
print (res)





