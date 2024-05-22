const { Firestore } = require('@google-cloud/firestore');

async function PredictHistoriesHandler(request, h) {
  const db = new Firestore({
    projectId: 'submissionmlgc-davidcps', // Ganti dengan Project ID Anda
    databaseId: 'ml-dbfirestore' // Ganti dengan database ID yang benar, biasanya '(default)'
  });

  const predictCollection = db.collection('prediction');
  const snapshot = await predictCollection.get();

  const histories = [];
  snapshot.forEach(doc => {
    const history = {
      id: doc.id,
      history: doc.data()
    };
    histories.push(history);
  });

  const response = {
    status: 'success',
    data: histories
  };

  return h.response(response);
}

module.exports = PredictHistoriesHandler;
