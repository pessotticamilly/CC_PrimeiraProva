const { initializeApp } = require("firebase/app");
const { getFirestore, collection, doc, setDoc, addDoc, query, where, getDocs, getDoc, deleteDoc,
} = require("firebase/firestore/lite");

const firebaseConfig = {
  apiKey: "AIzaSyAZ232DfY7bR1bz9gU7h0XFD9A9du8F7jM",
  authDomain: "atividade-biblioteca.firebaseapp.com",
  projectId: "atividade-biblioteca",
  storageBucket: "atividade-biblioteca.appspot.com",
  messagingSenderId: "548826989135",
  appId: "1:548826989135:web:e6cd585dfc8d74bd00e03a",
  measurementId: "G-X4MJ5DWSQR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function adicionarEEditar(tableName, id, data) {
  if (id) {
    const referenceEntity = await setDoc(doc(db, tableName, id), data);
    const savedData = {
      ...data,
      id: id,
    };
    return savedData;
  } else {
    const referenceEntity = await addDoc(collection(db, tableName), data);
    const savedData = {
      ...data,
      id: referenceEntity.id,
    };
    return savedData;
  }
}

async function pegar(tableName) {
  const tableRef = collection(db, tableName);

  const q = query(tableRef);

  const querySnapshot = await getDocs(q);

  const list = [];

  querySnapshot.forEach((doc) => {
    const data = {
      ...doc.data(),
      id: doc.id,
    };
    list.push(data);
  });
  return list;
}

async function pegarPeloId(tableName, id) {
  const docRef = doc(db, tableName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return new Error("Not found!");
  }
}

async function remover(tableName, id) {
  const data = await deleteDoc(doc(db, tableName, id));
  return {
    message: `${id} deleted`,
  };
}


module.exports = { adicionarEEditar, pegar, pegarPeloId, remover };