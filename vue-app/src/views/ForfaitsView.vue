<template>
  <section>
    <h2 class="mb-6 text-3xl font-bold">Gestion des forfaits</h2>

    <div
      v-if="message"
      class="mb-4 rounded-lg bg-green-100 px-4 py-3 text-green-800 flex justify-between items-center"
    >
      <span>{{ message }}</span>

      <button
        @click="message = ''"
        class="ml-4 text-xl font-bold cursor-pointer transition hover:scale-110 hover:text-green-600"
      >
        ×
      </button>
    </div>

    <div
      v-if="errorMessage"
      class="mb-4 rounded-lg bg-red-100 px-4 py-3 text-red-800 flex justify-between items-center"
    >
      <span>{{ errorMessage }}</span>

      <button
        @click="errorMessage = ''"
        class="ml-4 text-xl font-bold cursor-pointer transition hover:scale-110 hover:text-red-600"
      >
        ×
      </button>
    </div>

    <ForfaitForm
      :selectedForfait="selectedForfait"
      @save="saveForfait"
      @cancel-edit="cancelEdit"
    />

    <ForfaitList
      :forfaits="forfaits"
      @edit="editForfait"
      @delete="deleteForfait"
    />
  </section>
</template>

<script>
import api from "../services/api";
import ForfaitForm from "../components/ForfaitForm.vue";
import ForfaitList from "../components/ForfaitList.vue";

export default {
  name: "ForfaitsView",
  components: {
    ForfaitForm,
    ForfaitList,
  },
  data() {
    return {
      forfaits: [],
      selectedForfait: null,
      message: "",
      errorMessage: "",
    };
  },
  mounted() {
    this.fetchForfaits();
  },
  methods: {
    clearMessages() {
      this.message = "";
      this.errorMessage = "";
    },
    async fetchForfaits() {
      try {
        const response = await api.get("/forfaits");
        this.forfaits = response.data;
      } catch (error) {
        console.error("Erreur fetchForfaits:", error);
        this.errorMessage = "Impossible de charger les forfaits.";
      }
    },
    async saveForfait(forfait) {
      this.clearMessages();

      try {
        if (forfait.id) {
          await api.put(`/forfaits/${forfait.id}`, forfait);
          this.message = "Forfait modifié avec succès.";
        } else {
          await api.post("/forfaits", forfait);
          this.message = "Forfait ajouté avec succès.";
        }

        this.selectedForfait = null;
        await this.fetchForfaits();
      } catch (error) {
        console.error("Erreur saveForfait:", error);
        this.errorMessage = "Erreur lors de l’enregistrement du forfait.";
      }
    },
    editForfait(forfait) {
      this.clearMessages();
      this.selectedForfait = { ...forfait };
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    async deleteForfait(id) {
      this.clearMessages();

      const confirmation = window.confirm(
        "Voulez-vous vraiment supprimer ce forfait ?",
      );
      if (!confirmation) return;

      try {
        await api.delete(`/forfaits/${id}`);
        this.message = "Forfait supprimé avec succès.";
        await this.fetchForfaits();
      } catch (error) {
        console.error("Erreur deleteForfait:", error);
        this.errorMessage = "Erreur lors de la suppression du forfait.";
      }
    },
    cancelEdit() {
      this.selectedForfait = null;
    },
  },
};
</script>
