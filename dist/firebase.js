// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEqWUM6fNYkOLk5CilSCcRDzjA5kmnd8U",
  authDomain: "jonajoypharmacie.firebaseapp.com",
  projectId: "jonajoypharmacie",
  storageBucket: "jonajoypharmacie.firebasestorage.app",
  messagingSenderId: "1016623356705",
  appId: "1:1016623356705:web:9678ce03e36eb7aebe7c60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch products from Firestore
async function afficherEtudiants() {
  const querySnapshot = await getDocs(collection(db, "etudiants"));
  const container = document.getElementById("liste-etudiants");

  querySnapshot.forEach((doc) => {
    const etudiant = doc.data();
    const div = document.createElement("tr");
    // div.classList.add("produit");
    div.className = "hover:bg-gray-50";
    div.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm font-medium text-gray-900">${etudiant.Nom}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">${etudiant.Prenom}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">${etudiant.Promotion}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">${etudiant.email}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button class="text-indigo-600 hover:text-indigo-900 mr-3" onclick="editStudent(${index})">Modifier</button>
        <button class="text-red-600 hover:text-red-900" onclick="deleteStudent(${index})">Supprimer</button>
    </td>
`;
    container.appendChild(div);
  });
}

afficherEtudiants();

import { addDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

const form = document.getElementById("studentForm");
const sendButton = document.getElementById("save-product");
const message = document.getElementById("message-confirmation");

sendButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const nouvelEtudiant = {
    Nom: document.getElementById("firstName").value,
    Prenom: document.getElementById("student-firstname").value,
    Promotion: document.getElementById("student-promotion").value,
    email: document.getElementById("student-email").value,
  };
    // Vérification des champs requis
  try {
    await addDoc(collection(db, "etudiants"), nouvelEtudiant, {
      dateAjout: new Date(),
    });
    message.textContent = "✅ Étudiant ajouté avec succès !";
    form.reset();
  } catch (error) {
    console.error("Erreur lors de l'ajout :", error);
    message.textContent = "❌ Échec de l’ajout.";
  }
});
