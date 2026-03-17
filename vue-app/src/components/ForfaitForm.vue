<template>
  <div class="mb-8 rounded-2xl bg-white p-6 shadow">
    <h3 class="mb-4 text-2xl font-bold">
      {{ form.id ? "Modifier un forfait" : "Ajouter un forfait" }}
    </h3>

    <form @submit.prevent="handleSubmit" class="grid gap-4">
      <div>
        <label class="mb-1 block font-semibold">Nom du forfait</label>
        <input
          v-model="form.nom"
          type="text"
          class="w-full rounded-lg border px-4 py-2"
          required
        />
      </div>

      <div>
        <label class="mb-1 block font-semibold">Description</label>
        <textarea
          v-model="form.description"
          rows="4"
          class="w-full rounded-lg border px-4 py-2"
          required
        ></textarea>
      </div>

      <div>
        <label class="mb-1 block font-semibold">Prix</label>
        <input
          v-model.number="form.prix"
          type="number"
          step="0.01"
          class="w-full rounded-lg border px-4 py-2"
          required
        />
      </div>

      <div>
        <label class="mb-1 block font-semibold">Image (URL)</label>
        <input
          v-model="form.image"
          type="text"
          class="w-full rounded-lg border px-4 py-2"
          required
        />
      </div>

      <div>
        <label class="mb-1 block font-semibold">Catégorie</label>
        <input
          v-model="form.categorie"
          type="text"
          class="w-full rounded-lg border px-4 py-2"
          required
        />
      </div>

      <div class="flex gap-3">
        <button
          type="submit"
          class="rounded-lg bg-green-600 px-5 py-2 text-white"
        >
          {{ form.id ? "Mettre à jour" : "Ajouter" }}
        </button>

        <button
          v-if="form.id"
          type="button"
          @click="cancel"
          class="rounded-lg bg-slate-500 px-5 py-2 text-white"
        >
          Annuler
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ForfaitForm",
  props: {
    selectedForfait: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: {
        id: null,
        nom: "",
        description: "",
        prix: "",
        image: "",
        categorie: "",
      },
    };
  },
  watch: {
    selectedForfait: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.form = { ...newValue };
        } else {
          this.resetLocalForm();
        }
      },
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("save", { ...this.form });
      this.resetLocalForm();
    },
    resetLocalForm() {
      this.form = {
        id: null,
        nom: "",
        description: "",
        prix: "",
        image: "",
        categorie: "",
      };
    },
    cancel() {
      this.resetLocalForm();
      this.$emit("cancel-edit");
    },
  },
};
</script>
