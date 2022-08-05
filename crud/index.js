const { initializeApp } = require("firebase/app");
const { getFirestore, collection, doc, setDoc, addDoc, query, where, getDocs, getDoc, deleteDoc } = require("firebase/firestore/lite");
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
const bd = getFirestore();

async function adicionarOuEditar(nomeTabela, id, dados) {
  if (id) {
    const referenceEntity = await setDoc(doc(bd, nomeTabela, id), dados);
    const savedData = {
      ...dados,
      id: id,
    };

    return savedData;
  } else {
    const referenceEntity = await addDoc(collection(bd, nomeTabela), dados);
    const savedData = {
      ...dados,
      id: referenceEntity.id,
    };

    return savedData;
  }
}

async function pegar(nomeTabela) {
  const tableRef = collection(bd, nomeTabela);
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

async function pegarPeloId(nomeTabela, id) {
  const docRef = doc(bd, nomeTabela, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.dados();
  } else {
    return new Error("Não encontrado!");
  }
}

async function remover(nomeTabela, id) {
  const dados = await deleteDoc(doc(bd, nomeTabela, id));

  return {
    mensagem: `${id} removido!`
  };
}


module.exports = {
  adicionarOuEditar,
  pegar,
  pegarPeloId,
  remover
};