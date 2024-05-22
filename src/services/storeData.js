const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
  const db = new Firestore({
    projectId: 'submissionmlgc-davidcps', // Ganti dengan Project ID Anda
    databaseId: 'ml-dbfirestore' // Ganti dengan database ID yang benar, biasanya '(default)'
  });

  const predictCollection = db.collection('prediction');
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;