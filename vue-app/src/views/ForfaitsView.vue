<template>
  <section>
    <h2 class="text-3xl font-bold mb-6">Gestion des forfaits</h2>

    <!-- MESSAGE SUCCÈS -->
    <div
      v-if="message"
      class="alert alert-success d-flex justify-content-between align-items-center"
    >
      <span>{{ message }}</span>
      <button @click="message = ''" class="btn-close cursor-pointer"></button>
    </div>

    <!-- MESSAGE ERREUR -->
    <div
      v-if="errorMessage"
      class="alert alert-danger d-flex justify-content-between align-items-center"
    >
      <span>{{ errorMessage }}</span>
      <button
        @click="errorMessage = ''"
        class="btn-close cursor-pointer"
      ></button>
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
  components: { ForfaitForm, ForfaitList },
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
    async fetchForfaits() {
      try {
        const res = await api.get("/forfaits");
        this.forfaits = res.data;
      } catch (err) {
        this.errorMessage = "Erreur de chargement";
      }
    },
    async saveForfait(forfait) {
      try {
        if (forfait.id) {
          await api.put(`/forfaits/${forfait.id}`, forfait);
          this.message = "Modifié avec succès";
        } else {
          await api.post("/forfaits", forfait);
          this.message = "Ajouté avec succès";
        }
        this.selectedForfait = null;
        this.fetchForfaits();
      } catch {
        this.errorMessage = "Erreur lors de l’enregistrement";
      }
    },
    editForfait(f) {
      this.selectedForfait = { ...f };
    },
    async deleteForfait(id) {
      if (!confirm("Supprimer ce forfait ?")) return;

      try {
        await api.delete(`/forfaits/${id}`);
        this.message = "Supprimé";
        this.fetchForfaits();
      } catch {
        this.errorMessage = "Erreur suppression";
      }
    },
    cancelEdit() {
      this.selectedForfait = null;
    },
  },
};
</script>
